import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function DashboardSidebar() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/login'); // Redirect to login page
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
                  to="javascript:void(0);"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/booking.svg" alt="" />
                  Our Vehicles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="javascript:void(0);"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Receipt.svg" alt="" />
                  Invoice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="javascript:void(0);"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./assets/images/dashboard/Icon2.svg" alt="" />
                  Notifications
                  <span id="notific">10</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="javascript:void(0);"
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
              <h4>Jenny Wilson</h4>
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
