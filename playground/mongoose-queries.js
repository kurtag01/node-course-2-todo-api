const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = 'a90891c13004ae8056cee27';
//
// if (!ObjectID.isValid(id)){
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

//query the users collection by id

var id = '5a8b215b74557c943aa87ebc'
User.findById(id).then((user)=>{
  if(!user){
    return console.log('unable to find user');
  }

  consoe.log(JSON.stringify(user,undefined, 2));
}, (e)=>{
  console.log('there was an error', e)
})
//load in the users
//user/findById
//case where the query works but
