const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const packageJSON = require("./package.json");

const {VUE_APP_BASE_MYROUTER, VUE_APP_BASE_MYROUTERPRO, isPublish, VUE_APP_BASE_URL, NODE_ENV, VUE_APP_MY_NEWEST } = process.env;
// VUE_APP_MY_NEWEST是不是打包去最新版文件地址的，不然是要加版本号的地址
const publicPath = VUE_APP_MY_NEWEST?(VUE_APP_BASE_MYROUTERPRO+'/'):(VUE_APP_BASE_MYROUTER+'/'+packageJSON.version+'/');
module.exports = defineConfig({
  publicPath:isPublish?'./':publicPath, // 是不是打包插件
  outputDir:isPublish?'dist':(VUE_APP_MY_NEWEST?'elementPros':packageJSON.version),
  configureWebpack:{
    module: {
      rules: [
        {
          test: /\.js$/, // 正则表达式，匹配.js文件
          exclude: /node_modules/, // 排除node_modules目录
          use: {
            loader: 'babel-loader', // 使用Babel加载器
            options: {
              presets: ['@babel/preset-env'] // Babel预设，根据你的需求配置
            }
          }
        }
      ]
    },
    resolve:{
      alias:{
        '@packages':path.resolve(__dirname,'packages')
      }
    }
  },
  devServer:{
    proxy:{
      '/index/': {
        target: VUE_APP_BASE_URL, //跨越的对应服务器地址
        changeOrigin: NODE_ENV === 'development' ? true : false, //允许跨域
        secure: false,
        pathRewrite: {
            '^/index': ''
        }
      },
    }
  }
})
