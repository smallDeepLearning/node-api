const fs = require('fs')

//停止文件监视
//fs.unwatchFile(filename, [listener]);

/**
* filename: 完整路径及文件名；
* listener: 如果指定了 listener，只移除特定的监听器，否则移除全部监听器
*/

fs.unwatchFile(__dirname + '/txt/file.txt', () => {
  console.log('结束监视！')
})
