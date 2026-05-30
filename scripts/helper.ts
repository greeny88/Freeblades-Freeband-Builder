// to execute run: npx tsx scripts/helper.ts

import { Models } from 'src/app/builder/model-selector/models';

function buildDbQueries() {
    console.log(`Starting database query building on ${Models.length} models...\n`);

    let talents: string[] = [];

    let model_insert = 'insert into models (name, displayname, type, gender, value, race, armor, discipline, shield, agility, dexterity, endurance, knowledge, spirit, strength, speed, stat_type) values ';
    Models.forEach((model, index) => {
        // console.log(`[Model ${index}]`, model);
        model_insert += `('${model.name}', '${model.displayName}', '${model.type}', '${model.gender}', ${model.value}, '${model.race}', ${model.stats.armor}, ${model.stats.discipline}, '${model.stats.shield || 'NULL'}', ${model.stats.abilities?.agility || 'NULL'}, ${model.stats.abilities?.dexterity || 'NULL'}, ${model.stats.abilities?.endurance || 'NULL'}, ${model.stats.abilities?.knowledge || 'NULL'}, ${model.stats.abilities?.spirit || 'NULL'}, ${model.stats.abilities?.strength || 'NULL'}, ${model.stats.speed}, '${model.stats.type}'),`;
        model.stats.talents?.forEach((talent, talentIndex) => {
            // console.log(`  [Talent ${talentIndex}]`, talent);
            if (!talents.includes(talent)) {
                talents.push(talent);
            }
        });
        // TODO: group models by talents. sql should be something like `insert into model_talents (model_id, talent_id) select m.id, @talent_id from models m where m.name in ('${model_names.join("', '")}') and @talent_id = (select t.id from talents t where t.name = '${talent}')`
    });
    model_insert = model_insert.slice(0, -1) + ';';
    console.log('\nModel Insert Query:\n', model_insert);
    talents.sort();
    let talent_insert = 'insert into talents (name) values ';
    talents.forEach((talent, index) => {
        talent_insert += `('${talent}'),`;
    });
    talent_insert = talent_insert.slice(0, -1) + ';';
    console.log('\nTalent Insert Query:\n', talent_insert);
    console.log('\nDatabase query building complete.');
}

buildDbQueries();