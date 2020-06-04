var fs = require('fs');

fs.writeFile('file5.txt', 'writing to the file named file5.txt', function(err)
{
	if(err)
		throw err; 
	console.log('Written some content in the file5.txt');
});