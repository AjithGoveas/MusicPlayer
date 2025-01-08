// Home.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Sidebar.css";
import "../styles/MainContent.css";

const Sidebar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout Successful!");
    navigate("/"); // Navigate to the Welcome page
  };
  return (
    <div className="sidebar">
      <div className="profile">
        <div
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const PlaceholderItem = () => (
  <div className="item">
    <div className="img" src="placeholder-art.jpg" alt="Placeholder Art" />
    <p className="name">Placeholder Name</p>
    <p className="artist">Placeholder Artist</p>
    <i className="heart-icon fas fa-heart" />
  </div>
);

const MainContent = () => (
  <div className="main-content">
    <section className="greeting">
      <h1>Welcome Back!</h1>
      <p>Discover new music and enjoy your favorites.</p>
    </section>

    <section className="recent-section">
      <h2>Recent</h2>
      <div className="grid">
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
      </div>
    </section>

    <section className="top-songs-section">
      <h2>Top Songs</h2>
      <div className="grid">
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
      </div>
    </section>

    <section className="top-podcasts-section">
      <h2>Top Podcasts</h2>
      <div className="grid">
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
      </div>
    </section>

    <section className="playlists-section">
      <h2>Your Playlists</h2>
      <div className="grid">
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
      </div>
    </section>
  </div>
);

const Home = () => {
  const user = {
    profilePicture: "user-profile.jpg",
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return (
    <div className="home">
      <Sidebar user={user} />
      <MainContent />
    </div>
  );
};

export default Home;
