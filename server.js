const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;
const DB_URL = `mongodb+srv://Test:Test@crud.np1jfyh.mongodb.net/CRUD?retryWrites=true&w=majority`;


//Database conncetion
mongoose.connect(DB_URL)
.then(() =>{
    console.log("DB connected!");
})
.catch((err) =>{
    console.log("DB connection faild!", err);
})

//Add server port
app.listen(PORT , ()=>{
    console.log(`App is running on ${PORT}`);
});


