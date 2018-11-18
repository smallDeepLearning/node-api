const fs = require('fs')

// 读取文件内容 -- 异步
// fs.readFile(path, options, callback)

/**
* path: 文件名或文件描述
* options: 文件描述属性
* callback: () => {} 回调函数
*/

fs.readFile(__dirname + '/txt/file.txt', { encoding: 'utf8', flag: 'r' }, (err, data) => {
	if (err) throw err
	console.log('fd', data)
})