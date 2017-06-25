// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  cosole.log('unable to connet to mongo server');
  }
  console.log('connected to mongo server');

//delete many

// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
//   console.log(result);
//
// });

//challange
// db.collection('Users').deleteMany({name:'Avinash Sharma'}).then((result)=>{
//   console.log(result);
//
// });

//delete one
// db.collection('Todos').deleteOne({text:'eat lunch'}).then ((res)=>{
//   console.log(res);
// });

//challange
// db.collection('Users').deleteOne({
// _id:new ObjectID('594d0c220587dde4341cd6f7')
// }).then((res)=>{
//   console.log(res);
// });

//find one and delete one
// db.collection('Todos').findOneAndDelete({compleated:false}).then((res)=>{
//   console.log(res);
// });

//challange
db.collection('Users').findOneAndDelete({name:'mike'}).then((res)=>{
  console.log(res);
});

// db.close();
});
