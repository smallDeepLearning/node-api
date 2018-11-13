const fs = require('fs')
const fileBuffer = Buffer.alloc(10)

fs.watchFile(__dirname + '/txt/file.txt', { persistent: true, interval: 5007 }, (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`)
  console.log(`the previous mtime was: ${prev.mtime}`)
})

/*
* 监视fileName的变化, 回调listener会在每次访问文件时被调用
  filename 文件名
  {
    persistent: 布尔值, 表明当文件正在被监事时，进程是否应该继续运行
    interval: 表示目标应该每隔多少毫秒被轮询  
  }
  () => {
    current: 当前的状态对象,
    previous: 以前的状态对象
  }
* 当一个fs.watchFile的运行结果是一个ENOENT错误时, 它会调用监听器一次，并将所有字段置为零
* 文件在那之后创建的，则监听器会被再次调用，且标上最新的状态对象
* 当fs.watchFile()所监听的文件消失并重新出现时，第二个回调函数返回的结果将与第一个回调函数返回的结果相同
  {
    该文件被删除后，又被创建
    文件重命名两次-第二次重命名与其原名称相同
  }
*/
