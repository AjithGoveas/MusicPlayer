import React, { useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import "../styles/WelcomePage.css";

const WelcomePage = ({ user }) => {
  const [isLoginVisible, setLoginVisible] = useState(false); // Destructured for cleaner syntax

  // Handlers for showing and hiding the login modal
  const showLogin = () => setLoginVisible(true);
  const hideLogin = () => setLoginVisible(false);
  const closeLoginForm = () => {
    setLoginVisible(false); // Set state to hide the login form
  };

  return (
    <div className="welcome-page">
      {/* Header with login toggle */}
      {/* <Header onLoginClick={showLogin} /> */}

      {/* Login modal, rendered conditionally */}
      {/* {isLoginVisible && (
        <Login
          setUser={user}
          onHideLogin={hideLogin}
          onClose={closeLoginForm}
        />
      )} */}
    </div>
  );
};

export default WelcomePage;
