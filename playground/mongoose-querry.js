const {ObjectID}= require('mongodb');

const {mongoose} = require('../db/mongoose.js');
const {Todo} = require('../models/todo.js');
const {User} = require('../models/user.js');

var id = '595538777b4d5c75e7a064f0';

if(!ObjectID.isValid(id)){
  console.log('id not valid')
}
//User wala


User.findById('595538777b4d5c75e7a064f0').then((user)=>{
  if(!user){
  return console.log(`no user Found by this id please try again wiith the correct one`)
  }
console.log(`user found:::::>>here are the details ::::::::>>>>\n${user}<:::::::`)
},(e)=>{
  console.log(`there is an error ${e}`)
})


// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('todo',todo);
// })
 // Todo.findById(id).then((todo)=>{
 //   if(!todo){
 //     return console.log('id not found ')
 //   }
 //   console.log('todo',todo);
 // }).catch((e)=>{
 //   console.log(e);
 // })
