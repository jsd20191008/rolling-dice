/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

When you click "roll the dice" it will generate two random numbers between 1 and 6.
The random number will return the accompanying die image with that number


2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

// Function to Return a random number between 1 and 6

function randomNum() {
 return  Math.floor(Math.random() * 6) + 1
}


// Function to update each die's class with the inputed values
function updateImage(firstDie, secondDie) {

  // Get the element for Die 1
  let placeholder1 = document.getElementById('first-die')

  // Update ClassName for Die 1
  placeholder1.className = "dice dice-"+firstDie

  // Get the element for Die 2
  let placeholder2 = document.getElementById('second-die')

  // Update ClassName for Die 2
  placeholder2.className = "dice dice-"+secondDie
}

let diceRoll =  document.getElementById('roll-dice');

// Function for when clicking the "Roll Dice Element"
diceRoll.onclick = function() {

  // Update the Image with two random numbers as Inputs
  updateImage(firstDie = randomNum(), secondDie = randomNum())
};
