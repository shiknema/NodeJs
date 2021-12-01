const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = 'Add Key Here'

sgMail.setApiKey(sendgridAPIKey);

const msg = {
  to: 'arnavgupta1306@gmail.com',
  from: 'shiknema@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
})
