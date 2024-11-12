import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Privacypolicy() {

    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>  
    <h6><Link onClick={handleShow}>Privacy Policy</Link></h6>
       <Modal className='privcay_modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='privcay_version'>
          Version 1.0 <div className='date_version'>July 20, 2024</div>
          </div>
          <div className='cont'>
          Blackties care about privacy and want you to be familiar with how we collect, use, process and disclose your personal information. This privacy policy describes our privacy practices in connection with out websites and applications that link to this Privacy Policy and our offline Interactions with you in settings where we post  this Privacy Policy
            </div>
          </Modal.Body>
      </Modal> 
    </>
  )
}

export default Privacypolicy
