const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = [
  'dotenv',
  'express',
  'pg'
];

const devDependencies = [
  '@babel/eslint-parser',
  '@babel/plugin-syntax-class-properties',
  '@types/jest',
  '@types/pg',
  'eslint',
  'jest',
  'nodemon',
  'supertest'
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../express-sql'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
