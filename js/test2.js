// var userFname = prompt ("What is your first name?");		// asking the user for information
// var userLname = prompt ("What is your last name?");		// asking the user for information
// var userAge = prompt ("how old are you?");		// asking the user for information

// console.log("Your full name is " + userFname + " " + userLname + "! it looks like you're " + userAge + " years old!");
// console.log("Nice to meet you!") 

// // age calc

// var age = prompt ("no really...how old are you?");		// asking the user for information
// var days = age *365.25; // the .25 is to count for leap years.

// alert(age + " years is roughly " + days + " days!");


// Boolean Logic

var x = 10;
var y = "a"

console.log(y === "b" || x >= 10); // comes out true


var x = 3;
var y = 8;
     //       true   false        false   true                   
console.log(!(x == "3" || x === y) && !(y != 8 && x <= y))
// should come out as false

!"Hello World"

!""

!null

!0

!-1

!NaN

// Conditionals 

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

if (age < 18){
    console.log("Sorry, you are not old enough to enter the venue");
    } else if(age < 21){
    console.log("You can enter but you cannot drink or just come back when you're 21");
    } else{ console.log("Please enjoy yourself and drink responsibly");
    }

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
 
// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}
 
// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}
 
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}
 
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

