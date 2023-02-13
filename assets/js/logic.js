
var questions =[
    {
        questionTitle: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<script>', '<scripting>', '<js>', '<javascript>'],
        answer: '<script>'
    },
    {
        questionTitle: 'How do you write "Hello World" in an alert box?',
        choices: ['AlertBox("Hello Worl")', 'msg("Hello Worl")', 'alert("Hello Worl")', 'msgBoxalert("Hello Worl")'],
        answer: 'alert("Hello Worl")'
    },
    {
        questionTitle: 'How to write an IF statement in JavaScript?',
        choices: ['if i == 5 then)', 'if(i == 5) then', 'if i = 5', 'if(i === 5)'],
        answer: 'if(i === 5)'
    },
    {
        questionTitle: 'How does a FOR loop start?',
        choices: ['for(var i = 0; i <= 5;)', 'for (i <= 5; i++)', 'for(var i = 0; i <= 5; i++)', 'for(var i = 0; i++)'],
        answer: 'for(var i = 0; i <= 5; i++)'
    },
   {
        questionTitle: 'How can you add a comment in a JavaScript?',
        choices: ['//This is a comment', '--This is a comment', '<!-- This is a comment -->', '/This is a comment'],
        answer: '//This is a comment'
    }
]


var timerEl = document.querySelector(".timer")
var startEl = document.querySelector("#start")
var questionsEl = document.querySelector("#questions");
var finalScoreEl = document.querySelector("#final-score")
var submitEl = document.querySelector("#submit")
var initialScoreEl = document.querySelector("#initials")
var feedbackEl = document.querySelector("#feedback")
var choicesEl = document.querySelector("#choice");
var choicesHolder = document.querySelector("choices")
var startScreenEl = document.querySelector("#start-screen"); 
var endScreenEl = document.querySelector("#end-screen")
var timeAmount = questions.length * 5;
var quizIndex = 0;
var choicesHolder = document.querySelectorAll("choices")
var highscoresEl = document.querySelector("#highscores")


var sfxCorrect = new Audio('./assets/sfx/correct.wav') 
var sfxIncorrect = new Audio('./assets/sfx/incorrect.wav')
var timerId



//startEl.addEventListener("click", getQuestion)

var sfxCorrect = new Audio('./assets/sfx/correct.wav') // doing better
var sfxIncorrect = new Audio('./assets/sfx/incorrect.wav')



var finalScore = 0;



startEl.addEventListener("click", startQuiz)

//Function to starQuiz

function startQuiz () {
    
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerEl.textContent = timeAmount;
    timerId = setInterval(timer, 1000);
    getQuestion();
       
}
   
// function to get the questions

function getQuestion () {
    var currentQuestion = questions[quizIndex]
    var question = document.querySelector('#question-title')
    var choicesHolder = document.querySelector("#choices")
   question.textContent = currentQuestion.questionTitle

   currentQuestion.choices.forEach ( function (choice, i) {
   var choiceBtn = document.createElement("button");
   choiceBtn.setAttribute("class", "choices");
   choiceBtn.setAttribute("value", choice);
   choiceBtn.textContent = i + 1 + ". " + choice;
   choicesHolder.appendChild(choiceBtn);

   choiceBtn.addEventListener("click", function () {
    //console.log("I am event listener");
   
   
    if (quizIndex === questions.length - 1){
        if(choiceBtn.value === currentQuestion.answer) {
            //finalScore ++
            sfxCorrect.play();
        }
        //finalScore.textContent = finalScore + "/" + questions.length
        questionsEl.setAttribute("class", "hide")
        endScreenEl.setAttribute("class", "visible")
        
        clearInterval(timerId)
        return
        
    } 
    
    if(choiceBtn.value === currentQuestion.answer){
        finalScore += 5
        //console.log(finalScore)
        sfxCorrect.play();
        quizIndex++
        choicesHolder.innerHTML = ""
        
        getQuestion()
    } else if (choiceBtn.value !== currentQuestion.answer){
       question.textContent = questions[quizIndex].questionTitle;
      // console.log(finalScore)
       sfxIncorrect.play();
       timeAmount -= 5
       quizIndex++
       choicesHolder.innerHTML = ""
       getQuestion();
    }
   });
   console.log(finalScore)
   localStorage.setItem("finalScore", finalScore)
   var score = localStorage.getItem("finalScore")
   finalScoreEl.textContent = score

});
}
 


// finction for the timer
function timer() {
   timeAmount--;
   if(timeAmount <= 0) {
    timeAmount = 0

   }
   timerEl.textContent = timeAmount;
}
 
// function for taking the scores


// function submit button


var highscoresArr = []
var initialsArr = []

submitEl.addEventListener("click", function(event){
   event.preventDefault();
    console.log("clicked")
    window.location.href="highscores.html"
    var initials = document.querySelector("#initials").value;
    initialsArr.push(initials);
    localStorage.setItem("initials", JSON.stringify(initialsArr))
    
    var finalScore = doucment.querySelector("#final-score").value;
    highscoresArr.push(finalScore);
    localStorage.setItem("finalScore", highscoresArr  )
       
      
 
})
  


function highscores () {
   // var finalInitials = JSON.parse(localStorage.getItem("initials"));
    
    //for(var i = 0; i < highscores.length; i ++){
        var liInitials= document.createElement("li")
         liInitials.textContent = localStorage.getItem("initials")
         ("#highscores").append(liInitials)

   // }
    

}

highscores()
   /* 
    var initials = localStorage.getItem("initials")   //.value.trim()
    var highscoresEl = document.querySelector("#highscores")
    var finalScore =  localStorage.getItem("finalScore")
    
    

    highscoresEl.textContent = finalScore
    highscoresEl.textContent = initials


    var initials = localStorage.getItem("initials")   //.value.trim()
    var finalScore =  localStorage.getItem("finalScore")
}
    // highscoresEl.textContent = initials
    if(initials !== ""){
        var highscores = JSON.parse(localStorage.getItem("highscores", highscores))
     var newScore = {
        score: finalScore,
        initials: initials
     };

     //highscores.push(newScore);
     //localStorage.setItem("highscores", JSON.stringify(highscores))
    
    //}
  
}

highscores();*/