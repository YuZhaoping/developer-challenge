#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables


if docker ps | grep -q "${CONTAINER_NAME}"; then
  echo "Compose down the service container '${CONTAINER_NAME}' ..."
  cd ../ && \
  docker-compose down -v && \
  docker volume prune -f
fi
