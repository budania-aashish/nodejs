var fs = require('fs'); 

fs.rename('file7.txt', 'file8.txt', function(err){
	if(err)
	{
		throw err;
	}
	console.log('The file was renamed from file7.txt tp file8.txt');
})