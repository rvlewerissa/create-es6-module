module.exports = `{
  "presets": ["@babel/preset-es2015"],
  "env": {
    "development": {
      "plugins": [
      "@babel/plugin-syntax-class-properties",
      "@babel/plugin-syntax-object-rest-spread",
      "@babel/plugin-transform-flow-strip-types"
    ]
    }
  }
}
`;
