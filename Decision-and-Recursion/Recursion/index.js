// Fibonacci Sequence
// Recursive function to get the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n; // Base case: 0 or 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// Test the function
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55


// Palindrome Checker
// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove spaces, punctuation, and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Base case: if string length is 0 or 1, it's a palindrome
  if (cleanStr.length <= 1) return true;

  // Check first and last characters
  if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) return false;

  // Recursive case: check the substring without first and last characters
  return isPalindrome(cleanStr.slice(1, -1));
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello")); // Output: false


// Power Function
// Recursive function to calculate power
function power(base, exponent) {
  if (exponent === 0) return 1; // Base case: any number to the power of 0 is 1
  return base * power(base, exponent - 1); // Recursive case
}

// Test the function
console.log(power(2, 3)); // Output: 8 (2^3 = 2 * 2 * 2)
console.log(power(5, 0)); // Output: 1 (5^0 = 1)
