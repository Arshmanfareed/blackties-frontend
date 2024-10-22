import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Verification() {
  const [code, setCode] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change for verification code
  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };
  

  // Handle form submission
  // Handle form submission
    
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        const verificationCode = code.join('');
        const user_id = localStorage.getItem('user_id');
        try {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/auth/verify-code`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user_id, // Replace this with the actual user ID if dynamic
                code: verificationCode,
            }),
            }
        );
    
        const data = await response.json();
        if (response.ok) {
            setSuccessMessage('Verification successful!');
            navigate('/login');
        } else {
            setErrorMessage(data.message || 'Verification failed. Please try again.');
        }
        } catch (error) {
        setErrorMessage('An error occurred. Please try again later.');
        }
    };
  

  return (
    <>
      <section className="verification-sec">
        <Container>
          <Row className="ac-row">
            <Col lg={6} md={6}>
              <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch drivers who meet our high standards.</p>
                <p>To apply, please review the qualifications listed and submit your application along with the required documents. If you qualify, a member of our team will contact you.</p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="LR-Form-wrapper verification-frame">
                <h3>Verification</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={12}>
                      <p className="sendTo-verific-otp">A code was sent to email <strong>sample@gmail.com</strong></p>
                      <div id="inputs" className="inputs verific-otp">
                        {code.map((digit, index) => (
                          <Form.Control
                            key={index}
                            className="input"
                            type="number"
                            inputMode="numeric"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleCodeChange(e.target.value, index)}
                          />
                        ))}
                      </div>
                      <p className="verfic-otp-time">Resend code in <span>00:10</span></p>
                    </Col>
                  </Row>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                  {successMessage && <p className="success-message">{successMessage}</p>}
                  <Row>
                    <Col lg={6} md={6}>
                      <Link to="/" className="theme-btn7">Back</Link>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Control type="submit" className="theme-btn6 sb-btn" value="Verify" />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Verification;