const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = [
  'dotenv',
  'express',
  'mongoose'
];

const devDependencies = [
  '@types/jest',
  'alchemy-jest-slack-reporter',
  'eslint',
  'jest',
  'mongodb-memory-server',
  'nodemon',
  'supertest'
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../node'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
