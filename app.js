// =====================================
// app.js
// TOLC-I Trainer
// =====================================

// 現在のモード
let correct = 0;
let wrong = 0;

let currentMode = "factoring";

// 現在の問題
let currentQuestion = null;

// =====================================
// モード切り替え
// =====================================

function setMode(mode) {

    currentMode = mode;

    nextQuestion();

}
document.getElementById("userAnswer").value="";

document.getElementById("result").innerHTML="";

// =====================================
// 次の問題
// =====================================

function nextQuestion() {

    switch(currentMode){

        case "factoring":
            currentQuestion = generateFactoringQuestion();
            break;

        case "ac":
            currentQuestion = generateACQuestion();
            break;

        case "discriminant":
            currentQuestion = generateDiscriminantQuestion();
            break;

        case "function":
            currentQuestion = generateFunctionQuestion();
            break;

        case "compose":
            currentQuestion = generateComposeQuestion();
            break;

        case "triangle":
            currentQuestion = generateTriangleLawQuestion();
            break;

    }

    displayQuestion();

}

// =====================================
// 問題表示
// =====================================

function displayQuestion(){

    document.getElementById("question").innerHTML =
        currentQuestion.question;

    document.getElementById("hint").innerHTML = "";

    document.getElementById("answer").innerHTML = "";

}

// =====================================
// ヒント表示
// =====================================

function showHint(){

    document.getElementById("hint").innerHTML =
        currentQuestion.hint;

}

// =====================================
// 答え表示
// =====================================

function showAnswer(){

    document.getElementById("answer").innerHTML =
        currentQuestion.answer;

}

// =====================================
// 起動時
// =====================================

window.onload = function(){

    nextQuestion();

};
function checkAnswer(){

    let user=document
        .getElementById("userAnswer")
        .value
        .trim();

    let answer=currentQuestion.answer;

    if(user===answer){

        correct++;

        document
        .getElementById("result")
        .innerHTML=
        "✅ 正解！";

    }else{

        wrong++;

        document
        .getElementById("result")
        .innerHTML=
        "❌ 不正解";

    }

}
