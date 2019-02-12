var fs = require('fs')
var newLines = 0
var fileName = process.argv[2]

var buff = fs.readFileSync(fileName)

newLines = buff.toString().split('\n').length

console.log(newLines - 1)