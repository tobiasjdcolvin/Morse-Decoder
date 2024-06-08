const codeViewBox = document.getElementById("codeViewBox");

function dotClicked() {
    codeViewBox.textContent += ".";
}

function dashClicked() {
    codeViewBox.textContent += "-";
}

function spaceClicked() {
    codeViewBox.textContent += " ";
}

function clearClicked() {
    codeViewBox.textContent = "";
}