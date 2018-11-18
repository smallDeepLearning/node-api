const fs = require('fs')

// 检测文件存在与否 -- 同步
// fs.accessSync(path[, mode])

/**
* path -- 文件路径
* data -- 数据
* options -- 文件属性
* callback -- 回调函数
*/

fs.appendFile(
  __dirname + '/txt/file.txt',
  '追加的数据',
  {
    encoding: 'utf8',
    mode: 0o666,
    flag: 'a'
  },
  (err) => {
  if (err) throw err
  console.log('数据已追加到文件')
})