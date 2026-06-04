import js from '@eslint/js'
import globals from 'globals'

const recommendedRules = js.configs.recommended.rules

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'lbh/vendor/**',
      '**/*.d.ts',
      '**/*.tsx',
      '**/*.dev.js'
    ]
  },
  {
    files: ['lbh/**/*.js'],
    ignores: ['lbh/**/*.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...recommendedRules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['lbh/**/*.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      ...recommendedRules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
]
