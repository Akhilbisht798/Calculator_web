let keys = document.querySelectorAll('.keys');
let answerScreen = document.querySelector('.answerScreen');
let Log = document.querySelector('.Log');
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

// This will restart again if and only if User press ac
// otherwise the answer of previous 2 will be next num1.
keys.forEach(key => {
    key.addEventListener('click' , (e) => {
        if(key.innerHTML === "+" || key.innerHTML === " - " || key.innerHTML === "*" || key.innerHTML === "/" || key.innerHTML === " = ") {

            //if we have both operand and operator than it is ready to operate.
            if (isReadytoOperate) {
                if(operator === "") {
                    operator = key.innerHTML;
                    // console.log(operator);
                }
                else {
                    num2 = Number(string); //second number.
                    // we have all thing for a succesfull calculation.
                    let ans = operate(operator, num1, num2);
                    // console.log(ans);
                    answerScreen.innerHTML = ans; 
                    num1 = ans;
                }
                //if user press equal to button.
                if (key.innerHTML === " = ") {
                    operator = "";
                }
                else {
                    operator = key.innerHTML;
                }
                // console.log(operator);
                //Untill user press ac we can use our ans as num1.
                string = "";
            }
            //else not.
            else {
                num1 = Number(string); // getting first Number.
                operator = key.innerHTML; //getting the operator.
                isReadytoOperate = true; // we only lack 2 operand.
                string = "";
            }
        }
        else {
            string += key.innerHTML;
            console.log(string);
            Log.innerHTML = string;
        }
        if(num1 !== null && num2 !== null) {
            console.log("num1 is = "+num1);
            console.log("num2 is = "+num2);
        }
    })
})