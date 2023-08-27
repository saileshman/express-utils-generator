const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index"); //, { data: "ui is working" }
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
//<%- data%>
module.exports = router;
