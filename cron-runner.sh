#!/bin/bash


PROJ_HOME=/PATH/TO/PROJ
CYPRESS=${PROJ_HOME}/node_modules/.bin/cypress
INTEGRATION_DIR=${PROJ_HOME}/cypress/integration

${CYPRESS} run \
	--config-file false \
	--config video=false \
	--config integrationFolder=${INTEGRATION_DIR} \
	-- --record --spec "cypress/integration/runner.js"

echo "DATE: $(date) ---- CYPRESS_STATUS_CODE: $?" >> ${PROJ_HOME}/pollev-hack.log
