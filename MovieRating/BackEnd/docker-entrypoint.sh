#!/bin/sh
set -eo pipefail


export ENABLE_MOCK_DB="${ENABLE_MOCK_DB:-true}"


MONGODB_URL=""

if [ -n "${MONGODB_HOSTNAME:-}" ] && \
   [ -n "${MONGO_DB_NAME:-}" ] && \
   [ -n "${MONGO_DB_USERNAME:-}" ] && \
   [ -n "${MONGO_DB_PASSWORD:-}" ]; then
 MONGODB_URL="mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGODB_HOSTNAME}:27017/${MONGO_DB_NAME}"
fi

export MONGODB_URL


if [ "${1:0:1}" = '-' ]; then
  set -- start-app "$@"
fi

if [ "$1" = 'start-app' ]; then
  exec npx babel-node ./src/bin/www
else
  exec "$@"
fi
