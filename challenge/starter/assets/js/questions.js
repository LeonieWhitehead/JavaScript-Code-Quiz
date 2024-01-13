const questions = [
  {
    question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
    choices: [
      "To retrieve an HTML element by its class name",
      "To retrieve an HTML element by its tag name",
      "To retrieve an HTML element by its ID",
      "To retrieve an HTML element by its name"
    ],
    correctAnswer: "c"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: [
      "var",
      "let",
      "const",
      "all of the above"
    ],
    correctAnswer: "d"
  },
  {
    question: "What does the '=== ' operator do in JavaScript?",
    choices: [
      "Checks for equality without type coercion",
      "Checks for equality with type coercion",
      "Checks for inequality without type coercion",
      "Checks for inequality with type coercion"
    ],
    correctAnswer: "a"
  },
  {
    question: "How do you create a new array in JavaScript?",
    choices: [
      "new Array()",
      "[]",
      "array()",
      "createArray()"
    ],
    correctAnswer: "b"
  },
  {
    question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
    choices: [
      "To remove an event listener",
      "To add an event listener",
      "To check if an event listener is active",
      "To modify an existing event listener"
    ],
    correctAnswer: "b"
  },
  {
    question: "Which of the following is not a valid way to declare a function in JavaScript?",
    choices: [
      "function myFunction() {}",
      "var myFunction = function() {}",
      "const myFunction = () => {}",
      "myFunction: function() {}"
    ],
    correctAnswer: "d"
  },
  {
    question: "What does the 'JSON' acronym stand for in JavaScript?",
    choices: [
      "JavaScript Object Notation",
      "JavaScript Object Naming",
      "Java Serialised Object Notation",
      "Java Serialised Object Naming"
    ],
    correctAnswer: "a"
  },
  {
    question: "How can you prevent the default behavior of an HTML form submission using JavaScript?",
    choices: [
      "event.stop()",
      "event.halt()",
      "event.preventDefault()",
      "event.cancel()"
    ],
    correctAnswer: "c"
  },
  {
    question: "What is the purpose of the 'localStorage' object in JavaScript?",
    choices: [
      "To store session-specific data on the server",
      "To store data locally in the user's browser",
      "To store cookies",
      "To store data in a database"
    ],
    correctAnswer: "b"
  },
  {
    question: "Which built-in function is used to sort the elements of an array in JavaScript?",
    choices: [
      "sortArray()",
      "arrangeArray()",
      "sort()",
      "orderArray()"
    ],
    correctAnswer: "c"
  }
];

// Example usage:
console.log(questions[0].question);
console.log("choices:", questions[0].choices);
console.log("Correct Answer:", questions[0].correctAnswer);
