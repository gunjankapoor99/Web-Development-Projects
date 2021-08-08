const express = require("express");
const app = express();
const hbs = require("hbs");
require("./db/connect");
const User = require("./models/users");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

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

app.post("/register", async (req, res) => {
    try{
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        if(password === confirmPassword){
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password
            })

            const registeredUser = await user.save();
            res.status(201).render("index");
        }else{
            res.send("Passwords are not matching!");
        }
    }catch(err){
        res.status(400).send(err);
    }
})

app.get("/login", (req,res) => {
    res.render("login");
});

app.listen(port, function(){
    console.log(`Server is running at port ${port}`);
});