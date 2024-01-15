//get all required elements
const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionContainer = document.getElementById("questions");
const questionElement = document.getElementById("question-title");
// const questionTitleEl = document.getElementById("question-title");
const optionsList = document.getElementById("choices");
const timeCount = document.getElementById("time");
const finalScore = document.getElementById("final-score");

// track score,time, current question and correct answers
let currentQuestionIndex = 0;
let userScore = 0;
let secondsLeft = 60;
let userSelections = [];
let timerId;
// let correctAnswer = 0;

startBtn.addEventListener("click", function () {
  console.log("button clicked");
  // --> lets hide the START container 
  // startScreen.setAttribute('class', 'hide');  // here we are overwritting the class value
  startScreen.classList.add("hide");  // here we are ADDING to the class list
  // --> UNHIDE our questions container
  questionContainer.classList.remove('hide');
 
  // questionElement.classList.add("activeQuiz");
  // document.querySelector("#start-screen").classList.remove("start");
  showQuestion();
  countdown();
});

function showQuestion() {
  // if (currentQuestionIndex >= questions.length) {
  //   // End the quiz
  //   return;
  // }
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  optionsList.innerHTML = "";
  question.options.forEach((option, index) => {
    const choicesBtn = document.createElement("button");
    choicesBtn.textContent = option;
    choicesBtn.classList.add("option");
    choicesBtn.addEventListener("click", () => checkAnswer(index));
    // showQuestion();
    optionsList.appendChild(choicesBtn);
  });
}

// 3.timer - check timer class activity
function countdown() {
    timeCount.textContent = secondsLeft;
    timerId = setInterval(() => {
        secondsLeft--;
        timeCount.textContent = secondsLeft; 
        if (secondsLeft <= 0) {
            clearInterval(timerId);
        }
    }, 1000); 
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  userSelections[currentQuestionIndex] = selectedIndex;

  if (selectedIndex === question.correctAnswer) {
    userScore+= 10;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    secondsLeft -= 10;
    
    quizEnd();
    showResults();
  }
}

function showResults() {
  // questionElement.textContent = `You scored ${userScore} out of ${questions.length}!`;
     // Calculate final score
  finalScore.userScore -= secondsLeft / 10;
  optionsList.innerHTML = '';
  console.log("User selections:", userSelections);
}

  function quizEnd() {
    // Stop the timer
    clearInterval(timerId);
  
    // Show end screen
    document.querySelector("#end-screen").classList.remove("hide");
    
    // Check if the quiz ended due to time expiration
    if (secondsLeft <= 0) {
      // Display a message indicating time expiration
      document.getElementById("final-score").textContent = "Time's up!";
    } else {
      // Display the actual final score
      document.getElementById("final-score").textContent = userScore;
      
      // Save high score to local storage
      let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      highscores.push({ name: "bingo", score: userScore });
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  }
   

// questionTitleEl.textContent = questions
// optionsList.forEach((optionsList, index) => {
//   optionsList.textContent = questions.choices[index];
//   console.log("showing question")

//   questionContainer.innerHTML = "";

//   // display choices
//   optionsList.innerHTML = "";
//   currentQuestion.choices.forEach((choiceText, index) => {

//     //add button for choices
//     const choicesBtn = document.createElement("button");

//     // display text on button
//     choicesBtn.textContent = choiceText;
//     choicesBtn.classList.add("choice");

//     // event listener for choice being clicked
//     choicesBtn.addEventListener("click", () => {
//       //adjust score correct answer
//       if (index === currentQuestion.correctAnswer) {
//         score += 10;
//         // adjust score incorrect answer
// startBtn.addEventListener("click", function () {
//   showQuestion();
//   countdown();
//    quizEnd();
// });


// highScores = [{}, {}]

// JSON - JavaScript Object Notation - Data Interchange 
// jsonObj = "{ "name": "bingo", "score": "50" }"
// --> stringify()
// --> parse()

// -- We need to CAPTUER the USER input --
// submit event --> capture data and then (?)
// newUser = { name: "bingo", score: 50 } --> dATA

// Persisting datastore - localStorage

// If not KEY exisits to GRAB then we get UNDEFINED
// var storedData = localStorage.getItem(key);
// localStorage.setItem(key, value);
localStorage.setItem("highscores", JSON.stringify([]));


// How would we ADD or modifty stroed data(?)
// 1) do we have stored Data(?)
// -- YES --> GRAB that data
// --- NO --> we need to initalize data

var storedData = localStorage.getItem("highscores");
console.log("data: ", storedData);
console.log("type: ", typeof storedData);
// data convertion
var jsData = JSON.parse(storedData);
console.log("data: ", jsData);
console.log("type: ", typeof jsData);
// "[]" | []
// .push() .pop() .filter() .map()
jsData.push({ name: "bingo", score: 50 })
console.log("data: ", jsData);

// we have to UPDATE locaStorage
localStorage.setItem("highscores", JSON.stringify(jsData))