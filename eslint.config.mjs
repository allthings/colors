import allthingsConfig from '@allthings/eslint-config'

export default [
  ...allthingsConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off"
    },
  },
]
