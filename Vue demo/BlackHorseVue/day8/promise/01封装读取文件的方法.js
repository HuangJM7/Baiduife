//封装一个方法，传入路径参数，读取文件并返回
const fs = require('fs')
const path = require('path')

//1普通读取文件的方法
/* fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
    if(err) throw err
    console.log(dataStr)
}) */
//2封装fs方法
function getFileByPath(fpath) {
    //异步读文件方法 ，主程序不执行，放到队列中，子程序执行，
    // 主程序跳到fs方法后，无return，返回undefined
    //return拿不到fs方法的返回值，应使用回调函数
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) throw err
        // console.log(dataStr)
        return dataStr
    })
}
// var result = getFileByPath(path.join(__dirname,'./files/1.txt'))
// console.log(result);

//3定义回调函数,传入文件内容
function getFileByPath1(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) throw err
        callback(dataStr)
    })

}
// 调用回调函数,获取文件内容
// getFileByPath1(path.join(__dirname,'./files/1.txt'),(dataStr)=>{
//     console.log(dataStr)
// })

// 4异常时方法终止,没有返回值,应使用回调函数处理异常
//规定callback中有两个参数,一为失败结果,二为成功结果
//失败时,返回err undefined,成功返回null datasStr
function getFileByPath2(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        //如果报错,后一个回调函数没有必要执行,使用return退出
        // if (err) callback(err)
        if (err) return callback(err) //第二个位置没有定义默认undefined
        callback(null, dataStr)
    })

}
// 调用回调函数,获取错误及文件内容
// getFileByPath2(path.join(__dirname,'./files/1.txt'),(err,dataStr)=>{
//     if(err) return console.log(err.message);
//     console.log(dataStr);
// })


//5使用两个回调函数分别对应失败和成功
function getFileByPath3(fpath, sucCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) return errCb(err)
        sucCb(dataStr)
    })

}
// 调用回调函数, 获取错误及文件内容
//读取单个文件时
// getFileByPath3(path.join(__dirname, './files/1.txt'), (data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err.message);
// })


//读取多个文件三种方式
//并排读取速度最快,不能保证顺序
//异步回调嵌套按顺序读取多个文件
//使用es6中promise解决回调地狱
//promise的本质就是为了解决回调地狱,不能减少代码量
getFileByPath3(path.join(__dirname, './files/1.txt'), (data) => {
    console.log(data);
    getFileByPath3(path.join(__dirname, './files/2.txt'), (data) => {
        console.log(data);
        getFileByPath3(path.join(__dirname, './files/3.txt'), (data) => {
            console.log(data);
        })
    })
})

