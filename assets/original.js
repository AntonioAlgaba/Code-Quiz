var starBtn = document.querySelector('#start');
var timerEl = document.querySelector('.timer');
var finalScoreEl = document.querySelector('#final-score');
var questionsEl = document.querySelector('#questions');
var choicesEl = document.querySelector('#choices');
var submitEl = document.querySelector('#submit');
var initialScoreEl = document.querySelector('#initials');
var feedbackEl = document.querySelector('#feedback');

var quizIndex = 0;
var time = question.length * 5 /// this give us 5 seonds per question
var timerID;
var gameState = false

var sfxCorrect = new Audio('./assets/sfx/correct.wav') // doing better
var sfxIncorrect = new Audio('./assets/sfx/incorrect.wav')

// Function to start quiz
function startQuiz() {
    timerEl.textContent = timer;
    var startScreenEl = document.querySelector('#start-screen');
    startScreenEl.setAttribute('class', 'hide')
    questionsEl.removeAttribute('class')
    timerID = seInterval(clockTick, 1000)
    timerEl.textContent = timer;
    getQuestion()
}

// Function to get the questions
function getQuestion() {
    var currentQuestion = question[quizIndex];

    var question = document.getElementById('question-title')
    questionTitle.textContent = currentQuestion.questionTitle

    currentQuestion.choices.forEach(function(choice, i) {

        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choices');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick

        choicesEl.appendChild(choiceBtn);
    });
}

console.log(getQuestion())
// Function for the question click

// Function to end the quiz

// Function for the timer to start counting down

// Function for saving the high score

// Function to check if you've pressed enter 

// Functino to 

//startButton.onclick = startQuiz