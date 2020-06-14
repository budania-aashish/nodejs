var fs = require('fs');

//creating a new file using appnendFile method

fs.appendFile('file1.txt', 'Hello content\n', function (err) {
		if (err) {throw err};
		console.log('Saved into file1.txt');
});