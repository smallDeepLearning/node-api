const path = require('path')

// path.join([...paths])
// 使用平台特定的分隔符把全部给定的 path 片段连接到一起，并返回规范化生成的路径

let pathFile = path.join('/foo', 'bar', 'baz/asdf', '/quux', '..')
console.log(pathFile)
