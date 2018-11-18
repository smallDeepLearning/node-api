const fs = require('fs')

// 异步创建目录
// fs.mkdirSync(path, options)

/**
* path: 完整路径
* options: 文件模式
* recursive: 属性指定是否创建父目录
*/

fs.mkdirSync(__dirname + '/txt/hello', {recursive: false, mode: '0o777'})
