"use strict";
debugger;
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Callum Luken 
      Date: 10/2/2021

      Filename: project04-05.js
 */

   let PI = 3.14;

// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees*PI/180;
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians*180/PI;
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function() {
   let radians = document.getElementById("rValue").value;
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
}
console.log("Radians 5radians " + document.getElementById("rValue").value);


// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
}

console.log("Degrees 5degrees " + document.getElementById("aValue").value);





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }