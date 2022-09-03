const nodemailer = require("nodemailer");

const sendMail = (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jtdeveleopment@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "jtdeveleopment@gmail.com",
    to: "jeremiah@jeremiah-thomas.com",
    subject: `${req.body.client_name} work order`,
    text: `Name: ${req.body.client_name}\nEmail: ${req.body.client_email}\nWebsite Name: ${req.body.site_name}\nAdditional Details: ${req.body.additional_details}`,
    attachments: req.file
      ? [
          {
            filename: `${req.body.client_name.replace(
              " ",
              "_"
            )}_design_file.png`,
            path: `data:image/png;base64,${Buffer.from(
              req.file.buffer
            ).toString("base64")}`,
          },
        ]
      : [],
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
      return;
    } else {
      next();
    }
  });
};

module.exports = sendMail;
