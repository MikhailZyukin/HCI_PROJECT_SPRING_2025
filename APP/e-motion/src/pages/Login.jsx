import React, { useState } from "react";
import "../styles/Form.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = () => {
    alert("Signed in (Prototype)");
  };

  return (
    <div className="form-container">
      <h2>Welcome to your emotional journey</h2>
      <input name="email" placeholder="Enter your email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} />

      <div className="login-options">
        <label><input type="checkbox" /> Remember me</label>
        <a href="#">Forgot password?</a>
      </div>

      <button onClick={handleLogin}>Sign In</button>
      <p className="form-footer">Don’t have an account? <a href="/signup/parent">Sign up</a></p>
    </div>
  );
};

export default Login;

