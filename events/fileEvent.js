var fs = require('fs');
var rs = fs.createReadStream('./file.txt');
rs.on('open', function(){
	console.log('File is opened');
	console.log('The event was triggered');
});