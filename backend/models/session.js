const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
   
    title: { type: String },
    description: { type: String },
    domain: { type: String },
    topic: { type: String },
    image : {type : String} ,
    author : {
        type: mongoose.Types.ObjectId,
        ref: "User"

    },
    timeField : {
        type : Boolean,
        default:true
    },

    date :  {
        type : Date
    } ,
    time : {
        type : String,
        

    }


})

const Session = mongoose.model("Session", sessionSchema);


module.exports = Session;

