var el = document.getElementById("block");

function onHover() {
    el.innerHTML = "Click me!";
}

function notHover() {
    el.innerHTML = "My Block!";
}

function changeBackground() {
    this.style.backgroundColor = "red";
}

function changeBackgroundDiff() {
    this.style.backgroundColor = "blue";
}


el.addEventListener('mouseover', onHover);
el.addEventListener('click', changeBackground);
el.addEventListener('mouseout', notHover);
el.addEventListener('dblclick', changeBackgroundDiff);
