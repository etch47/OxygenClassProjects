var hours = prompt("Enter number of hours worked");
var rate = prompt("Enter your hourly rate");



// In this example I put PAY, OVERTIME and OVERTIME PAY into the function.
var addPay = function(){
var pay = hours * rate
var overtime = hours - 40; 
var overtimePay = hours * rate + .5 * rate * overtime;
    if(hours <= 40){
        console.log("Your total hours are", hours);
        console.log("Your hourly rate is", rate);
        console.log("Your pay without overtime is", pay);
}else if(hours >40){
    console.log("Your total hours are", hours);
    console.log("Your hourly rate is", rate);
    console.log("Your pay with overtime is", overtimePay);
 }
}
addPay();