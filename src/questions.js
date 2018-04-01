module.exports = [
  {
    type: 'list',
    name: 'type',
    message: 'Module type: ',
    choices: ['Plain ES6', 'React']
  },
  {
    type: 'input',
    name: 'name',
    message: 'Module name: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description: '
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author: '
  },
  {
    type: 'input',
    name: 'license',
    message: 'License: '
  },
  {
    type: 'input',
    name: 'repoAddress',
    message: 'Repository address: '
  }
];
