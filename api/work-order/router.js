const express = require("express");
const multer = require("multer");
const sendMail = require("./sendEmail");

const router = express.Router();
const upload = multer();

router.post("/", upload.single("design_image"), sendMail, (req, res) => {
  const order = req.body;
  console.log(req.file);
  res.status(200).json({ message: "Your order has been placed." });
});

module.exports = router;
