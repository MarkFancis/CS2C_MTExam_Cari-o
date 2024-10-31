let age = parseInt(prompt("Enter your age:"))

if (age < 5) {
  console.log("You are a Toddler")
} else if (age >= 5 && age <= 12) {
  console.log("You are a Child")
} else if (age >= 13 && age <= 19) {
  console.log("You are a Teenager")
} else if (age >= 20 && age <= 35) {
  console.log("You are a Adult")
} else {
  console.log("You are a Senior Citizen")
