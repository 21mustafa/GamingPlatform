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
    <div>

      <div className="text-center max-w-lg mx-auto">
        Logged in as {user.name} ({user.email})
        <button className="primary max-w-sm mt-4" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
