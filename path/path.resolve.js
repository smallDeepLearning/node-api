const path = require('path')

// path.resolve([...paths])
// 会把一个路径或路径片段的序列解析为一个绝对路径

console.log(path.resolve('/foo/bar', './baz'))
console.log(path.resolve('/foo/bar', 'tmp/file/'))
console.log(path.resolve('/foo/bar', '/tmp/file/'))
console.log(path.resolve('/foo/bar', './tmp/file/'))
console.log(path.resolve('/foo/bar', '../tmp/file/'))
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
