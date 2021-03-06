#!/usr/bin/env bash

cd $(dirname $0) && source ./.env


NETWORK_NAMES=(${BACKEND_NETWORK_NAME} ${FRONTEND_NETWORK_NAME})

for NETWORK_NAME in ${NETWORK_NAMES[@]}; do

  if docker network ls | grep -q "${NETWORK_NAME}"; then
    echo "The network '${NETWORK_NAME}' already exists."
  else
    echo "Create the network '${NETWORK_NAME}' ..."
    docker network create -d bridge ${NETWORK_NAME}
  fi

done
