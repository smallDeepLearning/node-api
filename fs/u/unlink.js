const fs = require('fs')

// fs.unlink(path, callback)

/*
* 异步地移除一个文件或符号, 完成回调只有一个可能的异常参数
*/

fs.unlink(__dirname + '/txt/file.txt', (err) => {
	if (err) throw err
	console.log('文件已删除!')
})
