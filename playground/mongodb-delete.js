// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  //above creates the TodoApp db...no need to create it before hand.
  if(err){
    return console.log('unable to connect to MongoB server');
  }//the return above is instead of using else here.  It breaks the function so that the next
  //line doesn't run
  console.log('connected to MongoDB server');

//deleteMany lets us target many docs and delete them
db.collection('Users').deleteMany({FirstName: "Kurt"}).then((result)=>{
  console.log(result);
});

//deleteONe lets you delete one document
// db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result)=>{
//   console.log(result);
// });

//findOneAndDelete lets you find individual item and returns those values
db.collection('Users').findOneAndDelete({_id: new ObjectID('5a8734cc8bc9a5332ccfb9ad')}).then((result)=>{
  console.log(result);
});

db.collection('Users').insertOne({
  FirstName: "Kurt",
  LastName: "Schumaker",
  Age: 39,
  Location: "Stuttgart, Germany"
})

  //db.close();
});
