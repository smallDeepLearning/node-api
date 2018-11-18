const fs = require('fs')

// fs.unlinkSync(path, callback) -- 同步

/*
* 移除一个文件或符号, 完成回调只有一个可能的异常参数
*/

var fd = fs.unlinkSync(__dirname + '/txt/file.txt')
console.log('fd', fd)
