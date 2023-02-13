var startEl = document.querySelector("#start")
var startHide = document.querySelector(".start")
var timeEl = document.querySelector("#time")
var quesionsEl = document.querySelector("#questions")
var questionEl = document.querySelector("#questions")
var answerBtnEl = document.querySelector("#choices")

var shuffledQuestions, currentQuestionIndex

var secondsLeft = 30



startEl.addEventListener("click", startQuiz)
startEl.addEventListener("click", getQuestions)

// Function to start the quiz
function startQuiz () {
    
    startHide.classList.add("hide")
    startEl.classList.add('hide')
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Game have finish!!")
    }
    }, 1000)
       
}

// function to get questions

function getQuestions() {
    console.log('started')
    quesionsEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    showQuestion()
}

function showQuestion() {
    questionEl.innerText = question.question
}

const question = [
    {
    question: 'what is 2 + 2',
    answer: 2
    }
]