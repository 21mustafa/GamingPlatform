import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });

      alert("Registration successful! Please login.");
      navigate("/login") 
    } catch (e) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="register">
        <h1 className="register-header">Register</h1>
        <form className="register-form" onSubmit={registerUser}>
          <input
            className="register-input"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="register-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-button">Register</button>
          <div className="register-link-container">
            Already a member?{" "}
            <Link to="/login">
              Login
            </Link>
          </div>
        </form>
    </div>
  );
};
