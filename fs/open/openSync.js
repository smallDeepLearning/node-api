const fs = require('fs')

// 打开文件 -- 同步
// fs.open(path, flags, mode)

/**
* path: 完整文件路径和文件
* flags: 文件系统标志
* mode: 文件模式
* 返回: 文件描述符的整数
*/

var fd = fs.openSync(__dirname + '/txt/file.txt', 'r', '0o666')
console.log('打开文件!', fd)
