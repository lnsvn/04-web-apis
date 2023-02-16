// Variables
var instructContainerEl = document.getElementById("#instruction-container");
var questionContainerEl = document.getElementById("#question-container");
var endContainerEl = document.getElementById("#end-container");
var highscoreContainerEl = document.getElementById("#highscore-container");

// Quiz questions array
var quizQuestions = [
    {   q: 'Inside which HTML element do we link JavaScript?',
        a: '2. <script>',
        choices: [{choice: '1. <js>'}, {choice: '2. <script>'}, {choice: '3. <scripting>'}, { choice: '4. <javascript>'}]
    },
    {   q: 'How do you write "Try Again." in an alert box?',
        a: '3. alert("Try Again.")',
        choices: [{choice: '1. msg("Try Again.")'}, {choice: '2. msgBox("Try Again.")'}, {choice: '3. alert("Try Again.")'}, { choice: '4. alertBox("Try Again.")'}]
    },
    {   q: 'How do you create a funtion in JavaScript?',
        a: '4. function myFunction()',
        choices: [{choice: '1. function = myFunction()'}, {choice: '2. funtion: myFunction()'}, {choice: '3. function "myFunction()"'}, { choice: '4. function myFunction()'}]
    },
    {   q: 'How do you call a function named "myFunction"?',
        a: '1. myFunction()',
        choices: [{choice: '1. myFunction()'}, {choice: '2. myFunction(call)'}, {choice: '3. call myFunction()'}, { choice: '4. call function myFunction()'}]
    },
    {   q: 'How does a FOR loop start?',
        a: '3. for(i=0;1<=5;i++)',
        choices: [{choice: '1. for(i<=5;i++)'}, {choice: '2. for i=1 to 5'}, {choice: '3. for(i=0;1<=5;i++)'}, { choice: '4. for(i=0;i<=5)'}]
    },
    {   q: 'How do you add a comment in Javascript?',
        a: '2. // This is a comment',
        choices: [{choice: '1. /* This is a comment */'}, {choice: '2. // This is a comment'}, {choice: '3. <!-- This is a comment -->'}, { choice: '4. "This is a comment"'}]
    },
    {   q: 'How do you declare a JavaScript variable?',
        a: '1. var variableName',
        choices: [{choice: '1. var variableName'}, {choice: '2. v variableName'}, {choice: '3. variableName'}, { choice: '4. variable variableName'}]
    },
    {   q: 'What is the correct way to write a JavaScript array?',
        a: '4. var colors = ["red", "white", "blue"]',
        choices: [{choice: '1. var colors = 1. red, 2. white, 3. blue'}, {choice: '2. var colors = ("red"), ("white"), ("blue")'}, {choice: '3. var colors = "red", "white", "blue"'}, { choice: '4. var colors = ["red", "white", "blue"]'}]
    },
];