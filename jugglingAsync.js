    var http = require('http');
	var bl = require('bl');
	var results = []
	var count = 0
	var urlsArray = process.argv.slice(2);
	var noOfUrls = urlsArray.length;

	function printResults () {
		for (var i = 0; i < noOfUrls; i++) {
				console.log(results[i])
		}
	}
    function httpGet (index) {
		http.get(urlsArray[index], function (response) {
			response.pipe(bl(function (err, data) {
					if (err) 						
                        return console.error(err)
					
					results[index] = String(data)
					count++
					if (count === noOfUrls) 
						printResults()
					
			}))
		})
	}
	for (var i = 0; i < noOfUrls; i++) {
		httpGet(i)
	}
