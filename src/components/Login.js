import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../api/auth";
import { logIn } from "../helpers/auth";
import './Login.css'
const Login = ({
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    user,
    setUser,
  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userToAuth = { user: { username: username, password: password } };
        const data = await loginUser(userToAuth);
        if (data.token) {
            setToken(data.token);
            setUser(data.user);
            setIsLoggedIn(true);
            setUsername("");
            setPassword("");
            navigate("/posts");
            console.log(isLoggedIn)
        }
    };
    console.log(isLoggedIn)
    return (
      <>
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
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
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" id="loginButt">Login</button>
          </form>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </>
    );
  };
  
  export default Login;
