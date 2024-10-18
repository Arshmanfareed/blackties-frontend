import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer className="container">
  <div className="row ft-r1">
    <div className="col-lg-6 col-md-6">
    <div className="footer-brand">
      <Link to="#">Blackties<br/><span>Rental</span></Link>
    </div>
    </div>
    <div className="col-lg-6 col-md-6">
      <ul className="ft-social-links">
        <li><Link to="#"><ion-icon name="logo-twitter"></ion-icon></Link></li>
        <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
        <li><Link to="#"><ion-icon name="logo-instagram"></ion-icon></Link></li>
      </ul>
    </div>
  </div>
  <div className="row ft-r2">
    <div className="col-lg-8 col-md-8">
      <ul className="ft-address">
        <li>
          <h6>Our Address</h6>
          <p>328 Summerwood Road, Isleworth, Middlesex, TW7 7QP</p>
        </li>
        <li>
          <h6>Get in Touch</h6>
          <Link to="tel:07493231691">07493231691</Link>
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-4">
      <ul className="ft-cnd">
        <li>
          <h6>Support</h6>
          <Link to="javascript">Privacy Policy</Link>
        </li>
        <li>
          <h6>Support</h6>
          <Link to="javascript">What's Included</Link>
        </li>
      </ul>
    </div>
  </div>
</footer>      
    </>
  )
}

export default Footer
