/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************


// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const path = require('path');
const fs = require('fs');

const cucumber = require('cypress-cucumber-preprocessor').default;
// const {initPlugin} = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())


const options = {
  printLogsToFile: 'always',
  printLogsToConsole: 'never',
  outputRoot: config.projectRoot + '/cypress/logs',
  specRoot: path.relative(config.fileServerFolder, config.integrationFolder),
  outputTarget: {
    'cypress-logs|txt': 'txt',
  }
};
require('cypress-terminal-report/src/installLogsPrinter')(on,options);
return config;
};
