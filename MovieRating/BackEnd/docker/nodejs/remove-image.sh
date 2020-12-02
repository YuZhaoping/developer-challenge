#!/usr/bin/env bash

docker image rm -f node:alpine3.12 && \
docker image prune -f
