var fs = require('fs');

fs.appendFile('file4.txt', 'If this data is written to file4.txt that means\
	content is appended', function(err){
			if (err)
				throw err;
			console.log('Data appended to file4.txt');
	});