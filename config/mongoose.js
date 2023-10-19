const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/practice_db')
var db=mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting db'))
db.once('open',function(){
    console.log('successfully connected to database');
})