// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  let splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

console.log(reverseString("hello"));


// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
  return str.length
}
console.log(countCharacters("Hello"))


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  let splitSentence = sentence.split(" ")
  const capitalized = splitSentence.map(item => item[0].toUpperCase()+item.slice(1))
  let capitalizeSentence = capitalized.join(" ")
  return capitalizeSentence
}
console.log(capitalizeWords("hello world"))


console.log("------------------------------")

// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// Example usage:
const numbers = [10, 5, 8, 20, 3];
function findMax(arr) {
  return Math.max(...arr);
}

const maxValue = findMax(numbers);
console.log(`The maximum value is: ${maxValue}`);

function findMin(arr) {
  return Math.min(...arr);
}

// Example usage:
const minValue = findMin(numbers);
console.log(`The minimum value is: ${minValue}`);


// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Example usage:
const ages = [10, 5, 8, 20, 3];
const sum = sumArray(ages);
console.log(`The sum of their ages is: ${sum}`);



// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr) {
  return arr.filter(num => num >= 8);
}

// Example usage:
const nums = [10, 5, 8, 20, 3];
const filtered = filterArray(nums);
console.log(`Filtered array: ${filtered}`);



// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  return n * factorial(n - 1); // Recursive case
}

// Example usage:
const num = 6;
const result = factorial(num);
console.log(`Factorial of ${num} is: ${result}`);


// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(n) {
  if (n <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  }

  return true; // If no divisors are found, the number is prime
}

// Example usage:
const num2 = 31;
const result2 = isPrime(num2);
console.log(`${num2} is ${result2 ? 'a prime number' : 'not a prime number'}`);


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
  if (n <= 0) {
    return []; // Return an empty array if no terms are requested
  }
  
  let fibSeq = [0]; // Start with the first Fibonacci number

  if (n > 1) {
    fibSeq.push(1); // Add the second Fibonacci number if more than 1 term is needed
  }

  for (let i = 2; i < n; i++) {
    const nextTerm = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(nextTerm); // Add the next term to the sequence
  }

  return fibSeq;
}

// Example usage:
const numOfTerms = 10;
console.log(fibonacci(numOfTerms)); 


