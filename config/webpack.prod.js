const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//提取css
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');//压缩js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");//压缩css

console.log('dwwdwwwwww',path.resolve(__dirname, '../src/common/'))
module.exports= {
  mode:'production',
  devtool:'source-map',
  entry:'./src/index.jsx',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].[contenthash:10].js',
    chunkFilename:'[name].chunk.js',
    assetModuleFilename:'assets/[name][ext]',
    clean:true
  },
  resolve: {
    extensions: ['.jsx', '.js','...'],
    alias: {
      '@common': path.resolve(__dirname, '../src/common/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
    },
  },
  module:{
    rules:[
      {
        oneOf: [
          {
            test:/\.less$/,
            use:[
              MiniCssExtractPlugin.loader,//提取css成单独文件
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: "local",
                    exportGlobals: true,
                    localIdentName: "[name]__[local]--[hash:base64:5]",
                    localIdentContext: path.resolve(__dirname, "src"),
                  }
                },
              },
              'postcss-loader',//css兼容
              'less-loader'
            ],
          },{
            test:/\.(png|jpe?g|gif|webp|svg)$/i,
            type:'asset/resource',
            parser:{
              dataUrlCondition: {
                //小于10kb的转base64，优点：减少请求数量，缺点：体积会更大
                maxSize: 10 * 1024 // 10kb
              }
            }
          },{
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use:[
              {
                loader:'babel-loader',
                options:{
                  cacheDirectory:true,//开启babel缓存
                  cacheCompression:false,//关闭缓存文件压缩，压缩文件需要时间，所以关闭即可。
                  // plugins: [require.resolve('react-refresh/babel')].filter(Boolean),////热更新
                }
              }
            ]
          }
        ]
      }
    ]
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',//提取运行时代码到一个独立文件，
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    },
    minimizer: [
      new TerserPlugin({extractComments:false}),
      new CssMinimizerPlugin()
    ],
  },
  plugins:[
    new ESLintPlugin({
      context:path.resolve(__dirname,'../src'),//绝对路径，配置需要检查的文件
      exclude:"node_modules",//排除node_modules下的文件，
      cache:true,//开启缓存
      cacheLocation:path.resolve(__dirname,'../node_modules/eslintcache')//配置缓存文件地址，同样配到node_modules下面
    }),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../src/index.html'),//绝对路径
      title:'纯手工打造一款react应用'
    }),
    new MiniCssExtractPlugin({filename:'[name].[contenthash:8].css'}),
  ],
  devServer:{
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://192.168.1.2:8000/api/drf_stock/',
    },
  }
}