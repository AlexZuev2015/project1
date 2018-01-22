var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fedia@gmail.com',
    pass: 'WwWfedia1533!'
  }
});

var mailOptions = {
  from: 'fedia@gmail.com',
  to: 'fedia@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});