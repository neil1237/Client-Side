function askForName()
{
    var customerName = prompt('Please enter your name');
    alert('Hello ' + (customerName || 'Valued Customer'));
}

function regExpIs_valid(text)
{
    var myRegExp = /[a-z\d ]/i;
    /*
    a-z to match with all alphabetical characters
    d to match with all digits
    i to perform case-insensitive matching
    
    The caret symbol (^) can actually have two different meanings in regular expressions. Most of the time, it means to match the zero-length pattern for line beginnings. But if it is used at the beginning of a character class, it reverses the meaning of the character class. Everything not included in the listed character set is matched.
    
    */
    return (myRegExp.test(text));
}

function butCheckValid_onclick()
{
    if (regExpIs_valid(document.getElementById("charCheck").value) == true)
    {
        alert("Your passphrase contains valid characters");
    }
    else
    {
        alert("Your passphrase contains invalid characters");
    }
}