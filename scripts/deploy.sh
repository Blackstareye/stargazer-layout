#!/usr/bin/env bash
# Little Snippet for setting cwd to script path
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH

source config.sh
rm -R public && hugo && rsync -azvhP public $deploy_server    
