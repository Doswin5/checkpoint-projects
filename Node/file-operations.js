const fs = require("fs");

// Create a file "welcome.txt" with the content "Hello Node"
fs.writeFileSync("welcome.txt", "Hello Node");

// Read the content of "welcome.txt" and log it
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
