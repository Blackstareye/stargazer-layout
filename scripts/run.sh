#!/usr/bin/env bash

# Little Snippet for setting cwd to script path
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
# go to path
cd $SCRIPTPATH/..


[[ -d "./public" ]] && rm -R ./public
gnome-terminal -- bash -c "cd $PWD && npm run dev"
