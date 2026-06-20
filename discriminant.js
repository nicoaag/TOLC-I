// =====================================
// discriminant.js
// 判別式
// =====================================

function generateDiscriminantQuestion(){

    function randomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    let a=randomInt(1,5);
    let b=randomInt(-10,10);
    let c=randomInt(-10,10);

    if(b===0){
        b=1;
    }

    let D=b*b-4*a*c;

    let question="";

    question+=a+"x² ";

    if(b>=0){
        question+="+ "+b+"x ";
    }else{
        question+="- "+Math.abs(b)+"x ";
    }

    if(c>=0){
        question+="+ "+c;
    }else{
        question+="- "+Math.abs(c);
    }

    question+="<br><br>";

    question+="判別式 D を求めよ。";

    // ----------------------------
    // 解の種類
    // ----------------------------

    let type="";

    if(D>0){

        type="D > 0<br>実数解が2つ";

    }else if(D===0){

        type="D = 0<br>重解（実数解が1つ）";

    }else{

        type="D < 0<br>実数解なし";

    }

    // ----------------------------
    // 答え
    // ----------------------------

    let answer="";

    answer+="D = b² - 4ac";

    answer+="<br><br>";

    answer+="= ("+b+")² - 4×("+a+")×("+c+")";

    answer+="<br><br>";

    answer+="= "+D;

    answer+="<br><br>";

    answer+=type;

    // ----------------------------
    // ヒント
    // ----------------------------

    let hint="";

    hint+="公式";

    hint+="<br>";

    hint+="D = b² - 4ac";

    hint+="<br><br>";

    hint+="a = "+a;

    hint+="<br>";

    hint+="b = "+b;

    hint+="<br>";

    hint+="c = "+c;

    return{

        question:question,

        answer:answer,

        hint:hint

    };

}