var total = 0
var args =  process.argv.slice(2)

for(var i = 0; i< args.length; i++){
    total += Number(args[i])
}

console.log(total)
