// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  cosole.log('unable to connet to mongo server');
  }
  console.log('connected to mongo server');
// db.collection('Todos').find({
//   _id:new ObjectID('594d0787544c55f7c4aab9e7')
// }).toArray().then((docs)=>{
//   console.log('todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to  fetch ',err);
// });
//
//s
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`todos count:${count}`);
//
// },(err)=>{
//   console.log('unable to  fetch ',err);
// });



db.collection('Users').find({name:'Avinash Sharma'}).toArray().then((docs)=>{
  console.log('todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('unable to  fetch ',err);
});


db.collection('Users').find({
  name:'Avinash Shamrma'
}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('unable to find',err);
});

// db.close();
});
