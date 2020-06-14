var http = require('http');
var uc = require('upper-case');
var lc= require('lower-case');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(uc.upperCase("Aashish Budania"));
	res.write('<br>')
	res.write(lc.lowerCase("Lowering The LETTERS"))
	res.end();
}).listen(8080);