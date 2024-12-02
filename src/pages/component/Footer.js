import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Privacypolicy from '../Privacypolicy';
import Supportticket from '../Supportticket';
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
        <li><Link to="#"><i class="fa-brands fa-twitter"></i></Link></li>
        <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
        <li><Link to="#"><i class="fa-brands fa-instagram"></i></Link></li>
      </ul>
    </div>
  </div>
  <div className="row ft-r2">
    <div className="col-lg-8 col-md-8">
      <ul className="ft-address">
        <li>
          <h6>Our Address</h6>
          <p> <a href="https://www.google.com/maps/search/?api=1&query=328+Summerwood+Road,+Isleworth,+Middlesex,+TW7+7QP" target="_blank" rel="noopener noreferrer">328 Summerwood Road, Isleworth, Middlesex, TW7 7QP</a></p>
         </li>
        <li>
          <h6>Get in Touch</h6><Link to="#" onClick={() => window.location.href = 'tel:07493231691'}>
  07493231691
</Link>
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-4">
      <ul className="ft-cnd">
        <li>
          {/* <h6><Link >Support Ticket</Link></h6> */}
        <Supportticket/>
          {/* <Link to="javascript">Privacy Policy</Link> */}
        </li>
        <li>
        <Privacypolicy/>
          {/* <Link to="javascript">What's Included</Link> */}
        </li>
      </ul>
    </div>
  </div>
</footer>      
    </>
  )
}

export default Footer
