import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://via.placeholder.com/250",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A space exploration movie by Christopher Nolan.",
      posterURL: "https://via.placeholder.com/250",
      rating: 4,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Add new movie
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  // Filter by title
  const filterByTitle = (title) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  // Filter by rating
  const filterByRating = (rating) => {
    const filtered = movies.filter((movie) => movie.rating >= rating);
    setFilteredMovies(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Movie App</h1>
      <Filter filterByTitle={filterByTitle} filterByRating={filterByRating} />
      <MovieList movies={filteredMovies} />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() =>
            addMovie({
              title: "New Movie",
              description: "Description of the new movie.",
              posterURL: "https://via.placeholder.com/250",
              rating: 3,
            })
          }
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
          }}
        >
          Add New Movie
        </button>
      </div>
    </div>
  );
};

export default App;
