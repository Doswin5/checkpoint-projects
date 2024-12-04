import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "./movies"; // Import movie data

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate(); // For navigation
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default MovieDetails;
