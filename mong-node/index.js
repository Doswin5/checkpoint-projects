require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("./models/Person");

const createAndSavePerson = () => {
  const newPerson = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["Pizza", "Burger"],
  });

  newPerson.save((err, data) => {
    if (err) return console.error(err);
    console.log("Person saved:", data);
  });
};

// Uncomment to run
createAndSavePerson();

const createManyPeople = (arrayOfPeople) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log("People saved:", people);
  });
};

// Sample data
const peopleArray = [
  { name: "Alice", age: 25, favoriteFoods: ["Pasta", "Salad"] },
  { name: "Bob", age: 22, favoriteFoods: ["Pizza"] },
  { name: "Charlie", age: 28, favoriteFoods: ["Burger", "Fries"] },
];

// Uncomment to run
// createManyPeople(peopleArray);

const findPeopleByName = (personName) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return console.error(err);
    console.log("People found:", people);
  });
};

// Uncomment to run
// findPeopleByName("Alice");


const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    console.log("Person found:", person);
  });
};

// Uncomment to run
findOneByFood("Pizza");

const findPersonById = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    console.log("Person found by ID:", person);
  });
};

// Uncomment to run with an actual ID
// findPersonById("person_id_here");


const findEditThenSave = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push("Hamburger");
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log("Updated person:", updatedPerson);
    });
  });
};

// Uncomment to run with an actual ID
// findEditThenSave("person_id_here");


const updatePersonByName = (personName) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    (err, updatedPerson) => {
      if (err) return console.error(err);
      console.log("Updated person:", updatedPerson);
    }
  );
};

// Uncomment to run
// updatePersonByName("Alice");


const removeById = (personId) => {
  Person.findByIdAndRemove(personId, (err, deletedPerson) => {
    if (err) return console.error(err);
    console.log("Deleted person:", deletedPerson);
  });
};

// Uncomment to run with an actual ID
// removeById("person_id_here");


const removeManyPeople = (name) => {
  Person.remove({ name }, (err, result) => {
    if (err) return console.error(err);
    console.log("Deleted people:", result);
  });
};

// Uncomment to run
// removeManyPeople("Mary");


const queryChain = () => {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 }) // Sort by name
    .limit(2) // Limit to 2 results
    .select("-age") // Exclude age field
    .exec((err, data) => {
      if (err) return console.error(err);
      console.log("Query results:", data);
    });
};

// Uncomment to run
// queryChain();




mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));
