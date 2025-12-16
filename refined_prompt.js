/**
 * Converts a given string to camel case.
 * 
 * Camel case format capitalizes the first letter of each word except for the first word,
 * and removes any underscores or spaces between words.
 * 
 * @param {string} str - The input string to be converted to camel case.
 * @throws {Error} Throws an error if the input is not a non-null string.
 * @returns {string} The camel case version of the input string.
 * 
 * @example
 * // Returns: userId
 * console.log(toCamelCase("user_id"));
 * 
 * @example
 * // Throws an error
 * console.log(toCamelCase(619));
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error('Invalid input: Input must be a non-null string.');
    }

    return str
        .split(/[_\s]+/) // Split by underscores or spaces
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word should be lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join(''); // Join all parts together
}

// Example usage:
// console.log(toCamelCase("user_id")); // Outputs: userId
// console.log(toCamelCase(619)); // Throws an error


/**
 * Converts a given string to dot case.
 * 
 * Dot case format converts all words to lowercase and joins them with dots,
 * removing any underscores or spaces between words.
 * 
 * @param {string} str - The input string to be converted to dot case.
 * @throws {Error} Throws an error if the input is not a non-null string.
 * @returns {string} The dot case version of the input string.
 * 
 * @example
 * // Returns: user.id
 * console.log(toDotCase("user_id"));
 * 
 * @example
 * // Returns: first.name
 * console.log(toDotCase("first name"));
 */
function toDotCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error('Invalid input: Input must be a non-null string.');
    }

    return str
        .split(/[_\s]+/) // Split by underscores or spaces
        .map(word => word.toLowerCase()) // Convert each word to lowercase
        .join('.'); // Join with dots
}

// Example usage:
// console.log(toDotCase("user_id")); // Outputs: user.id
// console.log(toDotCase("first name")); // Outputs: first.name

