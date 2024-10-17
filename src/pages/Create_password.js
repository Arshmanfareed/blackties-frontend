import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Create_password() {
  return (
    <>
     <section className=" create-password-sec">
        <Container>
    <Row className="ac-row">
        <Col lg={6} md={6}>
            <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch drivers who meet our high standards.</p>
                <p>To apply, please review the qualifications listed and submit your application along with the required documents. If you qualify, a member of our team will contact you.</p>
            </div>
        </Col>
        <Col  lg={6} md={6} >
            <div className="LR-Form-wrapper create-password-frame">
                <h3>Create Password</h3>
                <p>No worries, We’ll send you instruction to reset!</p>

                <Form action="" method="post">
                    <Row>
                        <Col lg={12} md={6} >
                            <label for="password">Password</label>
                            <Form.Control type="password" name="password" id="password" />
                        </Col>
                        <Col lg={12} md={12} >
                            <label for="confirmPassword">Confirm Password</label>
                            <Form.Control type="password" name="confirmPassword" id="confirmPassword" />
                        </Col>
                        <Col lg={12} md={12} className="sb-btn-col1">
                            <Form.Control type="submit" className="theme-btn6 sb-btn" value="Submit"/>
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

export default Create_password
