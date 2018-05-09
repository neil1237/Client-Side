var num1;
var num2;

function loadFunc()
{
    num1 = parseInt(prompt("Enter Number 1"));
    num2 = parseInt(prompt("Enter Number 2"));
}

function Add()
{
    document.getElementById("addSpan").innerHTML = num1 + num2;
}

function Subtract()
{
    document.getElementById("subSpan").innerHTML = num1 - num2;
}

function Mult()
{
    document.getElementById("multSpan").innerHTML = num1 * num2;
}

function Div()
{
    document.getElementById("divSpan").innerHTML = Math.round((num1 / num2) * 100) / 100;
}

function Power()
{
    document.getElementById("powSpan").innerHTML = Math.pow(num1, num2);
}

function Mod()
{
    document.getElementById("modSpan").innerHTML = num1 % num2;
}

function Area()
{
    document.getElementById("areaSpan").innerHTML = num1 * num2;
}

function Perimeter()
{
    document.getElementById("perimSpan").innerHTML = (num1 + num2) * 2;
}