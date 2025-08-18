SELECT
  m.id,
  m.character_name,
  m.display_name,
  m.gender,
  m.name,
  m.race,
  m.type,
  m.value,
  -- Factions arrays
  COALESCE(json_agg(DISTINCT f.name) FILTER (WHERE f.id IS NOT NULL), '[]') AS factions,
  COALESCE(json_agg(DISTINCT pf.name) FILTER (WHERE pf.id IS NOT NULL), '[]') AS primaryFaction,
  COALESCE(json_agg(DISTINCT tf.name) FILTER (WHERE tf.id IS NOT NULL), '[]') AS trustedFactions,
  -- Nested stats object
  to_jsonb(ms.*) ||
    jsonb_build_object(
      'abilities', jsonb_build_object('agility', ms.agility, 'dexterity', ms.dexterity, 'endurance', ms.endurance, 'knowledge', ms.knowledge, 'spirit', ms.spirit, 'strength', ms.strength),
      'talents', mst,
      'skills', mss,
      'melee', msm,
      'range', msr,
      'advancements', msa2,
      'injuries', msi,
      'items', msi2
    ) AS stats
FROM models m
LEFT JOIN model_factions mf ON mf.model_id = m.id
LEFT JOIN factions f ON f.id = mf.faction_id
LEFT JOIN model_primary_factions mpf ON mpf.model_id = m.id
LEFT JOIN factions pf ON pf.id = mpf.faction_id
LEFT JOIN model_trusted_factions mtf ON mtf.model_id = m.id
LEFT JOIN factions tf ON tf.id = mtf.faction_id
LEFT JOIN model_stats ms ON ms.model_id = m.id

-- Talents (array)
LEFT JOIN LATERAL (
  SELECT json_agg(talent) AS mst
  FROM model_stats_talents t
  WHERE t.model_id = ms.model_id
) mst ON TRUE

-- Skills (array of objects)
LEFT JOIN LATERAL (
  SELECT json_agg(jsonb_build_object('name', name, 'rating', rating)) AS mss
  FROM model_stats_skills s
  WHERE s.model_id = ms.model_id
) mss ON TRUE

-- Melee weapons (array of objects)
LEFT JOIN LATERAL (
  SELECT json_agg(jsonb_build_object('name', name, 'rating', rating)) AS msm
  FROM model_stats_melee m
  WHERE m.model_id = ms.model_id
) msm ON TRUE

-- Range weapons (array of objects)
LEFT JOIN LATERAL (
  SELECT json_agg(jsonb_build_object('name', name, 'rating', rating, 'distance', distance)) AS msr
  FROM model_stats_range r
  WHERE r.model_id = ms.model_id
) msr ON TRUE

-- Advancements (array of objects)
LEFT JOIN LATERAL (
  SELECT json_agg(jsonb_build_object('name', name, 'cost', cost)) AS msa2
  FROM model_stats_advancements a
  WHERE a.model_id = ms.model_id
) msa2 ON TRUE

-- Injuries (array)
LEFT JOIN LATERAL (
  SELECT json_agg(injury) AS msi
  FROM model_stats_injuries i
  WHERE i.model_id = ms.model_id
) msi ON TRUE

-- Items (array of objects)
LEFT JOIN LATERAL (
  SELECT json_agg(jsonb_build_object('name', name, 'cost', cost, 'advancement', advancement)) AS msi2
  FROM model_stats_items i
  WHERE i.model_id = ms.model_id
) msi2 ON TRUE

GROUP BY m.id, ms.*, mst.mst, mss.mss, msm.msm, msr.msr, msa2.msa2, msi.msi, msi2.msi2