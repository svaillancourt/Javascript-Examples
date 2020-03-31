
// function that replaces text within the HTML

function myReplacement() {
    document.getElementById("replace").innerHTML = "You pressed the magic button! This is how you change a paragraph to whatever you want!";
   }

function simpsonsText() {
    document.getElementById("text1").innerHTML = "You call that a knife!?!";
    document.getElementById("text2").innerHTML = "This is a knife! *pulls out spoon*";
    document.getElementById("text3").innerHTML = "Dude... That's a spoon";
   } 

// annoying alert
// window.alert("Welcome back to tips and tricks featuring your host JavaScript!");

  function myAlert() {
    alert("Are you ready to learn about the exciting world of JavaScript?!");
  }

  // myAlert(); // This runs the alert function above 

 // placing a string in place

 var carName = "Ford Mustang";
 document.getElementById("car").innerHTML = carName;
 // document.getElementById("car").getElementById.fontsize="54px";
 // document.getElementById("car").getElementById.fontcolor ="#34ebcf";

 // adding a space a string in place

 var carName1 = "Ford Focus ZTS";
 var carName2 = 'Ford Escape';

 document.getElementById("carModel").innerHTML = carName1 + "<br>" + carName2 + "<br>" + carName1; 

  // learning how to add mulitple variables together

  // Create an object and defining each parameter

  var car = {type:"Ford", model:"ESL", color:"Grey", year:"2013"};

  // Display some data from the object:
  document.getElementById("carLabel").innerHTML = "My current car type is " + car.color + " " + car.year + " " + car.type + " " + car.model;

  // a persons parameters

  var person = {
    firstName: "Shweta",
    lastName: "Beesoon",
    age: 27,
    home: "Edmonton",
    birthPlace: "the island",
    eyeColor: "brown",
    personality: "ENFP" 
  };
  
  document.getElementById("profile").innerHTML = "Hi, My name is " + person.firstName + " " + person.lastName + ", " + "i am currently " + person.age + " years old. I call " + person.home + " home at the moment. I have "+ person.eyeColor + " eyes and my personality type is a " + person.personality;

  // a persons parameters using a function within

  var person2 = {
    firstName: "Stephane",
    lastName : "Donut of Party",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // the (); is critical as that calls whats in the function
  document.getElementById("profile2").innerHTML = person2.fullName();


  // formating strings

  var x = "Step";        // x is a string
  var y = new String("Is");  // y is an object that gives it a new line
  var z = new String("Crazy");  // y is an object that gives it a new line

  document.getElementById("format").innerHTML = x + "<br>" + y + "<br>" + z;

  // defining the lenght of a string 
  var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  document.getElementById("alpha").innerHTML = txt.length;

  // location of a string.  Its like ctrl + f
  var str = "Please locate where 'locate' occurs!";
  var pos = str.indexOf("locate");

  // expected output is 
  document.getElementById("find").innerHTML = pos;

