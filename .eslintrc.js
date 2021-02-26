module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
  env: {
    browser: true,
    node: true,
  },
  globals: {
    page: true,
  },
}
