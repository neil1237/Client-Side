var buttonClicks = 0;

function ChangeBackground(divNum)
{
    var myElement = document.querySelector(divNum);    
    
    if(myElement.style.backgroundColor == 'rgb(217, 54, 0)')
    {
        myElement.style.backgroundColor = "RGB(240, 128, 128)";
    }
    else
    {
        myElement.style.backgroundColor = "#D93600";
    }
}

function showHideList()
{
    buttonClicks++;
    var btnClickDiv = document.getElementById('btnClicks');
    
    
    if(buttonClicks > 15)
    {    
        btnClickDiv.innerHTML = "Now you have reached my limit! Stop clicking on the Show/Hide button!! <br>Button Clicks: " + buttonClicks;
    }
    else if(buttonClicks > 5)
    {
        btnClickDiv.innerHTML = "You seem to like this button! <br>Button Clicks: " + buttonClicks;
    }
    else
    {
        btnClickDiv.innerHTML = "Button Clicks: " + buttonClicks;
    }
    
    var btn = document.getElementById('listBtn');
    var btnTxt = btn.textContent;
    var theDropDown = document.querySelector("#dropDown");
    
    if(btnTxt == 'Hide')
    {
        theDropDown.classList.remove("enableMenu");
        theDropDown.classList.add("disableMenu");
        btn.textContent = 'Show';
    }
    else if(btnTxt == 'Show')
    {
        theDropDown.classList.remove("disableMenu");
        theDropDown.classList.add("enableMenu");
        btn.textContent = 'Hide';
    }
}