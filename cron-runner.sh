#!/bin/bash

PROJ_HOME=/Users/jq/Developer/pollev-hack
CYPRESS=${PROJ_HOME}/node_modules/.bin/cypress
INTEGRATION_DIR=${PROJ_HOME}/cypress/integration

${CYPRESS} run \
	--config-file false \
	--config video=false \
	--config integrationFolder=${INTEGRATION_DIR} \
	-- --record --spec ./cypress/integration/runner.js

echo "$?" >> /Users/jq/Developer/pollev-hack/pollev-hack.log
