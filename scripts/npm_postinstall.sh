#!/bin/bash

npm prune

if [ "$NODE_ENV" == "production" ]; then
  make build
fi
