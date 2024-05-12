#!/bin/bash

# Variables
DB_NAME="fidelite"
DB_PATH_INIT="db/init.sql"
DB_PATH_TABLES="db/populating/"
DB_TABLES=("gerant" "client" "session" "panier" "cadeau" "contenu")

# Scripts SQL
psql -c "\i ${DB_PATH_INIT}"

for table in "${DB_TABLES[@]}"
do
  psql -c "\i ${DB_PATH_TABLES}${table}.sql"
done

echo base de données initialisée.
