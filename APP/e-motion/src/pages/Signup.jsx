import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Form.css";

const Signup = () => {
  const { role } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Account created! (Prototype only)");
  };

  return (
    <div className="form-container">
      <h2>Create your account</h2>
      <div className="role-toggle">
        <button className={role === "parent" ? "selected" : ""}>👩 Parent</button>
        <button className={role === "child" ? "selected" : ""}>🧒 Child</button>
      </div>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />

      <button onClick={handleSubmit}>Create Account</button>
      <p className="form-footer">Already have an account? <a href="/login">Sign in</a></p>
    </div>
  );
};

export default Signup;

