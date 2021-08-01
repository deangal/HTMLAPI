var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({

fullName : String,
email : String,
faculty: String,
birthDate :Date,
grades:[{
    examDate : Date,
    grade : Number, 
   
   }]
   

})

module.exports = mongoose.model('students', studentSchema)