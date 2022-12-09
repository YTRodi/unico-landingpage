module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'arrow-body-style': 'warn',
    // React:
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],

    // Imports:
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],

    // TS
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files (no .tsx)
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
};
