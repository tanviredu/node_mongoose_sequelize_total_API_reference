const mongoose = require("mongoose");

const Project = mongoose.Schema({
    name          : {type:String},
    description   : {type:String},
    isActive      : {type:Boolean,required:true,default:true}
});

module.exports = mongoose.model("Project",Project);