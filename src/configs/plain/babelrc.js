module.exports = `{
  "presets": ["es2015"],
  "env": {
    "development": {
      "plugins": ["transform-object-rest-spread", "transform-flow-strip-types"]
    }
  }
}
`;
