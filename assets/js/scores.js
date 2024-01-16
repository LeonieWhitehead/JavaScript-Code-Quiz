document.addEventListener("DOMContentLoaded", function () {
  // Get highscores from local storage
  const highscores = getHighScores();

  // Get the highscores list element
  const highscoresList = document.getElementById("highscores");

  // Display highscores on the page
  highscores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
    highscoresList.appendChild(listItem);
  });

  // Event listener for the "Clear Highscores" button
  document.getElementById("clear").addEventListener("click", function () {
    clearHighScores();
    // After clearing, update the displayed highscores
    highscoresList.innerHTML = "";
  });
});

function getHighScores() {
  return JSON.parse(localStorage.getItem("highscores")) || [];
}

function clearHighScores() {
  localStorage.removeItem("highscores");
}




