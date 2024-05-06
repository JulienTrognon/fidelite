#!/bin/bash

# Variables
DB_NAME="fidelite"
DB_PATH_INIT="public/sql/init.sql"

# Scripts SQL
# psql -c "DROP DATABASE IF EXISTS ${DB_NAME};"
# psql -c "CREATE DATABASE ${DB_NAME};"
# psql -d ${DB_NAME} -f ${DB_PATH_INIT}
psql -c "\i ${DB_PATH_INIT}"
