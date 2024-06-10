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
    resultViewBox.textContent = "";
    outputText = "";
    inputText = codeViewBox.textContent.trim() + " ";
    let currNode = morseTree.root;

    for (let i = 0; i < inputText.length; i++) {
        let curr = inputText.charAt(i);
        if (currNode != null) {
            if (curr == ".") {
                currNode = currNode.left;
            } else if (curr == "-") {
                currNode = currNode.right;
            } else if (curr == " ") {
                if (currNode.data != "root") {
                    outputText += currNode.data;
                }
                currNode = morseTree.root;
            } else if (curr == "\t") {
                if (currNode.data != "root") {
                    outputText += currNode.data;
                    outputText += " ";
                }
                currNode = morseTree.root;
            }
        } else {
            if (curr == "\t") {
                outputText += "? ";
                currNode = morseTree.root;
            } else if (curr == " ") {
                outputText += "?";
                currNode = morseTree.root;
            }
        }

    }

    resultViewBox.textContent = outputText;

}