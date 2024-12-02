import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function How_It_Works() {
  return (
    <>
     <section className="how-it-work-sec">
        <Container>
        <Row >
            <Col lg={12} md={12} >
                <div className="main-title">
                    <h2 className="theme-h7">How It Works</h2>
                    <p className="theme-p3">Easy step to get started and make the most of Blackties Rental Platform</p>
                </div>
            </Col>
        </Row>
        <Container className="hw-steps" style={{backgroundImage: `url('./assets/images/howWork-bg.png')`,}}>
            <Row>
                <Col lg={6} md={6}>
                </Col>
                <Col lg={6} md={6} >
                    <ol>
                        <li>
                            <h3>Register & Login</h3>
                            <p>Sign up quickly by providing your basic details. Once registered, you can easily login to your account to manage your rentals, view invoices and track vehicle usage.</p>
                        </li>
                        <li>
                            <h3>Submit Your Application</h3>
                            <p>Fill out a quick application with necessary details such as your PCO licence, insurance information and rental preferences. Our automated system will handle the rest and get you approved fast.</p>
                        </li>
                        <li>
                            <h3>Rent a Car</h3>
                            <p>Once approved, finalise your rental agreement through our automated platform. You can collect your vehicle at the scheduled time and drive away.</p>
                        </li>
                    </ol>
                    <Link to={'/register'} className='theme-btn5'>Register Now</Link>
                </Col>
            </Row>
        </Container>
        </Container>
    </section>

      
    </>
  )
}

export default How_It_Works
