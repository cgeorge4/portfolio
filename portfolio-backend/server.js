const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

//Email Route
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({error: 'All fields are required.'});
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: '"Portfolio Contact" <${process.env.EMAIL_USER}',
            to: process.env.RECEIVER_EMAIL,
            subject: 'New Contact Message',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}')
});