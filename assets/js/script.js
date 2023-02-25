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

// Game Assets
var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

// Funtions
function setTime() { 
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            endMessageEl.textContent = "Time is up";
            gameOver();

        } else  if(questionCount >= quizQuestions.length +1) {
            clearInterval(timerInterval);
            gameOver();
        } 
    }, 1000);
};

function startGame() {
    introContainerEl.style.display = "none";
    questionContainerEl.style.display = "block";
    questionNumber = 0
    setTime();
    displayQuestion(questionNumber);
};

function displayQuestion(n) {
    questionEl.textContent = quizQuestions[n].question;
    choiceBtn1.textContent = quizQuestions[n].choices[0];
    choiceBtn2.textContent = quizQuestions[n].choices[1];
    choiceBtn3.textContent = quizQuestions[n].choices[2];
    choiceBtn4.textContent = quizQuestions[n].choices[3];
    questionNumber = n;
};

function checkAnswer(event) {
    event.preventDefault();
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);

    if (quizQuestions[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct :]"; 
        totalScore = totalScore + 5;

    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong :[";
    };

    if (questionNumber < quizQuestions.length -1 ) {
        displayQuestion(questionNumber +1);
    } else {
    gameOver();
    };

    questionCount++;
};

function gameOver() {
    questionContainerEl.style.display = "none";
    submitContainerEl.style.display = "block";
    console.log(submitContainerEl);
    finalScore.textContent = "Your final score is : " + totalScore + "/40"; 
    timerEl.style.display = "none"; 
};

function getScore() {
    var currentList =localStorage.getItem("ScoreList");

    if (currentList !== null ){
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = [];
    };

    return freshList;
};

function renderScore() {
    highscoresListEl.innerHTML = "";
    highscoresListEl.style.display ="block";
    var highScores = sort();   
    var topFive = highScores.slice(0,5);

    for (var i = 0; i < topFive.length; i++) {
        var item = topFive[i];
        var li = document.createElement("li");
        li.textContent = item.user + " - " + item.score;
        li.setAttribute("data-index", i);
        li.style.fontWeight = "bold";
        li.style.listStyleType = "counter";
        highscoresListEl.appendChild(li);
    };
};

function sort() {
    var unsortedList = getScore();

    if (getScore == null ){
        return;
    } else{
        unsortedList.sort(function(a,b){
            return b.score - a.score;
        })
    return unsortedList;
    };
};

function addItem(n) {
    var addedList = getScore();
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore() {
    var scoreItem ={
        user: userInitial.value,
        score: totalScore
    };
    addItem(scoreItem);
    renderScore();
};

// Event Listeners
startBtn.addEventListener("click", startGame);

choicesEl.forEach(function(click){
    click.addEventListener("click", checkAnswer);
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    submitContainerEl.style.display = "none";
    introContainerEl.style.display = "none";
    highscoreContainerEl.style.display = "block";
    questionContainerEl.style.display ="none";
    saveScore();
});

viewScoresBtn.addEventListener("click", function(event) {
    event.preventDefault();
    submitContainerEl.style.display = "none";
    introContainerEl.style.display = "none";
    highscoreContainerEl.style.display = "block";
    questionContainerEl.style.display ="none";
    renderScore();
});

backBtn.addEventListener("click",function(event){
    event.preventDefault();
    submitContainerEl.style.display = "none";
    introContainerEl.style.display = "block";
    highscoreContainerEl.style.display = "none";
    questionContainerEl.style.display ="none";
    location.reload();
});

clearBtn.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.clear();
    renderScore();
});