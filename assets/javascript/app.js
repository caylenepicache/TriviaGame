$(document).ready(function() {

//GLOBAL VARIABLES
var correct = 0;
var wrong = 0;
var answered = 0;
var unanswered = 0;
var count = 31;
var currentQuestion = 0;
var value;

var triviaGame = {

questionTimer: function() {
    count = 30;
    var counter = setInterval(timer, 1000);
    function timer(){
        if (count === 0) {
            clearInterval(count);
            //timedOut();
        }
        if (count > 0) {
            count--;
        }
        $("#displayTimer").html("Time Remaining: " + count);
        //console.log(count);
}
},

start: function() {
    counter = setInterval(questionTimer.count, 1000);
}, 

stop: function() {
    clearInterval(this.questionTimer);
    clearInterval(count);
    clearInterval(this.questionTimer.timer);
},

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
        question: 'What is the capital of Japan',
        choices: ['A. Kyoto', 'B. Hiroshima', 'C. Okinawa', 'D. Tokyo'],
        answer: 4,
        gif: 'assets/images/tokyo.gif'
    },
    q4 = {        
        question: 'Ikebana is a popular Japanese art of arranging _______',
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


$("#startScreen").on('click', function(){
    console.log('Game begins');
    $("#startScreen").hide();
    letsPlay();
});

function reset(){
    currentQuestion = 0;
}


function letsPlay() {
    retrieveQuestions();
};

function retrieveQuestions(){

    triviaGame.questionTimer();


    $("#displayTimer").show();
    $("#displayQuestion").show();
    $("#choiceone").show();
    $("#choicetwo").show();
    $("#choicethree").show();
    $("#choicefour").show();

    
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
    //triviaGame.stop();
    console.log(count);
    console.log("Correct: " + correct);
    $("#displayTimer").hide();
    $("#displayQuestion").hide();
    $("#choiceone").hide();
    $("#choicetwo").hide();
    $("#choicethree").hide();
    $("#choicefour").hide();
    $("#result").html('Correct!');
    $("#gifHere").attr('src', questionBox[currentQuestion].gif);
    nextQuestion();
}

function incorrectResponse(){
    wrong++;
    //triviaGame.stop();
    console.log("Wrong: " + wrong);
    $("#displayTimer").hide();
    $("#displayQuestion").hide();
    $("#choiceone").hide();
    $("#choicetwo").hide();
    $("#choicethree").hide();
    $("#choicefour").hide();
    $("#result").html('wrong');
    $("#gifHere").attr('src', questionBox[currentQuestion].gif);
    nextQuestion();
}

function nextQuestion(){
    if (currentQuestion < 10) {
    currentQuestion++;
    console.log(currentQuestion);
    //triviaGame.stop();
    setTimeout(clearScreen,6000);
    setTimeout(retrieveQuestions,6100);
}
   // else {

//}
}

function clearScreen(){
    $("#result").hide();
    $("#gifHere").hide();
    $("#displayTimer").hide();
}





});

