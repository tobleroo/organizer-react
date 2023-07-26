import React, { useState } from "react";
import axios from "axios";

import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    console.log("login");
    const { data } = await axios.post("https://localhost:7117/api/Auth/login", {
      username,
      password,
    });

    if (data.success) {
        setToken(data.token);
      } else {
        alert(data.error);
    }
  };

  return (
    <div className="login">
      <div className="form-box">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            id="username"
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="password"
          />
          <button type="submit" onClick={handleLogin}>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;