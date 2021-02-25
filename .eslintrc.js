module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'jest', 'react-hooks', 'import', '@emotion', 'unused-imports'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'prettier', 'plugin:react/recommended'],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Opt-in
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'unused-imports/no-unused-imports-ts': 'error',

    // Opt-out
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/display-name': 'off',

    // Remove restriction on `ForOfStatement` as it's just a highly opinionated rule that doesn't have much merit
    // see https://github.com/airbnb/javascript/issues/1271 for more info
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

    'no-restricted-imports': [
      'error',
      {
        paths: [
          // Emotion 11 is a mess...force the right imports...
          { name: '@emotion/react', message: 'Please import from "@emotion/core" instead.' },
          { name: '@emotion/css', message: 'Please import from "@emotion/core" instead.' },
        ],
      },
    ],

    // Configure
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    'import/order': [
      'error',
      {
        'groups': ['builtin', ['external', 'internal'], ['parent', 'sibling'], ['index']],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // line spacing
    'padding-line-between-statements': [
      'error',
      // wildcard inclusions
      {
        blankLine: 'always',
        prev: ['multiline-block-like', 'multiline-const', 'multiline-expression'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['multiline-block-like', 'multiline-const', 'multiline-expression', 'switch', 'return'],
      },
      // specific exclusions for case statements
      { blankLine: 'never', prev: 'case', next: 'multiline-block-like' },
      { blankLine: 'never', prev: 'multiline-block-like', next: 'case' },
    ],
  },
  overrides: [
    {
      files: '**/*.{stories,test}.tsx',
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    // Cypress
    {
      files: 'cypress/**',
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
}
