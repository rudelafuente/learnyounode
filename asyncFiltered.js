
var myModule = require('./mymodule.js')

var dir = process.argv[2]

var filter = process.argv[3]


myModule(dir, filter, function(err, data) {
    if (err)
        return console.error(err)
    for(var i=0;i<data.length;i++){
        console.log(data[i])
    }
})

