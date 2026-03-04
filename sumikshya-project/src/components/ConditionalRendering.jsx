import React from 'react'
import { useState } from 'react'
import './ConditionalRendering.css'
import { CiBrightnessUp } from "react-icons/ci";

const ConditionalRendering = () => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [inStock, setInStock] = useState(true);
     const [darkTheme, setDarkTheme] = useState(false);
     const [name, setName] = useState("");
     const [formMessage, setFormMessage] = useState("");

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setFormMessage("❌ Name is required");
    } else {
      setFormMessage("✅ Form submitted successfully");
      setName("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkTheme ? "#111" : "#f5f5f5",
        color: darkTheme ? "#fff" : "#000",
        padding: "30px",
        textAlign: "center",
      }}
    >
     
      <h2>1. Login / Logout</h2>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

     
      <h2>2. Greeting</h2>
      <p>
        {isLoggedIn
          ? "👋 Welcome back, User!"
          : "👋 Hello Guest, please login"}
      </p>

     
      <h2>3. Product Availability</h2>
      <p>{inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
      <button onClick={() => setInStock(!inStock)}>
        Toggle Stock
      </button>

      
      <h2>4. Theme Switcher</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>
      switch to {darkTheme ? "Light":"Dark"} theme  <CiBrightnessUp />
      </button>

      <h2>5. Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <p>{formMessage}</p>
    </div>
  );
};


export default ConditionalRendering
