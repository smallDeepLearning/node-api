const path = require('path')

// path.relative()
// 返回从 from 到 to 的相对路径（基于当前工作目录）

let relativePath = path.relative(__dirname + '/txt/file.txt', __dirname + '/index.js')
console.log(relativePath)
