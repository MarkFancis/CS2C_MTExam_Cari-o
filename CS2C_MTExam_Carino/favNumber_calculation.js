let faveNumber = 19
let guess

while (guess !== faveNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 50:"))

  if (guess === faveNumber) {
    console.log("correct")
  } else if (guess < secretNumber) {
    console.log("Your guess is too low")
  } else {
    console.log("Your guess is too high")
  }
}