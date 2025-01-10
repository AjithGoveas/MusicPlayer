import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

const Header = ({ onLoginClick }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user context state and localStorage
    navigate("/"); // Navigate to the Welcome page
    console.log("Logout Successful!");
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 90) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav id="navbar" role="navigation">
        <ul className="nav-list">
          {user ? (
            <>
              <li className="nav-item">
                <Link to="/home" aria-label="Home">
                  <i className="bx bxs-home bx-sm"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" aria-label="Favorites">
                  <i className="bx bxs-heart bx-sm"></i> Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/playlists" aria-label="Playlists">
                  <i className="bx bxs-playlist bx-sm"></i> Playlists
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/artists" aria-label="Artists">
                  <i className="bx bxs-user bx-sm"></i> Artists
                </Link>
              </li>
              <li className="nav-item">
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <Link to="/settings" aria-label="Settings">
                  <img
                    src={user.picture || "https://via.placeholder.com/60"}
                    alt="Settings"
                    className="settings-icon"
                  />
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="login" onClick={onLoginClick}>
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
