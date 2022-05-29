// .eslintrc.js
module.exports = {
  // 表示运行环境和全局变量
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 第1种情况
    'eslint:recommended',
    // 第2种情况，一般配置的时候可以省略 `eslint-config`
    // "standard",
    // 第3种情况，可以省略包名中的 `eslint-plugin`
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
