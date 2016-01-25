/*Euclidian Algorithm to find Greatest Common Divisor*/


function greatestCommonDivisor(A,B){
    var GCD;
    var Q;
    
   
    if(A===0){
        Q = (B/A);
        GCD === B;
        console.log(B);
    }else if (B===0){
        Q = (A/B);
        GCD === A;
        console.log(A);
    }else if(A !== 0 || B !== 0){
        Q = (A/B);
        var R;
        var answer;
        R = (A%B);
        answer =((Q*B) + R);
        console.log(A + "  equals " + Q + "  times  " + B + "  plus  " + " " + R,(answer));
        
    }
}
greatestCommonDivisor(210, 45);
greatestCommonDivisor(45, 30);
greatestCommonDivisor(30, 15);

/*
(A % B !== 0)
*/