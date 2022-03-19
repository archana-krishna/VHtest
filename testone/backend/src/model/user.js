const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DRB', { useNewUrlParser: true });

const Schema = mongoose.Schema;

var resumeDataSchema= new Schema({

    Name:String,
    Education:String,
    Experience:String,
    Skill:String,
    email:String,
    phonenumber:Number,



    
});

var resumedata = mongoose.model('resume',resumeDataSchema);
module.exports = resumedata;