module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended'
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-multiple-template-root': 0,
    'vue/max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        tabWidth: 2,
        comments: 120,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^\\s*const\\s.+=\\s*require\\s*\\(',
        ignoreHTMLTextContents: true,
        ignoreHTMLAttributeValues: true,
        ignoreStrings: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    'vue/max-attributes-per-line': ['error'],
    'vue/html-closing-bracket-newline': 'error',
    'vue/padding-lines-in-component-definition': [
      'error',
      {
        betweenOptions: 'always'
      }
    ],
    'func-call-spacing': 'off', // Fix for 'defineEmits'
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description'
      }
    ],
    'max-lines': [
      'error',
      {
        max: 1000,
        skipComments: false,
        skipBlankLines: false
      }
    ],
    semi: [2, 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'max-len': [
      'error',
      {
        code: 600,
        ignoreUrls: true,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreComments: true
      }
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: true
        },
        ImportDeclaration: 'never',
        ExportDeclaration: 'never'
      }
    ],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    'space-before-blocks': 'error',
    'no-spaced-func': 'error',
    'implicit-arrow-linebreak': 'error',
    'quote-props': ['error', 'as-needed'],
    'computed-property-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'brace-style': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'prefer-object-spread': 'error',
    'space-in-parens': ['error', 'never'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'dot-notation': 'error',
    indent: ['error', 2],
    'space-unary-ops': 'error',
    'padded-blocks': ['error', 'never'],
    quotes: ['error', 'single'],
    'prefer-rest-params': 'off',
    'comma-dangle': ['error', 'never'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }]
  },
  ignorePatterns: ['dist', 'node_modules', 'build', 'coverage', 'docs', 'test']
}
