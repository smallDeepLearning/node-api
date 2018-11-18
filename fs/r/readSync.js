const fs = require('fs')
const buf = Buffer.alloc(10)

// 读取文件 -- 同步
// fs.read(fs, buffer, offset, length, position, callback)

/**
* fd: 指定文件标识
* buffer: 作为buffer数据，将被写入
* offset: 开始写入的偏移量
* length: 读取字节数
* position: 文件中开始读取的位置
* 返回 <number>
*/

fs.open(__dirname + '/txt/file.txt', 'r', '0o666', (err, fd) => {
	if (err) throw err
	var info = fs.readSync(fd, buf, 0, 10, 0)
	console.log('info', info)
})
