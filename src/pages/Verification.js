import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Verification() {
  return (
    <>
      <section className="verification-sec">
        <Container>
    <Row className=" ac-row">
        <Col lg={6} md={6} >
            <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch drivers who meet our high standards.</p>
                <p>To apply, please review the qualifications listed and submit your application along with the required documents. If you qualify, a member of our team will contact you.</p>
            </div>
        </Col>
        <Col lg={6} md={6} >
            <div className="LR-Form-wrapper verification-frame">
                <h3>Verification</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>

                <Form action="" method="post">
                    <Row >
                        <Col lg={12} md={12} >
                            <p className="sendTo-verific-otp">A code was sent to email <strong>sample@gmail.com</strong></p>
                            <div id="inputs" className="inputs verific-otp">
                                <Form.Control className="input" type="number" inputmode="numeric" maxlength="1"/>
                                <Form.Control className="input" type="number" inputmode="numeric" maxlength="1"/>
                                <Form.Control className="input" type="number" inputmode="numeric" maxlength="1"/>
                                <Form.Control className="input" type="number" inputmode="numeric" maxlength="1"/>
                            </div>
                            <p className="verfic-otp-time">Resend code in <span>00:10</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} >
                            <Link to="javascript" className="theme-btn7">Back</Link>
                        </Col>
                        <Col lg={6} md={6} >
                            <Form.Control type="submit" className="theme-btn6 sb-btn" value="Verify"/>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    </Row>
    </Container>
</section>
    </>
  )
}

export default Verification
