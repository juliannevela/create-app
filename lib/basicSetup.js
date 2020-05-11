const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = [];

const devDependencies = [
  '@types/jest',
  'alchemy-jest-slack-reporter',
  'eslint',
  'jest',
  'nodemon'
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../basic'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
