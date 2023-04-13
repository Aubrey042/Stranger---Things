// src/components/Register.js

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../api/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = { user: { username, password } };
    const data = await registerUser(newUser);

    if (data.success) {
      navigate("/login");
    } else {
      alert(data.error.message);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            minLength="4"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            minLength="8"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            id="passwordConfirmation"
            value={passwordConfirmation}
            minLength="8"
            required
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
