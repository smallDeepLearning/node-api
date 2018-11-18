const fs = require('fs')

// 检测文件存在与否 -- 异步
// fs.access(path[, mode], callback)

/**
* path -- 文件路径
* mode -- 文件可访问性的常量
* callback -- 回调函数
*/

const file = 'package.json'

function accessFile () {
  fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? '不存在' : '存在'}`)
  })

  fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? '不可读' : '可读'}`)
  })

  fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? '不可写' : '可写'}`)
  })
}

// 扩展用法
/*
* 不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性
* 如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态
* 用户代码应该直接打开/读取/写入文件，当文件无法访问时再处理错误
*/

fs.open(__dirname + '/txt/file.txt', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('文件已存在')
      return
    }
    throw err
  }
  accessFile(fd)
})
