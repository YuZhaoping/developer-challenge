#!/usr/bin/env bash

cd $(dirname $0) && cd ../

docker-compose down -v && docker volume prune -f

sudo rm -rf ./_home
