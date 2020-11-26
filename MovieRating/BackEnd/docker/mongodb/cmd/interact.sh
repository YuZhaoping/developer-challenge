#!/usr/bin/env bash

cd $(dirname $0) && cd ../

docker exec -it mongodb bash
