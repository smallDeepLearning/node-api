const fs = require('fs')

// 打开文件 -- 异步
// fs.open(path, flags, mode, callback)

/**
* path: 完整文件路径和文件
* flags: 文件系统标志
* mode: 文件模式
* callback: 回调函数
*/

fs.open(__dirname + '/txt/file.txt', 'r', '0o666', (err, fd) => {
	if (err) throw err
	console.log('打开文件!', fd)
})
