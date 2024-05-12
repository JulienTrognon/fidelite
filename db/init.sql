DROP DATABASE IF EXISTS fidelite;
CREATE DATABASE fidelite;

-- Connexion à la base de données
\c fidelite;


CREATE TABLE gerant (
  id SERIAL NOT NULL PRIMARY KEY,
  email VARCHAR(128) UNIQUE NOT NULL,
  mdp TEXT NOT NULL,
  pseudo VARCHAR(32) UNIQUE NOT NULL,
  nom VARCHAR(64),
  prenom VARCHAR(64)
);

CREATE TABLE client (
  id SERIAL NOT NULL PRIMARY KEY,
  email VARCHAR(128) UNIQUE NOT NULL,
  mdp TEXT NOT NULL,
  pseudo VARCHAR(32) UNIQUE NOT NULL,
  nom VARCHAR(64),
  prenom VARCHAR(64),
  points INTEGER NOT NULL DEFAULT 0,
  date_inscription DATE NOT NULL 
    DEFAULT CURRENT_DATE,
  naissance DATE

  CHECK (points >= 0)
);

CREATE TABLE session (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  user_type VARCHAR(6) NOT NULL,
  debut TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  fin TIMESTAMP WITH TIME ZONE NOT NULL,
  data JSONB DEFAULT '{}',

  CHECK (user_type IN ('client', 'gerant'))
);

CREATE TABLE panier (
  id SERIAL NOT NULL PRIMARY KEY,
  id_client INTEGER NOT NULL,
  date_archive DATE,
  etat VARCHAR(8) NOT NULL DEFAULT 'en cours',

  CHECK (etat IN ('en cours', 'archive')),

  FOREIGN KEY (id_client)
    REFERENCES client (id)
    ON DELETE CASCADE
);
  
CREATE TABLE cadeau (
  id SERIAL NOT NULL PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  "description" VARCHAR(2048),
  prix INTEGER NOT NULL DEFAULT 0,
  stock INTEGER NOT NULL DEFAULT 0,

  CHECK (prix >= 0),
  CHECK (stock >= 0)
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
