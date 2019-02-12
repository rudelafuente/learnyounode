var fs = require('fs')
var newLines = 0
var fileName = process.argv[2]

fs.readFile(fileName, function(error,data){
   
newLines =data.toString().split('\n').length

console.log(newLines - 1)
})
