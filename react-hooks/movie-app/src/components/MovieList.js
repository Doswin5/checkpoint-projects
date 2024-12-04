import React from "react";
import { Link } from "react-router-dom";
import movies from "../movies";

const MovieList = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Movie List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              width: "200px",
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src={movie.posterURL}
              alt={movie.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}</p>
            <Link
              to={`/movie/${movie.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
