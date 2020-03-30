// writing out a math equation and adding the variable to a HTML insert  

var x = 5;
var y = 6;
var z = x + y;

document.getElementById("math").innerHTML =  "This value of z is : " + z + " this value is placed in by the script code";

// more math
function myMulti(p1, p2) {
 return p1 * p2;
}
document.getElementById("multi").innerHTML = myMulti(4, 3);

 // writing out a math equation and adding the variable to a HTML insert  

 var price1 = 5;
 var price2 = 10;
 var total = price1 + price2;

 document.getElementById("total").innerHTML = "The total is: " + total;