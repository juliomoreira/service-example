#!/bin/bash
mkdir -p service/src/node
ln -fs $PWD/node/package.json service/src/node/package.json
ln -fs $PWD/node/service.json service/service.json
ln -fs $PWD/node/node_modules service/src/node/node_modules
