#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables


if docker ps | grep -q "${CONTAINER_NAME}"; then
  echo "The service container '${CONTAINER_NAME}' already exists."
elif docker ps -a | grep -q "${CONTAINER_NAME}"; then
  echo "Restart the service container '${CONTAINER_NAME}' ..."
  docker start ${CONTAINER_NAME}
else
  ../../docker/networks/setup.sh

  echo "Start running the service container '${CONTAINER_NAME}' ..."

  docker create --name ${CONTAINER_NAME} \
    --network=${BACKEND_NETWORK_NAME} --hostname=${CONTAINER_NAME} --net-alias=${CONTAINER_NAME} \
    --env-file ./mongodb/.env --env-file ./mongodb/MONGODB.variables \
    -p 4000:4000 \
    ${IMAGE_FULL_NAME} && \
  docker network connect ${FRONTEND_NETWORK_NAME} ${CONTAINER_NAME} && \
  docker start ${CONTAINER_NAME}
fi
