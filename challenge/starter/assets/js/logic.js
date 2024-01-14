// 1. create questions 
//1.1 how to store questions. Object. Array easier to iterate
// document.addEventListener("DOMContentLoaded", function () {
// const scoreTimerEl = document.getElementById("time");
// const finalScore = document.getElementById("final-score");
// const startBtn = document.getElementById("start");
// const startScreen = document.getElementById("start-screen");
// let questionTitleEl = document.getElementById("question-title");
// const choicesContainer = document.getElementById("choices-container");
// let choice = document.getElementById("choice")
// let start = document.querySelector(".wrapper")

let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");

// track score, time, current question and correct answers
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;


function quizStart() {
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  let landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}

function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let promptEl = document.getElementById("question-words");
  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  currentQuestion.options.forEach(function(choice, i) {
      let choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choiceBtn.onclick = questionClick;
      choicesEl.appendChild(choiceBtn);
  });
}

// // let correctAnswer = 0;

// // //define question variable
// // question;
// // track final score

// // // 2. start button when clicked
// //2.1 event listener 
// document.addEventListener("DOMContentLoaded", function () {
//   const startBtn = document.getElementById("start");
//   startBtn.addEventListener("click", () => {
//     console.log("button clicked");

// //     // hide start page
//     startScreen.style.display = "none";
//     console.log("start screen hidden");

// //     //start the quiz by showing first question
// //     showQuestion();
// //   });
// // });
// function showDiv(divId){
//   let element =document.getElementById(divId);
//   element.classList.remove("hide");
//   element.classList.add("start");
// }

// function hideDiv(divId){
//   let element =document.getElementById(divId);
//   element.classList.add("hide");
//   element.classList.remove("start");

// startBtn.addEventListener("click", function(){
// hideDiv("start-screen");
// showDiv("questions");
// showQuestion(); 
// });


// function showQuestion(){
//   // display question 
//   // if (currentQuestion >= questions.length){
//   //   return;
//   // }

//   // let currentQuestionObj = questions[currentQuestion];
//   // questionTitleEl.textContent = currentQuestionObj.question;
  
//   choicesContainer.innerHTML = "";

//  // display question title
//   questionTitleEl.textContent = questions[currentQuestion].question;

//  // display choices
//   questions[currentQuestion].choice.forEach((choiceText, index) => {

//     //add button for choices
//     const choicesBtn = document.createElement("button");

//     // // display text on button
//     choicesBtn.textContent = choice;
//     choicesBtn.classList.add("choice");

//     // event listener for choice being clicked
//     choicesBtn.addEventListener("click", () => {

//     //   //adjust score correct answer
//     if (index === questions[currentQuestion].correctAnswer - 1) {
//    score += 10;
   
//    } else {
//     // adjust score incorrect answer
//     secondsLeft -= 10;
//     }
//       currentQuestion++;
//       showQuestion();
//     });
//     // add button to container
//     choicesContainer.appendChild(choicesBtn);

//     console.log("Showing question");
// });
//  }


//   //iterate over choices array

// // 3.timer - check timer class activity
// let timerId = setInterval(() => {
//   secondsLeft--;
//   scoreTimerEl.textContent = secondsLeft;
//   if (secondsLeft <= 0) {
//     clearInterval(timerId);
//     // End the quiz here...
//   }
//  }, 1000);

// // add the question to the page


// //  }


// // }
// // 4. buttons for each answer
// // 5. When answer is clicked, the next question appears - event listener
// // 6. If the answer clicked was incorrect then subtract time from the clock
// // 6.1 event listener
// // 6.2 decrement timer - check timer class activity
// // 7. quiz ends when all questions are answered or the timer reaches 0.
// // 7.1 When the game ends, it should display their score
// // 7.2 give the user the ability to save their initials and their score
// }
// })
// })})