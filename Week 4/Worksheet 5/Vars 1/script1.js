var myString1 = '99 bottles of beer on the wall, 99 bottles of beer.';
var myString2 = 'There are many people who are taking the bottles off the wall.';
var myString3 = '3.50 Eur is the price of each beer.';
var myString4 = 'There are 26 bottles left on the wall. These bottles are from 3 different types of brands.';

document.getElementById("loadDiv1").innerHTML += myString1;
document.getElementById("loadDiv2").innerHTML += myString2;
document.getElementById("loadDiv3").innerHTML += myString3;
document.getElementById("loadDiv4").innerHTML += myString4;
    
var name = prompt("Please enter your name");
var userID = parseInt(prompt("Please enter your user ID"));
    alert("Your userID is " + userID + " and the type of data is " + typeof(userID));
    document.getElementById("wlcmMsg").innerHTML = "Welcome to our page, " + name +" ("+ userID + ")"+ "!";


function ParseStr1()
{
    var newInt = parseInt(myString1);
    document.getElementById("parse1").innerHTML = newInt;
}

function ParseStr2()
{
    var newInt = parseInt(myString2);
    document.getElementById("parse2").innerHTML = newInt;
}

function ParseStr3ToInt()
{
    var newInt = parseInt(myString3);
    document.getElementById("parse3").innerHTML = newInt;
}

function ParseStr3ToFloat()
{
    var newFloat = parseFloat(myString3);
    document.getElementById("parse3").innerHTML = newFloat;
}

function ParseStr4()
{
    var newInt = parseInt(myString4);
    document.getElementById("parse4").innerHTML = newInt;
}