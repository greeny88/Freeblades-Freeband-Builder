-- Table for Factions (lookup)
CREATE TABLE factions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) UNIQUE NOT NULL
);

-- Table for Models
CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    display_name VARCHAR(128) NOT NULL,
    gender CHAR(1) NOT NULL CHECK (gender IN ('M', 'F')),
    name VARCHAR(128) NOT NULL,
    race VARCHAR(32) NOT NULL,
    type VARCHAR(16) NOT NULL CHECK (type IN ('Caster', 'Leader', 'Standard')),
    value INTEGER NOT NULL
);

-- Model <-> Factions (many-to-many)
CREATE TABLE model_factions (
    model_id INTEGER REFERENCES models(id) ON DELETE CASCADE,
    faction_id INTEGER REFERENCES factions(id) ON DELETE CASCADE,
    PRIMARY KEY (model_id, faction_id)
);

-- Model <-> Primary Factions (many-to-many)
CREATE TABLE model_primary_factions (
    model_id INTEGER REFERENCES models(id) ON DELETE CASCADE,
    faction_id INTEGER REFERENCES factions(id) ON DELETE CASCADE,
    PRIMARY KEY (model_id, faction_id)
);

-- Model <-> Trusted Factions (many-to-many, nullable)
CREATE TABLE model_trusted_factions (
    model_id INTEGER REFERENCES models(id) ON DELETE CASCADE,
    faction_id INTEGER REFERENCES factions(id) ON DELETE CASCADE,
    PRIMARY KEY (model_id, faction_id)
);

-- ModelStats table (one-to-one with models)
CREATE TABLE model_stats (
    model_id INTEGER PRIMARY KEY REFERENCES models(id) ON DELETE CASCADE,
    armor INTEGER NOT NULL,
    discipline INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    type VARCHAR(16) NOT NULL CHECK (type IN ('Follower', 'Hero')),
    shield VARCHAR(2),
    agility INTEGER,
    dexterity INTEGER,
    endurance INTEGER,
    knowledge INTEGER,
    spirit INTEGER,
    strength INTEGER
    -- Add more fields as needed for other primitive stats
);

-- ModelStats Talents (array)
CREATE TABLE model_stats_talents (
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    talent VARCHAR(128) NOT NULL,
    PRIMARY KEY (model_id, talent)
);

-- ModelStats Skills (array of objects)
CREATE TABLE model_stats_skills (
    id SERIAL PRIMARY KEY,
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    name VARCHAR(128) NOT NULL,
    rating INTEGER NOT NULL
);

-- ModelStats Melee Weapons (array of objects)
CREATE TABLE model_stats_melee (
    id SERIAL PRIMARY KEY,
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    name VARCHAR(64) NOT NULL,
    rating INTEGER NOT NULL
    -- Add more fields as needed
);

-- ModelStats Range Weapons (array of objects)
CREATE TABLE model_stats_range (
    id SERIAL PRIMARY KEY,
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    name VARCHAR(64) NOT NULL,
    rating INTEGER NOT NULL
    -- Add more fields as needed
);

-- ModelStats Advancements (array of objects)
CREATE TABLE model_stats_advancements (
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    name VARCHAR(128),
    cost INTEGER NOT NULL,
    PRIMARY KEY (model_id, name)
);

-- ModelStats Injuries (array)
CREATE TABLE model_stats_injuries (
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    injury VARCHAR(128) NOT NULL,
    PRIMARY KEY (model_id, injury)
);

-- ModelStats Items (array of objects)
CREATE TABLE model_stats_items (
    model_id INTEGER REFERENCES model_stats(model_id) ON DELETE CASCADE,
    name VARCHAR(128) NOT NULL,
    cost INTEGER NOT NULL,
    advancement VARCHAR(128),
    PRIMARY KEY (model_id, name)
);

-- Add additional tables for other nested/array fields as needed