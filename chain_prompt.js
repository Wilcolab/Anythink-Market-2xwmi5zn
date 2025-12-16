function toKebabCase(input) {
    // Error handling: check if input is a string
    if (typeof input !== 'string') {
        return `Error: Input must be a string, but received ${typeof input}`;
    }

    // Convert to kebab-case
    return input
        .trim() // Remove leading/trailing whitespace
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/[^\w-]/g, '') // Remove special characters
        .toLowerCase();
}