module.exports = function({name, description, author, license, repoAddress}) {
  return `{
  "name": "${name}",
  "version": "0.0.1",
  "description": "${description}",
  "main": "build/index.js",
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "typecheck": "flow",
    "lint": "eslint . --max-warnings 0",
    "test-src": "react-scripts test",
    "test": "npm-run-all lint typecheck test-src"
  },
  "repository": {
    "type": "git",
    "url": "git+${repoAddress}"
  },
  "author": "${author}",
  "license": "${license}",
  "devDependencies": {
    "@babel/cli": "^7.0.0-beta.42",
    "@babel/core": "^7.0.0-beta.42",
    "@babel/runtime": "^7.0.0-beta.42",
    "@babel/plugin-syntax-object-rest-spread": "^7.0.0-beta.42",
    "@babel/preset-es2015": "^7.0.0-beta.42",
    "@babel/plugin-syntax-class-properties": "^7.0.0-beta.42",
    "@babel/plugin-syntax-object-rest-spread": "^7.0.0-beta.42",
    "@babel/plugin-transform-flow-strip-types": "^7.0.0-beta.42",
    "babel-loader": "^8.0.0-beta",
    "babel-eslint": "^8.2.2",
    "eslint": "^4.19.1",
    "eslint-plugin-flowtype": "^2.46.1",
    "eslint-plugin-jest": "^21.15.0",
    "jest": "^22.4.3",
    "webpack": "^4.4.1",
    "webpack-cli": "^2.0.13"
  },
  "dependencies": {},
  "prettier": {
    "bracketSpacing": false,
    "singleQuote": true,
    "trailingComma": "all"
  }
}
`;
};
