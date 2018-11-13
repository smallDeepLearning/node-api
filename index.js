const fs = require('fs')

fs.watchFile(__dirname + '/txt/file.txt', { persistent: true, interval: 300 }, (curr, prev) => {
  console.log('监视文件！')
})

fs.unwatchFile(__dirname + '/txt/file.txt', () => {
  console.log('结束监视！')
})
