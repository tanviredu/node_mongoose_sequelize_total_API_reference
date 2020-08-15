const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const mongoose   = require("mongoose");
const config     = require("./config/config");
const app        = express();
const PORT       = 8000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


//make routers




// make a global error handler

app.use(function(req,res){
    const error = new Error("Error happend");
    error.status = 404;
    res.json(error);
})



const url     = config.mongourl;
const connect = mongoose.connect(url);
connect.then(()=>{
    app.listen(PORT);
    console.log("SERVER CONNECTED AND STARTED");
})





