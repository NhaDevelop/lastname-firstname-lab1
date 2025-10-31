const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        // Node.js
        process: "readonly",
        __dirname: "readonly",
        // Mocha
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
      parserOptions: {
        ecmaVersion: 12,
      },
    },
    rules: {}
  }
];
