const path = require('path')
// path 模块提供了一些工具函数， 用于处理文件与目录的路径

/**
* path模块的默认操作会根据Node.js应用程序运行的操作系统的不同而变化
*/

// 在POSIX
console.log('[POSIX basename]', path.basename('C:\\temp\\myfile.html'))

//在windows
console.log('[Windows basename]', path.basename('C:\\temp\\myfile.html'))

/**
* 要想在任何操作系统上处理 Windows 文件路径时获得一致的结果，可以使用 path.win32
*/

// 在POSIX
console.log('[POSIX win32 basename]', path.win32.basename('C:\\temp\\myfile.html'))

// 在windows
console.log('[Windows win32 basename]', path.win32.basename('C:\\temp\\myfile.html'))

/**
* 要想在任何操作系统上处理 POSIX 文件路径时获得一致的结果，可以使用 path.posix
*/

// 在POSIX
console.log('[POSIX win32 basename]', path.posix.basename('C:\\temp\\myfile.html'))

// 在windows
console.log('[Windows win32 basename]', path.posix.basename('C:\\temp\\myfile.html'))
