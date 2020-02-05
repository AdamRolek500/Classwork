/**
 * Calculator project for Javascript
 *
 * By: Adam Rolek
 * Date: 2/3/2020
 */

/**
 * This function will display a typed value or handle operation buttons.
 * @param {String} val  The value passed in from the buttons.
 */
function dis(val) {
    switch (val) {
        case '.':
            if (checkDecimal()) {
                console.warn("Already a decimal!");
                return;
            }
            break;
        case ' + ':
        case ' - ':
        case ' * ':
        case ' ^ ':
        case ' / ':
            console.log("Operator selected.");
            let eq = document.getElementById("result").value;
            if (containsOperator(eq)) {
                solve(eq);
            }
            break;
        case 'PI':
            if (checkDecimal()) {
                console.warn("Already a decimal!");
                return;
            }
            document.getElementById("result").value += Math.PI.toPrecision(5);
            return;
        case '+/-':
            let num = document.getElementById("result").value;
            if (num < 0) {
                document.getElementById("result").value = Math.abs(num)
            } else if (num > 0) {
                document.getElementById("result").value = -Math.abs(num)
            } else {
                console.warn("Can't make '0' negative!")
            }
            return;
        case '1/X':
            let num1 = document.getElementById("result").value;
            document.getElementById("result").value = (1 / num1);
            return;
    }
    document.getElementById("result").value += val;
}

/**
 * This function will check if number 1 or number 2 already have decimals if the decimal button is pressed.
 * @returns {boolean}   Returns true if there is already a decimal point in either number; false otherwise.
 */
function checkDecimal() {
    let eq = document.getElementById("result").value;
    let arr = eq.split(" ");
    if (arr[0].includes('.') && !containsOperator(eq)) {
        return true;
    } else if (arr.length === 3 && arr[2].includes('.')) {
        return true;
    }
    return false;
}

/**
 * This function is used to check if an operator is present.
 * @param {String} eq   The display value.
 * @returns {boolean}   True if there is an operator; false otherwise.
 */
function containsOperator(eq) {
    return eq.includes('+') || eq.includes('-') || eq.includes('*') || eq.includes('/') || eq.includes('^');
}

/**
 *
 */
function solve() {
    let eq = document.getElementById("result").value;
    let arr = eq.split(" ");
    if (arr.length !== 3 || arr[0] === "" || arr[2] === "" || (arr[1] === '/' && arr[2] === '0')) {
        console.log("ERROR");
        document.getElementById("labels").innerHTML = "Error!";
        setTimeout(function () {
            document.getElementById("labels").innerHTML = "";
        }, 3000);
        document.getElementById("result").value = arr[0];
    } else {
        let result;
        if (arr[1] === '+') {
            result = parseFloat(arr[0]) + parseFloat(arr[2]);
        } else if (arr[1] === '-') {
            result = parseFloat(arr[0]) - parseFloat(arr[2]);
        } else if (arr[1] === '*') {
            result = parseFloat(arr[0]) * parseFloat(arr[2]);
        } else if (arr[1] === '/') {
            result = parseFloat(arr[0]) / parseFloat(arr[2]);
        } else if (arr[1] === '^') {
            result = Math.pow(arr[0], arr[2]);
        }
        memoryAdd(eq, result);
        document.getElementById("result").value = result;
    }
}

/**
 *
 */
function clr() {
    console.log("Cleared the display.");
    document.getElementById("result").value = "";
}

/**
 *
 * @param eq
 * @param num
 */
function memoryAdd(eq, num) {
    let ul = document.getElementById("memoryEQ");
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = eq;
    button.id = "memoryEQButton";
    button.setAttribute("onClick", "recallMemoryEQ(this.innerHTML)");
    li.appendChild(button);
    ul.appendChild(li);

    ul = document.getElementById("memoryResult");
    li = document.createElement("li");
    button = document.createElement("button");
    button.innerHTML = num;
    button.id = "memoryResultButton";
    button.setAttribute("onClick", "recallMemory(this.innerHTML)");
    li.appendChild(button);
    ul.appendChild(li);
}

/**
 *
 * @param eq
 */
function recallMemory(eq) {
    document.getElementById("result").value += eq;
}

function recallMemoryEQ(eq) {
    document.getElementById("result").value = eq;
}

/**
 *
 */
function clearMem() {
    let ul = document.getElementById("memoryEQ");
    while (ul.firstChild) ul.removeChild(ul.firstChild);
    ul = document.getElementById("memoryResult");
    while (ul.firstChild) ul.removeChild(ul.firstChild);
}

