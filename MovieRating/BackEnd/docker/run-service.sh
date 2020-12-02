#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables


if docker ps | grep -q "${CONTAINER_NAME}"; then
  echo "The service container '${CONTAINER_NAME}' already exists."
elif docker ps -a | grep -q "${CONTAINER_NAME}"; then
  echo "Restart the service container '${CONTAINER_NAME}' ..."
  docker start ${CONTAINER_NAME}
else
  ./networks/setup.sh

  echo "Start running the service container '${CONTAINER_NAME}' ..."

  docker run -d --name ${CONTAINER_NAME} \
    --network=${NETWORK_NAME} --net-alias=${CONTAINER_NAME} \
    -p 4000:4000 \
    ${IMAGE_FULL_NAME}
fi
