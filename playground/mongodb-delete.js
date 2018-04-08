//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //Elimina todos os users com nome 'Filipe'
  // db.collection('Users').deleteMany({name: 'Filipe'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //Elimina o user com um determinado // id
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5ac90978bb65ed0d0c360527')}).then((result) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  //db.close();
});
