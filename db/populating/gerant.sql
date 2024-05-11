-- Connexion à la base de données
\c fidelite;

INSERT INTO gerant (
    email, 
    mdp, 
    pseudo, 
    nom, 
    prenom
  ) VALUES (
    'admin@gmail.com', 
    '$2b$10$u9budy.4GglhMbpwnWvtqOHDLGP2sxwdN9UQPUs6Ql4byn9QndFNy',
    'admin',
    'Doe', 
    'John'
);