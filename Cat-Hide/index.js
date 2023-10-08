function switchOff() {
    document.getElementById("bulb-on").style.display = "none";
    document.getElementById("bulb-off").style.display = "block";
    document.getElementById("cat-on").style.display = "none";
    document.getElementById("cat-eyes").style.display = "block";
    document.getElementById("switchstatus").textContent = "Switched Off";
    document.getElementById("onswitch").style.backgroundColor = "#22c55e";
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulb-on").style.display = "block";
    document.getElementById("bulb-off").style.display = "none";
    document.getElementById("cat-on").style.display = "block";
    document.getElementById("cat-eyes").style.display = "none";
    document.getElementById("switchstatus").textContent = "Switched On";
    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
}

switchOn();
