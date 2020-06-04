var fs = require('fs');

fs.open('file2.txt', 'w', function (err, file){
	if(err) throw err; 
	console.log('file2.txt saved!');
})