const fs = require('fs')

fs.readlinkSync(__dirname + '/txt/file.txt', { encoding: 'utf8' })