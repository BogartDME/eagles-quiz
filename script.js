
//create function for a timer
function startTimer(duration, display) {
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

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
//create function for questions
var myQuestions = [
	{
		question: "...";
		choices: [
            { 
                text: "..."
                is correct: true; //or false

            }
        ]
	
	},
	
];

// create function to show questions
document.getElementById("element").style.display = "none";

//create start game function that intiates timer and question functions

//create document highscore function

//create function to display highscores