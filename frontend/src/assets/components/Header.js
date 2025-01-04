import React from 'react';
import '../styles/Header.css';

// stickyHeader.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 90) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


const Header = ({ onLoginClick }) => {
    return (
        <header className="header">
            <div className="logo">LOGO</div>
            <nav id="navbar">
                <ul className='nav-list'>
                    <li>
                        <button className='login' onClick={onLoginClick}>Login</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
