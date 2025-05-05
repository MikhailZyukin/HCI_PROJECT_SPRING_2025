import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src="/EmotionLogo.png" alt="E-Motion Logo" className="logo" />
      <h1>Welcome to E-Motion</h1>
      <p>Choose your role to begin</p>

      <div className="home-buttons">
        <button onClick={() => navigate("/signup/parent")}>👩 I'm a Parent</button>
        <button onClick={() => navigate("/signup/child")}>🧒 I'm a Child</button>
      </div>

      <p className="help-link">Need help?</p>
    </div>
  );
};

export default Home;

