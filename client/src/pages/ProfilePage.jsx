import axios from "axios";
import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export const ProfilePage = () => {
  const { ready, user, setUser } = useContext(UserContext);

  const logout = async () => {
    await axios.post("/logout");
    setUser(null);
  };

  if (!ready) {
    return <div>Loading..</div>;
  }

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="profile-picture">
          <img src="/assets/avatar.png" alt="profile picture" width={300}/>
        </div>
        <div className="profile-text">
          Hi, {user.name}. Logged in with {user.email}
        </div>
      </div>
     
      <button className="profile-logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
