#!/usr/bin/env bash

cd $(dirname $0) && cd ../


../../../docker/networks/setup.sh


mkdir -p _home && touch ./_home/.dbshell
sudo chown -R 999:999 ./_home

# sudo chown `docker run --rm mongo:latest id -u mongodb`:`docker run --rm mongo:latest id -g mongodb` ./_home

docker-compose up --build -d
