// =====================================
// factoring.js
// x²+bx+c
// =====================================

function randomInt(min, max){

    return Math.floor(Math.random()*(max-min+1))+min;

}

function generateFactoringQuestion(){

    // --------------------
    // 因数を作る
    // --------------------

    let a=randomInt(1,10);
    let b=randomInt(1,10);

    // ランダムでマイナス

    if(Math.random()<0.5){

        a=-a;

    }

    if(Math.random()<0.5){

        b=-b;

    }

    let sum=a+b;

    let product=a*b;

    // --------------------
    // 問題表示
    // --------------------

    let question="";

    question+="x² ";

    if(sum>=0){

        question+="+ "+sum+"x ";

    }else{

        question+="- "+Math.abs(sum)+"x ";

    }

    if(product>=0){

        question+="+ "+product;

    }else{

        question+="- "+Math.abs(product);

    }

    question+=" を因数分解せよ";

    // --------------------
    // 答え
    // --------------------

    let answer="";

    answer+="(";

    answer+="x ";

    if(a>=0){

        answer+="+ "+a;

    }else{

        answer+="- "+Math.abs(a);

    }

    answer+=")";

    answer+="(";

    answer+="x ";

    if(b>=0){

        answer+="+ "+b;

    }else{

        answer+="- "+Math.abs(b);

    }

    answer+=")";

    // --------------------
    // ヒント
    // --------------------

    let hint="";

    hint+="積 = "+product;

    hint+="<br>";

    hint+="和 = "+sum;

    // --------------------

    return{

        question:question,

        answer:answer,

        factor1:a,

        factor2:b,

        hint:hint

    };

    }