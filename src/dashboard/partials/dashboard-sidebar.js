import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

function DashboardSidebar() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    localStorage.removeItem('username'); // Remove token from local storage
    navigate('/login'); // Redirect to login page
  };

  const user_name = localStorage.getItem('user_name');



  const[isVisible,setIsVisible]=useState(false);
  
const toggleVisibility=()=>{
setIsVisible(!isVisible);
};
  return (
    <>
      <div className="dashboard-sidebar">
        <div className="sidebar-routes-wrapper">
          <div className="dash-brand-wrapper">
            <Link to="/">
              Blackties
              <br />
              <span>Rental</span>
            </Link>
          </div>
          <div className="dashboard-menu">
            <h6>Menu</h6>
            <div class="vehicles-menu">
                <button class="dropdown-toggle" onClick={toggleVisibility}> <img src="./assets/images/dashboard/bk-car.svg" alt=""/>KM19 VTY</button>
                <ul class="dropdown-menu" style={{ display: isVisible ? 'block' : 'none' }}>
                    <li><Link to="/welcome"><img src="./assets/images/dashboard/Category12.svg" alt=""/>Dashboard</Link></li>
                    <li><Link to="/vehicle-document"><img src="./assets/images/dashboard/dc.svg" alt=""/>Document</Link></li>
                    <li><Link to="/maintenance"><img src="./assets/images/dashboard/tools 1.svg" alt=""/>Maintenance</Link></li>
                    <li><Link to="/palenty-charge-notice"><img src="./assets/images/dashboard/expense 1.svg" alt=""/>PCNs</Link></li>
                    <li><Link to="/driver-score"><img src="./assets/images/dashboard/driver-man 32423.svg" alt=""/>Driver Score</Link></li>
                </ul>
            </div>
            <ul>
              <li>
                <NavLink
                  to="/applicant"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Category.svg" alt="" />
                  Application
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#" 
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
                  Invoice
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
                  to="javascript:;" 
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
        <div className="sidebar-user-profile-wrapper">
          <h6>Profile</h6>
          <div className="sidebar-user-profile">
            <div>
              <img src="./assets/images/dashboard/Avatar.png" alt="user" />
            </div>
            <div className="user-meta">
              <h4>{user_name}</h4>
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