#!/usr/bin/env bash
set -e

if [ -n "${MONGO_INITDB_ROOT_USERNAME:-}" ] && \
   [ -n "${MONGO_INITDB_ROOT_PASSWORD:-}" ] && \
   [ -n "${MONGO_DB_NAME:-}" ] && \
   [ -n "${MONGO_DB_USERNAME:-}" ] && \
   [ -n "${MONGO_DB_PASSWORD:-}" ]; then
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD \
  --authenticationDatabase admin <<EOF
use admin;
db = db.getSiblingDB('$MONGO_DB_NAME');
db.createUser({
  user: '$MONGO_DB_USERNAME',
  pwd: '$MONGO_DB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_DB_NAME'
  }]
});
EOF
else
  echo "Lack of mongo db init environments, such as MONGO_DB_NAME, etc."
  exit 1
fi
