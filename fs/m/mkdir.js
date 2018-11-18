const fs = require('fs')

// 异步创建目录
// fs.mkdir(path, options, callback)

/**
* path: 完整路径
* options: 文件模式
* recursive: 属性指定是否创建父目录
*/

fs.mkdir(__dirname + '/txt/hello', {recursive: true, mode: '0o777'}, (err) => {
	if (err) throw err
	console.log('目录创建成功!')
})
