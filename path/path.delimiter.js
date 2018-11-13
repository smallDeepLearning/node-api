const path = require('path')

// path.delimiter -- 字符串
// 提供平台特定的路径分隔符
console.log(path.delimiter)
console.log(process.env.PATH.split(path.delimiter))
