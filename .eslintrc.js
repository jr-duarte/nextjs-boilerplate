const path = require('path');

const config = require('./tsconfig.paths.json');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-nested-ternary': 'off',
    'no-constant-condition': 'off',
    'react/no-unescaped-entities': 'off',
    'no-unneeded-ternary': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-shadow': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/'],
          ['module'],
          ['/^~//'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        map: Object.keys(config.compilerOptions.paths).map((itemKey) => {
          const pathKey = itemKey.replace('/*', '');
          const pathValue = config.compilerOptions.paths[itemKey][0].replace(
            '/*',
            '',
          );
          return [pathKey, path.resolve(__dirname, pathValue)];
        }),
      },
    },
  },
};
