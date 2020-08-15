const mongoose = require("mongoose");

// make a size validator in mongoose
const sizeValidator = [
    function(val){
    let testVal = val.trim();
    return testVal.length >0 && testVal.length <=50;
    }
]





const Team = new mongoose.Schema({
    name:{
        Type:String,
        required:true,
        validate:sizeValidator

    }
})

module.exports = mongoose.model("Team",Team);
