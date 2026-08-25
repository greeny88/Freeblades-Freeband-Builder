SELECT jsonb_strip_nulls(jsonb_build_object(
    'name', m.name,
    'displayName', m.displayname,
    'gender', m.gender,
    'race', m.race,
    'value', m.value,
    'type', m.model_type,
    'factions', f.factions,
    'primaryFaction', p.primary_factions,
    'trustedFactions', t.trusted_factions,
    'stats', jsonb_strip_nulls(jsonb_build_object(
            'type', m.stat_type,
            'armor', m.armor,
            'discipline', m.discipline,
            'speed', m.speed,
            'shield', m.shield,
              'abilities', (CASE WHEN m.agility IS NULL AND m.dexterity IS NULL AND m.endurance IS NULL AND m.knowledge IS NULL AND m.spirit IS NULL AND m.strength IS NULL THEN NULL ELSE jsonb_strip_nulls(jsonb_build_object(
                  'agility', m.agility,
                  'dexterity', m.dexterity,
                  'endurance', m.endurance,
                  'knowledge', m.knowledge,
                  'spirit', m.spirit,
                  'strength', m.strength
              )) END),
            'talents', mt.talents,
            'skills', sk.skills,
            'melee', mw.melee,
            'range', rw.range,
            'casting', cst.casting,
            'performance', perf.performance,
            'focus', foc.focus,
            'options', opt.options,
            'veteran', vet.veteran
    ))
)) AS model
FROM ffb.models AS m
LEFT JOIN (
        SELECT mm.modelid,
                     jsonb_agg(
                         jsonb_strip_nulls(jsonb_build_object(
                             'name', mw.name,
                             'rating', mm.rating,
                             'damage', mw.damage,
                             'group', mw.weapon_group
                         )) ORDER BY mw.name
                     ) AS melee
        FROM ffb.model_melee_weapons mm
        JOIN ffb.melee_weapons mw ON mw.id = mm.weaponid
        GROUP BY mm.modelid
) mw ON mw.modelid = m.id
LEFT JOIN (
        SELECT rm.modelid,
                     jsonb_agg(
                         jsonb_strip_nulls(jsonb_build_object(
                             'name', rw.name,
                             'rating', rm.rating,
                             'distance', rw.distance,
                             'damage', rw.damage,
                             'group', rw.weapon_group
                         )) ORDER BY rw.name
                     ) AS range
        FROM ffb.model_range_weapons rm
        JOIN ffb.range_weapons rw ON rw.id = rm.weaponid
        GROUP BY rm.modelid
) rw ON rw.modelid = m.id
LEFT JOIN (
        SELECT ms.modelid,
                     jsonb_agg(
                         jsonb_strip_nulls(jsonb_build_object(
                             'name', s.name,
                             'rating', ms.rating,
                             'type', s.skill_type
                         )) ORDER BY s.name
                     ) AS skills
        FROM ffb.model_skills ms
        JOIN ffb.skills s ON s.id = ms.skillid
        GROUP BY ms.modelid
) sk ON sk.modelid = m.id
LEFT JOIN (
    SELECT mt.modelid,
           jsonb_agg(t.name ORDER BY t.name) AS talents
    FROM ffb.model_talents mt
    JOIN ffb.talents t ON t.id = mt.talentid
    GROUP BY mt.modelid
) mt ON mt.modelid = m.id
LEFT JOIN (
    SELECT mf.modelid,
           jsonb_agg(f.name ORDER BY f.name) AS factions
    FROM ffb.model_factions mf
    JOIN ffb.factions f ON f.id = mf.factionid
    GROUP BY mf.modelid
) f ON f.modelid = m.id
LEFT JOIN (
    SELECT pf.modelid,
           jsonb_agg(f.name ORDER BY f.name) AS primary_factions
    FROM ffb.model_primaryfactions pf
    JOIN ffb.factions f ON f.id = pf.factionid
    GROUP BY pf.modelid
) p ON p.modelid = m.id
LEFT JOIN (
    SELECT tf.modelid,
           jsonb_agg(f.name ORDER BY f.name) AS trusted_factions
    FROM ffb.model_trustedfactions tf
    JOIN ffb.factions f ON f.id = tf.factionid
    GROUP BY tf.modelid
) t ON t.modelid = m.id
LEFT JOIN (
    SELECT mc.modelid,
           jsonb_strip_nulls(jsonb_build_object(
               'name', mc.name,
               'power', mc.power,
               'rating', mc.rating,
               'type', mc.type
           )) AS casting
    FROM ffb.model_casting mc
) cst ON cst.modelid = m.id
LEFT JOIN (
    SELECT mp.modelid,
           jsonb_strip_nulls(jsonb_build_object(
               'name', mp.name,
               'rating', mp.rating
           )) AS performance
    FROM ffb.model_performance mp
) perf ON perf.modelid = m.id
LEFT JOIN (
    SELECT mf.modelid,
           jsonb_strip_nulls(jsonb_build_object(
               'name', mf.name,
               'rating', mf.rating
           )) AS focus
    FROM ffb.model_focus mf
) foc ON foc.modelid = m.id
LEFT JOIN (
    SELECT mo.modelid,
           jsonb_agg(jsonb_strip_nulls(jsonb_build_object(
               'name', mo.name,
               'rating', mo.rating
           )) ORDER BY mo.name) AS options
    FROM ffb.model_options mo
    GROUP BY mo.modelid
) opt ON opt.modelid = m.id
LEFT JOIN (
    SELECT mv.modelid,
           jsonb_agg(jsonb_strip_nulls(jsonb_build_object(
               'name', mv.name,
               'cost', mv.cost,
               'rating', mv.rating
           )) ORDER BY mv.name) AS veteran
    FROM ffb.model_veterans mv
    GROUP BY mv.modelid
) vet ON vet.modelid = m.id
WHERE m.id = 123;