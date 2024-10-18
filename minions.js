let otto = 1, jerry = 1, mel = 1, bob = 1, carl = 1;
function IMGOtto() {
    if (otto == 1) {
        document.getElementById("Otto").src="Minions img/Otto/Otto2.jpg";
        otto++;
    } else if (otto == 2) {
        document.getElementById("Otto").src="Minions img/Otto/Otto.png";
        otto--;
    }
}

function IMGJerry() {
    if (jerry == 1) {
        document.getElementById("Jerry").src="Minions img/Jerry/Jerry_Evil.png.webp";
        jerry++;
    } else if (jerry == 2) {
        document.getElementById("Jerry").src="Minions img/Jerry/Jerry.webp";
        jerry--;
    }
}

function IMGMel() {
    if (mel == 1) {
        document.getElementById("Mel").src="Minions img/Mel/Mel2.webp";
        mel++;
        Width("Mel", "100%");
    } else if (mel == 2) {
        document.getElementById("Mel").src="Minions img/Mel/Mel.webp";
        mel--;
        Width("Mel", "50%");
    }
}

function IMGBob() {
    if (bob == 1) {
        document.getElementById("Bob").src="Minions img/Bob/Bob2.png";
        bob++;
    } else if (bob == 2) {
        document.getElementById("Bob").src="Minions img/Bob/Bob.png";
        bob--;
    }
}

function IMGCarl() {
    if (carl == 1) {
        document.getElementById("Carl").src="Minions img/Carl/Carl_bee-do.webp";
        carl++;
    } else if (carl == 2) {
        document.getElementById("Carl").src="Minions img/Carl/Carl.png";
        carl--;
    }
}

function Width(id, size) {
    document.getElementById(id).style.width = size;
}

function IMG(id, src) {

}