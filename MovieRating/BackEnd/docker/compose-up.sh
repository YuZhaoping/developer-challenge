#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables


BUILD_OPT="--build"
if docker images | grep -q "${IMAGE_NAME}"; then
  BUILD_OPT=""
fi


if docker ps -a | grep -q "${CONTAINER_NAME}"; then
  echo "The service container '${CONTAINER_NAME}' already exists."
else
  ./networks/setup.sh

  echo "Compose up the service container '${CONTAINER_NAME}' ..."

  cd ../ && \
  docker-compose up ${BUILD_OPT} -d
fi
