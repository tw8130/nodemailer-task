const nodemailer = require('nodemailer');
const fs = require('fs');
const email_config = require('../config/emailConfig');


// Read the weekly report file
fs.readFile('../report/weekly_report.docx', (err, data) => {
    if (err) {
        console.error('Failed to read the weekly report file:', err);
        return;
    }

    // Prepare the email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'jonathan.mwaniki@thejitu.com',
        subject: 'Weekly Report',
        html: '<p>Hello Jonathan,</p><p>Please find attached the weekly report.</p>',
        attachments: [{
            filename: 'weekly_report.docx',
            content: data
        }]
    };
    const transporter = nodemailer.createTransport(email_config)

    // Send the email
    async function sendMail() {
        try {
            let results = await transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Failed to send the email:', err);
                } else {
                    console.log('Email sent successfully!');
                }
            });
            console.log(results);

        } catch (error) {
            console.log(error)
        }
    }
    sendMail();

});