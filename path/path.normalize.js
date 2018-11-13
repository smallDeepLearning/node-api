const path = require('path')

// path.normalize(path)
// 会规范化给定的 path，并解析 '..' 和 '.' 片段

let pathFile = path.normalize(__dirname + '/baz/asdf/quux/..')
console.log(pathFile)
