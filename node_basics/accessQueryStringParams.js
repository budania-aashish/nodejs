var http = require('http'); 

http.createServer( function (req, res){
	res.writeHead(200, {'content-type':'text/html'});
	res.write('URL from the req as object is : '+ req.url);
	res.end()
}).listen(8080);
