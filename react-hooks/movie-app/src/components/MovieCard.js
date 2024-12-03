import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterURL} alt={`${movie.title} Poster`} style={styles.image} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    textAlign: "center",
    margin: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default MovieCard;
