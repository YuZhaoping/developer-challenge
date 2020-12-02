#!/usr/bin/env bash

cd $(dirname $0) && cd ../

docker-compose --env-file ../../.env \
  down -v && \
docker volume prune -f

sudo rm -rf ./_home
