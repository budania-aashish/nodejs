var http = require('http');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<form action = "fileUpload", method = "post" enctype="multipart/form-data">');
	res.write('<br>');
	res.write('<input type = "file" name="fileUpload"');
	res.write('<br>');
	res.write('<input type = "submit">');
	res.write('<br>');
	res.write("</form>");
	return res.end();
}).listen(8080);