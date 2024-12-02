import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

// Provide your name or leave empty
const firstName = "John"; // Replace with your first name or leave as an empty string

function App() {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "400px",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Image />
        <Name />
        <Price />
        <Description />
      </div>

      <div style={{ marginTop: "20px" }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Teal_PDP_Image_Position_1__en-IN_a1fc96e6-04cc-4c8a-8f9b-f22f27088bc6.jpg?v=1727247742&width=1445" // Replace with another image URL if desired
              alt="Welcome"
              style={{ width: "150px", marginTop: "10px" }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;
