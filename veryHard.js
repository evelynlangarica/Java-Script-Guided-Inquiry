const num1 = parseFloat(prompt('Enter your first number: '));
const num2 = parseFloat(prompt('Enter your second number: '));
let operator = prompt('Enter an operator');




if (operator == '+') {
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`)
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}


console.log(`${num1} ${operator} ${num2} = ${result}`);