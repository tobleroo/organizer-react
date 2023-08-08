import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {isTokenExpired} from "../Api/OrganizerAuth";

import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login");
    try {
      const response = await axios.post(
        "https://localhost:7117/api/Auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
  
      console.log("token -> " + response.data);
  
      if (response.status === 200) {
        console.log("success, jwt saved to localstorage");
        localStorage.setItem("token", response.data); // Assuming the token is returned as 'token' property in the response
        navigate("/calendar");
        
      } else {
        console.log(response.data.message); // Assuming the error message is returned as 'message' property in the response
      }
    } catch (error) {
      // Handle error here
      if (error.response) {
        // The request was made, but the server responded with an error status
        console.log("Error status:", error.response.status);
        console.log("Error data:", error.response.data);
        // >-----  lägg in att de kommer upp en p tagg med error message i login!!! ------<
        const errorMessageDiv = document.getElementById("error-message-box");
        errorMessageDiv.innerHTML = `<p>${error.response.data}</p>`;

      } else if (error.request) {
        // The request was made, but no response was received
        console.log("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error:", error.message);
      }
    }
  
  };

  const handleLogout = () => {
    console.log("logout");
  };


  return (
    <div className="login">
      <div className="form-box">
        <h1>Login</h1>
        <div id="error-message-box">

        </div>
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