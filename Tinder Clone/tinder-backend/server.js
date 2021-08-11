import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:tDuuTVOAQgvATfAi@cluster0.r8qri.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// API Endpoints
app.get("/", function(req, res){
    res.status(200).send("Hello Divya!");
});

app.get("/tinder/cards", (req, res) => {
    const dbCard = req.body;
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    })
});

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(201).send(data);
        }
    })
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));