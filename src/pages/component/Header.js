import React,{useState} from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('token');
  const user_name = localStorage.getItem('user_name');
 // State to manage dropdown visibility
 const [dropdownVisible, setDropdownVisible] = useState(false);

 const toggleDropdown = () => {
   setDropdownVisible(!dropdownVisible);
 };

 const handleLogout = () => {
   // Clear the token on logout
   localStorage.removeItem('token');
   localStorage.removeItem('user_name');
   // Redirect or handle after logout action
   window.location.href = '/login'; // Redirect to login page after logout
 };
  return (
    <nav className="container main-nav navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Blackties<br />
        <span>Rental</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="main-nav-items collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact className="nav-item nav-link" activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/our-vehicle">
            Our Vehicles
          </NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/how-it-works">
            How it Works
          </NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/driver-benefits">
            Driver Benefits
          </NavLink>
        </div>
      </div>
      <div className="nav-btn-wrapper">
      {token ? (
  <div className="profile-section">
    {/* Profile image and name */}
    <img
      src='/assets/images/Avatar.png' // Replace with actual image path
      alt="Profile"
      className="profile-image"
      style={{ width: '32px',height:'30px', borderRadius: '50%',marginRight:'12px' }}
    />
    <span className="profile-name">{user_name}</span> {/* Replace with dynamic username */}

    <div className="dropdown">
      <button
        className="profile-btn"
        onClick={toggleDropdown}
        style={{ background: 'none', border: 'none', cursor: 'pointer', background: '#fff' }}
      >
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      {/* Dropdown menu */}
      {dropdownVisible && (
        <div className="dropdown-menu" style={{ position: 'absolute', top: '40px', right: '0px', display:'block' }}>
          <Link to="/welcome" className="dropdown-item">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="dropdown-item">
            Logout
          </button>
        </div>
      )}
    </div>
  </div>
) : (
  <>
    <Link to="/login" className="theme-btn1">
      Login
    </Link>
    <Link to="/register" className="theme-btn2">
      Register
    </Link>
  </>
)}

      </div>
    </nav>
  );
}

export default Header;
