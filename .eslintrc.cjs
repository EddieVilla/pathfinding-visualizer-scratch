module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "indent": ["error", 2],
    //"indent": ["error", 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} }],
    'react/react-in-jsx-scope': 'off',
    "semi": ["error", "always"]
  },
}