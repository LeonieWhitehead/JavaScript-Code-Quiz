// 1. create questions 
//1.1 how to store questions. Object. Array easier to iterate
const scoreTimerEl = document.getElementById("time");
const finalScore = document.getElementById("final-score");
const startBtn = document.querySelector(".start");
const startScreen = document.getElementById("start-screen");
let questionTitleEl = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices-container");
let choice = document.getElementById("choice")
// let start = document.querySelector(".wrapper")

// track score,time, current question and correct answers
let score = 0;
let secondsLeft = 60;
let currentQuestion = 0;
let correctAnswer = 0;

//define question variable
let question;
// track final score

// // 2. start button when clicked
//2.1 event listener 
// document.addEventListener("DOMContentLoaded", function () {
//   const startBtn = document.getElementById("start");
//   startBtn.addEventListener("click", () => {
//     console.log("button clicked");

//     // hide start page
//     startScreen.style.display = "none";
//     console.log("start screen hidden");

//     //start the quiz by showing first question
//     showQuestion();
//   });
// });
function showDiv(divId){
  let element =document.getElementById(divId);
  element.classList.remove("hide");
  element.classList.add("start");
}

function hideDiv(divId){
  let element =document.getElementById(divId);
  element.classList.add("hide");
  element.classList.remove("start");

startBtn.addEventListener("click", function(){
hideDiv("start-screen");
showDiv("questions");
showQuestion(); 
});


function showQuestion(){
  // display question 
  if (currentQuestion >= questions.length){
    return;
  }
}

  let currentQuestionObj = questions[currentQuestion];
  questionTitleEl.textContent = currentQuestionObj.question;

  // display choices
  choicesContainer.innerHTML = "";
  currentQuestionObj.choice.forEach((choiceText, index) => {

    //add button for choices
    const choicesBtn = document.createElement("button");

    // // display text on button
    choicesBtn.textContent = choiceText;
    choicesBtn.classList.add("choice");

    // event listener for choice being clicked
    choicesBtn.addEventListener("click", () => {
    //   //adjust score correct answer
    //   if (index === currentQuestionObj.correctAnswer) {
    //     score += 10;
    //     // adjust score incorrect answer
    //   } else {
    //     secondsLeft -= 10;
    //   }
    //   currentQuestion++;
    //   showQuestion();
    // });
    // // add button to container
    // choicesContainer.appendChild(choicesBtn);

    // console.log("Showing question");
// });
//  }


  //iterate over choices array

// 3.timer - check timer class activity
// let timerId = setInterval(() => {
//   secondsLeft--;
//   scoreTimerEl.textContent = secondsLeft;
//   if (secondsLeft <= 0) {
//     clearInterval(timerId);
//     // End the quiz here...
//   }
//  }, 1000);

// add the question to the page


//  }


// }
// 4. buttons for each answer
// 5. When answer is clicked, the next question appears - event listener
// 6. If the answer clicked was incorrect then subtract time from the clock
// 6.1 event listener
// 6.2 decrement timer - check timer class activity
// 7. quiz ends when all questions are answered or the timer reaches 0.
// 7.1 When the game ends, it should display their score
// 7.2 give the user the ability to save their initials and their score
