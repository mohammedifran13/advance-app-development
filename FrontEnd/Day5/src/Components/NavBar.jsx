import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
// import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import '../assets/css/NavBar.css';
// import RoofingIcon from '@mui/icons-material/Roofing';
//   import PersonIcon from '@mui/icons-material/PersonPinCircle';
//   import BookmarkIcon from '@mui/icons-material/StarHalf';
  import PaymentIcon from '@mui/icons-material/Payment';
  import SupportIcon from '@mui/icons-material/Help';
  // import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
  

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="nav1">
      <nav className="navbar">
        <button className="sidebar-togglenav" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className={`sidebarnav ${isSidebarOpen ? 'open' : ''}`}>
          <button className="close-sidebarnav" onClick={toggleSidebar} style={{ fontSize: "20px" }}>
            <BsArrowLeft />
          </button>
          <div className="sidebar-contentnav">
            <h1 style={{ paddingTop: "0%", paddingLeft: '10px', paddingBottom: " 1px", color: "black" }}>NRI Aquacruise </h1>
            <div className='sidebariconsnav'>
            <div className='sidebariconsnav'>
            <h3 style={{ display: 'inline-block', verticalAlign: 'middle', margin: '10' }}></h3>
            <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>Hi ADMIN03</p>
          </div>
          
          </div>
  {/*         <Link to="/user/course" >
          <div className='sidebariconsnav'>
          <Link to="/user/course">
            <div className='sidebariconsnav'>
                <h3 style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}><LibraryBooksIcon /></h3>
                <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>Courses</p>
            </div>
            </Link>
          </div>
          </Link>
          <Link to="/user/bookmark" >
          <div className='sidebariconsnav'>
          <Link to="/user/course" className='sidebariconsnav'>
            <h3 style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}><LibraryBooksIcon /></h3>
            <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>Courses</p>
            </Link>
          </div>
  </Link> */}
          <Link to="/user/payment" >
          <div className='sidebariconsnav'>
          <Link to="/user/payment" className='sidebariconsnav'>
            <h3 style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}><PaymentIcon /></h3>
            <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>View Payment</p>
            </Link>
          </div>
          </Link>
          <Link to="/routeTo/support" >
          <div className='sidebariconsnav'>
          <Link to="/" className='sidebariconsnav'>
            <h3 style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}><SupportIcon /></h3>
            <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>SignOut</p>
            </Link>
          </div>
          </Link>
          </div>
        </div>
        <Link to="/" className="navbar-logonav">
          NRI
        </Link>
        <ul className="nav-itemsnav">
          <li>
            <Link to="/homepage">HOME</Link>
          </li>
          <li>
            <Link to="/addyacht">ADD SHIP</Link>
          </li>
          <li>
            <Link to="/yacht">SHIPS</Link>
          </li>
          <li>
            <Link to="/user/about">About</Link>
          </li>
          <li>
            <div className="profile-dropdownnav">
            <Link to="/profile">
            <div className="profile-triggernav" style={{color:"white"}} onClick={toggleProfileDropdown}>
            <CgProfile />
            
            </div>
            </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;