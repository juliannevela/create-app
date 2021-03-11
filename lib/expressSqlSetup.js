const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = [
  'dotenv@latest',
  'express@latest',
  'pg@latest'
];

const devDependencies = [
  '@babel/eslint-parser@latest',
  '@babel/plugin-syntax-class-properties@latest',
  '@types/jest@latest',
  '@types/pg@latest',
  'eslint@latest',
  'jest@latest',
  'nodemon@latest',
  'supertest@latest'
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../express-sql'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
