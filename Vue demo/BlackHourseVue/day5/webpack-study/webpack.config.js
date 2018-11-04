var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/main.js'), // 项目入口文件 
    output: { // 配置输出选项 
        path: path.join(__dirname, './dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ],
    module: { // 用来配置第三方loader模块的 
        rules: [ // 文件的匹配规则 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
            //处理css文件的规则 
        ]
    }



}