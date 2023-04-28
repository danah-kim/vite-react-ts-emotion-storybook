module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh','@typescript-eslint', 'import', 'prettier', 'react-hooks', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': 'warn'
  }
};
