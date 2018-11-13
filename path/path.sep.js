const path = require('path')

// path.sep -- 字符串
// 提供了平台特定的路径片段分隔符

let pathFile = __dirname + '/txt/file.txt'
console.log(path.sep, pathFile.split(path.sep))
