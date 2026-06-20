// =====================================
// acmethod.js
// ax²+bx+c
// =====================================

function generateACQuestion(){

    function randomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    let p=randomInt(2,6);
    let r=randomInt(1,6);
    let q=randomInt(1,8);
    let s=randomInt(1,8);

    if(Math.random()<0.5) q=-q;
    if(Math.random()<0.5) s=-s;

    let A=p*r;
    let B=p*s+r*q;
    let C=q*s;

    let question="";

    question+=A+"x² ";

    if(B>=0){
        question+="+ "+B+"x ";
    }else{
        question+="- "+Math.abs(B)+"x ";
    }

    if(C>=0){
        question+="+ "+C;
    }else{
        question+="- "+Math.abs(C);
    }

    question+=" を因数分解せよ";

    let answer="";

    answer+="(";

    answer+=p+"x ";

    if(q>=0){
        answer+="+ "+q;
    }else{
        answer+="- "+Math.abs(q);
    }

    answer+=")";

    answer+="(";

    answer+=r+"x ";

    if(s>=0){
        answer+="+ "+s;
    }else{
        answer+="- "+Math.abs(s);
    }

    answer+=")";

    let ac=A*C;

    let hint="";

    hint+="a×c = "+ac;

    hint+="<br>";

    hint+="和 = "+B;

    return{

        question:question,

        answer:answer,

        hint:hint

    };

}