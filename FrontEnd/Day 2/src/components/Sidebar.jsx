// Sidebar.jsx

import React from 'react';
import '../assets/css/Sidebar.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item"><a href="#" className="menu-link">Dashboard</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Reservations</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Boats</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Customers</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
