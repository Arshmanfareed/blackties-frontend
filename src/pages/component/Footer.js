import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Privacypolicy from '../Privacypolicy';
import Supportticket from '../Supportticket';

function Footer() {
  return (
    <>
      <footer className="container">
        {/* Footer Brand Section */}
        <div className="row ft-r1">
          <div className="col-lg-6 col-md-6">
            <div className="footer-brand">
              {/* Logo and brand name with link to home page */}
              <Link to="#">Blackties<br /><span>Rental</span></Link>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="col-lg-6 col-md-6">
            <ul className="ft-social-links">
              {/* Social media icons with links */}
              <li><Link to="#"><i class="fa-brands fa-twitter"></i></Link></li>
              <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
              <li><Link to="#"><i class="fa-brands fa-instagram"></i></Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Address and Contact Section */}
        <div className="row ft-r2">
          <div className="col-lg-8 col-md-8">
            <ul className="ft-address">
              {/* Address Section */}
              <li>
                <h6>Our Address</h6>
                <p>
                  {/* Link to Google Maps for the company's address */}
                  <a href="https://www.google.com/maps/search/?api=1&query=328+Summerwood+Road,+Isleworth,+Middlesex,+TW7+7QP" target="_blank" rel="noopener noreferrer">
                    328 Summerwood Road, Isleworth, Middlesex, TW7 7QP
                  </a>
                </p>
              </li>

              {/* Contact Section */}
              <li>
                <h6>Get in Touch</h6>
                {/* Phone link that triggers a phone call when clicked */}
                <Link to="#" onClick={() => window.location.href = 'tel:07493231691'}>
                  07493231691
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Links Section */}
          <div className="col-lg-4 col-md-4">
            <ul className="ft-cnd">
              <li>
                {/* Support Ticket Section */}
                <Supportticket />
              </li>
              <li>
                {/* Privacy Policy Section */}
                <Privacypolicy />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
