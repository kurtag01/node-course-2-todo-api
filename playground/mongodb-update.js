// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  //above creates the TodoApp db...no need to create it before hand.
  if(err){
    return console.log('unable to connect to MongoB server');
  }//the return above is instead of using else here.  It breaks the function so that the next
  //line doesn't run
  console.log('connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID("5a8a94448bc9a5332ccfc720")},
  // {$set: {completed: true}},
  //{returnOriginal: false}).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a8a9a9a8bc9a5332ccfc93a")},
  {$set: {FirstName: "Jennifer"}},
  {$inc: {Age: -110}},
  {returnOriginal: false}).then((result)=>{
    console.log(result);
  });

//  db.close();
});
