// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");


// if(answer === "yes") {
// 	alert("YAY, We made it!")
// } else {
// }

// VERSION 2

var answer = prompt("are we there yet?");	// asking the user for info

while(answer.indexOf("yes") === -1) {		// indexOf gives you the character number, it doesn't exist it gives a -1, as long as you have yes in the answer
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");