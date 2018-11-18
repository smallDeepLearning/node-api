const fs = require('fs')

// fs.FSWatcher类
// 调用fs.watch() 会返回一个fs.FSWatcher对象
// 所有fs.FSWatcher对象都是EventEmitter的实例, 每当监视的文件被修改都会触发'change'事件

var fsWatcher = fs.watch(
  __dirname + '/txt/file.txt',
  { persistent: true, recursive: false, encoding: 'utf8' },
  (eventType, filename) => {
  console.log(`事件类型: ${eventType}`)
})

// 当文件改变时触发

fsWatcher.on('change', (eventType, filename) => {
  console.log('事件类型', eventType)
  console.log(filename + '-发生变化')
})

// 当文件出错时触发

fsWatcher.on('error', (eventType, filename) => {
  console.log('事件类型', eventType)
  console.log(filename + '-产生错误')
})

// 当文件关闭时触发

fsWatcher.on('close', (eventType, filename) => {
  console.log('事件类型', eventType)
  console.log(filename + '-监听关闭')
})

// watcher.close()停止监视文件的变化
setTimeout(() => {
  fsWatcher.close()
}, 5000)
