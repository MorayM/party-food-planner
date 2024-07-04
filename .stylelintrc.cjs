module.exports = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['**/*.cjs'],
  rules: {
    // Enforcing these makes navigating code with Ctrl/Cmd+Click MUCH harder
    'scss/at-import-partial-extension': null,
    'scss/at-import-no-partial-leading-underscore': null,
  }
}
