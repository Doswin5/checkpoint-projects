const nodemailer = require("nodemailer");

async function sendEmail() {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com", // Replace with your email
            pass: "your-email-password", // Replace with your email password
        },
    });

    const mailOptions = {
        from: "your-email@gmail.com",
        to: "your-email@gmail.com", // Replace with your email
        subject: "Hello from Node.js",
        text: "This is a test email sent using Node.js and Nodemailer.",
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

sendEmail();
