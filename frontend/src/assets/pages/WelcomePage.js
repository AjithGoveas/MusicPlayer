import React, { useState } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const WelcomePage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const closeLoginForm = () => {
    setIsLoginVisible(false);
  };

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />
      {isLoginVisible && <Login onClose={closeLoginForm} />}
      <main>
        {/* Other welcome page content */}
      </main>
      
    </div>
  );
};

export default WelcomePage;
