#!/usr/bin/env bash

cd $(dirname $0) && source ../../.env

if docker network ls | grep -q "${NETWORK_NAME}"; then
  echo "Remove the service network '${NETWORK_NAME}' ..."
  docker network rm ${NETWORK_NAME} && \
  docker network prune -f
fi
