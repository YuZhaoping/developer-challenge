#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables


if docker ps | grep -q "${CONTAINER_NAME}"; then
  echo "Stop the service container '${CONTAINER_NAME}' ..."
  docker stop ${CONTAINER_NAME}
fi

if docker ps -a | grep -q "${CONTAINER_NAME}"; then
  echo "Remove the service container '${CONTAINER_NAME}' ..."
  docker container rm -f ${CONTAINER_NAME} && \
  docker container prune -f
fi
