var first =  [  1, 2, 3, 4 ];

document.getElementById("numbers").innerHTML = first;
document.getElementById("numbers1Sort").innerHTML = first.sort();
document.getElementById("numbers1Reverse").innerHTML = first.reverse();

var second = [  9, 9, 2, 3, 4];

document.getElementById("numbers2").innerHTML = second;
document.getElementById("numbers2Sort").innerHTML = second.sort();
document.getElementById("numbers2Reverse").innerHTML = second.reverse();

function arrayOfMultiples(num, lenght){
   // defining the variable
    var arr = [];

    // first index; i must stop at the desired lenght, incremeneted)
    for ( i = 1; i <= length; i++){
        // add the next loop that is multiplied
        arr.push (num *i );
    }
}

// console.log(arrayOfMultiples(7,5));

// const obj = {
//     a: 'somestring',
//     b: 42
// }

// function objectToArray(obj){
//     var test = Object.entries(obj);
//     return test;
// }