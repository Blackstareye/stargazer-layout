#!/usr/bin/env bash
# Little Snippet for setting cwd to script path
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH
source ${1:-config.sh}
cd ..
echo "rm -R exampleSite/public &&  hugo -b "$baseurl"  && rsync -azvhP exampleSite/public $deploy_server    "
rm -R exampleSite/public &&  hugo -s exampleSite -b "$baseurl"  && rsync -azvhP exampleSite/public $deploy_server 
