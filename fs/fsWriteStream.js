const fs = require('fs')

var fsWriteStream = fs.createWriteStream(
  __dirname + '/txt/file.txt',
  {
    flags: 'r',
    encoding: null,
    fd: null,
    mode: 0o666,
    autoClose: true,
    start: 0,
    end: Infinity,
    highWaterMark: 64 * 1024
  }
)

// fd作为fs.ReadStream使用的整数型文件描述符

console.log('文件流已写入的字节数', fsWriteStream.bytesWritten)

console.log('文件流正在写入的文件的路径', fsWriteStream.path)

fsWriteStream.on('close', () => {
  console.log('当fs.fsWriteStream的底层的文件描述符被关闭时触发')
})

fsWriteStream.on('open', (fd) => {
  console.log('当fs.ReadStream的文件描述符被打开时触发', fd)
})

fsWriteStream.on('ready', () => {
  console.log('当fs.ReadStream已准备被使用时触发')
})
