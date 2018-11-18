const fs = require('fs')

// 读取文件内容 -- 同步
// fs.readFileSync(path, options)

/**
* path: 文件名或文件描述
* options: 文件描述属性
* 返回
*/

var fd = fs.readFileSync(__dirname + '/txt/file.txt', { encoding: 'utf8', flag: 'r' })
console.log('fd', fd)