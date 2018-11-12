const fs = require('fs')

fs.writeFile(
  __dirname + '/txt/word.txt',
  'Node.js中文网',
  {
    encoding: 'utf8',
    mode: '0o666',
    flag: 'w'
  },
  (err) => {
    if (err) throw err
    console.log('文件保存！')
  }
)

/*
* 异步地写入文件，如果文件已经存在，则覆盖文件。
* 任何指定的文件描述符必须支持写入
*/