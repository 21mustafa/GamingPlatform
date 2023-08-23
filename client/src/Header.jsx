import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigation } from "react-router-dom";
import { UserContext } from "./UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  const location = useLocation()

  return (
    <header className="header">
      <Link to={"/"}>
        <div >
          <span class="header-text">GHOST</span>
          <i class="fa-solid fa-ghost fa-2x logo"></i>
        </div>
      </Link>

      <ul class="nav">
        <li>
          <Link class={location.pathname === "/" ? "selected" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link class={location.pathname === "/aboutus" ? "selected" : ""} to="/aboutus">About us</Link>
        </li>
        <li>
          <Link class={location.pathname === "/news" ? "selected" : ""} to="/news">News</Link>
        </li>
      </ul>

      <Link
        to={user ? "/account" : "/login"}
        className={location.pathname === "/account" || location.pathname === "/login" ? "account selected" : "account"} 
      >
        <div className="account-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>
  );
};
