#!/usr/bin/env bash

docker image rm -f nginx:1.19-alpine && \
docker image prune -f
