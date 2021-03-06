module.exports = {
  extends: ['eslint-config-alloy', 'eslint-config-alloy/react'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // React: false,
    // ReactDOM: false
  },
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  rules: {
    // 一个缩进必须用两个空格替代
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    semi: ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // jsx 的 children 缩进必须为两个空格
    'react/jsx-indent': ['error', 2],
    // jsx 的 props 缩进必须为两个空格
    'react/jsx-indent-props': ['error', 2],
    'function-paren-newline': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
