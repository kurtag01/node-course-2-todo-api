// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  //above creates the TodoApp db...no need to create it before hand.
  if(err){
    return console.log('unable to connect to MongoB server');
  }//the return above is instead of using else here.  It breaks the function so that the next
  //line doesn't run
  console.log('connected to MongoDB server')

  // db.collection('Users').insertOne({
  //   FirstName:  'Kurt',
  //   LastName: 'Schumaker',
  //   Age: 39,
  //   Location: 'Stuttgart, Germany'
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('unable to user', err)
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed:  false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into the users (name, age, locaiton)

  db.close();
});
