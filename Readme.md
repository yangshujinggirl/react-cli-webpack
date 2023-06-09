### 一：JSX 解析以及新语法兼容：babel-loader 之 preset

1）[babel-preset-react-app](https://github.com/facebook/create-react-app/tree/main/packages/babel-preset-react-app)，是 creat-react-app 官方用来解析 jsx 语法的预设，不仅可以用来解析 jsx 语法，还可对 js 新语法进行兼容，无需再配置 corejs，配置简单推荐使用，

1.1）问题 1，启动时，会报 babel-preset-react-app 未指定"NODE_ENV"或"BABEL_ENV"的环境变量错误

原因：babel-preset-react-app 的使用需要提定运行环境变量，不是我们项目中 webpack 里配置的 mode 环境变量，可以借助插件来解决 cross-env

```
npm install cross-env --save-dev

dev:cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js
```

2）`@babel/preset-react` 只能解析 jsx 语法，对 js 的兼容需要在 preset 中额外配置 corejs（需另外 install）

### 二：CSS 语法兼容 postcss

`postcss, postcss-loader,postcss-preset-env`,
postcss-preset-env 预设，可自动识别浏览器版本并进行兼容样式添加，无需再进行其他配置

```
npm install postcss postcss-loader postcss-preset-env -D
```

postcss.config.JS

```
module.exports = {
  plugins: ['postcss-preset-env']
}
```

## Eslint

1)`eslint-plugin-react`

2)[eslint-config-react-app](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app)(creat-react-app 官方使用规范)
以上二选一，结合 webpack 插件 eslint-webpack-plugin 在 webpack 中一起使用

## CSS MODULE 开启
