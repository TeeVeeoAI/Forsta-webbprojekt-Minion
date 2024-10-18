let i = 1, j = 1, l = 1;
function IMGOtto() {
    if (i == 1) {
        document.getElementById("Otto").src="Minions img/Otto/Otto2.jpg";
        i++;
    } else if (i == 2) {
        document.getElementById("Otto").src="Minions img/Otto/Otto.png";
        i--;
    }
}

function IMGJerry() {
    if (j == 1) {
        document.getElementById("Jerry").src="Minions img/Jerry/Jerry_Evil.png.webp";
        j++;
    } else if (j == 2) {
        document.getElementById("Jerry").src="Minions img/Jerry/Jerry.webp";
        j--;
    }
}

function IMGMel() {
    if (l == 1) {
        document.getElementById("Mel").src="Minions img/Mel/Mel2.webp";
        l++;
        Width("Mel", "100%");
    } else if (l == 2) {
        document.getElementById("Mel").src="Minions img/Mel/Mel.webp";
        l--;
        Width("Mel", "50%");
    }
}

function Width(a, b) {
    document.getElementById(a).style.width = b;
}