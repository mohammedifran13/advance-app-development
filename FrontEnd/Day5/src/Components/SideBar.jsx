import { Link } from 'react-router-dom';
import '../assets/css/SideBar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/dashboard" className="menu-link">
              Dashboard
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/boats" className="menu-link">
              Boats
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/reservations" className="menu-link">
              Reservations
            </Link>
          </li>
        </ul>
        <div className="profile-section">
          <img
            src="https://example.com/avatar.jpg" // Replace with the actual URL of the user's avatar
            alt="User Avatar"
            className="profile-avatar"
          />
          <p className="profile-name"></p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
