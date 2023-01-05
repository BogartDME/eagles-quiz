//global var list
var myQuestions = [
    
        
            { 
                question: "What is Brian Dawkins' number?",
                choice1:"7", 
                choice2:"20",
                choice3:"24",
                choice4:"30",
                correct: "B", //or false

            },
    
            {
            
            
                question: "How many Superbowl appearances have the Eagles had?",
                choice1:"4", 
                choice2:"1",
                choice3:"2",
                choice4:"3",
                correct: "D" //or false

            },

            {
            
                question: "Which quarterback has tied the league record for most touchdown passes in one game?",
                choice1:"Donavan McNabb", 
                choice2:"Ron Jawarsky",
                choice3:"Nick Foles",
                choice:"Randall Cunningham",
                correct: "C" //or false

            },
    
            {
        
                question: "Which comic book characters have been tied to the Eagles in the last 15 years?",
                choice1:"Batman", 
                choice4: "Batman and Wolverine",
                choice2:"Punisher",
                choice3:"Wolverine",
                correct: "B" //or false

            }
];

var eaglesHeader = document.querySelector(".eagles-header");
var scores = document.querySelector("#hs-container"); 
var timeEl = document.querySelector("#clock");
var startGame = document.querySelector("#start");
var gameOver = document.querySelector(".all-done")
var timerInterval;
var penalty;
var timeLeft; 
let currentQuestion;  
var question = document.getElementById("question");
var choice1 = document.getElementById("A"); 
var choice2 = document.getElementById("B"); 
var choice3 = document.getElementById("C"); 
var choice4 = document.getElementById("D"); 
var initiateQuiz = myQuestions.length-1; 


//create function for a timer
function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft <= 0) { 
        clearInterval(timerInterval);
        window.alert("Oops, you don't know much about the Eagles!");
    }
    }, 1000);
    
}
    
function quizQuestions(){
    let nextQuestion = myQuestions[currentQuestion];
        question.innerHTML = nextQuestion.question;
        choice1.innerHTML = nextQuestion.choice1;
        choice2.innerHTML = nextQuestion.choice2;
        choice3.innerHTML = nextQuestion.choice3;
        choice4.innerHTML = nextQuestion.choice4;
}
startGame.addEventListener("click", function(){
    timeLeft= 60;
    currentQuestion = 0;
    startTimer();
    quizQuestions();
});

function gradingQuestions(gradeQuestion) {
    penalty = timeLeft -5;
    if (gradeQuestion == myQuestions[currentQuestion].correct){
        currentQuestion++
        if (initiateQuiz >= currentQuestion) {
            questions();
    }}
    else if (gradeQuestion != myQuestions[currentQuestion].correct){
        timeLeft = penalty;
        currentQuestion++
    } if (initiateQuiz >= currentQuestion) {
            questions();
    } if (currentQuestion == myQuestions.length){
        return endQuiz();
    }
};

    
//create questions list

let topScores = JSON.parse(localStorage.getItem("player&score")) || [];

var endQuiz = function(){
    var playerInput = window.prompt("Good job! Please enter your name to be added to the scoreboard!");
    playerName = playerInput;
    clearInterval(timerInterval);
    playerInfo = {
        name: playerName.trim,
        timer: timeLeft
    };
    score.push(playerInfo);
    localStorage.setItem("player&score", JSON.stringify(score));
    displayScoreBoard();
}

function displayScoreBoard(){
    let string = ""
    for( let i = 0; i<score.length; i++){
        string += `<li> ${score[i].name} ${score[i].timer}<li>`
    }
    document.querySelector("#hs-header").innerHTML = string
};







// // Get the modal
// // Get the button that opens the modal
// var btn = document.getElementById("modalBtn");

// var modal = document.getElementById("instructions-modal");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




//scoreboard functions
//create gameover function    
// var gameOver = function
//create document highscore function
