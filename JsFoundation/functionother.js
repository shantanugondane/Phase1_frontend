function sum(num1, num2, FntoCall) {
    let result = num1 + num2;
    FntoCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum(1,2,displayResultPassive);