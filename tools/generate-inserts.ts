import { Models } from '../src/app/builder/model-selector/models';

// Helper to escape single quotes for SQL
function esc(str: any) {
  return String(str).replace(/'/g, "''");
}

// Collect unique factions for mapping to IDs
const factionSet = new Set();
Models.slice(0, 50).forEach(m => {
  m.factions.forEach(f => factionSet.add(f));
  m.primaryFaction.forEach(f => factionSet.add(f));
});
const factions = Array.from(factionSet);
const factionIdMap = Object.fromEntries(factions.map((f, i) => [f, i + 1]));

// Generate faction inserts
console.log('-- Factions');
factions.forEach((f, i) => {
  console.log(`INSERT INTO factions (id, name) VALUES (${i + 1}, '${esc(f)}');`);
});

// Generate model inserts
console.log('\n-- Models');
Models.slice(0, 50).forEach((m, i) => {
  console.log(`INSERT INTO models (id, display_name, gender, name, race, type, value) VALUES (${i + 1}, '${esc(m.displayName)}', '${esc(m.gender)}', '${esc(m.name)}', '${esc(m.race)}', '${esc(m.type)}', ${m.value});`);
});

// Generate model_factions inserts
console.log('\n-- Model Factions');
Models.slice(0, 50).forEach((m, i) => {
  m.factions.forEach(f => {
    console.log(`INSERT INTO model_factions (model_id, faction_id) VALUES (${i + 1}, ${factionIdMap[f]});`);
  });
});

// Generate model_primary_factions inserts
console.log('\n-- Model Primary Factions');
Models.slice(0, 50).forEach((m, i) => {
  m.primaryFaction.forEach(f => {
    console.log(`INSERT INTO model_primary_factions (model_id, faction_id) VALUES (${i + 1}, ${factionIdMap[f]});`);
  });
});

// Generate model_stats inserts (basic fields only)
console.log('\n-- Model Stats');
Models.slice(0, 50).forEach((m, i) => {
  const s = m.stats;
  console.log(`INSERT INTO model_stats (model_id, armor, discipline, speed, type, shield, agility, dexterity, endurance, knowledge, spirit, strength) VALUES (${i + 1}, ${s.armor}, ${s.discipline}, ${s.speed}, '${esc(s.type)}', '${esc(s.shield || 'NULL')}', '${s.abilities?.agility || 'NULL'}', '${s.abilities?.dexterity}', '${s.abilities?.endurance}', '${s.abilities?.knowledge}', '${s.abilities?.spirit}', '${s.abilities?.strength}');`);
});

// npx ts-node tools/generate-inserts.js > inserts.sql