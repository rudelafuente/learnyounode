var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(response){
    response.pipe(bl(function(err, data) {
        if(err)
            console.error(err)
        console.log(data.length)
        console.log(String(data))
    }))
})