import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Define state
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate web developer who loves React!",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Developer",
      },
      shows: false, // Boolean to toggle profile visibility
      timeInterval: 0, // Time interval since component was mounted
    };
  }

  // Lifecycle method to start timer
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ timeInterval: prevState.timeInterval + 1 }));
    }, 1000);
  }

  // Lifecycle method to clear timer
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Toggle show state
  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>React State Checkpoint</h1>

        {/* Button to toggle profile visibility */}
        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Show profile if 'shows' is true */}
        {shows && (
          <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", display: "inline-block" }}>
            <img
              src={person.imgSrc}
              alt="Profile"
              style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "10px" }}
            />
            <h2>{person.fullName}</h2>
            <p><strong>Bio:</strong> {person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}

        {/* Display time interval since component was mounted */}
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Time since component mounted: {timeInterval} seconds
        </p>
      </div>
    );
  }
}

export default App;
