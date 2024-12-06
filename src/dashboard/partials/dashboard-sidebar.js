import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useHandleLogout from '../../utils/handleLogout';

function DashboardSidebar() {
  // Custom hook to handle user logout functionality.
  const handleLogout = useHandleLogout();

  // Retrieve user details from localStorage or set to an empty object if not found.
  const user = JSON.parse(localStorage.getItem('user')) || {};

  // State to manage the visibility of the dropdown menu.
  const [isVisible, setIsVisible] = useState(false);

  // Toggles the visibility of the dropdown menu.
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Sidebar Wrapper */}
      <div className="dashboard-sidebar">
        {/* Brand and Navigation Links */}
        <div className="sidebar-routes-wrapper">
          <div className="dash-brand-wrapper">
            {/* Branding Link */}
            <Link to="/">
              Blackties
              <br />
              <span>Rental</span>
            </Link>
          </div>

          {/* Dropdown for vehicle menu */}
          <div className="dashboard-menu">
            <h6>Menu</h6>
            <div class="vehicles-menu">
              <button class="dropdown-toggle" onClick={toggleVisibility}> <img src="./assets/images/dashboard/bk-car.svg" alt="" />KM19 VTY</button>
              <ul class="dropdown-menu" style={{ display: isVisible ? 'block' : 'none' }}>
                <li><Link className={({ isActive }) => (isActive ? "active" : "")} to="/welcome"><img src="./assets/images/dashboard/Category12.svg" alt="" />Dashboard</Link></li>
                <li><Link className={({ isActive }) => (isActive ? "active" : "")} to="/vehicle-document"><img src="./assets/images/dashboard/dc.svg" alt="" />Document</Link></li>
                <li><Link className={({ isActive }) => (isActive ? "active" : "")} to="/maintenance"><img src="./assets/images/dashboard/tools 1.svg" alt="" />Maintenance</Link></li>
                <li><Link to="/driver-score"><img src="./assets/images/dashboard/driver-man 32423.svg" alt="" />Driver Score</Link></li>
              </ul>
            </div>

            {/* Static navigation links */}
            <ul>
              <li>
                {/* <NavLink
                  to="/applicant"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Category.svg" alt="" />
                  Application
                </NavLink> */}
              </li>
              <li>
                <NavLink
                  to="/rent-our-vehicle"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/booking.svg" alt="" />
                  Our Vehicles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/invoice"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Receipt.svg" alt="" />
                  Payment & Invoices
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support-ticket"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/mail.png" alt="" />
                  Support & Issues
                </NavLink>
              </li>
              <li>
                <NavLink to="/penalty-charge-notice"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/expense 1.svg" alt="" />
                  PCNs
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/#" 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Receipt.svg" alt="" />
                  PCNs
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/calender-all"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/calendar.png" alt="" />
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Icon2.svg" alt="" />
                  Notifications
                  <span id="notific">10</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/setting-profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Icon3.svg" alt="" />
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/site-alt1.svg" alt="" />
                  Website
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="sidebar-user-profile-wrapper">
          <h6>Profile</h6>
          <div className="sidebar-user-profile">
            <div>
              <img
                src={'https://blackties-backend.dev.internalstaging.com' + user.image || './assets/images/Avatar.png'}
                alt="Profile"
                className="profile-image"
                style={{ borderRadius: '50%', marginRight: '12px', width: '37px', height: '37px' }} />
            </div>
            <div className="user-meta">
              <h4>{user.username || 'No Name'}</h4>
              <span className="user-status">
                <ion-icon name="ellipse"></ion-icon>Not Completed
              </span>
            </div>
          </div>
          <button onClick={handleLogout} className="sidebar-log-btn">
            <img src="./assets/images/dashboard/logout.svg" alt="" />
            Log out
          </button>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;