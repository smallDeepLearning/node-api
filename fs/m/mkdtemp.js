const fs = require('fs')
const { sep } = require('path')
const dirPath = __dirname + '/txt'

// 创建临时目录
// fs.mkdtemp(prefix, options, callback)

/**
* 生成六位随机字符附加到要求的prefix后面--临时目录
* 如果要在目录里创建临时目录，则prefix必须在结尾加上指定平台的路径分隔符（require('path').sep）
*/

fs.mkdtemp(`${dirPath}${sep}`, { encoding: 'utf8' }, (err, folder) => {
	if (err) throw err
	console.log('folder', folder)
})
