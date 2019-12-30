const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式:生产环境
  // mode:'production',

  // 入口
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  // 出口(打包生成js)
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块加载器
  module: {
    rules: [
      //写loader配置
      //  webpack本身只能打包js和json,想打包其他类型需要配置对应的loader(样式/图片等)
      // 处理ES6
      {
        test: /\.js$/,  // 用于匹配文件
        include:[path.resolve(__dirname,'src')], // 只针对那些处理
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  // 预设包:包含多个常用插件包的一个大包
          }
        }
      },
      // 处理CSS
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  // 小于8kb的进行base64编码
              name: 'static/img/[name].[hash.7].[ext]'  //相对于output.path
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // 打包html
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ],
  // 开发服务器配置
  devServer: {
    open: true,
    // quiet: true
  },
  // 配置开启source-map调试
  // 默认开发环境development 开启了source-map
  devtool: "cheap-module-eval-source-map"
}