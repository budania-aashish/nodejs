var fs = require('fs');

fs.writeFile('file3.txt', 'Content to write in file', 
	function(err){
		if(err){
			throw err; 
		}
		console.log('Saved file3.txt');
	});