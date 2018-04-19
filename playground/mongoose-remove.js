const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
//Todo.findByIdAndRemove();

Todo.findOneAndRemove({_id: '5ad8e8ed01a8cf481aefa0ea'}).then((todo) => {

});

Todo.findByIdAndRemove('5ad8e8ed01a8cf481aefa0ea').then((todo) => {
  console.log(todo);
});
