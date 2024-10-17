import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Forget_password() {
  return (
    <>
     <section className=" forget-password-sec">
        <Container>
    <Row className="ac-row">
        <Col lg={6} md={6} >
            <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch drivers who meet our high standards.</p>
                <p>To apply, please review the qualifications listed and submit your application along with the required documents. If you qualify, a member of our team will contact you.</p>
            </div>
        </Col>
        <Col lg={6} md={6} >
            <div className="LR-Form-wrapper forget-password-frame">
                <h3>Forget Password</h3>
                <p>No worries, We’ll send you instruction to reset!</p>

                <Form action="" method="post">
                    <Row>
                        <Col lg={12} md={12}>
                            <label for="email">Email address</label><br/>
                            <Form.Control type="email" name="email" id="email"/>
                        </Col>
                        <Col lg={12} md={12} className=" sb-btn-col1">
                            <Form.Control type="submit" className="theme-btn6 sb-btn" value="Reset Password" />
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

export default Forget_password
