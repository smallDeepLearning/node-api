// 异步写入
const fs = require('fs')
const fileBuffer = Buffer.alloc(10)

fs.open(__dirname + '/txt/new.txt','wx',function(err, fileInterger){
  if (err) throw err
  fs.write(fileInterger, fileBuffer, 0, 10, 0, (err, bytesWritten, buffer) => {
    if (err) throw err
    console.log('bytesWritten', bytesWritten)
    console.log('buffer', buffer)
  })
})

/*
* 文件写入, fs.write
* fd: 指定文件(整数)
* buffer: 文件内容(缓冲)
* offset: 决定buffer中被写入的部分
* length: 写入文件的字节数
* position: 文件开始写入位置的偏移量
* callback: 回调函数
* callback: (err, bytesWritten, buffer) => {
    err: 出错
    bytesWritten: 从buffer写入了多少字节
    buffer: 缓存
  }
*/

const fs = require('fs')
const fileString = 'Hello World!'

fs.open(__dirname + '/txt/new.txt', 'wx', (err, fdInteger) => {
  if (err) throw err
  fs.write(fdInteger, fileString, 0, '0o666', (err, written, string) => {
    if (err) throw err
    console.log('written', written)
    console.log('string', string)
  })
})

/*
* 文件写入, fs.write
* fd: 指定文件(整数)
* string: 文件内容
* position: 文件开始写入数据的位置的偏移量
* encoding: 字符串编码
* callback: (err, written, string) => {
    err: 出错
    written: 传入的字符串被写入多少字节
    string: 字符串
  }
*/