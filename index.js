var db = require('./models');


//create a thing in author
// db.author.create({
//   name:'Lauren'
// }).then(function(data){
//   console.log(data);
// });

// db.author.findOne().then(function(author){
//   author.createPost({
//     title: 'Why I hate Sequelize',
//     content: 'Because its so finnicky'
//   }).then(function(post){
//     console.log(post);
//   });
// });

//The naming syntax of somthing.createSomething is data model dependednt
//ex: trainer.createPokemon or person.createDog


// db.author.findOne().then(function(author){
//   //load posts for this author
//   author.getPosts().then(function(posts){
//     //do something with posts here
//     console.log(posts);
//   });
// });
//this will get you all associated posts that are by this author

// db.author.create({
//   name: 'Pious Augustus'
// }).then(function(author){
//   console.log(author);
// });



//FIND SOMETHING

//this will find all instances of "Arther" in your author list
// db.author.find({
//   where: {
//     name: 'Arther'
//   }
// }).then(function(author){
//   console.log(author);
// });



//Two functions combined. First find the author, and THEN create a post for them.
// db.author.find({
//   where: {
//     name: 'Arther'
//   }
// }).then(function(author){
//   author.createPost({
//       title: 'Why I hate Sequelize',
//       content: 'Because its so finnicky'
//     }).then(function(post){
//       console.log(post);
//   });
// });


//this finds you 1 instance of Arther and and gives you an array of this author's posts
// db.author.findOne({
//   where: {
//     name: 'Arther'
//   },
//   include: [db.post]
// }).then(function(author) {
//   console.log(author.posts);
// });

//To SELECT * FROM author; and get an array of posts for each

// db.author.findAll({
//   include: [db.post]
// }).then(function(authors) {
//   authors.forEach(function(author){
//     console.log(author.posts);
//   });
// });
