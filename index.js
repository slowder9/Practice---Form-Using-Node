const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');

const server = express(); // setup the express server

// const donuts = [
//   { name: 'Jelly', cake: 'vanilla', topping: 'jelly' },
//   { name: 'Chocolate', cake: 'vanilla', topping: 'oranges' },
//   { name: 'Glaze', cake: 'vanilla', topping: 'jelly' },
// ];

let pink = [
{name: 'mike', email: 'flkdj', birth: '12', position: 'technical', password: 'butts'}
]

// Configure express to use mustache and set some reasonable defaults.
server.engine('mustache', mustache());
server.set('views', './templates');     // where to look for templates
server.set('view engine', 'mustache');  // what do we use to render them?

server.use(bodyparser.urlencoded({ extended: false }));

// Display a form
server.get('/', function (req, res) {
  // Load the index Mustache template and populate it with values
  // from the object.
  res.render('form', {
    options: pink
  })
  });

server.post('/new', function (req, res) {
  if (
    (req.body.name.length > 0 && req.body.name.length < 100) && 
    (req.body.name.email > 0 && req.body.email.length < 100) &&
    (req.body.birth.length > 1900 && req.body.birth.length < 2017) &&
    (req.body.position === "technical_manager") && (req.body.position === "developer") && (req.body.position === "ui_designer") && (req.body.position === "graphic_designer")
    (req.body.password.length < 8)){

  pink.push({
  name: req.body.name,
  email: req.body.email, 
  birth: req.body.birth, 
  position: req.body.position, 
  password: req.body.password
})}

  // Validation
  // if (
  //   req.body.name.length > 0 &&
  //   req.body.cake.length > 0 &&
  //   req.body.topping.length > 0
  // ) {
  //   // get the form info
  //   // add it to the array
  //   donuts.push({
  //     name: req.body.name.toUpperCase(),
  //     cake: req.body.cake,
  //     topping: req.body.topping,
  //   });
  

  // re-render the form
  res.render('form', {
    options: pink,
    // success: true,
  });
  });

//   function validateForm() {
//     let x = document.form["myForm"]["name"].value;
//     if (x === "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

// });

// TODO: Receive form info
server.listen(3003, function () { // 1024 and below are off limits
  console.log('Donuts are warm.');
});