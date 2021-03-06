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
    "@babel/preset-es2015": "^7.0.0-beta.42",
    "@babel/preset-react": "^7.0.0-beta.42",
    "@babel/plugin-transform-flow-strip-types": "^7.0.0-beta.42",
    "@babel/plugin-syntax-class-properties": "^7.0.0-beta.42",
    "@babel/plugin-syntax-object-rest-spread": "^7.0.0-beta.42",
    "babel-loader": "^8.0.0-beta",
    "babel-eslint": "7.2.3",
    "babel-jest": "20.0.3",
    "babel-polyfill": "^6.26.0",
    "eslint": "4.10.0",
    "eslint-config-react-app": "^2.1.0",
    "eslint-loader": "1.9.0",
    "eslint-plugin-flowtype": "2.39.1",
    "eslint-plugin-import": "2.8.0",
    "eslint-plugin-jsx-a11y": "5.1.1",
    "eslint-plugin-react": "7.4.0",
    "flow-bin": "^0.68.0",
    "webpack": "^4.4.1",
    "webpack-cli": "^2.0.13"
  },
  "dependencies": {},
  "babel": {
    "presets": [
      [
        "@babel/preset-es2015",
        {
          "loose": true
        }
      ],
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-syntax-class-properties",
      "@babel/plugin-syntax-object-rest-spread",
      "@babel/plugin-transform-flow-strip-types"
    ]
  },
  "prettier": {
    "bracketSpacing": false,
    "singleQuote": true,
    "trailingComma": "all"
  },
  "eslintConfig": {
    "extends": "react-app"
  }
}
`;
};
