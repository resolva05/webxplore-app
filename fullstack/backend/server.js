const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email route for sending case study
app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com", // SES SMTP endpoint
      port: 465, // Port for SSL
      secure: true, // True for 465
      auth: {
        user: process.env.EMAIL_USER, // SES SMTP username
        pass: process.env.EMAIL_PASS, // SES SMTP password
      },
      tls: {
        rejectUnauthorized: false, // Allow unauthorized certificates
      },
    });

    const mailOptions = {
      from: "enquiry@resolvainsights.com", // Replace with your verified sender email
      to: email,
      subject: '🌟 Your Requested Case Study is Here! 🌟',
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 20px auto; border: 1px solid #e0e7ff; border-radius: 10px; padding: 20px; background-color: #f8faff;">
              <h2 style="color: #1e40af; text-align: center;">Hello,</h2>
              <p style="color: #1e3a8a;">Thank you for showing interest in our case study, <strong>*AI-Powered Chatbots for Real-Time Customer Support*</strong>. We're delighted to share how we solved complex challenges with innovative solutions.</p>
              
              <p style="color: #1e3a8a;">Here's a quick overview of what you'll find in the case study:</p>
              <ul style="list-style-type: disc; margin-left: 20px; color: #1e3a8a;">
                  <li>Challenges and Objectives</li>
                  <li>Innovative Solutions Implemented</li>
                  <li>Technologies Used</li>
                  <li>Real-World Benefits</li>
                  <li>Results and Conclusion</li>
              </ul>

              <p style="color: #1e3a8a;">The full case study is attached to this email as a PDF. Feel free to download and review it at your convenience.</p>

              <p style="color: #1e3a8a;">If you have any questions or need further insights, don't hesitate to reach out to us. We’d love to collaborate with you!</p>

              <p style="text-align: center; font-size: 14px; color: #1e3a8a;">Best regards,</p>
              <p style="text-align: center; font-size: 16px; color: #1e40af; font-weight: bold;">The WebXplore Studio Team</p>

              <hr style="border-top: 1px solid #cbd5e1;" />
              <p style="font-size: 12px; color: #64748b; text-align: center;">
                  <em>Note: If you didn’t request this email, please disregard it. Your information is secure with us.</em>
              </p>
          </div>
      `,
      attachments: [
        {
          filename: "Case_Study_AI_Powered_Chatbots.pdf",
          path: "../homesection/src/assets/cs1.pdf", // Path to the PDF file
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
