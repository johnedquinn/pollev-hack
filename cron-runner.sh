#!/bin/bash

# cd /Users/jq/Developer/pollev-hack/

/Users/jq/Developer/pollev-hack/node_modules/.bin/cypress run --config-file false --config video=false -- --record --spec "cypress/integration/runner.js"

echo "$?" >> ./pollev-hack.log

# cd -
