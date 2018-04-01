#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const {prompt} = require('inquirer');
const {spawn} = require('child_process');

const questions = require('./questions');

// general config
const eslintignore = require('./configs/general/eslintignore');
const flowconfig = require('./configs/general/flowconfig');
const gitignore = require('./configs/general/gitignore');
const npmignore = require('./configs/general/npmignore');
const travis = require('./configs/general/travis');
const webpack = require('./configs/general/webpack');

// plain specific
const babelrcPlain = require('./configs/plain/babelrc');
const linterPlain = require('././configs/plain/eslint');
const packagejsonPlain = require('./configs/plain/packagejson');

// react specific
const packagejsonReact = require('./configs/react/packagejson');

var answers = {};

function noop() {}

program.version('0.0.1').description('ES6 module boilerplate');

program.command('init').action(() => {
  prompt(questions).then((results) => {
    answers = results;
    setupDirectory();
    setupGeneralFiles();
    setupModules();
    initModule();
  });
});

function setupDirectory() {
  const MODULE_DIR = path.join(process.cwd(), answers.name);
  fs.mkdirSync(MODULE_DIR);
  process.chdir(MODULE_DIR);
  fs.mkdir('src/', noop);
  fs.writeFile('/src/index.js', '// @flow', noop);
}

function setupGeneralFiles() {
  fs.writeFile('.eslintignore', eslintignore, noop);
  fs.writeFile('.flowconfig', flowconfig, noop);
  fs.writeFile('.gitignore', gitignore, noop);
  fs.writeFile('.npmignore', npmignore, noop);
  fs.writeFile('.travis.yml', travis, noop);
  fs.writeFile('webpack.config.js', webpack, noop);
}

function setupModules() {
  switch (answers.type) {
    case 'React':
      return setupReactModule();
    case 'Plain ES6':
      return setupPlainESModule();
  }
}

function setupPlainESModule() {
  fs.writeFile('.babelrc', babelrcPlain, noop);
  fs.writeFile('.eslintrc', linterPlain, noop);
  fs.writeFile('package.json', packagejsonPlain(answers), noop);
}

function setupReactModule() {
  fs.writeFile('package.json', packagejsonReact(answers), noop);
}

function initModule() {
  // spawn child process use parent's stdio
  spawn('yarn', ['install'], {
    stdio: 'inherit'
  });
}

program.parse(process.argv);
