// 1. create questions 
  //1.1 how to store questions. Object. Array easier to iterate
const scoreTimerEl = document.getElementById ("time");
const finalScore = document.getElementById("final-score");
const startBtn = document.getElementById("start");
const startScreen = document.getElementById ("start-screen");
const questionTitleEl = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices-container");

// track score,time, current question and correct answers
let score = 0;
let secondsLeft = 60;
let currentQuestion = 0;
let correctAnswer = 0;

// track final score

// // 2. start button that when clicked
//   //2.1 event listener 
startBtn.addEventListener("click", () =>{
  console.log("button clicked");

// hide start page
  startScreen.style.display = "none";
  console.log("start screen hidden");

  //start the quiz by showing first question
  showQuestion();
});

  function showQuestion(){
    console.log("Showing question");
    // display question title
    questionTitleEl.textContent = questions[currentQuestion].question;
  
    // display choices
    choicesContainer.innerHTML = "";
    questions[currentQuestion].choices.forEach((choices, index)) => {
      
    }
    // const choicesEl = document.querySelectorAll(".choices");

    // choicesEl.forEach((choices, index) =>{
    // choices.textContent = questions[currentQuestion].choices[index];
  };
// 3.timer - check timer class activity
  // set function
  function countdown() {
    secondsLeft
  }
// add the question to the page
// for (let i = 0; i < questions.length; i++) {
//   // const element = array[index];
// function showQuestion() {
  
// }

  
// }
// 4. buttons for each answer
// 5. When answer is clicked, the next question appears - event listener
// 6. If the answer clicked was incorrect then subtract time from the clock 
  // 6.1 event listener
  // 6.2 decrement timer - check timer class activity
// 7. quiz ends when all questions are answered or the timer reaches 0.
  // 7.1 When the game ends, it should display their score
  // 7.2 give the user the ability to save their initials and their score