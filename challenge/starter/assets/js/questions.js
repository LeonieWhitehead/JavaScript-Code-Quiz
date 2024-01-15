const questions = [
  {
    question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
    options: [
      "To retrieve an HTML element by its class name",
      "To retrieve an HTML element by its tag name",
      "To retrieve an HTML element by its ID",
      "To retrieve an HTML element by its name"
    ],
    correctAnswer: 3
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "var",
      "let",
      "const",
      "all of the above"
    ],
    correctAnswer: 4
  },
  {
    question: "What does the '=== ' operator do in JavaScript?",
    options: [
      "Checks for equality without type coercion",
      "Checks for equality with type coercion",
      "Checks for inequality without type coercion",
      "Checks for inequality with type coercion"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you create a new array in JavaScript?",
    options: [
      "new Array()",
      "[]",
      "array()",
      "createArray()"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
    options: [
      "To remove an event listener",
      "To add an event listener",
      "To check if an event listener is active",
      "To modify an existing event listener"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is not a valid way to declare a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "var myFunction = function() {}",
      "const myFunction = () => {}",
      "myFunction: function() {}"
    ],
    correctAnswer: 4
  },
  {
    question: "What does the 'JSON' acronym stand for in JavaScript?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Object Naming",
      "Java Serialised Object Notation",
      "Java Serialised Object Naming"
    ],
    correctAnswer: 1
  },
  {
    question: "How can you prevent the default behavior of an HTML form submission using JavaScript?",
    options: [
      "event.stop()",
      "event.halt()",
      "event.preventDefault()",
      "event.cancel()"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the purpose of the 'localStorage' object in JavaScript?",
    options: [
      "To store session-specific data on the server",
      "To store data locally in the user's browser",
      "To store cookies",
      "To store data in a database"
    ],
    correctAnswer: 2
  },
  {
    question: "Which built-in function is used to sort the elements of an array in JavaScript?",
    options: [
      "sortArray()",
      "arrangeArray()",
      "sort()",
      "orderArray()"
    ],
    correctAnswer: 3
  }
];

// Example usage:
console.log(questions[0].question);
console.log("Options:", questions[0].options);
console.log("Correct Answer:", questions[0].correctAnswer);
