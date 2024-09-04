//Assignment 1: Basic Calculator javascript


function calculate(num1, num2, operation) {
    // Validate input
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || !['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
        return 'Invalid input';
    }

    // Perform calculation based on the operation
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    } else {
        return 'Invalid operation';
    }
}

// Test cases
console.log(calculate(5, 3, 'add'));        
console.log(calculate(10, 2, 'divide'));    
console.log(calculate(7, 0, 'divide'));     
console.log(calculate(9, 3, 'multiply'));   
console.log(calculate(9, 3, 'subtract'));   

