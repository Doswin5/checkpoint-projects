// Leap Year Tracker
// Function to check if a year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Test the function
console.log(isLeapYear(2024)); // Output: 2024 is a leap year.
console.log(isLeapYear(1900)); // Output: 1900 is not a leap year.

// Ticket Pricing
// Function to determine ticket price based on age
function getTicketPrice(age) {
  if (age <= 12) {
    return "Ticket Price: $10";
  } else if (age >= 13 && age <= 17) {
    return "Ticket Price: $15";
  } else {
    return "Ticket Price: $20";
  }
}

// Test the function
console.log(getTicketPrice(10)); // Output: Ticket Price: $10
console.log(getTicketPrice(15)); // Output: Ticket Price: $15
console.log(getTicketPrice(30)); // Output: Ticket Price: $20
