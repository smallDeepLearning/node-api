const fs = require('fs')
const fileBuffer = Buffer.alloc(10)

fs.watch(__dirname + '/txt/file.txt', { persistent: true, recursive: false, encoding: 'utf8' }, (eventType, filename) => {
  console.log(`事件类型是: ${eventType}`)
  if (filename) {
    console.log(`提供的文件名: ${filename}`)
  } else {
    console.log(`为提供文件名`)
  }
})

/*
* fs.watch -- 异步监视
* filename: 文件或文件目录
* options: {
    persistent: 文件正在被监视，进程是否应该继续运行
    recursive: 指明是否将全部子目录应该被监听，还是当前子目录
    encoding: 指定用于传给监听器的文件名的字符编码
  }
  listener: {
    eventType: 更改文件的事件类型--'rename'或'change'
    filename: 触发事件的文件名称
  }
* 注意:
    1.监视filename的变化，filename可以是一个文件或一个目录--返回一个fs.FSWatcher
      监听器回调是绑定在由fs.FSWatcher触发的'change'事件上，但它跟eventType的'change'值不是同一个东西
    2.fs.watch API不是100%跨平台一致的，且某些情况下不可使用
      递归选项只支持macOS和windows
      其他底层功能因某些原因不可用，fs.watch也无法正常工作；如: 使用虚拟软件Vagrant、Docker等时，在网络文件系统（NFS、SMB）或主文件系统中监视文件和目录是不可靠的 
      但你仍可以使用基于stat轮询的fs.watchFile()--这种方法更慢，可靠性也更低
    3.索引节点
      在linux或macOS系统中，fs.watch()解析路径到一个索引节点，并监视改索引节点。
      如果监视的路径被删除和创建，则它会被分配到一个新的索引节点，监视器会发出一个删除事件，但会继续监视原始的索引节点，而新建的索引节点的事件不会被触发。
      AIX文件在文件的生命周期中保留相同的索引节点，在AIX上保存并关闭监视的文件将触发两个通知--添加新内容、拦截
*/
