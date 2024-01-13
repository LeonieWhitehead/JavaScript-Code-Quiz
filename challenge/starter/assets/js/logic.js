// 1. create questions 
  //1.1 how to store questions. Object. Array easier to iterate
// questions = document.querySelector("#questions");
const scoreTimerEl = document.getElementById ("time");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const finalScore = document.getElementById("final-score");
const startBtn = document.getElementById("start");


// track score
let score =0;

// track time
let secondsLeft =60;

// track which question the user is on
let currentQuestion =0;

// track current score?

// track final score


// 2. start button that when clicked
  //2.1 event listener 
  // startBtn.addEventListener("click");

  //start the quiz

  // function startQuiz() {
  //   currentQuestion =0;
  //   finalScore = questions.length;

  // }
// 3.timer - check timer class activity
  // set function
  function countdown() {
    secondsLeft
  }
// add the question to the page
// for (let i = 0; i < questions.length; i++) {
//   // const element = array[index];
  
// }
// 4. buttons for each answer
// 5. When answer is clicked, the next question appears - event listener
// 6. If the answer clicked was incorrect then subtract time from the clock 
  // 6.1 event listener
  // 6.2 decrement timer - check timer class activity
// 7. quiz ends when all questions are answered or the timer reaches 0.
  // 7.1 When the game ends, it should display their score
  // 7.2 give the user the ability to save their initials and their score