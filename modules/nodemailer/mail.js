const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "saileshmankunwar2021@gmail.com",
      pass: "wrruensdsebzdwsm",
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: '"saileshmankunwar2021@gmail.com" <saileshmankunwar2021@gmail.com>',
      to: '"saileshmankunwar2021@gmail.com" <saileshmankunwar2021@gmail.com>',
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
    res.send(info);
    console.log("Message sent: %s", info.messageId);
  }
  main().catch(console.error);
});

module.exports = router;
