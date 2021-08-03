const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const articleRouter = require("./routes/articles");

const app = express();

app.set("view engine", "ejs");

// "/articles" is the relative path to the article routes
app.use("/articles", articleRouter);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    const articles = [{
        title: "Test Article",
        createdAt: new Date(),
        description: "Test Description"
    }]
    res.render("index", {articles: articles});
})

app.listen(3000, function(){
    console.log("Server is listening at port 3000!");
});