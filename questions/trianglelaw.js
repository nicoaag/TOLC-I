// =====================================
// trianglelaw.js
// 三角形の法則（正弦定理・余弦定理）
// =====================================

function generateTriangleLawQuestion(){

    function randomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    
    function gcd(a, b){
        return b === 0 ? a : gcd(b, a % b);
    }
    
    function simplifyFraction(num, den){
        let g = gcd(Math.abs(num), Math.abs(den));
        return {num: num/g, den: den/g};
    }

    let type = randomInt(0, 6);
    
    let question = "";
    let answer = "";
    let hint = "";
    
    // =====================================
    // タイプ0: 正弦定理 - 辺を求める
    // a/sin(A) = b/sin(B)
    // =====================================
    
    if(type === 0){
        
        let a = randomInt(4, 10);
        let A = randomInt(30, 120);
        let B = randomInt(30, 120);
        
        while(A + B >= 180){
            B = randomInt(30, 120);
        }
        
        let A_rad = (A * Math.PI) / 180;
        let B_rad = (B * Math.PI) / 180;
        let b_exact = a * Math.sin(B_rad) / Math.sin(A_rad);
        let b = Math.round(b_exact * 100) / 100;
        
        question = "三角形 ABC において、以下が与えられている。<br>";
        question += "a = " + a + ", ∠A = " + A + "°, ∠B = " + B + "°<br><br>";
        question += "辺 b を求めよ。（小数第2位まで）";
        
        answer = b.toFixed(2);
        
        hint = "正弦定理: a/sin(A) = b/sin(B)<br>";
        hint += "b = a × sin(B) / sin(A)<br>";
        hint += "b = " + a + " × sin(" + B + "°) / sin(" + A + "°)";
    }
    
    // =====================================
    // タイプ1: 正弦定理 - 角を求める
    // =====================================
    
    else if(type === 1){
        
        let a = randomInt(5, 12);
        let b = randomInt(5, 12);
        let A = randomInt(40, 100);
        
        let A_rad = (A * Math.PI) / 180;
        let sin_B = b * Math.sin(A_rad) / a;
        
        if(sin_B > 1 || sin_B < 0){
            sin_B = randomInt(30, 80) / 100;
        }
        
        let B_rad = Math.asin(sin_B);
        let B = Math.round((B_rad * 180) / Math.PI);
        
        question = "三角形 ABC において、以下が与えられている。<br>";
        question += "a = " + a + ", b = " + b + ", ∠A = " + A + "°<br><br>";
        question += "∠B を求めよ。（整数）";
        
        answer = B.toString();
        
        hint = "正弦定理: a/sin(A) = b/sin(B)<br>";
        hint += "sin(B) = b × sin(A) / a<br>";
        hint += "sin(B) = " + b + " × sin(" + A + "°) / " + a;
    }
    
    // =====================================
    // タイプ2: 余弦定理 - 辺を求める
    // c² = a² + b² - 2ab×cos(C)
    // =====================================
    
    else if(type === 2){
        
        let a = randomInt(4, 10);
        let b = randomInt(4, 10);
        let C = randomInt(45, 135);
        
        let C_rad = (C * Math.PI) / 180;
        let c_squared = a*a + b*b - 2*a*b*Math.cos(C_rad);
        let c = Math.sqrt(c_squared);
        c = Math.round(c * 100) / 100;
        
        question = "三角形 ABC において、以下が与えられている。<br>";
        question += "a = " + a + ", b = " + b + ", ∠C = " + C + "°<br><br>";
        question += "辺 c を求めよ。（小数第2位まで）";
        
        answer = c.toFixed(2);
        
        hint = "余弦定理: c² = a² + b² - 2ab×cos(C)<br>";
        hint += "c² = " + a + "² + " + b + "² - 2×" + a + "×" + b + "×cos(" + C + "°)<br>";
        hint += "c² = " + (a*a) + " + " + (b*b) + " - " + (2*a*b) + "×cos(" + C + "°)";
    }
    
    // =====================================
    // タイプ3: 余弦定理 - 角を求める
    // cos(C) = (a² + b² - c²) / (2ab)
    // =====================================
    
    else if(type === 3){
        
        let a = randomInt(5, 12);
        let b = randomInt(5, 12);
        let c = randomInt(Math.max(5, a+b-8), a+b-1);
        
        let cos_C = (a*a + b*b - c*c) / (2*a*b);
        
        if(cos_C > 1 || cos_C < -1){
            cos_C = randomInt(0, 90) / 100;
        }
        
        let C_rad = Math.acos(cos_C);
        let C = Math.round((C_rad * 180) / Math.PI);
        
        question = "三角形 ABC において、以下が与えられている。<br>";
        question += "a = " + a + ", b = " + b + ", c = " + c + "<br><br>";
        question += "∠C を求めよ。（整数）";
        
        answer = C.toString();
        
        hint = "余弦定理: cos(C) = (a² + b² - c²) / (2ab)<br>";
        hint += "cos(C) = (" + a + "² + " + b + "² - " + c + "²) / (2×" + a + "×" + b + ")<br>";
        hint += "cos(C) = (" + (a*a) + " + " + (b*b) + " - " + (c*c) + ") / " + (2*a*b);
    }
    
    // =====================================
    // タイプ4: 複雑な問題 - 3つの辺が与えられて、すべての角と面積を求める
    // =====================================
    
    else if(type === 4){
        
        let a = randomInt(5, 10);
        let b = randomInt(5, 10);
        let c = randomInt(Math.max(5, a+b-7), a+b-1);
        
        // 余弦定理で角A, B, Cを計算
        let cos_A = (b*b + c*c - a*a) / (2*b*c);
        let cos_B = (a*a + c*c - b*b) / (2*a*c);
        let cos_C = (a*a + b*b - c*c) / (2*a*b);
        
        if(cos_A > 1) cos_A = 1;
        if(cos_A < -1) cos_A = -1;
        if(cos_B > 1) cos_B = 1;
        if(cos_B < -1) cos_B = -1;
        if(cos_C > 1) cos_C = 1;
        if(cos_C < -1) cos_C = -1;
        
        let A_rad = Math.acos(cos_A);
        let B_rad = Math.acos(cos_B);
        let C_rad = Math.acos(cos_C);
        
        let A = Math.round((A_rad * 180) / Math.PI);
        let B = Math.round((B_rad * 180) / Math.PI);
        let C = Math.round((C_rad * 180) / Math.PI);
        
        // ヘロンの公式で面積を計算
        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
        area = Math.round(area * 100) / 100;
        
        question = "三角形 ABC において、3辺が与えられている。<br>";
        question += "a = " + a + ", b = " + b + ", c = " + c + "<br><br>";
        question += "∠A、∠B、∠C および三角形の面積を求めよ。<br>";
        question += "（角は整数、面積は小数第2位まで）";
        
        answer = "∠A = " + A + "°, ∠B = " + B + "°, ∠C = " + C + "°<br>";
        answer += "面積 = " + area.toFixed(2);
        
        hint = "ステップ1: 余弦定理を使ってすべての角を求める<br>";
        hint += "cos(A) = (b² + c² - a²) / (2bc)<br>";
        hint += "cos(B) = (a² + c² - b²) / (2ac)<br>";
        hint += "cos(C) = (a² + b² - c²) / (2ab)<br><br>";
        hint += "ステップ2: ヘロンの公式で面積を求める<br>";
        hint += "s = (a + b + c) / 2 = " + s.toFixed(2) + "<br>";
        hint += "面積 = √[s(s-a)(s-b)(s-c)]";
    }
    
    // =====================================
    // タイプ5: 複雑な問題 - 正弦定理と余弦定理を組み合わせる
    // 2つの角と1辺が与えられて、残りすべてを求める
    // =====================================
    
    else if(type === 5){
        
        let A = randomInt(30, 80);
        let B = randomInt(30, 80);
        let C = 180 - A - B;
        
        if(C <= 0 || C >= 180){
            B = randomInt(30, 80);
            C = 180 - A - B;
        }
        
        let a = randomInt(4, 10);
        
        let A_rad = (A * Math.PI) / 180;
        let B_rad = (B * Math.PI) / 180;
        let C_rad = (C * Math.PI) / 180;
        
        let b = a * Math.sin(B_rad) / Math.sin(A_rad);
        let c = a * Math.sin(C_rad) / Math.sin(A_rad);
        
        b = Math.round(b * 100) / 100;
        c = Math.round(c * 100) / 100;
        
        // 面積 = (1/2) * a * b * sin(C)
        let area = 0.5 * a * b * Math.sin(C_rad);
        area = Math.round(area * 100) / 100;
        
        question = "三角形 ABC において、以下が与えられている。<br>";
        question += "∠A = " + A + "°, ∠B = " + B + "°, a = " + a + "<br><br>";
        question += "∠C、辺 b、辺 c、および三角形の面積を求めよ。<br>";
        question += "（辺は小数第2位まで、面積も小数第2位まで）";
        
        answer = "∠C = " + C + "°<br>";
        answer += "b = " + b.toFixed(2) + ", c = " + c.toFixed(2) + "<br>";
        answer += "面積 = " + area.toFixed(2);
        
        hint = "ステップ1: ∠C を求める<br>";
        hint += "∠C = 180° - ∠A - ∠B = 180° - " + A + "° - " + B + "°<br><br>";
        hint += "ステップ2: 正弦定理で b と c を求める<br>";
        hint += "b = a × sin(B) / sin(A) = " + a + " × sin(" + B + "°) / sin(" + A + "°)<br>";
        hint += "c = a × sin(C) / sin(A) = " + a + " × sin(" + C + "°) / sin(" + A + "°)<br><br>";
        hint += "ステップ3: 面積を求める<br>";
        hint += "面積 = (1/2) × a × b × sin(C)";
    }
    
    // =====================================
    // タイプ6: 最も複雑 - 2辺と1つの対角が与えられる（SSA：曖昧な場合）
    // =====================================
    
    else {
        
        let a = randomInt(8, 15);
        let b = randomInt(5, 12);
        let A = randomInt(30, 70);
        
        let A_rad = (A * Math.PI) / 180;
        let sin_B = b * Math.sin(A_rad) / a;
        
        // sin_B が有効な範囲内か確認
        if(sin_B > 1){
            b = randomInt(5, Math.round(a * Math.sin(A_rad)));
            sin_B = b * Math.sin(A_rad) / a;
        }
        
        let B_rad = Math.asin(sin_B);
        let B = Math.round((B_rad * 180) / Math.PI);
        let C = 180 - A - B;
        
        if(C <= 0){
            B = Math.round((180 - A_rad * 180 / Math.PI) * 0.8);
            C = 180 - A - B;
        }
        
        let C_rad = (C * Math.PI) / 180;
        let c = a * Math.sin(C_rad) / Math.sin(A_rad);
        c = Math.round(c * 100) / 100;
        
        // 面積
        let area = 0.5 * a * b * Math.sin(C_rad);
        area = Math.round(area * 100) / 100;
        
        question = "三角形 ABC において、以下が与えられている。<br>";
        question += "a = " + a + ", b = " + b + ", ∠A = " + A + "°<br><br>";
        question += "残りのすべての辺と角、および面積を求めよ。<br>";
        question += "（角は整数、辺と面積は小数第2位まで）";
        
        answer = "∠B = " + B + "°, ∠C = " + C + "°<br>";
        answer += "c = " + c.toFixed(2) + "<br>";
        answer += "面積 = " + area.toFixed(2);
        
        hint = "ステップ1: 正弦定理から ∠B を求める<br>";
        hint += "sin(B) = b × sin(A) / a = " + b + " × sin(" + A + "°) / " + a + "<br>";
        hint += "sin(B) ≈ " + sin_B.toFixed(4) + "<br><br>";
        hint += "ステップ2: ∠C を求める<br>";
        hint += "∠C = 180° - ∠A - ∠B<br><br>";
        hint += "ステップ3: 正弦定理から c を求める<br>";
        hint += "c = a × sin(C) / sin(A)<br><br>";
        hint += "ステップ4: 面積を求める<br>";
        hint += "面積 = (1/2) × a × b × sin(C)";
    }
    
    return {
        question: question,
        answer: answer,
        hint: hint
    };
}
