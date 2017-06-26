// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  cosole.log('unable to connet to mongo server');
  }
  console.log('connected to mongo server');
//findOneAndUpadate
// db.collection('Users').findOneAndUpdate({
//   _id:new ObjectID('5950d1b47b4d5c75e79fb80c')
// },{$set:{
//   name:'AvinashSharma'
// }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

// challange
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5950d1b47b4d5c75e79fb80c')
},{$inc:{
  age:1
}
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});



// db.close();
});
