const mongoose = require("mongoose");

const stringValidator = [
    function (val) {
        let testVal = val.trim();
        return testVal.length > 0;
    }
];

// we make a join like lookup query in here
// the model name will be camel case
// and when ref you have to write the
// lowercase plural form because thats how this
// model will be stored
// when a model is saved it is saved that way in most case
// Mongoose is trying to be smart by making your collection name plural.
// You can however force it to be whatever you want:
// var dataSchema = new Schema({..}, { collection: 'data' })
// then it will be called data not datas
// just like as it is


const Standup       = new mongoose.Schema({
    teammemberId   :
    {
                     type:mongoose.Schema.Types.ObjectId,
                     ref : "teams"
    },
    teamMember     : {type:String},
    project        : {type:String},
    workYesterday  : {type:String},
    workToday      : {type:String},
    impediment     : {type:String},
    createdOn      : {type:Date,default:Date.now}
})


module.exports = mongoose.model("Standup",Standup);