require('dotenv').config()
    // Create a Nodemailer transporter using Outlook SMTP details
const email_config = {
    // service: 'gmail',
    host: 'smtp-mail.outlook.com',

    port: 587,

    secure: false,

    requireTLS: true,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASSWORD

    },
    // tls: {
    //     ciphers: 'SSLv3'
    // }

}

module.exports = email_config