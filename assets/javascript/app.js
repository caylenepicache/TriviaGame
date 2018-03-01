$(document).ready(function() {

//GLOBAL VARIABLES
var correct = 0;
var wrong = 0;
var answered = 0;
var count = 31;
var currentQuestion = 0;
var value;

var triviaGame = {
/*
reset: function() {
    count = 30;

}, */
start: function() {


},
/*stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
},
recordLap: function() {
    var converted = stopwatch.timeConverter(stopwatch.time);
    $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");
    stopwatch.lap++;
},
*/

questionTimer: function() {
    var counter = setInterval(timer, 1000);
    function timer(){
        if (count === 0) {
            clearInterval(count);
        }
        if (count > 0) {
            count--;
        }
        $("#displayTimer").html("Time Remaining: " + count);
        //console.log(count);
}
}

};

  var questionBox = [

    q1 = {
        question: 'Sushi is one of the most recognizable dishes from Japan. What does sushi roughly translate to?',
        choices: ['A. raw fish', 'B. seaweed and rice', 'C. vinegar rice', 'D. rice roll'],
        answer: 3,
        gif: 'assets/images/GIF.gif'

    },
    q2 = {
        question: 'What is the nickname for the country of Japan?',
        choices: ['A. Land of the Rising Sun', 'B. Land of the Setting Sun', 'C. Land of the Midnight Sun', 'D. Land of the Morning Sun'],
        answer: 1,
        gif: 'assets/images/gif.gif'

    },
    q3 = {
        question: 'What is the capital of Japan',
        choices: ['A. Kyoto', 'B. Hiroshima', 'C. Okinawa', 'D. Tokyo'],
        answer: 4,
        gif: 'assets/images/gif.gif'
    },
    q4 = {        
        question: 'What is the capital of Japan',
        choices: ['A. Kyoto', 'B. Hiroshima', 'C. Okinawa', 'D. Tokyo'],
        answer: 4,
        gif: 'assets/images/gif.gif'
    },
    q5 = {
        question: 'What year will Tokyo host the Olympics?',
        choices: ['A. 2018', 'B. 2020', 'C. 2022', 'D. 2024'],
        answer: 2,
        gif: 'assets/images/gif.gif'
    },
    q6 = {
        question: 'Which one of these characters was NOT made in Japan?',
        choices: ['A. Pikachu', 'B. Hello Kitty', 'C. Goofy', 'D. Mario'],
        answer: 3,
        gif: 'assets/images/gif.gif'

    },
    q7 = {
        question: 'Japan has around 5.5 million __________, that sell items such as beer, comic books, bags of rice, and even toilet paper',
        choices: ['A. vending machines', 'B. convenience stores', 'C. drive-thrus', 'D. push-carts'],
        answer: 1,
        gif: 'assets/images/gif.gif'

    },
    q8 = {
        question: 'Trains are a main source for transportation. What is the highest speed on a Japanese bullet train?',
        choices: ['A. 421km/hr', 'B. 575km/hr', 'C. 603km/hr', 'D. 700km/hr'],
        answer: 3,
        gif: 'assets/images/gif.gif'

    },
    q9 = {
        question: 'What is the name of the highest mountain in Japan?',
        choices: ['A. Mount Kita', "B. Mount Hijiri", "C. Mount Yari", "D. Mount Fuji"],
        answer: 4,
        gif: 'assets/images/gif.gif'

    },
    q10 = {
        question: 'What is the name of the most famous dog from Japan, who even has a statue made after him?',
        choices: ['A. Mari', 'B. Hachiko', 'C. Akita', 'D. Maru'],
        answer: 2,
        gif: 'assets/images/gif.gif'

    }

  ];




$("#startScreen").on('click', function(){
    console.log('Game begins');
    $("#startScreen").hide();
    letsPlay();
});

function reset(){
    currentQuestion = 0;
}

function letsPlay() {
    triviaGame.questionTimer();
    retrieveQuestions();
};

function retrieveQuestions(){
    $("#displayQuestion").html(questionBox[currentQuestion].question);
    $("#choiceone").html(questionBox[currentQuestion].choices[0]);
    $("#choicetwo").html(questionBox[currentQuestion].choices[1]);
    $("#choicethree").html(questionBox[currentQuestion].choices[2]);
    $("#choicefour").html(questionBox[currentQuestion].choices[3]);

    console.log(questionBox[currentQuestion].answer);

    $('[id^="choice"]').on('click', function(){
        value = $(this).attr('value')
        console.log(value);

    if (value == questionBox[currentQuestion].answer) {
        console.log('TRUE');
        correct++;
        console.log("Correct: " + correct);
        //function FOR RIGHT ANSWER
        //break to next question
    }
    else {
        console.log('FALSE');
        wrong++;
        console.log("Wrong: " + wrong);
        //FUNCTION FOR WRONG ANSWER
        //BREAK TO NEXT QUESTION
    };


});

};


});

