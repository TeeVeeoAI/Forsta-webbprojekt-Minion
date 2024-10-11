function Onclick() {
    document.getElementsByClassName("text").style.backgroundColor= "black";
    document.getElementByClassName("text").style.color = "white";
    document.getElementByClassName("text").style.textShadow = "5px 3px 10px #ffffff2f";
    document.getElementByClassName("text").style.borderRadius = "10px";
    document.getElementById("onclick").style.visibility = "hidden";
    document.getElementById("offclick").style.visibility = "visible"
}

function Offclick() {
    document.getElementById("text").style.backgroundColor = "";
    document.getElementById("text").style.color = "";
    document.getElementById("text").style.textShadow = "";
    document.getElementById("text").style.borderRadius = "";
    document.getElementById("offclick").style.visibility = "hidden";
    document.getElementById("onclick").style.visibility = "visible"
}