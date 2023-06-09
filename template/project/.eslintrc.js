const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  {{#equals type 'vue'}}
  parser: 'vue-eslint-parser',
  {{/equals}}
  {{#equals lang 'js'}}
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: "latest"
  },
  {{/equals}}
  {{#equals lang 'ts'}}
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: 'module',
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  {{/equals}}
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
    {{#equals type 'vue'}}
    'vue/setup-compiler-macros': true
    {{/equals}}
  },
  globals: {
    jest: "readonly"
  },
  {{#equals lang 'js'}}
  plugins: ["prettier", "import"],
  {{/equals}}
  {{#equals lang 'ts'}}
  plugins: ['@typescript-eslint', "prettier", "import"],
  {{/equals}}
  extends: [
    "eslint:recommended",
    'prettier',
    {{#equals lang 'ts'}}
    'plugin:@typescript-eslint/recommended',
    {{/equals}}
    {{#equals type 'vue'}}
    'plugin:vue/vue3-recommended',
    {{/equals}}
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
      },
    ],
    'keyword-spacing': ['error', { after: true }],
    'space-before-function-paren': ['error', { anonymous: 'always',
      named: 'never' }],
    eqeqeq: ['error', 'always'],
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    curly: ['error', 'all'],
    'handle-callback-err': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'operator-linebreak': ['error'],
    'one-var': ['error', 'never'],
    'no-cond-assign': ['error', 'except-parens'],
    'block-spacing': ['error'],
    camelcase: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'accessor-pairs': 'error',
    'constructor-super': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': ["error", { "allowEmptyCatch": true }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': ['error', { allowIndirect: true }],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'warn',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-property-newline': 'error',
    'padded-blocks': 'off',
    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'template-curly-spacing': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'wrap-iife': 'error',
    'yield-star-spacing': 'error',
    yoda: 'error',
    semi: ['error', 'always'],
    'prettier/prettier': 'off',
    {{#equals type 'vue'}}
    'vue/multi-word-component-names': 'warn',
    'vue/no-mutating-props': 'error'
    {{/equals}}
    {{#equals lang 'vue'}}
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    {{/equals}}
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.js'],
      env: {
        jest: true
      },
      rules: {
        'node/no-extraneous-require': 'off'
      }
    }
  ]
})
