// src/components/ParentLoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ParentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "parent@emotion.com" && password === "demo") {
      sessionStorage.setItem("userRole", "parent");
      navigate("/dashboard/parent");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-form">
      <h2>Parent Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ParentLoginForm;

