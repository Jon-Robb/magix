CREATE TABLE most_used_cards (
    id SMALLINT PRIMARY KEY,
    cost SMALLINT NOT NULL,
    hp SMALLINT NOT NULL,
    attack SMALLINT NOT NULL,
    mechanics VARCHAR,
    nb_fois_utilise SMALLINT DEFAULT 1
)