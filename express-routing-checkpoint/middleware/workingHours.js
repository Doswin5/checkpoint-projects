// middleware/workingHours.js
function workingHours(req, res, next) {
  const currentDate = new Date();
  const day = currentDate.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  const hour = currentDate.getHours(); // Hours in 24-hour format

  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next(); // Continue to the next middleware or route
  } else {
      res.status(403).send(
          "<h1>Sorry, the website is only available during working hours (Monday to Friday, 9 AM to 5 PM).</h1>"
      );
  }
}

module.exports = workingHours;
