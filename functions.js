// =====================================
// functions.js
// 関数
// =====================================

function generateFunctionQuestion(){

    function randomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    // ax+b
    let a=randomInt(-5,5);

    while(a===0){
        a=randomInt(-5,5);
    }

    let b=randomInt(-10,10);

    let x=randomInt(-10,10);

    let answerValue=a*x+b;

    // ----------------------------
    // 問題
    // ----------------------------

    let question="";

    question+="f(x) = ";

    if(a===1){

        question+="x";

    }else if(a===-1){

        question+="-x";

    }else{

        question+=a+"x";

    }

    if(b>0){

        question+=" + "+b;

    }

    if(b<0){

        question+=" - "+Math.abs(b);

    }

    question+="<br><br>";

    question+="f("+x+") = ?";

    // ----------------------------
    // ヒント
    // ----------------------------

    let hint="";

    hint+="x に ";

    hint+=x;

    hint+=" を代入する。";

    hint+="<br><br>";

    hint+="(";

    hint+=a;

    hint+=" × ";

    hint+=x;

    hint+=")";

    if(b>=0){

        hint+=" + "+b;

    }else{

        hint+=" - "+Math.abs(b);

    }

    // ----------------------------
    // 答え
    // ----------------------------

    let answer="";

    answer+="f("+x+")";

    answer+="<br><br>";

    answer+="= ";

    answer+=a;

    answer+=" × ";

    answer+=x;

    if(b>=0){

        answer+=" + "+b;

    }else{

        answer+=" - "+Math.abs(b);

    }

    answer+="<br><br>";

    answer+="= ";

    answer+=answerValue;

    return{

        question:question,

        answer:answer,

        hint:hint

    };

}