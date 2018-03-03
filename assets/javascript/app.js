$(document).ready(function() {

//GLOBAL VARIABLES
var correct = 0;
var wrong = 0;
var answered = 0;
var unanswered = 0;
var count = 30;
var currentQuestion = 0;
var value;
var counter;
var isClockRunning = false;

var triviaGame = {

reset: function () {
    clearInterval(counter);
    count = 30;
    $("#displayTimer").html("Time Remaining: " + count);
},

start: function() {
    if (!isClockRunning) {
    counter = setInterval(triviaGame.questionTimer, 1000);
    isClockRunning = true;
    }
}, 

stop: function() {
    clearInterval(counter);
    isClockRunning = false;

},

questionTimer: function() {
    count--;
    if (count === 0) {
        clearInterval(count);
        timedOut();
    }
    if (count >= 0) {
    $("#displayTimer").html("Time Remaining: " + count);
    }
}


};

  var questionBox = [

    q1 = {
        question: 'Sushi is one of the most recognizable dishes from Japan. What does sushi roughly translate to?',
        choices: ['A. raw fish', 'B. seaweed and rice', 'C. vinegar rice', 'D. rice roll'],
        answer: 3,
        gif: 'assets/images/sushi.gif'

    },
    q2 = {
        question: 'What is the nickname for the country of Japan?',
        choices: ['A. Land of the Rising Sun', 'B. Land of the Setting Sun', 'C. Land of the Midnight Sun', 'D. Land of the Morning Sun'],
        answer: 1,
        gif: 'assets/images/risingsun.gif'

    },
    q3 = {
        question: 'What is the capital of Japan?',
        choices: ['A. Kyoto', 'B. Hiroshima', 'C. Okinawa', 'D. Tokyo'],
        answer: 4,
        gif: 'assets/images/tokyo.gif'
    },
    q4 = {        
        question: 'Ikebana is a popular Japanese art of arranging _______.',
        choices: ['A. Fruit', 'B. Books', 'C. Furniture', 'D. Flowers'],
        answer: 4,
        gif: 'assets/images/ikebana.gif'
    },
    q5 = {
        question: 'What year will Tokyo host the Olympics?',
        choices: ['A. 2018', 'B. 2020', 'C. 2022', 'D. 2024'],
        answer: 2,
        gif: 'assets/images/olympics.gif'
    },
    q6 = {
        question: 'Which one of these characters was NOT made in Japan?',
        choices: ['A. Pikachu', 'B. Hello Kitty', 'C. Goofy', 'D. Mario'],
        answer: 3,
        gif: 'assets/images/goofy.gif'

    },
    q7 = {
        question: 'Japan has around 5.5 million __________, that sell items such as beer, comic books, bags of rice, and even toilet paper',
        choices: ['A. vending machines', 'B. convenience stores', 'C. drive-thrus', 'D. push-carts'],
        answer: 1,
        gif: 'assets/images/vendingmachine.gif'

    },
    q8 = {
        question: 'Trains are a main source for transportation. What is the highest speed on a Japanese bullet train?',
        choices: ['A. 421km/hr', 'B. 575km/hr', 'C. 603km/hr', 'D. 700km/hr'],
        answer: 3,
        gif: 'assets/images/shinkansen.gif'

    },
    q9 = {
        question: 'What is the name of the highest mountain in Japan?',
        choices: ['A. Mount Kita', "B. Mount Hijiri", "C. Mount Yari", "D. Mount Fuji"],
        answer: 4,
        gif: 'assets/images/fuji.gif'

    },
    q10 = {
        question: 'What is the name of the most famous dog from Japan, who even has a statue made after him?',
        choices: ['A. Mari', 'B. Hachiko', 'C. Akita', 'D. Maru'],
        answer: 2,
        gif: 'assets/images/hachiko.gif'

    }

  ];



$("#startAgain").hide();
$("#startScreen").on('click', function(){
    console.log('Game begins');
    $("#startScreen").hide();
    $("#startAgain").hide();
    letsPlay();
});

function resetGame() {
    $("#startAgain").hide();
    correct = 0;
    wrong = 0;
    answered = 0;
    unanswered = 0;
    count = 30;
    currentQuestion = 0;
    var value = null;
    $('[id^="choice"]').unbind('click');
    $("#displayQuestion").unbind();
    $("#choiceone").unbind();
    $("#choicetwo").unbind();
    $("#choicethree").unbind();
    $("#choicefour").unbind();
    $("#gifHere").unbind();

    letsPlay();
}


function letsPlay() {
    retrieveQuestions();
};

function retrieveQuestions(){


    triviaGame.start();


    $("#displayTimer").show();
    $("#displayQuestion").show();
    $("#choiceone").show();
    $("#choicetwo").show();
    $("#choicethree").show();
    $("#choicefour").show();
    $("#gifHere").hide();
    $("#result").hide();
    $("#correctTally").hide();
    $("#incorrectTally").hide();
    $("#unansweredTally").hide();
    $("#answeredTally").hide();


    
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
        correctResponse();
    }
    else {
        console.log('FALSE');
        incorrectResponse();
    };




});



};

function correctResponse() {
    correct++;
    answered++;
    triviaGame.stop();
    console.log("Correct: " + correct);
    $("#displayTimer").hide();
    $("#displayQuestion").hide();
    $("#choiceone").hide();
    $("#choicetwo").hide();
    $("#choicethree").hide();
    $("#choicefour").hide();
    $("#result").show();
    $("#gifHere").show();
    $("#result").html('Correct!');
    $("#gifHere").attr('src', questionBox[currentQuestion].gif);
    nextQuestion();
}

function incorrectResponse(){
    wrong++;
    answered++;
    triviaGame.stop();
    console.log("Wrong: " + wrong);
    $("#displayTimer").hide();
    $("#displayQuestion").hide();
    $("#choiceone").hide();
    $("#choicetwo").hide();
    $("#choicethree").hide();
    $("#choicefour").hide();
    $("#result").show();
    $("#gifHere").show();
    $("#result").html('Incorrect!');
    $("#gifHere").attr('src', questionBox[currentQuestion].gif);
    nextQuestion();
}

function nextQuestion(){
    if (currentQuestion < 9) {
    currentQuestion++;
    console.log(currentQuestion);
    triviaGame.reset();
    setTimeout(clearScreen,2000);
    setTimeout(retrieveQuestions,2100);
}
    else {
        triviaGame.stop();
        finalTally();
    }
}

function clearScreen(){
    $("#result").empty();
    $("#gifHere").empty();
    $("#gifHere").hide();
    $('[id^="choice"]').unbind('click');
    //$("#displayTimer").hide();
}

function timedOut() {
    unanswered++;
    triviaGame.stop();
    console.log("Unanswered");
    $("#displayTimer").hide();
    $("#displayQuestion").hide();
    $("#choiceone").hide();
    $("#choicetwo").hide();
    $("#choicethree").hide();
    $("#choicefour").hide();
    $("#result").show();
    $("#gifHere").show();
    $("#result").html("Time's Up!");
    $("#gifHere").attr('src', questionBox[currentQuestion].gif);
    nextQuestion();
}

function finalTally(){
    triviaGame.stop();
    $("#correctTally").show();
    $("#incorrectTally").show();
    $("#answeredTally").show();
    $("#unansweredTally").show();
    $("#startAgain").show();
    $("#result").hide();
    $("#gifHere").hide();
    $("#correctTally").html("Correct: " + correct);
    $("#incorrectTally").html("Incorrect: " + wrong);
    $("#answeredTally").html("Answered: " + answered);
    $("#unansweredTally").html("Unanswered: " + unanswered);
    console.log(unanswered);
    $("#startAgain").one('click', function(){
        $("#startScreen").hide();
        resetGame();
    });



}




});

