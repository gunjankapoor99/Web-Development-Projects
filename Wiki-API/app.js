//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

// // Get(Read) route fetch all the articles from database
// app.get("/articles", );

// // Post(Create) route for a new article 
// app.post("/articles", );

// // Delete routes from database
// app.delete("/articles", );


// Chaining route handlers
app.route("/articles")
.get(
    function(req,res){
        Article.find({}, function(err, foundArticles){
            if(!err){
                res.send(foundArticles);
            }else{
                res.send(err);
            }       
        });
    })
.post(
    function(req,res){

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
    
        newArticle.save(function(err){
            if(!err){
                res.send("Successfully added new article.")
            }else{
                res.send(err);
            }
        });
    })
.delete(
    function(req,res){
        Article.deleteMany({}, function(err){
            if(!err){
                res.send("Successfully deleted all articles!");
            }else{
                res.send(err);
            }
        });
    }
);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});