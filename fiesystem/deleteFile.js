var fs = require('fs');

fs.unlink('file6.txt', function(err){
	if(err)
	{
		throw err; 
	}
	console.log('File named as file6.txt is deleted');
});
