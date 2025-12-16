function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            word = word.toLowerCase();
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber


function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a === null || b === null) {
        throw new Error('Invalid input: both arguments must be numbers and cannot be null or undefined.');
    }
    return a + b;
}

// Test cases
console.log(addNumbers(5, 3));        // 8
console.log(addNumbers('5', 3));      // Error: Invalid input
console.log(addNumbers(null, 3));     // Error: Invalid input
console.log(addNumbers(5, undefined)); // Error: Invalid input