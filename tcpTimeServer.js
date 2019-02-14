var net = require('net')

var server = net.createServer(function (socket){
    var date = new Date()

    var year = String(date.getFullYear())
    var month = String(date.getMonth()+1)
    var days = String(date.getDate()) 
    var hours = String(date.getHours())
    var minutes = String(date.getMinutes())
    socket.end(year + '-' + month.padStart(2,'0') + '-' + days.padStart(2,'0') + ' ' + hours.padStart(2,'0') + ':' + minutes.padStart(2,'0') + '\n')
})
server.listen(Number(process.argv[2]))