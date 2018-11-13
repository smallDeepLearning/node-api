const path = require('path')

// path.isAbsolute(path)
// 返回布尔值, 判定 path 是否为一个绝对路径

console.log(path.isAbsolute('//server'))
console.log(path.isAbsolute('\\\\server'))
console.log(path.isAbsolute('C:/foo/..'))
console.log(path.isAbsolute('C:\\foo\\..'))
console.log(path.isAbsolute('bar\\baz'))
console.log(path.isAbsolute('bar/baz'))
console.log(path.isAbsolute('.'))
