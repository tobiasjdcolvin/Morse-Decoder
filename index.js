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
    let currNode = bstTree.root;

    for (let i = 0; i < inputText.length; i++) {
        let curr = inputText.charAt(i);
        if (currNode != null) {
            if (curr == ".") {
                currNode = currNode.left;
            } else if (curr == "-") {
                currNode = currNode.right;
            } else if (curr == " ") {
                outputText += currNode.data;
                currNode = bstTree.root;
            } else if (curr == "\t") {
                outputText += currNode.data;
                outputText += " ";
                currNode = bstTree.root;
            }
        }

    }

    resultViewBox.textContent = outputText;

}