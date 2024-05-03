DROP SCHEMA IF EXISTS database_site; -- Drop si la base de données existe déjà
CREATE SCHEMA database_site; -- Création de la base de données
SET search_path TO database_site; -- On se place dans la base de données


CREATE TABLE gerant( -- Création de la table gerant
    id_gerant SERIAL PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL,
    mot_de_passe TEXT NOT NULL,
);

CREATE TABLE client( -- Création de la table client
    id_client SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    date_naissance DATE NOT NULL,
    pseudo VARCHAR(50) UNIQUE NOT NULL,
    mot_de_passe TEXT NOT NULL,
    date_inscription DATE DEFAULT GETDATE(),   
    nb_points INTEGER DEFAULT 0 CHECK (nb_points >= 0)
);

CREATE TABLE cadeau( -- Création de la table cadeau
    id_cadeau SERIAL PRIMARY KEY,
    nom_cadeau VARCHAR(50) UNIQUE NOT NULL,
    cadeau_description TEXT,
    prix_points INTEGER CHECK (prix_points >= 0)
    stock INTEGER NOT NULL CHECK (stock >= 0)
    special_anniv BOOLEAN DEFAULT FALSE
);

CREATE TABLE panier( -- Création de la table panier
    id_panier SERIAL PRIMARY KEY,
    id_client INTEGER,
    id_cadeau INTEGER,
    quantite INTEGER NOT NULL CHECK (quantite >= 0),
    CONSTRAINT fk_id_client FOREIGN KEY (id_client) REFERENCES client(id_client)
    CONSTRAINT fk_id_cadeau FOREIGN KEY (id_cadeau) REFERENCES cadeau(id_cadeau)
);

CREATE TABLE possesion_cadeau( -- Création de la table possesion_cadeau pour les cadeaux possédés par les clients
    id_possesion SERIAL PRIMARY KEY,
    id_client INTEGER,
    id_cadeau INTEGER,
    quantite INTEGER NOT NULL CHECK (quantite >= 0),
    date_achat DATE DEFAULT GETDATE(),
    CONSTRAINT fk_id_client FOREIGN KEY (id_client) REFERENCES client(id_client)
    CONSTRAINT fk_id_cadeau FOREIGN KEY (id_cadeau) REFERENCES cadeau(id_cadeau)
);
