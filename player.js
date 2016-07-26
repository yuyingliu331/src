'use strict'

var inquirer = require('inquirer')

var game = require('../example/example.game')

/**

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:

https://gist.github.com/joedotjs/ae54507f758988222ce1c80fc3ba83e2

**/

function play(node) {

  // Base case
  if (node.connections.length === 0) {
    // end of game message 
    console.log(node.text); 

    return Promise.resolve() // Don't worry about this, we will look more into Promise later on
  }

  // Recursive case
  return inquirer.prompt([{
    type: 'list',
    name: 'Sam',  
    message: node.text,
    choice: node.connections
  }])
  .then(function (game.answer) {
    // What is in the answer we are returned that we can use? Try logging it out!
    // How can we use this value to continue the game? Write your code below
    console.log("Answer:", answer);
    var node = game.getNode(answer.Sam);
     return play(node);
  })
}

play(game.startingPoint)
.then(function () {
  console.log('Game over.') // This will run after the Promise.resolve() method is called
})
