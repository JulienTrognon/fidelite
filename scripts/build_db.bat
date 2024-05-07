@echo off

set DB_NAME="fidelite"
set DB_PATH_INIT="public/sql/init.sql"

psql -c "\i %DB_PATH_INIT%"

echo base de données initialisée.
