//get all required elements
const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
// const questionContainer = document.getElementById("questions");
const questionElement = document.getElementById("question-title");
// const questionTitleEl = document.getElementById("question-title");
const optionsList = document.getElementById("choices");
const timeCount = document.getElementById("time");

// track score,time, current question and correct answers
let currentQuestionIndex = 0;
let userScore = 0;
let secondsLeft = 60;
// let correctAnswer = 0;

startBtn.addEventListener("click", function () {
  console.log("button clicked");
  // startScreen.classList.remove("removeStartScreen");
  // questionContainer.classList.add("activeQuiz");
  showQuestion();
  countdown();
});

// 3.timer - check timer class activity
function countdown() {
    timeCount.textContent = secondsLeft;
    var timerId = setInterval(() => {
        secondsLeft--;
        timeCount.textContent = secondsLeft; 
        if (secondsLeft <= 0) {
            clearInterval(timerId);
        }
    }, 1000); 
}

function showQuestion() {
  // if (currentQuestion >= questions.length) {
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

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correctIndex) {
    userScore+= 10;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    secondsLeft -= 10;
    showResults();
  }
}

function showResults() {
  questionElement.textContent = `You scored ${userScore} out of ${questions.length}!`;
  optionsList.innerHTML = '';
}

function quizEnd() {
  // Show end screen
  document.querySelector("#end-screen").classList.remove("hide");
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

