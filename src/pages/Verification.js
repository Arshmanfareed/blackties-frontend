import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Verification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]); // 6 input boxes
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const navigate = useNavigate();

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    if (/^\d$/.test(value)) { // Only accept digits
      newCode[index] = value;
      setCode(newCode);
      if (index < code.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  
  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];
      if (newCode[index] === '') {
        if (index > 0) {
          document.getElementById(`otp-input-${index - 1}`).focus();
        }
      } else {
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };
  

  // Handle OTP submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const verificationCode = code.join("");
    const user_id = localStorage.getItem("user_id");

    if (verificationCode.length < 6) {
      // Ensure all 6 digits are filled
      setErrorMessage("Please fill in all digits.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/verify-code`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user_id,
            code: verificationCode,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Verification successful!");
        navigate("/login");
      } else {
        setErrorMessage(
          data.message || "The verification code is incorrect. Please try again or try a different email address."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      secs < 10 ? `0${secs}` : secs
    }`;
  };

  // Function to trigger OTP resend and reset timer
  const resendOTP = () => {
    setTimeLeft(300); // Reset to 5 minutes
    // Trigger OTP resend logic here
  };

  return (
    <section className="verification-sec">
      <Container>
        <Row className="ac-row">
          <Col lg={6} md={6}>
            <div className="LR-Hero-wrapper">
              <h2 className="theme-h8">Welcome to our community</h2>
              <p>
                Are you a skilled and reliable driver looking to elevate your
                career? Join our prestigious team and drive for our esteemed
                clients, known for their professionalism and courtesy. We are
                seeking top-notch drivers who meet our high standards.
              </p>
              <p>
                To apply, please review the qualifications listed and submit
                your application along with the required documents. If you
                qualify, a member of our team will contact you.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="LR-Form-wrapper verification-frame">
              <h3>Verification</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur. Lectus erat amet at
                libero eget tincidunt lectus in velit.
              </p> */}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={12} md={12}>
                    <p className="sendTo-verific-otp">
                      A code was sent to email <strong>sample@gmail.com</strong>
                    </p>
                    <div id="inputs" className="inputs verific-otp">
                      {code.map((digit, index) => (
                        <Form.Control
                          key={index}
                          id={`otp-input-${index}`}
                          className="input"
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={digit}
                          onChange={(e) =>
                            handleCodeChange(e.target.value, index)
                          }
                          onKeyDown={(e) => handleBackspace(e, index)}
                        />
                      ))}
                    </div>
                    <p className="verfic-otp-time">
                      Resend code in <span>{formatTime(timeLeft)}</span>
                    </p>
                    {timeLeft === 0 && (
                      <button
                        type="button"
                        onClick={resendOTP}
                        className="theme-btn6"
                      >
                        Resend OTP
                      </button>
                    )}
                  </Col>
                </Row>
                {errorMessage && (
                  <p className="error-message"><i class="fa-solid fa-circle-exclamation"></i>{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
                <p className="not_rcv_cd">Haven’t received the code? <b><Link>Resend Now</Link></b></p>
                <Row>
                  <Col lg={6} md={6}>
                    <Link to="/" className="theme-btn7">
                      Back
                    </Link>
                  </Col>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="submit"
                      className="theme-btn6 sb-btn"
                      value="Verify"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Verification;
