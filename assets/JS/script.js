//global var list
var card = document.querySelector(".card");
var eaglesHeader = document.querySelector(".eagles-header");
var myQuestions = document.querySelector(".quiz-container");
var scores = document.querySelector(".scores"); 
// var timerCard = document.querySelector(".clock"); 
// var timer = 90;
var timeEl = document.querySelector(".clock");
var startGame = document.querySelector("#start");
var timeLeft = 59;
var timerInterval;
var penalty;

//hide all the elements that need to be hidden until needed
questions 
scoreboard 
gameover 


//create function for a timer
function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft <= 0) { 
        clearInterval(timerInterval);
    }
    }, 1000);
    
}
// create function to show questions
var displayQuestions = function(){
    document.getElementById("start").style.display = "none;"
    document.getElementById("quiz-container").style.display = "block";
    }
    
    //create start game expression that intiates timer and question functions
    var startGame = function (){ displayQuestions, startTimer
        console.log("game has started")
    }
    
    //Create event listener to activate start game expression
    document.getElementById("start").addEventListener("click", startGame);
    console.log("start")
    
//create questions list
var myQuestions = [
    {
        question: "What is Brian Dawkins' number?",
        choices: [
            { 
                choice1:"7", 
                choice2:"20",
                choice3:"24",
                correct: "20", //or false

            }
        ]
    
    },
    
    {
        question: "What was Brian Dawkins' number?",
        choices: [
            { 
                choice1:"33", 
                choice2:"20",
                choice3:"24",
                choice4:"32",
                correct: "20" //or false

            }
        ]
    
    },
    {
        question: "How many Super Bowl appearances have the Eagles had?",
        choices: [
            { 
                choice1:"3", 
                choice2:"2",
                choice3:"7",
                choice:"5",
                correct: "3" //or false

            }
        ]
    
    },
    {
        question: "Which comic book characters have been tied to the Eagles in the last 15 years?",
        choices: [
            { 
                choice1:"Batman", 
                choice2:"Punisher",
                choice3:"Wolverine",
                choice4: "Batman and Wolverine",
                correct: "Batman and Wolverine" //or false

            }
        ]
    
    }
];









    
//create document highscore function

//create function to display highscores