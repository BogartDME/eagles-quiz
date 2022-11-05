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
//create function for questions
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
		question: "What is Brian Dawkins' number?",
		choices: [
            { 
                choice1:"7", 
                choice2:"20",
                choice3:"24",
                correct: "20", //or false

            }
        ]
	
	}
];

// create function to show questions
function displayQuestions(){
    document.getElementById("start").style
    document.getElementById("quiz-container").style.display = "block";
    }

//create start game function that intiates timer and question functions
var startGame = function (){ displayQuestions, startTimer
}

document.getElementById(start).addEventListener("click", startGame);
    console.log(addEventListener)
    // button.addEventListener("click", displayQuestions);
    // button.addEventListener("click", startTimer);

    
//create document highscore function

//create function to display highscores