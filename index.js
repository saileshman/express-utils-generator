const express = require("express");

const app = express();

const frm_route = require("./router/index");

app.use(express.json());

app.use("/", frm_route);

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./view"); // view folder

app.listen(5000);
console.log("app is running on port 1111");
