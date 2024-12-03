import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  // State to store user data
  const [listOfUser, setListOfUser] = useState([]); 

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setListOfUser(response.data); // Save data to state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {listOfUser.map((user) => (
          <li
            key={user.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
