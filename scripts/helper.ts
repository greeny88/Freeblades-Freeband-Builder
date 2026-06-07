// to execute run: npx tsx scripts/helper.ts

import { Models } from 'src/app/builder/model-selector/models';
import { MeleeWeapons, RangeWeapons, Skills, AdvancementTalents, OtherTalents } from 'src/app/builder/model-selector/advancements';

function esc(s: any) {
    if (s === undefined || s === null) return 'NULL';
    if (typeof s === 'number') return String(s);
    return `'${String(s).replace(/'/g, "''")}'`;
}

function buildDbQueries() {
    console.log(`Starting database query building on ${Models.length} models...\n`);

    // collectors
    const talents = new Map<string, number>();
    const factions = new Map<string, number>();
    const skills = new Map<string, number>();
    const meleeWeapons = new Map<string, number>();
    const rangeWeapons = new Map<string, number>();

    // source canonical definitions from the imported advancement tables
    Array.from(new Set([...AdvancementTalents, ...OtherTalents])).sort().forEach((name, index) => {
        talents.set(name, index + 1);
    });

    Array.from(new Set(Skills)).sort().forEach((name, index) => {
        skills.set(name, index + 1);
    });

    MeleeWeapons.forEach((weapon, index) => {
        meleeWeapons.set(weapon.name, index + 1);
    });

    RangeWeapons.forEach((weapon, index) => {
        rangeWeapons.set(weapon.name, index + 1);
    });

    // discover model-specific weapons not in canonical lists and add them with model-prefixed names
    const modelSpecificMelee: Map<string, {modelName: string, weapon: any}> = new Map();
    const modelSpecificRange: Map<string, {modelName: string, weapon: any}> = new Map();

    Models.forEach((model) => {
        model.factions?.forEach(f => { if (!factions.has(f)) factions.set(f, factions.size + 1); });
        model.primaryFaction?.forEach(f => { if (!factions.has(f)) factions.set(f, factions.size + 1); });
        
        model.stats.melee?.forEach(w => {
            if (!meleeWeapons.has(w.name)) {
                const uniqueName = `${model.name}_${w.name}`;
                if (!modelSpecificMelee.has(uniqueName)) {
                    modelSpecificMelee.set(uniqueName, { modelName: model.name, weapon: w });
                    meleeWeapons.set(uniqueName, meleeWeapons.size + 1);
                }
            }
        });
        
        model.stats.range?.forEach(w => {
            if (!rangeWeapons.has(w.name)) {
                const uniqueName = `${model.name}_${w.name}`;
                if (!modelSpecificRange.has(uniqueName)) {
                    modelSpecificRange.set(uniqueName, { modelName: model.name, weapon: w });
                    rangeWeapons.set(uniqueName, rangeWeapons.size + 1);
                }
            }
        });
    });

    // Build insert statements
    let out: string[] = [];

    // log model-specific weapons
    if (modelSpecificMelee.size > 0) {
        console.log(`Found ${modelSpecificMelee.size} model-specific melee weapons:`);
        for (const [uniqueName, info] of modelSpecificMelee) {
            console.log(`  - ${uniqueName}`);
        }
    }
    if (modelSpecificRange.size > 0) {
        console.log(`Found ${modelSpecificRange.size} model-specific range weapons:`);
        for (const [uniqueName, info] of modelSpecificRange) {
            console.log(`  - ${uniqueName}`);
        }
    }

    // talents
    if (talents.size > 0) {
        let trows: string[] = [];
        for (const [name, id] of talents) trows.push(`(${id}, ${esc(name)})`);
        out.push(`INSERT INTO "ffb"."talents" (id, name) VALUES\n${trows.join(',\n')};`);
    }

    // skills
    if (skills.size > 0) {
        let srows: string[] = [];
        for (const [name, id] of skills) srows.push(`(${id}, ${esc(name)}, 'general')`);
        out.push(`INSERT INTO "ffb"."skills" (id, name, skill_type) VALUES\n${srows.join(',\n')};`);
    }

    // melee weapons
    if (meleeWeapons.size > 0) {
        let wrows: string[] = [];
        MeleeWeapons.forEach((weapon, index) => {
            const id = index + 1;
            wrows.push(`(${id}, ${esc(weapon.name)}, ${esc(weapon.damage ?? 0)}, ${esc((weapon as any).group ?? 'unknown')})`);
        });
        // add model-specific melee weapons
        for (const [uniqueName, info] of modelSpecificMelee) {
            const id = meleeWeapons.get(uniqueName)!;
            const damage = info.weapon.damage ?? 0;
            const group = info.weapon.group ?? 'model-specific';
            wrows.push(`(${id}, ${esc(uniqueName)}, ${esc(damage)}, ${esc(group)})`);
        }
        out.push(`INSERT INTO "ffb"."melee_weapons" (id, name, damage, weapon_group) VALUES\n${wrows.join(',\n')};`);
    }

    // range weapons
    if (rangeWeapons.size > 0) {
        let rrows: string[] = [];
        RangeWeapons.forEach((weapon, index) => {
            const id = index + 1;
            rrows.push(`(${id}, ${esc(weapon.name)}, ${esc(weapon.damage ?? 0)}, ${esc(weapon.distance ?? 0)}, ${esc((weapon as any).group ?? 'unknown')})`);
        });
        // add model-specific range weapons
        for (const [uniqueName, info] of modelSpecificRange) {
            const id = rangeWeapons.get(uniqueName)!;
            const damage = info.weapon.damage ?? 0;
            const distance = info.weapon.distance ?? 0;
            const group = info.weapon.group ?? 'model-specific';
            rrows.push(`(${id}, ${esc(uniqueName)}, ${esc(damage)}, ${esc(distance)}, ${esc(group)})`);
        }
        out.push(`INSERT INTO "ffb"."range_weapons" (id, name, damage, distance, weapon_group) VALUES\n${rrows.join(',\n')};`);
    }

    // factions
    if (factions.size > 0) {
        let frows: string[] = [];
        for (const [name, id] of factions) frows.push(`(${id}, ${esc(name)})`);
        out.push(`INSERT INTO "ffb"."factions" (id, name) VALUES\n${frows.join(',\n')};`);
    }

    // models
    let mrows: string[] = [];
    Models.forEach((model, idx) => {
        const id = idx + 1;
        const abilities = model.stats.abilities || {};
        const cols = [
            id,
            esc(model.name),
            esc(model.displayName || model.name),
            esc(model.type || ''),
            esc(model.gender || ''),
            esc(model.value || 0),
            esc(model.race || ''),
            esc(model.stats.armor ?? 0),
            esc(model.stats.discipline ?? 0),
            (model.stats.shield ? esc(model.stats.shield) : 'NULL'),
            esc(abilities.agility ?? null),
            esc(abilities.dexterity ?? null),
            esc(abilities.endurance ?? null),
            esc(abilities.knowledge ?? null),
            esc(abilities.spirit ?? null),
            esc(abilities.strength ?? null),
            esc(model.stats.speed ?? 0),
            esc(model.stats.type || '')
        ];
        mrows.push(`(${cols.join(', ')})`);
    });
    out.push(`INSERT INTO "ffb"."models" (id, name, displayname, model_type, gender, value, race, armor, discipline, shield, agility, dexterity, endurance, knowledge, spirit, strength, speed, stat_type) VALUES\n${mrows.join(',\n')};`);

    // mapping tables
    const mtRows: string[] = []; // model_talents
    const mfRows: string[] = []; // model_factions
    const mpfRows: string[] = []; // model_primaryfactions
    const mafRows: string[] = []; // model_allyfactions (if present)
    const mskillRows: string[] = []; // model_skills (modelid, skillid, rating)
    const mmwRows: string[] = []; // model_melee_weapons (modelid, weaponid, rating)
    const mrwRows: string[] = []; // model_range_weapons (modelid, weaponid, rating)

    Models.forEach((model, idx) => {
        const modelid = idx + 1;
        model.stats.talents?.forEach(t => {
            const tid = talents.get(t);
            if (tid) mtRows.push(`(${modelid}, ${tid})`);
        });
        model.factions?.forEach(f => {
            const fid = factions.get(f);
            if (fid) mfRows.push(`(${fid}, ${modelid})`);
        });
        model.primaryFaction?.forEach(f => {
            const fid = factions.get(f);
            if (fid) mpfRows.push(`(${fid}, ${modelid})`);
        });
        model.trustedFactions?.forEach((f: string) => {
            const fid = factions.get(f);
            if (fid) mafRows.push(`(${fid}, ${modelid})`);
        });
        model.stats.skills?.forEach(s => {
            const sid = skills.get(s.name);
            if (sid) mskillRows.push(`(${modelid}, ${sid}, ${s.rating})`);
        });
        model.stats.melee?.forEach(w => {
            let wid: number | undefined;
            if (meleeWeapons.has(w.name)) {
                wid = meleeWeapons.get(w.name);
            } else {
                const uniqueName = `${model.name}_${w.name}`;
                wid = meleeWeapons.get(uniqueName);
            }
            if (wid) mmwRows.push(`(${modelid}, ${wid}, ${w.rating ?? 0})`);
        });
        model.stats.range?.forEach(w => {
            let wid: number | undefined;
            if (rangeWeapons.has(w.name)) {
                wid = rangeWeapons.get(w.name);
            } else {
                const uniqueName = `${model.name}_${w.name}`;
                wid = rangeWeapons.get(uniqueName);
            }
            if (wid) mrwRows.push(`(${modelid}, ${wid}, ${w.rating ?? 0})`);
        });
    });

    if (mtRows.length) out.push(`INSERT INTO "ffb"."model_talents" (modelid, talentid) VALUES\n${mtRows.join(',\n')};`);
    if (mfRows.length) out.push(`INSERT INTO "ffb"."model_factions" (factionid, modelid) VALUES\n${mfRows.join(',\n')};`);
    if (mpfRows.length) out.push(`INSERT INTO "ffb"."model_primaryfactions" (factionid, modelid) VALUES\n${mpfRows.join(',\n')};`);
    if (mafRows.length) out.push(`INSERT INTO "ffb"."model_trustedfactions" (factionid, modelid) VALUES\n${mafRows.join(',\n')};`);
    if (mskillRows.length) out.push(`INSERT INTO "ffb"."model_skills" (modelid, skillid, rating) VALUES\n${mskillRows.join(',\n')};`);
    if (mmwRows.length) out.push(`INSERT INTO "ffb"."model_melee_weapons" (modelid, weaponid, rating) VALUES\n${mmwRows.join(',\n')};`);
    if (mrwRows.length) out.push(`INSERT INTO "ffb"."model_range_weapons" (modelid, weaponid, rating) VALUES\n${mrwRows.join(',\n')};`);

    console.log('\n-- SQL Output --\n');
    console.log(out.join('\n\n'));
    console.log('\nDatabase query building complete.');
}

buildDbQueries();