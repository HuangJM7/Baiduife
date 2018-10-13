//通过CommonJS 规范导入CSS模块
require('./main.css')
// 在源码中指定用什么 Loader 去处理文件。 以加载 CSS 文件为例
// require('style-loader!css-loader?minimize!./main.css');
// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack');