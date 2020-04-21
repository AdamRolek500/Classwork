function calculate() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var result = 0;
    var operation = document.getElementById("operation").value;
    if (operation == "ADD"){
        result = number1 + number2;
        operation = "+";
    } else if (operation == "SUBTRACT"){
        result = number1 - number2;
        operation = "-";
    } else if (operation == "MULTIPLY"){
        result = number1 * number2;
        operation = "*";
    } else if (operation == "DIVIDE"){
        result = number1 / number2;
        operation = "/";
    }
    document.getElementById("final_product").innerText = number1 + operation + number2 + "=" + result;
}