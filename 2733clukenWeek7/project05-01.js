"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Callum Luken 
      Date: 10/10/2021   

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
// changet time limit variable to 90
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

// declare the timeID variable
let timeID;
// declare questionList variable, stored in querySelectorAll
let questionList = document.querySelectorAll("div#quiz input");

// onclick event handler to startQuiz object run anonymous function
startQuiz.onclick = function() {
   // set class attribute of overlay object to "showquiz"
    overlay.className = "showquiz";
    // repeats countdown() function every 1000 milliseconds
    // stores timed command in timeID variable
    countdown();
    timeID = window.setInterval(countdown, 1000);
}


// create countdown function
function countdown() {
   // if statement testing if the value of timeLeft = 0  *********
if (timeLeft === 0) {
   // use clearInterval() to cancel timed command tihe variable timeID
   window.clearInterval(timeID);
   // declare variable 'totalCorrect'
   let totalCorrect = document.getElementById("totalCorrect");
   // set totalCorrect = value returned by 'checkAnswers' function (correctCount)
   totalCorrect = correctCount.value;

         // if totalCorrect = length of correctAnswers array 
         if (totalCorrect.length === correctAnswers.length) {
            // display alert window congratulating the student on getting 100%
               response = window.alert("Congratulations on completing 100%")
         }
         // otherwise display alert window indicating number of incorrect answers out of total number of questions on the quiz.
         else {
            response = window.alert("You got " + correctCount + " out of " + questionList.length + ".");
            // change the value of the timeLeft variable to quizTime
            timeLeft = quizTime;
            // set quizClock.value to the value of the timeLeft variable
            quizClock.value = timeLeft;
            // change class attribute of overly object to "hidequiz"
            overlay.className = "hidequiz";
         }
}
   else {
      // if timeLeft variable is not equal to 0 (else statement from if else statement originally started - mark with *********)
      // decreasevalue of timeleft by 1000 millisecond
      timeLeft = window.setInterval(countdown, 1000);
      // set quizClock.value to value of the timeLeft variable
      quizClock.value = timeLeft;
   }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

