const nodemailer = require("nodemailer");

module.exports = async function sendEmail(options) {
    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
        } 
    });

    const mailOptions = {
        from: 'christosglx@hotmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions);
}