import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { user,setUser } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setUser(data);
      alert("Login successful!");

      setRedirect(true);
    } catch (e) {
      alert("Login failed!");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
        <h1 className="login-header">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button">Login</button>
          <div className="login-link-container">
            Don't have an account yet?{" "}
            <Link className="login-link" to="/register">
              Register now
            </Link>
          </div>
        </form>
    </div>
  );
};
