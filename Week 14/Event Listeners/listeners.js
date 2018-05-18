function eClick()
{
    alert('Click Event!');
}

function eMouseMove()
{
    this.style.color = 'pink';
    this.value = 'mouse is moving!';

}

function eMouseOver()
{
    this.style.color = 'blue';
    this.value = 'mouse is over the text box!';

}

function eMouseOut()
{
    this.style.color = 'black';
    this.value = '';
}

function eFocus()
{
    this.value = 'this is focused!';
}

function eBlur()
{
    if(this.value == 'this is focused!')
    {
        this.value = '';
    }
}

function eMouseDown()
{
    alert('Similar to click event!');
}

function checkUsername()
{
    var currUsername = this.value;
    var pelemMsg = document.getElementById('usernameErrMsg');

    pelemMsg.style.color = 'red';
    pelemMsg.style.fontWeight = 'bold';

    if(currUsername == '')
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Please fill in your username!';
    }
    else if (currUsername.length < 5)
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your username needs to be made up of at least 5 characters!';
    }
}

function checkCharDig(passwrd)
{
    var pattern = /[0-9!"£$%^&*()_+-=]/;

    return pattern.test(passwrd);
}

function checkPassword()
{
    var currPassword = this.value;
    var pelemMsg = document.getElementById('passWordErrMsg');

    pelemMsg.style.color = 'red';
    pelemMsg.style.fontWeight = 'bold';

    if(currPassword == '')
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Please fill in your password!';
    }
    else if (currPassword.length < 6)
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your password needs to be made up of at least 6 characters!';
    }
    else if(!checkCharDig(currPassword))
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your password needs to be made up of at least one special character or digit!';
    }
}

function checkCorrectPassword(elem, errID)
{
    var currPassword = elem.value;
    var pelemMsg = document.getElementById(errID);

    pelemMsg.style.color = 'red';
    pelemMsg.style.fontWeight = 'bold';
    
    if(!checkCharDig(currPassword))
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your password needs to be made up of at least one special character or digit!';
    }
}

function resetErrorMsg(elemID)
{
        pelemMsg = document.getElementById(elemID);
        pelemMsg.style.display = 'none';
        pelemMsg.innerHTML = '';
}

function verifyPassword()
{
    var password = document.getElementById('password').value;
    var confirmPass = this.value;

    var pelemMsg = document.getElementById('passChckWordErrMsg');
    pelemMsg.style.color = 'red';
    pelemMsg.style.fontWeight = 'bold';

    if(password != confirmPass)
    {        
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your password does not match!';
    }
}

function checkInput(miniLength, errID, elem)
{
    var error = false;
    var currInput = elem.value;
    var pelemMsg = document.getElementById(errID);

    pelemMsg.style.color = 'red';
    pelemMsg.style.fontWeight = 'bold';

    if(currInput == '')
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Please fill in your ' + elem.id + '!';
        error = true;
    }
    else if (currInput.length < miniLength)
    {
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your ' + elem.id + ' needs to be made up of at least ' + miniLength + ' characters!';
        error = true;
    }
    
    return error;
}




    var input1 = document.getElementById('myInput1');
    var input2 = document.getElementById('myInput2');
    var input3 = document.getElementById('myInput3');
    var input4 = document.getElementById('myInput4');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var passwordChk = document.getElementById('passwordChck');

    input1.addEventListener('click', eClick);
    input1.addEventListener('mousemove', eMouseMove);
    input1.addEventListener('mouseout', eMouseOut);
    
    input2.addEventListener('mouseover', eMouseOver);
    input2.addEventListener('mouseout', eMouseOut);

    input3.addEventListener('focus', eFocus)
    input3.addEventListener('blur', eBlur);

    input4.addEventListener('mousedown', eMouseDown);

    username.addEventListener('blur', function() {checkInput(5, 'usernameErrMsg', this)});
    username.addEventListener('focus', function() {resetErrorMsg('usernameErrMsg')});
    
    password.addEventListener('blur',  function() {if(!checkInput(6, 'passWordErrMsg', this)){ checkCorrectPassword(this, 'passWordErrMsg')};});
    password.addEventListener('focus', function() {resetErrorMsg('passWordErrMsg')});
    
    passwordChk.addEventListener('blur', verifyPassword);
    passwordChk.addEventListener('focus', function() {resetErrorMsg('passChckWordErrMsg')});

