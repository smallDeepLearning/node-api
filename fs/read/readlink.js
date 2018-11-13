const fs = require('fs')

fs.readlink(__dirname + '/txt/file.txt', { encoding: 'utf8' }, (err, data) => {
	if (err) throw err
	console.log('fd', data)
})