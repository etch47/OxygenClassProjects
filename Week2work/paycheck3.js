var hours = prompt("Enter number of hours worked");
var rate = prompt("Enter your hourly rate");
function pay(hours, rate){
    var basepay = hours * rate;
    return(basepay);
}
function overtime(hours){
    var xtraTime = hours - 40;
    return(xtraTime);
}
function overtimePay(pay, rate, overtime){
    var xtraPay = pay + .5 * rate * overtime;
    return(xtraPay);    
}
function addPay(hours, rate, pay, overtimePay){
    if(hours <= 40){
        console.log(" Your total hours are ", hours);
        console.log(" Your hourly rate is ", rate);
        console.log(" Your pay without overtime is ", pay);
}else if(hours >40){
    console.log(" Your total hours are ", hours);
    console.log(" Your hourly rate is ", rate);
    console.log(" Your pay with overtime is ", overtimePay);
    }
}
addPay(hours, rate, pay, overtimePay);