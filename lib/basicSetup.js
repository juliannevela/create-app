const path = require('path');
const { copyFiles, installDependencies } = require('./helpers');

const dependencies = [];

const devDependencies = [
  '@types/jest',
  'alchemy-jest-slack-reporter',
  'eslint',
  'jest',
  'jest-github-reporter',
  'nodemon',
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../basic'), applicationFolder, config);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
