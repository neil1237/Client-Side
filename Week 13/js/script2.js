var el = document.getElementById("in1");
var el2 = document.getElementById("in2");
var el3 = document.getElementById("in3");
var el4 = document.getElementById("in4");

function onClick() {
    alert("Click Event");
}

function onMouseOver() {
    
    if (this.id == "in1") {
        this.style.color = "pink";
        this.value = "Mouse is moving!";
    }
    
    if (this.id == "in2") {
        this.style.color = "blue";
        this.value = "Mouse is over the text box!";
    }
    
    if (this.id == "in3") {
        this.value = "this is focused";
    }
    
    if(this.id == "in4") {
        alert("Similar to click event!");
    }
}

function checkInput() {
    
}


function notFocus() {
    this.value = "";
}

function onMouseOut() {
    
    this.value = "";
    this.style.color = "black";
}

el.addEventListener("click", onClick);

el.addEventListener("mouseover", onMouseOver);
el2.addEventListener("mouseover", onMouseOver);

el.addEventListener("mouseout", onMouseOut);
el2.addEventListener("mouseout", onMouseOut);

el3.addEventListener("focus", onMouseOver);
el3.addEventListener("blur", notFocus);

el4.addEventListener("mousedown", onMouseOver);