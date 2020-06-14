var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
	service : 'gmail', 
	auth :{
		user : 'your email', 
		pass : 'your_password'
	}
});


var mailOptions = {
	from: 'your_mail', 
	to: 'to_mail_1, to_mail2', 
	cc: 'cc_mail',
	bcc: 'bcc_mail',
	subject: 'sending mail using Node.js',
	text : 'seninding mail from node js is easy, use nodemailer'
};


transporter.sendMail(mailOptions, function (err, info){
	if(err){
		throw err; 
	} else{
		console.log('Email sent : '+ info.response); 
	}
});