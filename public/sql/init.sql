DROP DATABASE IF EXISTS fidelite;
CREATE DATABASE fidelite;

-- Connexion à la base de données
\c fidelite;


CREATE TABLE gerant (
    id SERIAL NOT NULL,
    email VARCHAR(128) NOT NULL,
    mdp TEXT NOT NULL,
    pseudo VARCHAR(32) NOT NULL,
    nom VARCHAR(64),
    prenom VARCHAR(64),

    UNIQUE (email),
    UNIQUE (pseudo),

    PRIMARY KEY (id)
);

CREATE TABLE client (
    id SERIAL NOT NULL,
    email VARCHAR(128) NOT NULL,
    mdp TEXT NOT NULL,
    pseudo VARCHAR(32) NOT NULL,
    nom VARCHAR(64),
    prenom VARCHAR(64),
    points INTEGER NOT NULL DEFAULT 0,
    date_inscription DATE NOT NULL 
        DEFAULT CURRENT_DATE,
    naissance DATE,
    panier INTEGER NOT NULL DEFAULT 0,

    UNIQUE (email),
    UNIQUE (pseudo),
    CHECK (points >= 0),

    PRIMARY KEY (id)
);

CREATE TABLE panier (
    id SERIAL NOT NULL,
    proprietaire INTEGER NOT NULL,
    date_archive DATE,
    
    PRIMARY KEY (id)
);

-- Clés Étrangères Mutuelles
ALTER TABLE client 
    ADD FOREIGN KEY (panier) 
        REFERENCES panier (id) 
        ON DELETE RESTRICT
;

ALTER TABLE panier 
    ADD FOREIGN KEY (proprietaire) 
        REFERENCES client (id) 
        ON DELETE CASCADE
;
  
CREATE TABLE cadeau (
    id SERIAL NOT NULL,
    titre VARCHAR(255) NOT NULL,
    "description" VARCHAR(2048),
    prix INTEGER NOT NULL DEFAULT 0,
    stock INTEGER NOT NULL DEFAULT 0,

    CHECK (prix >= 0),
    CHECK (stock >= 0),

    PRIMARY KEY (id)
);

-- Table d'association panier / cadeau
CREATE TABLE contenu (
    id_panier INTEGER NOT NULL,
    id_cadeau INTEGER NOT NULL,

    PRIMARY KEY (id_panier, id_cadeau),
    
    FOREIGN KEY (id_panier)
        REFERENCES panier (id)
        ON DELETE CASCADE,
    FOREIGN KEY (id_cadeau)
        REFERENCES cadeau (id)
        ON DELETE CASCADE
);
