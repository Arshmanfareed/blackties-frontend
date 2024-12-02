import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [toggleUsers, setToggleUsers] = useState(false);
  const [toggleVehicles, setToggleVehicles] = useState(false);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [toggleFinancials, setToggleFinancials] = useState(false);

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-routes-wrapper">
        <div className="dash-brand-wrapper">
          <Link to="#!">
            Blackties<br />
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
                <Link to="#!">
                  <img src="./admin_assets/images/dashboard/Category.svg" alt="" />
                  Dashboard
                </Link>
              </li>
            </ul>

            {/* Users Toggle */}
            <div>
              <Button
                variant="link"
                onClick={() => setToggleUsers(!toggleUsers)}
                className="dropdown-toggle"
              >
                <img src="./admin_assets/images/dashboard/bk-car.svg" alt="" />
                Users
              </Button>
              {toggleUsers && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#!">
                      <img src="./admin_assets/images/dashboard/Category12.svg" alt="" />
                      Users Search
                    </Link>
                  </li>
                  <li>
                    <Link to="#!">
                      <img src="./admin_assets/images/dashboard/dc.svg" alt="" />
                      Add Users
                    </Link>
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
                <img src="./admin_assets/images/dashboard/Category.svg" alt="" />
                Vehicles
              </Button>
              {toggleVehicles && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/all-vehicle">
                      <img src="./admin_assets/images/dashboard/bk-car.svg" alt="" />
                      Vehicle Search
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-vehicle">
                      <img src="./admin_assets/images/dashboard/dc.svg" alt="" />
                      Add Vehicle
                    </Link>
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
                <img src="./admin_assets/images/dashboard/Category.svg" alt="" />
                Calendar
              </Button>
              {toggleCalendar && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#!">
                      <img src="./admin_assets/images/dashboard/Category12.svg" alt="" />
                      Add Calendar
                    </Link>
                  </li>
                </ul>
              )}
              <ul>
            <li>
              <Link to="#!">
                <img src="./admin_assets/images/dashboard/Receipt.svg" alt="" />
                Deposit
              </Link>
            </li>
            <li>
              <Link to="#!">
                <img src="./admin_assets/images/dashboard/Icon3.svg" alt="" />
                PCNs
              </Link>
            </li>
          </ul>
          {/* Financials Toggle */}
    
            <Button
              variant="link"
              onClick={() => setToggleFinancials(!toggleFinancials)}
              className="dropdown-toggle"
            >
              <img src="./admin_assets/images/dashboard/Category.svg" alt="" />
              Financials
            </Button>
            {toggleFinancials && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="#!">
                    <img src="./admin_assets/images/dashboard/Category12.svg" alt="" />
                    Revenue
                  </Link>
                </li>
                <li>
                  <Link to="#!">
                    <img src="./admin_assets/images/dashboard/Category12.svg" alt="" />
                    Expenses
                  </Link>
                </li>
                <li>
                  <Link to="#!">
                    <img src="./admin_assets/images/dashboard/Category12.svg" alt="" />
                    Payment
                  </Link>
                </li>
              </ul>
            )}
             <ul className='setting_ul'>
          <li>
            <Link to="#!">
              <img src="./admin_assets/images/dashboard/Receipt.svg" alt="" />
              Support & Issue
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img src="./admin_assets/images/dashboard/Icon2.svg" alt="" />
              Notifications <span id="notific">10</span>
            </Link>
          </li>
          <li className='setting_nav' id='setting_nav'>
            <Link to="#!">
              <img src="./admin_assets/images/dashboard/Icon3.svg" alt="" />
              Settings
            </Link>
          </li>
        </ul>
          </div>
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
        <Link to="#!" className="sidebar-log-btn">
          <img src="./admin_assets/images/dashboard/logout.svg" alt="" />
          Log out
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
