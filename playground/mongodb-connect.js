// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
// var obj =new ObjectID();// above object destructuring see below
// console.log(obj); to crate a new id
//var obj={name:'avinash Sharma', age :25}
//var {name}=obj ;.. this actully destructuring the object
// we can use this name varisabe anywhere we want



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  cosole.log('unable to connet to mongo server');
  }
  console.log('connected to mongo server');
//   db.collection('Todos').insertOne({
//     text:'something to do',
//     compleated:false
//   },(err,result)=>{
//     if(err){
//       return console.log('unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined ,2));
//   });
//   db.close();
// });
//
// db.collection('Users').insertOne({
//   name:'Avinash Sharma',
//   age:'20',
//   location:'patiala punjab india'
// },(err,res)=>{
//   if(err){
//     console.log('you got an error !! m suere u will be able to fix it ',err);
//   }
//   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
//
//
// });
//
db.close();
});
