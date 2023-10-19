const mongoose= require('mongoose')

var practiceDB= new mongoose.Schema({
    taskDescription:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    // course:{
    //     type:String,
    //     required:true
    // },
    // UID:{
    //     type:String,
    //     required:true
    // },
    taskDate:{
        type:Date,
        required:true
    }

});

var Practice=mongoose.model('Practice',practiceDB);

module.exports=Practice;