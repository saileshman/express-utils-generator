const router = require("express").Router();
const nodemailer = require("../modules/nodemailer/mail");

router.get("/", (req, res) => {
  res.json({ mes: "I am API" });
});

// router.get("/sailesh", (req, res) => {
//   res.json({ mes: "I am Saileshman" });
//});

router.post("/mail", nodemailer);

module.exports = router;
