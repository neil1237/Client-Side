prompt = function(){
 return 'hello again';
};

function NewPrompt()
{
    alert(prompt());
}

function ConvToF()
{
    var degrees = document.getElementById("degrees").value;
    var fahrenheit;
    
    fahrenheit = degrees * 9 / 5 + 32;
    fahrenheit = Math.round(fahrenheit * 100) / 100;
    document.getElementById("fahrenheit").value = fahrenheit;
    
}

function ConvToD()
{
    var fahrenheit = document.getElementById("fahrenheit").value;
    var degrees;
    
    degrees = (fahrenheit - 32) * 5 / 9;
    degrees = Math.round(degrees * 100) / 100;
    document.getElementById("degrees").value = degrees;
    
}

function convTemp()
{
    var degrees = document.getElementById("degrees").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    
    if(degrees != null && fahrenheit != null)
    {
        alert("You need to input a value for either Degrees Celcius or Fahrenheit only!");
        
        document.getElementById("degrees").value = null;
        document.getElementById("fahrenheit").value = null;
    }
}