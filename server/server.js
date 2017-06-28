//lib imort
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
//
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// tried to save something  till now not connected
// mongoose will be waiting till the thing connect
// mongooseis organised  so the formation of model
var {mongoose}= require ('../db/mongoose.js');
var {Todo}= require('../models/todo.js');
var {User}=require('../models/user.js');

var app= express();

//post route create resource 'post'

//middlewaere
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo= new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})


app.listen(3000,()=>{
  console.log('started on port 30000');
});

//challange user model
//user
// var newUser =new User({
// email :'avinashsharma1996'
// });


//todo model
// var newTodo = new Todo({
//   text:'cook dinner'
// });

//challange
// var newTodo = new Todo({
//   text:'compepleted',
//   compeleted:true,
//   completedAt:23
// });

//
// newTodo.save().then((res)=>{
//   console.log('saved todo',res);
// },(e)=>{
//   console.log('unable to save todo',e);
// });
//

//
// newUser.save().then((res)=>{
//   console.log('saved todo',res);
// },(e)=>{
//   console.log('unable to save todo',e);
// });
