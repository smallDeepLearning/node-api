// 同步写入
const fs = require('fs')
const fileString = 'Hello World!'

fs.open(__dirname + '/txt/file.txt', 'wx', (err, fdInteger) => {
  fs.writeSync(fdInteger, fileString, 0, '0o666')
})

/*
* 文件写入, fs.writeSync
* fd: 指定文件(整数)
* buffer: 文件内容(缓冲)
* offset: 决定buffer中被写入的部分
* length: 写入文件的字节数
* position: 文件开始写入位置的偏移量
*/

const fs = require('fs')
const fileBuffer = Buffer.alloc(10)

fs.open(__dirname + '/txt/file.txt', 'wx', (err, fdInteger) => {
  fs.writeSync(fdInteger, fileBuffer, 0, 10, 0)
})

/*
* 文件写入, fs.writeSync
* fd: 指定文件(整数)
* buffer: 文件内容(缓冲)
* offset: 决定buffer中被写入的部分
* length: 写入文件的字节数
* position: 文件开始写入位置的偏移量
*/