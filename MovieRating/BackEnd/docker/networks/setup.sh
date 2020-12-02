#!/usr/bin/env bash

cd $(dirname $0) && source ../../.env

if docker network ls | grep -q "${NETWORK_NAME}"; then
  echo "The service network '${NETWORK_NAME}' already exists."
else
  echo "Create the service network '${NETWORK_NAME}' ..."
  docker network create -d bridge ${NETWORK_NAME}
fi
