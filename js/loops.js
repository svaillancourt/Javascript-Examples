console.log("print all numbers up to 5");

var count = 1;

// condition is 6 times
while(count < 6) {
 console.log("count is: " + count);
 count++;
}

//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5

console.log("print all numbers up to 7 by 2");


var count = 7;  // set var to 7 // making the count a 0 causes a infinite loop

while(count <= 20) { // 20 is the limit
 console.log("count is: " + count);
 count+=2;  //increases count by 2 until count reaches 20
}

//count is: 7
//count is: 9
//count is: 11
//count is: 13
//count is: 15
//count is: 17
//count is: 19

// Printing each character in a string

//string we're looping over:
var str = "hello world!";
//first character is at index 0
var count = 0;    

while(count < str.length) {
 console.log(str[count]);
 count++;
}

//"h"
//"e"
//"l"
//"l"
//"o"
//" "
//"w"
//"o"
//"r"
//"l"
//"d"

// excerise 1

console.log("print all numbers between 1 and 10 by 2");

var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

// output should be 

//1
//3
//5
//7
//9

// excercise 2

console.log("print all numbers between 1 and 20 that can divide by 4");

var num = 1

while(num <= 20) {
 if(num % 4 === 0){	// see if the number divids cleanly with no remainder
   console.log(num);
 }
 num++;
}

//4
//8
//12
//16
//20

// excercise 3

// var num = 100;

// while(num < 150) {
//   console.log(num + 1);
//   num--;
// }

// infite loop because of the num --

// excercise bonus

console.log("print all numbers between -10 and 19");

var num = -10;

while(num <= 19) {
  console.log(num);
  num ++;
}

console.log("print all even numbers between 10 and 40");

var num = 10;

while(num <= 40) {
  console.log(num);
  num += 2;
}

// or 

// while(num <= 40) {
//   	if (count % 2 === 0){ not divisble by 2
// 	console.log(num);
// 	}
//  	num += 2;
// }

console.log("print all odd numbers between 300 and 333");

// var num = 301;

// while(num <= 333) {
//   console.log(num);
//   num += 2;
// }

// or 

var num = 300;

while(num <= 333) {
  	if (num % 2 !== 0){   // not divisble by 2
	console.log(num);
	}
 	num ++;
}

console.log("print all numbers divisble by 5 and 3 between 5 and 50");

var num = 5

while(num <= 50) {
 if(num % 5 === 0 && num % 3 === 0) {	
   console.log(num);
 }
 num++;
}

