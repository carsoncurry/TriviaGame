const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "How many fingers did T. rex have on each hand?",
    answers: {
      a: "One",
      b: "Two",
      c: "Three",
      d: "Four"
    },
    correctAnswer: "b"
  },
  {
    question: "Which popular comic strip is responsible for the tail of a Stegasaurus being called a thagomizer?",
    answers: {
      a: "Garfield",
      b: "Calvin and Hobbes",
      c: "The Far Side",
      d: "Ziggy"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of these Mighty Morphin Power Rangers zords was actuall a dinosaur?",
    answers: {
      a: "Pterodactyl",
      b: "Mastodon",
      c: "Sabretooth Tiger",
      d: "None of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Which modern bird would Velociraptor most closely resemble?",
    answers: {
        a: "Ostrich",
        b: "Albatross",
        c: "Turkey",
        d: "Falcon"
    },
    correctAnswer: "c"
  },
  {
      question: "Which of these dinosaurs actually lived during the Jurassic Period?",
      answers: {
          a: "Tyrannosaurus rex",
          b: "Triceratops",
          c: "Velociraptor",
          d: "Stegosaurus"
      },
      correctAnswer: "d"
  },
  {
      question: "Which of these extinct creatures do scientists think can be brought back through cloning?",
      answers: {
          a: "Wooly Mammoth",
          b: "Triceratops",
          c: "Mosasaurus",
          d: "Megalodon"
      },
      correctAnswer: "a"
  },
  {
      question: "Which of these dinosaurs is made-up?",
      answers: {
          a: "Supersaurus",
          b: "Megasaurus",
          c: "Ultrasaurus",
          d: "Titanosaur"
      },
      correctAnswer: "b"
  },
  {
      question: "What is the English translation of Tyrannosaurus rex?",
      answers: {
          a: "Titanic scaly emperor",
          b: "Tyrannical snake dictator",
          c: "Tyrant lizard king",
          d: "Typical dinosaur example"
      },
      correctAnswer: "c"
  },
  {
    question: "Which of these modern animals DID NOT exist at the same time as the dinosaurs?",
    answers: {
        a: "Human beings",
        b: "Bees",
        c: "Crocodiles",
        d: "Spiders"
    },
    correctAnswer: "a"
  },
  {
    question: "What does life do?",
    answers: {
        a: "Uh, catches a ride.",
        b: "Uh, waits its turn.",
        c: "Uh, spends a fortune.",
        d: "Uh, finds a way."
    },
    correctAnswer: "d"
  }

];

    function buildQuiz() {
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    $("#submit").on("click", showResults);

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll(".answers");
  
      let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
  
          answerContainers[questionNumber].style.color = "black";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    };

    buildQuiz();

    $("#start").on("click", gameClock);
    var number = 100;
    var intervalId;

    function gameClock() {

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    };

    function decrement() {
        number--;

        $("#timer").html("Time remaining: " + number);

        if (number === 0) {
            stop();

            alert("Game Over. You're extinct!");
        }
    };

    function stop() {
        clearInterval(intervalId);
    };
