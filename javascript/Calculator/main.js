function dis(val) {
    if (val.localeCompare('.') === 0 && document.getElementById("result").value.includes('.')) {
        console.warn("Attempted to have more than one decimal!");
        return;
    } else if (val.localeCompare(' + ') === 0){
        console.log("Addition selected.");
        let eq = document.getElementById("result").value;
        if (containsOperator(eq)){
            solve(eq);
        }
    } else if (val.localeCompare(' - ') === 0){
        console.log("Subtraction selected.");
        let eq = document.getElementById("result").value;
        if (containsOperator(eq)){
            solve(eq);
        }
    } else if (val.localeCompare(' * ') === 0){
        console.log("Multiplication selected.");
        let eq = document.getElementById("result").value;
        if (containsOperator(eq)){
            solve(eq);
        }
    } else if (val.localeCompare(' / ') === 0){
        console.log("Division selected.");
        let eq = document.getElementById("result").value;
        if (containsOperator(eq)){
            solve(eq);
        }
    }
    document.getElementById("result").value += val;
}

function containsOperator(eq) {
    return eq.includes('+') || eq.includes('-') || eq.includes('*') || eq.includes('/');
}

function solve() {
    let eq = document.getElementById("result").value;
    let arr = eq.split(" ");
    if (arr.length !== 3 || arr[0] === "" || arr[2] === ""){
        console.log("ERROR");
        document.getElementById("labels").innerHTML = "Error!";
        document.getElementById("result").value = arr[0];
    } else {
        document.getElementById("result").value = eval(arr[0] + arr[1] + arr[2]);
    }
}

function clr() {
    console.log("Cleared the display.");
    document.getElementById("result").value = "";
}

