#!/usr/bin/env node

const { program } = require('commander');
const { prompt } = require('inquirer');
const expressSqlSetup = require('./lib/expressSqlSetup');
const reactSetup = require('./lib/reactSetup');
const empty = require('./lib/empty');

const scripts = {
  expressSqlSetup,
  reactSetup,
  empty
};

program
  .option('-t, --type <type>', 'application type node, react, or basic')
  .option('-n, --name <name>', 'application name')
  .parse(process.argv);

getConfig(program)
  .then(init);

async function init(config) {
  return scripts[config.type](config);
}

async function getConfig(program) {
  return program.type && program.args[0]
    ? {
      type: program.type,
      applicationFolder: program.args[0],
      appName: program.name || program.args[0]
    }
    : prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Application Type',
        choices: [
          { name: 'empty', value: 'empty' },
          { name: 'express sql', value: 'expressSqlSetup' },
          { name: 'react', value: 'reactSetup' }
        ]
      },
      {
        type: 'input',
        name: 'applicationFolder',
        message: 'Application Folder (. for current folder)',
        default: 'alchemy-app'
      },
      {
        type: 'input',
        name: 'appName',
        message: 'Application Name',
        default: 'alchemy-app'
      }
    ]);
}
