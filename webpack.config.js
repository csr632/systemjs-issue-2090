const path = require("path");

module.exports = [
  {
    mode: "development",
    entry: { index: "./src/index.js" },
    output: {
      libraryTarget: "system"
    },
    externals: {
      "math-add": "math-add"
    }
  },
  {
    mode: "development",
    entry: { "math-add": "./src/math-add.js" },
    output: {
      libraryTarget: "umd",
      library: "mathAdd"
    }
  }
];
