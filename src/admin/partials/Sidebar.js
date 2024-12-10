import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import useHandleLogout from '../../utils/handleLogout';

function Sidebar() {
  // State to handle toggling of dropdown menus
  const [toggleUsers, setToggleUsers] = useState(false);
  const [toggleVehicles, setToggleVehicles] = useState(false);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [toggleFinancials, setToggleFinancials] = useState(false);

  // Custom hook to handle user logout functionality.
  const handleLogout = useHandleLogout();

  // Retrieve user details from localStorage or set to an empty object if not found.
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <div className="dashboard-sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-routes-wrapper">
        <div className="dash-brand-wrapper">
          <Link to="#">
            Blackties
            <br />
            <span>Rental</span>
          </Link>
          {/* Button to close the sidebar */}
          <Button variant="link" className="dashNav-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </Button>
        </div>

        {/* Sidebar Menu */}
        <div className="dashboard-menu">
          <h6>Menu</h6>
          <div className="vehicles-menu vehicles-menu-new">
            {/* Dashboard Link */}
            <ul>
              <li>
                <NavLink
                 to="/admin-dashboard-main"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="./admin_assets/images/dashboard/Category.svg"
                    alt=""
                  />
                  Dashboard
                </NavLink>
              </li>
            </ul>

            {/* Users Dropdown */}
            <div>
              <Button
                variant="link"
                onClick={() => setToggleUsers(!toggleUsers)}
                className="dropdown-toggle"
              >
                <img src="./admin_assets/images/dashboard/Users.png" alt="" />
                Users
              </Button>
              {toggleUsers && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/admin-all-user"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/Search_icon.png"
                        alt=""
                      />
                      Users Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="javascript:;"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/plus_icon.svg"
                        alt=""
                      />
                      Add Users
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Vehicles Dropdown */}
            <div>
              <Button
                variant="link"
                onClick={() => setToggleVehicles(!toggleVehicles)}
                className="dropdown-toggle"
              >
                <img
                  src="./admin_assets/images/dashboard/Category.svg"
                  alt=""
                />
                Vehicles
              </Button>
              {toggleVehicles && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/all-vehicle"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/Search_icon.png"
                        alt=""
                      />
                      Vehicle Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/add-vehicle"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/dc.svg"
                        alt=""
                      />
                      Add Vehicle
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Calendar Dropdown */}
            <div>
              <Button
                variant="link"
                onClick={() => setToggleCalendar(!toggleCalendar)}
                className="dropdown-toggle"
              >
                <img
                  src="./admin_assets/images/dashboard/Category.svg"
                  alt=""
                />
                Calendar
              </Button>
              {toggleCalendar && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/admin-calendar-all"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/Category.svg"
                        alt=""
                      />
                      All Calendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-add-calendar"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/plus_icon.svg"
                        alt=""
                      />
                      Add Calendar
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Static Menu Items */}
            <ul>
              <li>
                <NavLink
                  to="/admin-deposit"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="./admin_assets/images/dashboard/deposit.png"
                    alt=""
                  />
                  Deposit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin-penaltycharge"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./admin_assets/images/dashboard/pcn.png" alt="" />
                  PCNs
                </NavLink>
              </li>
            </ul>

            {/* Financials Dropdown */}
            <div>
              <Button
                variant="link"
                onClick={() => setToggleFinancials(!toggleFinancials)}
                className="dropdown-toggle"
              >
                <img
                  src="./admin_assets/images/dashboard/financial.png"
                  alt=""
                />
                Financials
              </Button>
              {toggleFinancials && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/admin-financial-revenue"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/Coins.png"
                        alt=""
                      />
                      Revenue
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-financial-expense"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/Receipt.png"
                        alt=""
                      />
                      Expenses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-financialpayment"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img
                        src="./admin_assets/images/dashboard/financial.png"
                        alt=""
                      />
                      Payment
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Support, Notifications, and Settings */}
            <ul className="setting_ul">
              <li>
                <NavLink
                  to="/admin-support"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="./admin_assets/images/dashboard/support.png"
                    alt=""
                  />
                  Support & Issue
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin-notifications"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./admin_assets/images/dashboard/Icon2.svg" alt="" />
                  Notifications <span id="notific">10</span>
                </NavLink>
              </li>
              <li className="setting_nav" id="setting_nav">
                <NavLink
                  to="/admin-setting"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src="./admin_assets/images/dashboard/Icon3.svg" alt="" />
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
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
              style={{ borderRadius: '50%', marginRight: '12px' }} />
          </div>
          <div className="user-meta">
            <h4>{user.username || 'No Name'}</h4>
            <span className="user-status">
              <ion-icon name="ellipse"></ion-icon> Not Completed
            </span>
          </div>
        </div>
        {/* Logout Button */}
        <button onClick={handleLogout} className="sidebar-log-btn">
          <img src="./assets/images/dashboard/logout.svg" alt="" />
          Log out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
