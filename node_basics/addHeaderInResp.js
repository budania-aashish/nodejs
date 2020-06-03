var http = require('http');

http.createServer(function (req, res){
	res.writeHead(200, {'content-type':'text/htmljso'});
	res.write('Name : Aashish Budania');
	res.end()
}).listen(8080);