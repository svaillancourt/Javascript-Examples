var cars = [
    "Ford ",
    "Dodge ",
    "BMW ",
    "Volvo ",
    "Honda ",
    "Hyundai ",
    "Toyota "
  ];
  document.getElementById("carBrands").innerHTML = cars;
  document.getElementById("carBrands1").innerHTML = cars[1];
  document.getElementById("carBrandsSort").innerHTML = cars.sort();
  document.getElementById("carBrandsReverse").innerHTML = cars.reverse();
  document.getElementById("carBrandsLength").innerHTML = cars.length;

//   function carSorting(){
//     cars.sort();
//     document.getElementById("carBrands").innerHTML = cars;
//   }


  // making a list

  var cars, text, cLen, i;
    cars = [ "Ford ", "Dodge ", "BMW ", "Volvo ", "Honda ", "Hyundai ", "Toyota "];
    cLen = cars.length;

    text = "<ul>";
    for (i = 0; i < cLen; i++) {
    text += "<li>" + cars[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("carList").innerHTML = text;

// Adding Array Elements
    // cars = [ "Ford ", "Dodge ", "BMW ", "Volvo ", "Honda ", "Hyundai ", "Toyota "];
    // this line adds whatever you put to the list right away
    // cars.push("You Bought a Lemon");
    document.getElementById("carsPush").innerHTML = cars;

    // this function ties to the button for you to add it
    function carPush() {
        cars.push("You Bought a Lemon");
        document.getElementById("carsPush").innerHTML = cars;

      }

// Persons name

  var people = {firstName:"John", lastName:"Doe", age:46};
  document.getElementById("people").innerHTML = people["firstName"];

  