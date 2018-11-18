const fs = require('fs')

// fs.Dirent 类
// 当调用fs.readdir() 或 fs.readdirSync() 且withFileType选项设为true时
// 返回的数组填充时fs.Dirent对象 -- 文件目录的结构体

fs.readdir(__dirname + '/txt', { encoding: 'utf8', withFileTypes: true }, (err, dirent) => {
  if (err) throw err
  console.log('对象是否作为一个块设备', dirent.isBlockDevice && dirent.isBlockDevice())
  console.log('对象是否作为一个文字设备', dirent.isCharacterDevice && dirent.isCharacterDevice())
  console.log('对象是否作为一个文件系统目录', dirent.isDirectory && dirent.isBlockDevice())
  console.log('对象是否作为一个先进先出管道', dirent.isFIFO && dirent.isFIFO())
  console.log('对象是否作为一个socket', dirent.isSocket && dirent.isSocket())
  console.log('对象是否作为一个符号链接', dirent.isSymbolicLink && dirent.isSymbolicLink())
  console.log('对象指向的文件名', dirent.name)
})
