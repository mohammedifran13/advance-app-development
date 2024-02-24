// Navbar.jsx

import React from 'react';
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">Boat Reservation System</div>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
