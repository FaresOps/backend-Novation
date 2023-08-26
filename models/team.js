const mongoose = require('mongoose');



const TeamSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true,
    },
    age: {
        type : Number,
        required : true
    },
    mobileNumber: {
         type: String, 
         required: true 
    },
    email :{
        type: String, 
        required: true,
    }
  });
  
  exports.Result = mongoose.model('Team', TeamSchema);
