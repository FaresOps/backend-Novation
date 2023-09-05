const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({

    email: { 
        type: String,
         required: true,
          unique: true },
    fullname: {
        type : String,
        required : true
    },
    phoneNumber:{
        type: Number,
        required : true
    },
    password: {
         type: String, 
         required: true
    },
    isadmin:{
        type: Boolean,
        default: false
    }
  });
  
  const User = mongoose.model('User', UserSchema);

  module.exports=User;