const fs = require('fs')

// 读取目录内容 -- 同步
// fs.readdirSync(path, options)

/**
* path: 完整文件目录路径
* options: 用于返回的文件名
* 返回
*/

var fd = fs.readdirSync(__dirname + '/txt', { encoding: 'utf8', withFileTypes: false })
console.log('fd', fd)
