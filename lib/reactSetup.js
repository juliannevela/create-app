const path = require('path');
const { copyFiles, init, installDependencies } = require('./helpers');

const dependencies = [
  'react',
  'react-dom'
];

const devDependencies = [
  '@babel/core',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-runtime',
  '@babel/preset-env',
  '@babel/preset-react',
  '@testing-library/jest-dom',
  '@testing-library/react',
  '@testing-library/user-event',
  '@types/jest',
  'autoprefixer',
  'babel-eslint',
  'babel-loader',
  'clean-webpack-plugin',
  'copy-webpack-plugin',
  'css-loader',
  'eslint',
  'eslint-plugin-babel',
  'eslint-plugin-react',
  'file-loader',
  'git://github.com/mehtaphysical/dotenv-webpack#master',
  'html-webpack-plugin@next',
  'identity-obj-proxy',
  'jest',
  'postcss-import',
  'postcss-loader',
  'postcss-nested',
  'postcss-simple-vars',
  'prop-types',
  'style-loader',
  'url-loader',
  'webpack',
  'webpack-cli',
  'webpack-dev-server'
];

module.exports = async(config) => {
  const { applicationFolder } = config;
  await copyFiles(path.join(__dirname, '../react'), applicationFolder, config);
  await init(applicationFolder);
  await installDependencies(applicationFolder, devDependencies, dependencies);
};
