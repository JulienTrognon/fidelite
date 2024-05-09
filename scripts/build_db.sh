#!/bin/bash

# Variables
DB_NAME="fidelite"
DB_PATH_INIT="db/init.sql"

# Scripts SQL
psql -c "\i ${DB_PATH_INIT}"

echo base de données initialisée.
