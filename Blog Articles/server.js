const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Article = require("./models/article");
const methodOverride = require("method-override");
const articleRouter = require("./routes/articles");

const app = express();

mongoose.connect("mongodb://localhost/blogArticle", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.set("view engine", "ejs");

app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: "desc"
    });
    res.render("articles/index", {
        articles: articles
    });
});

// "/articles" is the relative path to the article routes
app.use("/articles", articleRouter);

app.listen(3000, function () {
    console.log("Server is listening at port 3000!");
});