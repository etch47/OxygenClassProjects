/* Use Javascript to take in information from a user (prompt O.K.) and display it as or in a table/
on an HTML page */
function getFirstName(){
    var yourFirstName = prompt("Tell Me Your First Name");
    var listFirstName = document.getElementById("info1").innerHTML = yourFirstName;
    return(listFirstName);
}


function getLastName(){ 
    var yourLastName = prompt("Tell Me Your Last Name");
    var listLastName = document.getElementById("info2").innerHTML = yourLastName;
    return(listLastName);
}


function getAge(){
    var yourAge = prompt("Tell Me Your Age");
    var listAge = document.getElementById("info3").innerHTML = yourAge;
    return(listAge);
}

getFirstName();
getLastName();
getAge();