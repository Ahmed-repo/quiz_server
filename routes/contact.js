const express = require("express");
const contact = express.Router();
const nodemailer = require("nodemailer");
contact.use(express.json());

contact.get("/", (res, req) => {
  res.send("welcome");
});

contact.post("/", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "QExpertQE@gmail.com",
      pass: "QuizExpert",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "QExpertQE@gmail.com",
    subject: `Message from   ${data.name}`,
    html: `
  <ul>
   <li>Name: ${data.name}</li>
   <li>Last Name: ${data.lastname}</li>
   <li>Email: ${data.email}</li>
   <li>Gender: ${data.gender}</li>
   </ul>

   <h3>Message</h3>
   <p>${data.message}</p>
  `,
  };

  smtpTransport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Success");
    }
  });

  smtpTransport.close();
});

module.exports = contact;
