const path = require('path')

// path.format(pathObject)
// 返回一个路径字符串
/**
* pathObject = {
	dir <string>
	root <string>
	base <string>
	name <string>
	ext <string>	
  }
* 当 pathObject 提供的属性有组合时，有些属性的优先级比其他的高：
* 如果提供了 pathObject.dir，则 pathObject.root 会被忽略
* 如果提供了 pathObject.base 存在，则 pathObject.ext 和 pathObject.name 会被忽略
*/
var filePath = path.format({
	root: __dirname + '/txt/',
	base: 'file.txt'
})
