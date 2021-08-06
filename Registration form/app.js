const express = require("express");
const app = express();
const hbs = require("hbs");
require("./db/connect") 

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("views"));
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("partials");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req,res) => {
    res.render("register");
});

app.get("/login", (req,res) => {
    res.render("login");
});

app.get("/admissionForm", (req,res) => {
    res.render("admissionForm");
});

app.listen(port, function(){
    console.log(`Server is running at port ${port}`);
});