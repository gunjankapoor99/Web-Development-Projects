const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const articleRouter = require("./routes/articles");

const app = express();

mongoose.connect("mongodb://localhost/blogArticle", {useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    const articles = [{
        title: "Test Article",
        createdAt: new Date(),
        description: "Test Description"
    }]
    res.render("articles/index", {articles: articles});
});

// "/articles" is the relative path to the article routes
app.use("/articles", articleRouter);

app.listen(3000, function(){
    console.log("Server is listening at port 3000!");
});