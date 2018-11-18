const fs = require('fs')
const path = require('path')

var pathFile = path.resolve('txt/file.txt')

fs.readlink(pathFile, { encoding: 'utf8' }, (err, data) => {
	if (err) throw err
	console.log('fd', data)
})
