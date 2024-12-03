import React from "react";

const Filter = ({ filterByTitle, filterByRating }) => {
  return (
    <div style={styles.filter}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => filterByTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        onChange={(e) => filterByRating(Number(e.target.value))}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  filter: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default Filter;
