//get all required elements
const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionContainer = document.getElementById("questions");
const questionElement = document.getElementById("question-title");
// const questionTitleEl = document.getElementById("question-title");
const optionsList = document.getElementById("choices");
const timeCount = document.getElementById("time");
const finalScore = document.getElementById("final-score");
const highScores = document.getElementById("highscores");

// track score,time, current question and correct answers
let currentQuestionIndex = 0;
let userScore = 0;
let secondsLeft = 60;
let userSelections = [];
let timerId;
let finalScoreValue;
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

    if (secondsLeft >= 0) {
      timeCount.textContent = secondsLeft;
    }

    if (secondsLeft <= 0) {
      clearInterval(timerId);
      questionContainer.classList.add('hide');
      quizEnd();
    }
  }, 1000);
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  userSelections[currentQuestionIndex] = selectedIndex;

  const feedbackElement = document.createElement("p");

  if (selectedIndex === question.correctAnswer) {
    // Correct answer selected, add feedback 
    feedbackElement.textContent = "Correct!";
    feedbackElement.classList.add("correct-feedback");

    // Play correct sound
    document.getElementById("correctSound").play();

    secondsLeft += 10;
    userScore += 10;

  } else {
    // Incorrect answer selected, add feedback 
    feedbackElement.textContent = "Wrong!";
    feedbackElement.classList.add("wrong-feedback");

    // Play incorrect sound
    document.getElementById("incorrectSound").play();

    secondsLeft = Math.max(0, secondsLeft - 10);
  }

  // Append the feedback element to the question container
  questionContainer.appendChild(feedbackElement);

  // setTimeout to remove the feedback
  setTimeout(() => {
    feedbackElement.remove();

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      optionsList.innerHTML = "";
      showQuestion();
    } else {
      quizEnd();
      questionContainer.classList.add('hide');
      showResults();
    }
  }, 1000);
}

function showResults() {
  // questionElement.textContent = `You scored ${userScore} out of ${questions.length}!`;
  finalScoreValue = userScore + secondsLeft;
  // Calculate final score (rounded to nearest integer)
  // userScore = Math.max(0, Math.round(userScore - secondsLeft / 10));

  finalScore.textContent = `Your final score is: ${finalScoreValue}`;

  // Show the initials input field and submit button
  document.getElementById("initials").classList.remove("hide");
  document.getElementById("submit").classList.remove("hide");

  // Event listener for the submit button
  document.getElementById("submit").addEventListener("click", function () {
    // Get the user's initials from the input field
    const userInitials = document.getElementById("initials").value;

    // Store the user's initials and score in local storage
    if (userInitials) {
      finalScoreValue = userScore + secondsLeft;
      saveScore(userInitials, finalScoreValue);

      // Redirect to highscores page
    window.location.href = "highscores.html";
      // let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      // highscores.push({ initials: userInitials, score: finalScoreValue });
      // localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  });


    // optionsList.innerHTML = '';
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
    highscores.push({ name: "", score: userScore });
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}

function saveScore(initials, score) {
  let highscores = getHighScores();
  highscores.push({ initials, score });
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

function getHighScores() {
  return JSON.parse(localStorage.getItem("highscores")) || [];
}

// Function to get highscores from local storage
function getHighScores() {
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  return highscores;
}

// Function to display highscores on the page
// function showResults() {
//   const highscores = getHighScores();
// }

// Function to clear highscores
function clearHighScores() {
  localStorage.removeItem("highscores");
  showResults();
}

// document.getElementById("clear").addEventListener("click", function () {
//   window.location.href = "challenge/starter/index.html";
// });
// function showHighScores() {
//     // Hide other screens
//     startScreen.classList.add("hide");
//     questionContainer.classList.add('hide');
//     document.querySelector("#end-screen").classList.add("hide");

// Show high scores screen
// Get high scores from local storage
// Display high scores
// }


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
// var jsData = JSON.parse(storedData);
// console.log("data: ", jsData);
// console.log("type: ", typeof jsData);
// // "[]" | []
// // .push() .pop() .filter() .map()
// jsData.push({ name: "bingo", score: 50 })
// console.log("data: ", jsData);

// we have to UPDATE locaStorage
// localStorage.setItem("highscores", JSON.stringify(jsData))