var http = require('http');
var url = require('url');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	var query_params = req.url; 
	var query_params_splitted = url.parse(query_params, true).query; 
	var txt = query_params_splitted.year + " and " + query_params_splitted.month;  
	res.end(txt);
}).listen(8080); 