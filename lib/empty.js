const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = ['cross-env@latest'];

const devDependencies = [
  '@babel/eslint-parser@latest',
  '@babel/plugin-syntax-class-properties@latest',
  '@types/jest@latest',
  'eslint@latest',
  'jest@latest',
  'nodemon@latest',
  'prettier@latest'
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../empty'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
