var http = require('http');
var dt = require('./myfirstmodule');

http.createServer( function (req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write("The date and time current are"+ dt.myDateTime());
	res.end();
}).listen(8080);