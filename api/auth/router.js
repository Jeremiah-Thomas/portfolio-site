const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getAdmin, createAdmin } = require("./model");
const corsHeaders = require("./corsMiddleware");

const router = express.Router();

const generateJwt = (admin) => {
  const payload = {
    subject: admin.id,
  };

  const config = { expiresIn: "1h" };

  return jwt.sign(payload, process.env.JWT_SECRET, config);
};

router.post("/authenticate", corsHeaders, async (req, res) => {
  const token = req.headers.authorization;
  const admin = await getAdmin();
  let register = false;
  if (admin.length > 0) {
    register = false;
  } else {
    register = true;
  }

  if (token == null) {
    res.status(403).json({ message: "Forbidden", register: register });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res.status(403).json({ message: "Forbidden", register: register });
      return;
    } else {
      res.status(200).json({ message: "Authenticated" });
    }
  });
});

router.post("/register", corsHeaders, (req, res) => {
  const admin = req.body;

  const hash = bcrypt.hashSync(admin.password, 8);

  admin.password = hash;

  createAdmin(admin).then((id) => {
    res.status(201).json({ message: "Password registered" });
  });
});

router.post("/login", corsHeaders, (req, res) => {
  const { password } = req.body;

  getAdmin().then(([admin]) => {
    if (admin && bcrypt.compareSync(password, admin.password)) {
      const token = generateJwt(admin);
      res.status(200).json({ message: "Logged in as Admin", token });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  });
});

module.exports = router;
