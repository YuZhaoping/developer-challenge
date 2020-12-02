#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables

if docker images | grep -q "${IMAGE_NAME}"; then
  docker image rm -f ${IMAGE_FULL_NAME} && \
  docker image prune -f -a
fi
