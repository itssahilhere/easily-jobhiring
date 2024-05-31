import nodemailer from 'nodemailer'
// Create a transporter object using SMTP
export const mail=(email)=>{
    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
    user: 'agarwalsahil123420@gmail.com',
    pass: 'hjly aqxa htzw tueg',
    },
    });
    const mailOptions = {
    from: 'agarwalsahil123420@gmail.com',
    to: email,
    subject: 'confirmation mail',
    text: 'This is a confirmation email sent from easily for your successful resume submission!.',
    };
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.error('Error occurred:', error);
    } else {
    console.log('Email sent:', info.response);
    }
    });
}
// Define the email configuration
// Send the email
