const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = ['react@latest', 'react-dom@latest'];

const devDependencies = [
  '@babel/core@latest',
  '@babel/plugin-proposal-class-properties@latest',
  '@babel/plugin-transform-runtime@latest',
  '@babel/preset-env@latest',
  '@babel/preset-react@latest',
  '@testing-library/jest-dom@latest',
  '@testing-library/react@latest',
  '@testing-library/user-event@latest',
  '@types/jest@latest',
  'autoprefixer@latest',
  'babel-eslint@latest',
  'babel-loader@latest',
  'clean-webpack-plugin@latest',
  'copy-webpack-plugin@latest',
  'css-loader@latest',
  'dotenv@latest',
  'eslint@latest',
  'eslint-config-airbnb@latest',
  'eslint-config-prettier@latest',
  'eslint-plugin-babel@latest',
  'eslint-plugin-react@latest',
  'file-loader@latest',
  'html-webpack-plugin@latest',
  'identity-obj-proxy@latest',
  'jest@latest',
  'msw',
  'node-fetch',
  'postcss-import@latest',
  'postcss-loader@latest',
  'postcss-nested@latest',
  'prettier@latest',
  'prop-types@latest',
  'style-loader@latest',
  'url-loader@latest',
  'webpack@latest',
  'webpack-cli@latest',
  'webpack-dev-server@latest',
];

module.exports = async (config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../react'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
