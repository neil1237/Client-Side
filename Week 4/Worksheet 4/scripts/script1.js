var myvariable = 5;

prompt = function()
{
    return "hello again";
}

function NewPrompt()
{
    alert(prompt());
}


function SumTenNos()
{
    alert("The sum of the first ten numbers is "+(1+2+3+4+5+6+7+8+9+10));
}

function MultTenNos()
{
    alert("The multiplication of the first ten numbers is "+(1*2*3*4*5*6*7*8*9*10));
}

function NumType()
{
    alert("The type of 35.6 is " + typeof 35.6);
}

function TxtType()
{
    alert('The type of "dog" is ' + typeof("dog"));
}

function BoolType()
{
    alert("The type of true is " + typeof true);
}

function BoolCheck()
{
    alert("'kilt' is eqaul to 'Kilt'. Answer: " + ('kilt' == 'Kilt'));
}