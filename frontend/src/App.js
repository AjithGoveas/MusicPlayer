import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./assets/context/AuthContext";
import BackButtonHandler from "./assets/components/BackButtonHandler";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import WelcomePage from "./assets/pages/WelcomePage";
import Playlists from "./assets/pages/Playlists";
import Favorites from "./assets/pages/Favorites";
import Artists from "./assets/pages/Artists";
import Login from "./assets/components/Login";
import Settings from "./assets/pages/Settings";
import Loader from "./assets/components/Loader";
import "./App.css";

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/" />;
};

function App() {
  const { user, login } = useAuth(); // Accessing user and login from AuthContext
  const [loading, setLoading] = useState(true); // To handle loading state during OAuth
  const [isLoginVisible, setLoginVisible] = useState(false); // State for login modal visibility

  // Handlers for showing and hiding the login modal
  const showLogin = () => setLoginVisible(true);
  const hideLogin = () => setLoginVisible(false);
  const closeLoginForm = () => setLoginVisible(false);

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      if (code) {
        try {
          const response = await axios.get(
            `http://localhost:5000/callback?code=${code}`
          );
          const { access_token } = response.data;

          // Fetch user info using the access token
          const userInfoResponse = await axios.get(
            "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );

          login(userInfoResponse.data); // Set user in AuthContext
          window.history.replaceState({}, document.title, "/"); // Clean URL
        } catch (error) {
          console.error("Error handling OAuth callback:", error);
        }
      }
      setLoading(false); // Stop loading once OAuth handling is complete
    };

    handleOAuthCallback();
  }, [login]);

  // Render a loading indicator while handling OAuth callback
  if (loading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    ); // Replace with a spinner or custom loader
  }

  return (
    <div className="App">
      <Router>
        <BackButtonHandler />

        {/* Render Header only if user is logged in */}
        <Header onLoginClick={showLogin} />

        <div className="page-container">
          {/* Sidebar is visible only after login */}
          {/* {user && <Sidebar />} */}
          {isLoginVisible && (
            <Login
              setUser={user}
              onHideLogin={hideLogin}
              onClose={closeLoginForm}
            />
          )}
          <Routes>
            {/* Public routes */}
            <Route
              path="/"
              element={
                <WelcomePage
                  user={user}
                  onLoginClick={showLogin}
                  onClose={closeLoginForm}
                />
              }
            />
            <Route
              path="/login"
              element={
                isLoginVisible && <Login onClose={hideLogin} setUser={user} />
              }
            />

            {/* Protected routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute user={user}>
                  <Home user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/playlists"
              element={
                <ProtectedRoute user={user}>
                  <Playlists />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute user={user}>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/artists"
              element={
                <ProtectedRoute user={user}>
                  <Artists />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute user={user}>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
