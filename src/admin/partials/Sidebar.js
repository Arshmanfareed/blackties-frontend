import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const [toggleUsers, setToggleUsers] = useState(false);
  const [toggleVehicles, setToggleVehicles] = useState(false);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [toggleFinancials, setToggleFinancials] = useState(false);

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-routes-wrapper">
        <div className="dash-brand-wrapper">
          <Link to="#">
            Blackties
            <br />
            <span>Rental</span>
          </Link>
          <Button variant="link" className="dashNav-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </Button>
        </div>

        <div className="dashboard-menu">
          <h6>Menu</h6>
          <div className="vehicles-menu vehicles-menu-new">
            <ul>
              <li>
                <NavLink
                 to="javascript:;"
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

            {/* Users Toggle */}
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

            {/* Vehicles Toggle */}
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

            {/* Calendar Toggle */}
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

            {/* Deposit */}
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

            {/* Financials Toggle */}
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

            {/* Settings */}
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

      <div className="sidebar-user-profile-wrapper">
        <h6>Profile</h6>
        <div className="sidebar-user-profile">
          <div>
            <img src="./admin_assets/images/dashboard/Avatar.png" alt="user" />
          </div>
          <div className="user-meta">
            <h4>Jenny Wilson</h4>
            <span className="user-status">
              <ion-icon name="ellipse"></ion-icon> Not Completed
            </span>
          </div>
        </div>
        <Link to="#" className="sidebar-log-btn">
          <img src="./admin_assets/images/dashboard/logout.svg" alt="" />
          Log out
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
