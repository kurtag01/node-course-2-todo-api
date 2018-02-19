// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  //above creates the TodoApp db...no need to create it before hand.
  if(err){
    return console.log('unable to connect to MongoB server');
  }//the return above is instead of using else here.  It breaks the function so that the next
  //line doesn't run
  console.log('connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a87371b8bc9a5332ccfba0e")})
  //   .toArray()
  //   .then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  //adding some git stuff


  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    FirstName: "Kurt",
    LastName: "Schumaker"})
    .toArray()
    .then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch todos', err);
  });


  //db.close();
});
