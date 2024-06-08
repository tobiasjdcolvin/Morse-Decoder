const codeViewBox = document.getElementById("codeViewBox");
const resultViewBox = document.getElementById("resultViewBox");
let inputText;
let outputText = "";

function dotClicked() {
    codeViewBox.textContent += ".";
}

function dashClicked() {
    codeViewBox.textContent += "-";
}

function newLetterClicked() {
    codeViewBox.textContent += " ";
}

function clearClicked() {
    codeViewBox.textContent = "";
    resultViewBox.textContent = "";
    outputText = "";
}

function newWordClicked() {
    codeViewBox.textContent += "\t";
}

function decodeClicked() {
    // adds a new letter character " " so as to print the current character.
    codeViewBox.textContent += " ";
    inputText = codeViewBox.textContent;

    for (let i = 0; i < inputText.length; i++) {
        let curr = inputText.charAt(i);
        if (curr == ".") {
            outputText += "right\n";
        } else if (curr == "-") {
            outputText += "left\n";
        } else if (curr == " ") {
            outputText += "re-root, PRINT LETTER\n";
        } else if (curr == "\t") {
            outputText += "re-root, PRINT LETTER + SPACE\n";
        }
    }

    resultViewBox.textContent = outputText;

}