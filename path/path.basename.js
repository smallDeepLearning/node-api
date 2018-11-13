const path = require('path')

// path.basename(path, ext)
// 返回一个path的最后部分, 没有尾部文件分隔符

/**
* path: 路径
* ext: 文件扩展名
* 返回: string
*/

console.log('[path basename]', path.basename('/foo/bar/baz/asdf/quux.html'))

console.log('[path basename]', path.basename('/foo/bar/baz/asdf/quux.html', '.html'))
