const fs = require('fs')
const buf = Buffer.alloc(10)

// 读取文件 -- 异步
// fs.read(fs, buffer, offset, length, position, callback)

/**
* fd: 指定文件标识
* buffer: 作为buffer数据，将被写入
* offset: 开始写入的偏移量
* length: 读取字节数
* position: 文件中开始读取的位置
* callback: () => {}
*/

fs.open(__dirname + '/txt/file.txt', 'r', '0o666', (err, fd) => {
	if (err) throw err
	fs.read(fd, buf, 0, 10, 0, (err, bytesRead, buffer) => {
		if (err) throw err
		console.log('[bytesRead]', bytesRead)
		console.log('[buffer]', buffer)
	})
})
