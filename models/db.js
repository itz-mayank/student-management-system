const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://localhost:27017/StudentDB",
{
  useNewUrlParser: true,
  useFindAndModify: false,
useUnifiedTopology: true,
useCreateIndex: true
},
(err) => {
  if(!err){
    console.log('Connection Succeeded');
  }else{
    console.log('Error in connection' +err);
  }
});

require('./student.model');
