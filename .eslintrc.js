module.exports = {
  "extends": [
    "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:react/jsx-runtime"
    "react-app",
  ],
  "env":{
    "node":true,//启用node中全局变量
    "browser":true,//启用浏览器中全局变量
    "es2021": true,
  },
  "overrides": [],
  "parserOptions": {
      "ecmaVersion": 6,//es6
      "sourceType": "module",//es module
      babelOptions:{
        presets:[
          ["babel-preset-react-app",false],
          "babel-preset-react-app/prod"
        ]
      }
  },
  "rules":{
    "no-var":1,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "no-unused-vars":1,
    "no-useless-concat":0
  }
}