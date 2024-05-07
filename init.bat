@echo off

echo appel des scripts pour initialiser le projet

call scripts\init_node.bat
call scripts\init_db.bat

echo le projet a été initialisé
echo pour lancer le serveur : npm start
