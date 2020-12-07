#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables

cd ../ &&
docker build -t ${IMAGE_FULL_NAME} .
