#!/bin/sh
set -eo pipefail


if [ "${1:0:1}" = '-' ]; then
  set -- start-app "$@"
fi

if [ "$1" = 'start-app' ]; then
  exec npx babel-node ./src/bin/www
else
  exec "$@"
fi
