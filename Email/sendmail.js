var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashishbudania98@gmail.com',
    pass: 'Mail@!@#'
  }
});

var mailOptions = {
	from: 'ashishbudania98@gmail.com', 
	to: 'budania.aashish@gmail.com', 
	cc: 'aashish.b@karza.in',
	bcc: 'clearhitwithme@gmail.com',
	subject: 'sending mail using Node.js',
	text : 'seninding mail from node js is easy, use nodemailer'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
