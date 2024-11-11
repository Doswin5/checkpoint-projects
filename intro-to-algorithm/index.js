function analyzeSentence(sentence) {
  // Initialize the three counters
  let charCount = 0;     // Counter for total characters
  let wordCount = 0;     // Counter for words
  let vowelCount = 0;    // Counter for vowels

  // Set of vowels for easy checking
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Flag to track if we're in the middle of a word
  let inWord = false;

  // Loop over each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    
    // Step 1: Count each character (including spaces and punctuation)
    charCount++;
    
    // Step 2: Check if the character is a vowel
    if (vowels.has(char)) {
      vowelCount++;
    }

    // Step 3: Count words
    if (char === ' ') {
      // End of a word when a space is encountered
      inWord = false;
    } else if (char !== '.' && !inWord) {
      // Start of a new word when a non-space, non-period character is encountered
      wordCount++;
      inWord = true;
    }
  }

  // Step 4: Output the results
  console.log("Length of the sentence:", charCount);
  console.log("Number of words in the sentence:", wordCount);
  console.log("Number of vowels in the sentence:", vowelCount);
}

// Test the function with an example sentence
analyzeSentence("Hello world.");
