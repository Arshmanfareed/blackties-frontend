import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useHandleLogout from '../../utils/handleLogout';

function Header() {
  // Custom hook for logout functionality
  const handleLogout = useHandleLogout();

  // Retrieve user authentication details from localStorage
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')) || {};

  // State to manage the visibility of the profile dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // State to manage the navbar toggle in mobile view
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggles the visibility of the profile dropdown.
   */
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  /**
   * Toggles the navbar collapse for mobile view.
   */
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="container main-nav navbar navbar-expand-lg navbar-light bg-light">
      {/* Logo Section */}
      <Link className="navbar-brand" to="/">
        Blackties<br />
        <span>Rental</span>
      </Link>

      {/* Navbar toggle button for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNavAltMarkup"
        aria-expanded={isActive}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Main navigation links */}
      <div
        className={`main-nav-items collapse navbar-collapse ${isActive ? 'active' : ''}`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          {/* Navigation Links */}
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

        {/* User Profile Section */}
        <div className="nav-btn-wrapper">
          {token ? (
            <div className="profile-section">
              {/* User Profile Image and Name */}
              <img
                src={'https://blackties-backend.dev.internalstaging.com' + user.image || '/assets/images/Avatar.png'}
                alt="Profile"
                className="profile-image"
                style={{ width: '32px', height: '30px', borderRadius: '50%', marginRight: '12px', }}
              />
              <span className="profile-name" style={{ color: '#fff' }}>
                {user.username || 'No Name'}
              </span>

              {/* Dropdown Button */}
              <div className="dropdown">
                <button
                  className="profile-btn"
                  onClick={toggleDropdown}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', background: '#fff', }}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </button>

                {/* Dropdown Menu */}
                {dropdownVisible && (
                  <div className="dropdown-menu" style={{ position: 'absolute', top: '40px', right: '0px', display: 'block' }}>
                    {/* Profile Info in Dropdown */}
                    <div className='prof_info'>
                      <img
                        src={'https://blackties-backend.dev.internalstaging.com' + user.image || '/assets/images/Avatar.png'}
                        alt="Profile"
                        className="profile-image"
                        style={{ borderRadius: '50%', marginRight: '12px', }}
                      />
                      <span className="profile-name" style={{ color: '#fff', }}>
                        {user.username || 'No Name'}
                        <div className='accept'>Accepted</div>
                      </span>
                    </div>

                    {/* Conditional Dashboard Link */}
                    {user.role == "ADMIN" ? (
                      <Link to="/admin-dashboard-main" className="dropdown-item">
                        <img src='assets/images/Category.png' />
                        Dashboard
                      </Link>
                    ) : (
                      <Link to="/welcome" className="dropdown-item">
                        <img src='assets/images/Category.png' />
                        Dashboard
                      </Link>
                    )}

                    {/* Logout Button */}
                    <button onClick={handleLogout} className="dropdown-item">
                      <img src='assets/images/logout.svg' />Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Login/Register Buttons for unauthenticated users
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
      </div>
    </nav>
  );
}

export default Header;
