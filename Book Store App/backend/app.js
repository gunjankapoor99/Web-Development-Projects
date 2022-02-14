const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book');
const app = express();
const cors = require('cors');

// MiddleWares

// app.use('/', (req, res, next) => {
//     res.send("This is starting page")
// });


app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose.connect('mongodb+srv://admin:absdfgrtywvhv43vhvs@cluster0.oiqzr.mongodb.net/BookStoredb?retryWrites=true&w=majority').then(()=>{
    console.log("Connected to database!")
}).then(()=> {
    app.listen(5000, () => {
        console.log("Server is running on port 5000")
    });
}).catch((err)=> {
    console.log(err);
});

console.log("Hello World!");

// absdfgrtywvhv43vhvs
// mongodb+srv://admin:<password>@cluster0.oiqzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority