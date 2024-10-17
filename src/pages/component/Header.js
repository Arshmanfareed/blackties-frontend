import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
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
        <Link to="/login" className="theme-btn1">
          Login
        </Link>
        <Link to="/register" className="theme-btn2">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Header;
