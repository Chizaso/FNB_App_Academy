let newLine = true;//Boolean variable. Determines if the next user types should be on a new line
let value1;
let currentOperator;

//Event handler for when any digit button is pressed
function digitBtnPressed(button) {
    if (newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        //Event handler for when the AC button is pressed
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

function equalsBtnPressed() {
    let value2 = parseInt(document.getElementById("inputBox").value);
    let finalTotal;

    switch (currentOperator) {
        case '+':
            finalTotal = value1 + value2;
            break;
        case '-':
            finalTotal = value1 - value2;
            break;
        case '*':
            finalTotal = value1 * value2;
            break;
        case '/':
            finalTotal = value1 / value2;
            break;

    }
    document.getElementById("inputBox").value = finalTotal;

}