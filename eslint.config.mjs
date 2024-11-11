import v from '@xh5/eslint-config'

export default [
  {
    ignores: ['dist', 'node_modules', 'docs', '*.d.ts'],
  },
  ...v,
  {
    rules: {
      'prefer-object-spread': 'off',
      'valid-typeof': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
