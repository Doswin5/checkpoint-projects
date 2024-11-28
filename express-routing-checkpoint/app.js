const express = require("express");
const path = require("path");
const workingHours = require("./middleware/workingHours");

const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Apply the working hours middleware to all routes
app.use(workingHours);

// Routes
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

app.get("/services", (req, res) => {
    res.render("services", { title: "Our Services" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Us" });
});

// Start the server
const PORT = 3013;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
