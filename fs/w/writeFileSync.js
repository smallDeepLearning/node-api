const fs = require('fs')

fs.writeFileSync(
  __dirname + '/txt/hello.txt',
  'Hello World!',
  {
    encoding: 'utf8',
    mode: '0o666',
    flag: 'w'
  }
)

/*
* 同步地写入文件，如果文件已经存在，则覆盖文件。
* 任何指定的文件描述符必须支持写入
*/
