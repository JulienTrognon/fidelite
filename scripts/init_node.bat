@echo off

call npm init -y
call npm install --save ejs express pg bcrypt dotenv cookie-parser
call npm install --save-dev nodemon

echo node initialisé.
