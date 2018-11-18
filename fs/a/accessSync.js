const fs = require('fs')

// 检测文件存在与否 -- 同步
// fs.accessSync(path[, mode])

/**
* path -- 文件路径
* mode -- 文件可访问性的常量
*/

const file = 'package.json'

try {
  fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
  console.log('可读可写');
} catch (err) {
  console.error('不可访问！');
}
