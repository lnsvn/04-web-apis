// Variables
// Header
var viewScoresBtn = document.querySelector("#view_scores_btn");
var timerEl = document.getElementById("timer");

// Body
// Intro
var introContainerEl = document.querySelector("#intro_container");
var introEl = document.querySelector("#introduction");
var startBtn = document.querySelector("#start_btn");

// Quiz
var questionContainerEl = document.querySelector("#question_container");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelectorAll(".choice_btn");
var choiceBtn1 = document.querySelector("#choice1");
var choiceBtn2 = document.querySelector("#choice2");
var choiceBtn3 = document.querySelector("#choice3");
var choiceBtn4 = document.querySelector("#choice4");
var checkLine = document.querySelector("#check_line");

// Submit score
var submitContainerEl = document.querySelector("#submit_container");
var endMessageEl = document.querySelector("#finish");
var finalScore = document.querySelector("#final_score");
var userInitial = document.querySelector("#initial");
var submitBtn = document.querySelector("#submit_btn");

// Highscores
var highscoreContainerEl = document.querySelector("#highscore_container");
var highscoresListEl = document.querySelector("#highscores_li");
var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

// Questions 
var quizQuestions = [
    {   question: 'Inside which HTML element do we link JavaScript?',
        choices: ['1. <js>', '2. <script>', '3. <scripting>', '4. <javascript>'],
        answer: '2'
    },
    {   question: 'How do you write "Try Again." in an alert box?',
        choices: ['1. msg("Try Again.")', '2. msgBox("Try Again.")', '3. alert("Try Again.")', '4. alertBox("Try Again.")'],
        answer: '3'
    },
    {   question: 'How do you create a funtion in JavaScript?',
        choices: ['1. function = myFunction()', '2. funtion: myFunction()', '3. function "myFunction()"', '4. function myFunction()'],
        answer: '4'
    },
    {   question: 'How do you call a function named "myFunction"?',
        choices: ['1. myFunction()', '2. myFunction(call)', '3. call myFunction()', '4. call function myFunction()'],
        answer: '1'
    },
    {   question: 'How does a FOR loop start?',
        choices: ['1. for(i<=5;i++)', '2. for i=1 to 5', '3. for(i=0;1<=5;i++)', '4. for(i=0;i<=5)'],
        answer: '3'
    },
    {   question: 'How do you add a comment in Javascript?',
        choices: ['1. /* This is a comment */', '2. // This is a comment', '3. <!-- This is a comment -->', '4. "This is a comment"'],
        answer: '2'
    },
    {   question: 'How do you declare a JavaScript variable?',
        choices: ['1. var variableName', '2. v variableName', '3. variableName', '4. variable variableName'],
        answer: '1'
    },
    {   question: 'What is the correct way to write a JavaScript array?',
        choices: ['1. var colors = 1. red, 2. white, 3. blue', '2. var colors = ("red"), ("white"), ("blue")', '3. var colors = "red", "white", "blue"', '4. var colors = ["red", "white", "blue"]'],
        answer: '4'
    }
];
 