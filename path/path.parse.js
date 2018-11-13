const path = require('path')

// path.parse()
// 返回一个对象，对象的属性表示 path 的元素

let pathFile = path.parse(__dirname + '/txt/file.txt')
console.log('pathFile', pathFile)
