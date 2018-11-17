const fs = require('fs')

// 读取目录内容 -- 异步
// fs.readdir(path, options, callback)

/**
* path: 完整文件目录路径
* options: 用于传入回调的文件名
* callback: 回调函数
*/

fs.readdir(__dirname + '/txt', { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err
  console.log('files', files.isBlockDevice())
})
