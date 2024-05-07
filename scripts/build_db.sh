#!/bin/bash

# Variables
DB_NAME="fidelite"
DB_PATH_INIT="public/sql/init.sql"

# Scripts SQL
psql -c "\i ${DB_PATH_INIT}"
