// annoying alert
// window.alert("Welcome back to tips and tricks featuring your host JavaScript!");

  function myAlert() {
    alert("Are you ready to learn about the exciting world of JavaScript?!");
  }

// myAlert(); // This runs the alert function above 

// arrow functions
var hello;

  hello = function() {
  return "Hello World!";
  }

document.getElementById("hello").innerHTML = hello();


var jello;

jello = () => {
return "Jello Pudding!";
}

// the "jello" is the html id and the jello() is the function being called
document.getElementById("jello").innerHTML = jello();
