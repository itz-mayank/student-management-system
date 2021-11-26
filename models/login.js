const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email : {
    type: String,
    required:true,
    unique: true
  },
  password :{
    type: String,
    required:true
  }
})

const Login = new mongoose.model("Login", adminSchema);
module.exports = Login;

// To insert data :
// db.logins.insert( { email: "mnkagarwal.bhl@gmail.com", password: 1234 } )
