import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
    textAlign: "center",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={`${name}'s image`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: "Unknown",
  image: "https://via.placeholder.com/300",
};

// Prop Types
Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Player;
