// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 4000;

// app.use(cors({
//   origin: 'http://localhost:5173'
// }));
// app.use(express.json());

// // --- EMAIL CONFIG ---
// const EMAIL_CONFIG = {
//   service: 'gmail',
//   auth: {
//     user: 'sanjukichu23@gmail.com', 
//     pass: 'wpeerrimqpzrgyks'
//   }
// };

// const transporter = nodemailer.createTransport(EMAIL_CONFIG);
// const ADMIN_EMAIL = 'sharathshanue35@gmail.com';

// // --- DEMO BOOKING API ---
// app.post('/api/schedule', async (req, res) => {
//   const { name, email, phone, date_formatted, time_user_tz, time_ist, timezone_location } = req.body;

//   const adminMailOptions = {
//     from: `"Booking Notifier" <${EMAIL_CONFIG.auth.user}>`,
//     to: ADMIN_EMAIL,
//     subject: `[New Demo Booking] ${name || 'Unknown'} for ${date_formatted || 'N/A'}`,
//     html: `
//       <div style="font-family: Arial; line-height: 1.6; padding: 20px; border: 1px solid #ccc;">
//         <h2>New Demo Scheduled!</h2>
//         <p><b>Name:</b> ${name || 'N/A'}</p>
//         <p><b>Email:</b> ${email || 'N/A'}</p>
//         <p><b>Phone:</b> ${phone || 'N/A'}</p>
//         <p><b>Date:</b> ${date_formatted || 'N/A'}</p>
//         <p><b>Time (User TZ):</b> ${time_user_tz || 'N/A'} (${timezone_location || 'N/A'})</p>
//         <p><b>Time (IST):</b> ${time_ist || 'N/A'}</p>
//       </div>
//     `
//   };

//   const clientMailOptions = {
//     from: `"Demo Scheduler" <${EMAIL_CONFIG.auth.user}>`,
//     to: email,
//     subject: `Your Demo Confirmation (${date_formatted || 'N/A'})`,
//     html: `
//       <div style="font-family: Arial; line-height: 1.6; padding: 20px;">
//         <h2 style="color:#035C75;">Demo Confirmed</h2>
//         <p>Hello ${name || 'User'},</p>
//         <p>Thank you for scheduling a demo with us. We look forward to meeting you!</p>
//         <p><strong>Time:</strong> ${time_user_tz || 'N/A'} on ${date_formatted || 'N/A'}</p>
//         <p><strong>Timezone:</strong> ${timezone_location || 'N/A'}</p>
//         <p>Best regards,<br>SecureSign Team</p>
//       </div>
//     `
//   };

//   // send in background (non-blocking)
//   Promise.all([
//     transporter.sendMail(adminMailOptions),
//     transporter.sendMail(clientMailOptions)
//   ])
//   .then(() => console.log('Emails sent successfully'))
//   .catch((err) => console.error('Error sending emails:', err));

//   res.status(200).json({ success: true, message: 'Booking request received.' });
// });


// // --- CONTACT FORM API ---
// app.post('/api/contact', async (req, res) => {
//   const { name, email, phone, message, contactPreference } = req.body;

//   const adminMailOptions = {
//     from: `"Contact Notifier" <${EMAIL_CONFIG.auth.user}>`,
//     to: ADMIN_EMAIL,
//     subject: `[New Contact Form] ${name || 'Unknown'} - Preference: ${contactPreference || 'N/A'}`,
//     html: `
//       <div style="font-family: Arial; line-height: 1.6; padding: 20px; border: 1px solid #ccc;">
//         <h2>New Contact Request Received!</h2>
//         <p><b>Name:</b> ${name || 'N/A'}</p>
//         <p><b>Email:</b> ${email || 'N/A'}</p>
//         <p><b>Phone:</b> ${phone || 'N/A'}</p>
//         <p><b>Preference:</b> ${contactPreference || 'N/A'}</p>
//         <p><b>Message:</b> ${message || 'No message provided.'}</p>
//       </div>
//     `
//   };

//   const clientMailOptions = {
//     from: `"Support Team" <${EMAIL_CONFIG.auth.user}>`,
//     to: email,
//     subject: `We've received your inquiry!`,
//     html: `
//       <div style="font-family: Arial; line-height: 1.6; padding: 20px;">
//         <h2 style="color:#035C75;">Thank you for your message, ${name || 'User'}!</h2>
//         <p>This is an automatic confirmation that we have received your contact request.</p>
//         <p><b>Contact Preference:</b> ${contactPreference || 'N/A'}</p>
//         <p><b>Message Summary:</b> ${message ? message.substring(0, 50) + '...' : 'N/A'}</p>
//         <p>Our team will review and respond soon.</p>
//         <p>Sincerely,<br>SecureSign Team</p>
//       </div>
//     `
//   };

//   // send in background (non-blocking)
//   Promise.all([
//     transporter.sendMail(adminMailOptions),
//     transporter.sendMail(clientMailOptions)
//   ])
//   .then(() => console.log('Contact emails sent'))
//   .catch((err) => console.error('Error sending contact emails:', err));

//   res.status(200).json({ success: true, message: 'Contact request received.' });
// });

// // --- START SERVER ---
// const server = app.listen(PORT, () => {
//   console.log(`🚀 Backend running at http://localhost:${PORT}`);
// });

// server.on('error', (e) => {
//   if (e.code === 'EADDRINUSE') {
//     console.error(`❌ Port ${PORT} already in use.`);
//   } else {
//     console.error('Unexpected server error:', e);
//   }
//   process.exit(1);
// });







const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
 
const app = express();
const PORT = 4000;
 
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
 
// --- EMAIL CONFIG (scopetree.co.in setup) ---
const EMAIL_CONFIG = {
  host: 'p3plzcpnl507490.prod.phx3.secureserver.net', // from your email setup
  port: 465, // SMTP SSL port
  secure: true, // true for SSL (port 465)
  auth: {
    user: 'no-reply@scopetree.co.in', // your sender email
    pass: 'Re@chU$F0rGr0wth' // your sender password
  }
};
 
const transporter = nodemailer.createTransport(EMAIL_CONFIG);
const ADMIN_EMAIL = 'sales@scopetree.co.in'; // Admin receiver email
 
// --- DEMO BOOKING API ---
app.post('/api/schedule', async (req, res) => {
  const { name, email, phone, date_formatted, time_user_tz, time_ist, timezone_location } = req.body;
 
  const adminMailOptions = {
    from: `"Booking Notifier" <${EMAIL_CONFIG.auth.user}>`,
    to: ADMIN_EMAIL,
    subject: `[New Demo Booking] ${name || 'Unknown'} for ${date_formatted || 'N/A'}`,
    html: `
<div style="font-family: Arial; line-height: 1.6; padding: 20px; border: 1px solid #ccc;">
<h2>New Demo Scheduled!</h2>
<p><b>Name:</b> ${name || 'N/A'}</p>
<p><b>Email:</b> ${email || 'N/A'}</p>
<p><b>Phone:</b> ${phone || 'N/A'}</p>
<p><b>Date:</b> ${date_formatted || 'N/A'}</p>
<p><b>Time (User TZ):</b> ${time_user_tz || 'N/A'} (${timezone_location || 'N/A'})</p>
<p><b>Time (IST):</b> ${time_ist || 'N/A'}</p>
</div>
    `
  };
 
  const clientMailOptions = {
    from: `"Demo Scheduler" <${EMAIL_CONFIG.auth.user}>`,
    to: email,
    subject: `Your Demo Confirmation (${date_formatted || 'N/A'})`,
    html: `
<div style="font-family: Arial; line-height: 1.6; padding: 20px;">
<h2 style="color:#035C75;">Demo Confirmed</h2>
<p>Hello ${name || 'User'},</p>
<p>Thank you for scheduling a demo with us. We look forward to meeting you!</p>
<p><strong>Time:</strong> ${time_user_tz || 'N/A'} on ${date_formatted || 'N/A'}</p>
<p><strong>Timezone:</strong> ${timezone_location || 'N/A'}</p>
<p>Best regards,<br>SecureSign Team</p>
</div>
    `
  };
 
  // send both emails (admin + client)
  Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(clientMailOptions)
  ])
  .then(() => console.log('Emails sent successfully'))
  .catch((err) => console.error('Error sending emails:', err));
 
  res.status(200).json({ success: true, message: 'Booking request received.' });
});
 
// --- CONTACT FORM API ---
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, contactPreference } = req.body;
 
  const adminMailOptions = {
    from: `"Contact Notifier" <${EMAIL_CONFIG.auth.user}>`,
    to: ADMIN_EMAIL,
    subject: `[New Contact Form] ${name || 'Unknown'} - Preference: ${contactPreference || 'N/A'}`,
    html: `
<div style="font-family: Arial; line-height: 1.6; padding: 20px; border: 1px solid #ccc;">
<h2>New Contact Request Received!</h2>
<p><b>Name:</b> ${name || 'N/A'}</p>
<p><b>Email:</b> ${email || 'N/A'}</p>
<p><b>Phone:</b> ${phone || 'N/A'}</p>
<p><b>Preference:</b> ${contactPreference || 'N/A'}</p>
<p><b>Message:</b> ${message || 'No message provided.'}</p>
</div>
    `
  };
 
  const clientMailOptions = {
    from: `"Support Team" <${EMAIL_CONFIG.auth.user}>`,
    to: email,
    subject: `We've received your inquiry!`,
    html: `
<div style="font-family: Arial; line-height: 1.6; padding: 20px;">
<h2 style="color:#035C75;">Thank you for your message, ${name || 'User'}!</h2>
<p>This is an automatic confirmation that we have received your contact request.</p>
<p><b>Contact Preference:</b> ${contactPreference || 'N/A'}</p>
<p><b>Message Summary:</b> ${message ? message.substring(0, 50) + '...' : 'N/A'}</p>
<p>Our team will review and respond soon.</p>
<p>Sincerely,<br>SecureSign Team</p>
</div>
    `
  };
 
  // send both emails (admin + client)
  Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(clientMailOptions)
  ])
  .then(() => console.log('Contact emails sent'))
  .catch((err) => console.error('Error sending contact emails:', err));
 
  res.status(200).json({ success: true, message: 'Contact request received.' });
});
 
// --- START SERVER ---
const server = app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
 
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} already in use.`);
  } else {
    console.error('Unexpected server error:', e);
  }
  process.exit(1);
});