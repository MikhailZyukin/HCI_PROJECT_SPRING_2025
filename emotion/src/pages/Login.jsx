import React, { useState } from "react";
import ParentLoginForm from "../components/ParentLoginForm";
import ChildLoginForm from "../components/ChildLoginForm";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState(null);

  return (
    <div className="login-container">
      <img src="/EmotionLogo.png" alt="E-Motion Logo" className="logo" />
      <h1>Welcome to E-Motion</h1>
      <p>Helping children and parents connect emotionally</p>

      {!role && (
        <div className="login-buttons">
          <button onClick={() => setRole("parent")}>👩 Parent Login</button>
          <button onClick={() => setRole("child")}>🧒 Child Login</button>
        </div>
      )}

      {role === "parent" && <ParentLoginForm />}
      {role === "child" && <ChildLoginForm />}

      {!role && (
        <div className="example-section">
          <h3>Prototype Accounts</h3>
          <p><strong>Parent:</strong> parent@emotion.com / password: demo</p>
          <p><strong>Child:</strong> Name only required (e.g., Leo)</p>
        </div>
      )}
    </div>
  );
};

export default Login;

