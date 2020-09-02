const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = [
  'dotenv'
];

const devDependencies = [
  '@babel/eslint-parser',
  '@babel/plugin-syntax-class-properties',
  '@types/jest',
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
