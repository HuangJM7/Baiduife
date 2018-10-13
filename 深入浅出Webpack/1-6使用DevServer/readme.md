报错： Use Chunks.groupsIterable and filter by instanceof EntryPoint
错误出现原因：
extract-text-webpack-plugin还不能支持webpack4.0.0以上的版本。
解决
npm install --save-dev mini-css-extract-plugin


npm init命令
用来初始化一个简单的 package.json 文件


安装 Webpack 到本项目
# 安装最新稳定版
npm i -D webpack

# 安装指定版本
npm i -D webpack@<version>

# 安装最新体验版本
npm i -D webpack@beta

npm i -D style-loader css-loader

安装 DevServer：
npm i -D webpack-dev-server

启动DevServer 
./node_modules/.bin/webpack-dev-server(网上有的说直接webpack-dev-server那是错的)
windows下运行的正确命令：
.\node_modules\.bin\webpack-dev-server
报错 Cannot find module 'webpack'
npm install webpack
报错Cannot find module 'webpack-cli/bin/config-yargs'
npm i -D webpack-cli @webpack-cli/utils

webpack-dev-server' 不是内部或外部命令，也不是可运行的程序 或批处理文件。处理方法
将项目里的“node_modules”文件夹删除，然后在cmd中cd到项目目录，依次运行命令：npm install和npm run build，最后运行npm run dev后项目成功运行。

通过 webpack --watch 来开启监听模式