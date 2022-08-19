let keys = document.querySelectorAll('.keys');
let string = "";
let num1;
let num2;
let isReadytoOperate = false;
let operator = '';

function sum(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b=== 0) {
        return null;
    }
    return a/b;
}

function operate(operator, a, b) {
    let ans;
    switch (operator) {
        case "+":
            ans = sum(a ,b);
            break;
        case " - ":
            ans = subtract(a ,b);
            break;
        case "*":
            ans = multiply(a ,b);
            break;
        case "/":
            ans = divide(a ,b);
            break; 
        default:
            return "ERROR";
    }
    return ans;
}

keys.forEach(key => {
    key.addEventListener('click' , (e) => {
        if(key.innerHTML === "+" || key.innerHTML === " - " || key.innerHTML === "*" || key.innerHTML === "/") {
            if (isReadytoOperate) {
                num2 = Number(string); //second number.
                let ans = operate(operator, num1, num2);
                console.log(ans);
                isReadytoOperate = false;
                operator = key.innerHTML;
                console.log(operator);
                string = "";
            }
            else {
                isReadytoOperate = true;
                num1 = Number(string); // getting first Number.
                operator = key.innerHTML;
                string = "";
            }
        }
        else {
            string += key.innerHTML;
            console.log(string);
        }
    })
})