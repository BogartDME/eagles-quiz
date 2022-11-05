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

//global var list
var card = document.querySelector(".card");
var eaglesHeader = document.querySelector(".eagles-header");
var scores = document.querySelector(".scores"); 
var timer = document.querySelector(".timer"); 





// create function to show questions
var displayQuestions = function(){
    document.getElementById("start").style.display = "none;"
    document.getElementById("quiz-container").style.display = "block";
    }

    
    //Create event listener to activate start game expression
    document.getElementById("start").addEventListener("click", startGame);
    console.log("start")
    
    //create start game expression that intiates timer and question functions
    var startGame = function (){ displayQuestions, startTimer
        console.log("game has started")
    }

//create function for a timer
function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function(){
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


    
//create document highscore function

//create function to display highscores