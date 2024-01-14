//select/get all required elements
const startScreen = document.getElementById("start");
const questionContainer = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const optionsList = document.getElementById("choices");


// track score,time, current question and correct answers
let score = 0;
let secondsLeft = 60;
let currentQuestion = 0;
let correctAnswer = 0;

startBtn.addEventListener("click", function () {
  console.log("button clicked");
  // startScreen.classList.remove("removeStartScreen");
  // questionContainer.classList.add("activeQuiz");
  showQuestion();
  countdown();
});


function showQuestion() {
  if (currentQuestion >= questions.length) {
    // End the quiz
    return;
  }
    let currentQ = questions[currentQuestion];
    questionTitleEl.textContent = currentQ.question;
    optionsList.innerHTML = "";
    currentQ.options.forEach((option, index) => {
      const choicesBtn = document.createElement("button");
      choicesBtn.textContent = option;
      choicesBtn.classList.add("choice");
      choicesBtn.addEventListener("click", () => {
        if (index === currentQ.correctAnswer) {
          score += 10;
        } else {
          secondsLeft -= 10;
        }
        currentQuestion++;
        showQuestion();
      });
      optionsList.appendChild(choicesBtn);
    });
   
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
  //       } else {
  //         secondsLeft -= 10;
  //       }
  //       currentQuestion++;
  //       showQuestion();
  //     });
      // add button to container
  //     choices.appendChild(choicesBtn);
  //   });
  // })}

  // 3.timer - check timer class activity
  function countdown() {
    secondsLeft
timeCount = setInterval(() => {
  secondsLeft--;
  scoreTimerEl.textContent = secondsLeft;
  if (secondsLeft <= 0) {
    clearInterval(timerId);
    // End the quiz here...
  }
 }, 60);}}

 function quizEnd() {
  clearInterval(timerId);
  // Display final score
  document.querySelector("#final-score").textContent = score;
  // Show end screen
  document.querySelector("#end-screen").classList.remove("hide");
 }
 