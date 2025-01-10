import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user context state and localStorage
    navigate("/"); // Navigate to the Welcome page
    console.log("Logout Successful!");
  };

  return (
    <div className="sidebar">
      <div className="profile">
        {user ? (
          <>
            <img
              src={user.picture || "https://via.placeholder.com/100"}
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h2>{user.name || "Guest User"}</h2>
              <p>{user.email || "No email available"}</p>
            </div>
          </>
        ) : (
          <div className="profile-info">
            <h2>Welcome, Guest!</h2>
            <p>Please log in to access full features.</p>
          </div>
        )}
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/home" aria-label="Home">
              <i className="bx bxs-home bx-sm"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" aria-label="Favorites">
              <i className="bx bxs-heart bx-sm"></i> Favorites
            </Link>
          </li>
          <li>
            <Link to="/playlists" aria-label="Playlists">
              <i className="bx bxs-playlist bx-sm" /> Playlists
            </Link>
          </li>
          <li>
            <Link to="/artists" aria-label="Artists">
              <i className="bx bxs-user bx-sm" /> Artists
            </Link>
          </li>
          <li>
            <Link to="/settings" aria-label="Settings">
              <i className="bx bxs-cog bx-sm" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="logout-button"
        onClick={handleLogout}
        aria-label="Logout"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
