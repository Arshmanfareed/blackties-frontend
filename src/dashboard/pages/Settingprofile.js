import React, { useState } from "react";
import DashboardSidebar from "../partials/dashboard-sidebar";
import DashboardPanelTopbar from "../components/DashboardPanelTopbar";
import { Button, Col, Modal, Row } from "react-bootstrap";

function Settingprofile() {
    // PAssowrd
  const [show, setShow] = useState(false);
  const closepasswordmodal = () => setShow(false);
  const showpasswordmodal = () => setShow(true);

  const [showotp, setShowotp] = useState(false);
  const handleCloseotp = () => setShowotp(false);
  const handleShowotp = () => setShowotp(true);


  const [showsucess, setShowsucess] = useState(false);
  const handleClosesucess = () => {
    setShowsucess(false);
    setShowotp(false);
    setShow(false);

  }
  const handleShowsucess = () => setShowsucess(true);
// Phone
const [showphone, setShowphone] = useState(false);
const handleClosephone = () => setShowphone(false);
const handleShowphone = () => setShowphone(true);

const [showphonesucess, setShowphonesucess] = useState(false);
const handleClosephonesucess = () => {
    setShowphonesucess(false);
    setShowphone(false);
}
const handleShowphonesucess = () => setShowphonesucess(true);

// Email
const [showemail, setShowemail] = useState(false);
const handleCloseemail = () => setShowemail(false);
const handleShowemail = () => setShowemail(true);

const [showemailotp, setShowemailotp] = useState(false);
const handleCloseemailotp = () => setShowemailotp(false);
const handleShowemailotp = () => setShowemailotp(true);

const [showemailotpsucess, setShowemailotpsucess] = useState(false);
const handleCloseemailotpsucess = () =>{
     setShowemailotpsucess(false);
     setShowemailotp(false);
     setShowemail(false);
}
const handleShowemailotpsucess = () => setShowemailotpsucess(true);

  return (
    <>
      <section className="user-dashboard">
        <div className="container-fluid">
          <Row className="g-0">
            <Col lg={3} md={3} className=" sidebar-col">
              <DashboardSidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel profile-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <DashboardPanelTopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="profile-sec db-default-sec">
                      <div className="profile-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="Profile-password-tabs-v1 d-flex align-items-start">
                              <div
                                className="nav d-block  nav-pills me-3"
                                id="v-pills-tab"
                              >
                                <button
                                  className="nav-link active"
                                  id="v-pills-profile-tab"
                                  type="button"
                                >
                                  Profile
                                </button>
                                <button
                                  className="nav-link "
                                  id="v-pills-profile-tab"
                                  type="button"
                                >
                                  Deleted Account
                                </button>
                              </div>
                              <div
                                className="tab-content"
                                id="v-pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="v-pills-profile"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-profile-tab"
                                >
                                  <div className="profile-wrapper">
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-top-bar">
                                          <h5>Profile</h5>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-meta-wrapper">
                                          <div className="profile-meta setting-data">
                                            <img
                                              src="./assets/images/dashboard/Frame 81.png"
                                              alt="prfile"
                                            />
                                            <div>
                                              <h4 className="profile-name">
                                                Omar
                                              </h4>
                                              <h6 className="profile-status">
                                                Application not completed
                                              </h6>
                                              <h6 className="profile-id">
                                                Customer ID 123123
                                              </h6>
                                            </div>
                                          </div>
                                          <a
                                            href="javascript:;"
                                            className="change-img-btn"
                                          >
                                            Change Image
                                          </a>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-info-form-wrap">
                                          <div className="head-wrap">
                                            <h3>Profile User</h3>
                                          </div>
                                          <form action="" method="">
                                            <Row>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    First Name
                                                  </label>
                                                  <br />
                                                  <input
                                                    type="text"
                                                    name="form-control"
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    Last Name
                                                  </label>
                                                  <br />
                                                  <input
                                                    type="text"
                                                    name="form-control"
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    Email Address
                                                  </label>
                                                  <img
                                                  onClick={handleShowemail}
                                                    src="./assets/images/pen.png"
                                                    alt="Check"
                                                  />
                                                  <br />
                                                  <input
                                                    type="email"
                                                    name="form-control"
                                                    id=""
                                                    className="mg0"
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    Phone Number
                                                  </label>
                                                  <img  onClick={handleShowphone}
                                                    src="./assets/images/pen.png"
                                                    alt="Check"
                                                  />
                                                  <br />
                                                  <div className="t-flag">
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="+44"
                                                      className="mg0"
                                                    />
                                                  </div>
                                                </div>
                                              </Col>
                                            </Row>
                                          </form>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-passwo">
                                          <form action="" method="">
                                            <Row>
                                              <Col lg={12} md={12}>
                                                <div className="main-pass">
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      id=""
                                                      name="form-control"
                                                      value=""
                                                    />
                                                  </div>
                                                  <div className="chn-img">
                                                    <a
                                                      href="javascript:;"
                                                      onClick={
                                                        showpasswordmodal
                                                      }
                                                      className="change-img-btn modal-opner"
                                                    >
                                                      Change password
                                                    </a>
                                                  </div>
                                                </div>
                                              </Col>
                                            </Row>
                                          </form>
                                        </div>
                                      </Col>
                                    </Row>

                                    <Modal
                                      show={show}
                                      onHide={closepasswordmodal}
                                      className="password_modal "
                                    >
                                      {/* <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header> */}
                                      <Modal.Body>
                                        <div className="change-password-body">
                                          <div className="password-bx">
                                            <div className="chng-psd">
                                              <h4>Change Password</h4>
                                              <a
                                                href="#"
                                                className="cross-icon"
                                                onClick={closepasswordmodal}
                                              >
                                                <i className="fas fa-times"></i>
                                              </a>
                                            </div>
                                            <form action="">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      Current Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      id=""
                                                      name="form-control"
                                                      value="Current Password"
                                                    />
                                                    <i class="fa-regular fa-eye toggle-password"></i>
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      New Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      id=""
                                                      name="form-control"
                                                      value="New Password"
                                                    />
                                                    <i class="fa-regular fa-eye toggle-password"></i>
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      Confirm Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      id=""
                                                      name="form-control"
                                                      value="Confirm Password"
                                                    />
                                                    <i class="fa-regular fa-eye toggle-password"></i>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </form>
                                            <div className="change-pass-btn">
                                              <a
                                                onClick={closepasswordmodal}
                                                href="javascript:void(0);"
                                                onclick="popup_alrt(this)"
                                                className="psd-cancel"
                                              >
                                                Cancel
                                              </a>
                                              <a
                                                onClick={handleShowotp}
                                                href="javascript:;"
                                                className="psd-change"
                                              >
                                                Save
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    
                                    <Modal
                                      show={showotp}
                                      onHide={handleCloseotp}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div className="chng-otp-body">
                                          <div className="chng-otp-bx">
                                            <div className="chng-chng-otp">
                                              <h4 onClick={handleCloseotp}>
                                                <i className="fas fa-chevron-left"></i>
                                                Back to Change Password
                                              </h4>
                                              <a
                                              onClick={handleCloseotp}
                                                href="#"
                                                className="cross-icon"
                                              >
                                                <i className="fas fa-times"></i>
                                              </a>
                                            </div>
                                            <div className="chng-otp-pera">
                                              <p>
                                                A code was sent to email
                                                sample@gmail.com
                                              </p>
                                            </div>
                                            <form action="">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="2"
                                                      className="mg0"
                                                    />
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="2"
                                                      className="mg0"
                                                    />
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="2"
                                                      className="mg0"
                                                    />
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="2"
                                                      className="mg0"
                                                    />
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="2"
                                                      className="mg0"
                                                    />
                                                    <input
                                                      type="tel"
                                                      name="form-control"
                                                      id=""
                                                      placeholder="2"
                                                      className="mg0"
                                                    />
                                                  </div>
                                                  <div className="resend-timer">
                                                    <p>
                                                      Resend code in{" "}
                                                      <span>00:10</span>
                                                    </p>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </form>
                                            <div className="chng-otp-btn">
                                              <a
                                                href="javascript:void(0);"
                                                onClick={handleCloseotp}
                                                className="chng-otp-cancel"
                                              >
                                                Cancel
                                              </a>
                                              <a
                                              onClick={handleShowsucess}
                                                href="javascript:;"
                                                className="chng-otp-ver modal-opner"
                                              >
                                                Verification
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>

                                    <Modal
                                      show={showsucess}
                                      onHide={handleClosesucess}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                      <div className="succes-body">
                                      <div className="succes-alert">
                                        <img
                                          src="./assets/images/ei_check.png"
                                          alt="Check"
                                        />
                                        <div>
                                          <h6>Success to Change</h6>
                                          <p>
                                            your success to change your password
                                          </p>
                                        </div>
                                        <div className="succes-return-btn">
                                          <a
                                            href="javascript:void(0);"
                                            onClick={handleClosesucess}
                                            className="succes-return"
                                          >
                                            Return to Profile
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                      </Modal.Body>
                                      </Modal>

                                        <Modal
                                      show={showphone}
                                      onHide={handleClosephone}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                      <div className="change-phn-body">
                                      <div className="phn-bx">
                                        <div className="chng-phn">
                                          <h4>Edit Phone Number</h4>
                                          <a href="#" className="cross-icon"  onClick={handleClosephone}>
                                            <i className="fas fa-times"></i>
                                          </a>
                                        </div>
                                        <form action="">
                                          <Row>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <label for="control-label">
                                                  Phone Number
                                                </label>
                                                <br />
                                                <div className="t-flag">
                                                  <input
                                                    type="tel"
                                                    name="form-control"
                                                    id=""
                                                    placeholder="+44"
                                                    className="mg0"
                                                  />
                                                  {/* <a 
                                                  onClick={showpasswordmodal}><img src="./assets/images/ei_check.png"/></a> */}
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <label for="control-label">
                                                  New Phone Number
                                                </label>
                                                <br />
                                                <div className="t-flag">
                                                  <input
                                                    type="tel"
                                                    name="form-control"
                                                    id=""
                                                    placeholder="+44"
                                                    className="mg0"
                                                  />
                                                </div>
                                              </div>
                                            </Col>
                                          </Row>
                                        </form>
                                        <div className="change-phn-btn">
                                          <a
                                            href="javascript:void(0);"
                                            onClick={handleClosephone}
                                            className="phn-cancel"
                                          >
                                            Cancel
                                          </a>
                                          <a
                                            href="javascript:;"
                                            onClick={handleShowphonesucess}
                                            className="phn-change"
                                          >
                                            Save
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                      </Modal.Body>
                                      </Modal>

                                     <Modal
                                      show={showphonesucess}
                                      onHide={handleClosephonesucess}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                      <div className="succes-body">
                                      <div className="succes-alert">
                                        <img
                                          src="./assets/images/ei_check.png"
                                          alt="Check"
                                        />
                                        <div>
                                          <h6>Success to Change</h6>
                                          <p>
                                          your success to change your phone number
                                          
                                          </p>
                                        </div>
                                        <div className="succes-return-btn">
                                          <a
                                            href="javascript:void(0);"
                                            onClick={handleClosephonesucess}
                                            className="succes-return"
                                          >
                                            Return to Profile
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                      </Modal.Body>
                                      </Modal>

                                      <Modal
                                      show={showemail}
                                      onHide={handleCloseemail}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                      <div className="change-eml-body">
                                      <div className="eml-bx">
                                        <div className="chng-eml">
                                          <h4>Edit Email Address</h4>
                                          <a href="#" className="cross-icon" onClick={handleCloseemail}>
                                            <i className="fas fa-times"></i>
                                          </a>
                                        </div>
                                        <form action="">
                                          <Row>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <label for="control-label">
                                                  Email Address
                                                </label>
                                                <br />
                                                <input
                                                  type="email"
                                                  name="form-control"
                                                  id=""
                                                  className="mg0"
                                                />
                                              </div>
                                            </Col>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <label for="control-label">
                                                  New Email Address
                                                </label>
                                                <br />
                                                <input
                                                  type="email"
                                                  name="form-control"
                                                  id=""
                                                  className="mg0"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                        </form>
                                        <div className="change-eml-btn">
                                          <a
                                            href="javascript:void(0);"
                                            onClick={handleCloseemail}
                                            className="eml-cancel"
                                          >
                                            Cancel
                                          </a>
                                          <a
                                            href="javascript:;"
                                            className="eml-change"
                                            onClick={handleShowemailotp}
                                          >
                                            Verification
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                      </Modal.Body>
                                      </Modal>
                                    
                                      <Modal
                                      show={showemailotp}
                                      onHide={handleCloseemailotp}
                                      className="password_modal "
                                    >
                                      <Modal.Body>

                                      <div className="chng-otp-body modal-box">
                                      <div className="chng-otp-bx">
                                        <div className="chng-chng-otp">
                                          <h4 onClick={handleCloseemailotp}>
                                            <i className="fas fa-chevron-left"></i>
                                            Back to Email
                                          </h4>
                                          <a href="#" className="cross-icon" onClick={handleCloseemailotp}>
                                            <i className="fas fa-times"></i>
                                          </a>
                                        </div>
                                        <div className="chng-otp-pera">
                                          <p>
                                            A code was sent to email
                                            sample@gmail.com
                                          </p>
                                        </div>
                                        <form action="">
                                          <Row>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <input
                                                  type="tel"
                                                  name="form-control"
                                                  id=""
                                                  placeholder="2"
                                                  className="mg0"
                                                />
                                                <input
                                                  type="tel"
                                                  name="form-control"
                                                  id=""
                                                  placeholder="2"
                                                  className="mg0"
                                                />
                                                <input
                                                  type="tel"
                                                  name="form-control"
                                                  id=""
                                                  placeholder="2"
                                                  className="mg0"
                                                />
                                                <input
                                                  type="tel"
                                                  name="form-control"
                                                  id=""
                                                  placeholder="2"
                                                  className="mg0"
                                                />
                                                <input
                                                  type="tel"
                                                  name="form-control"
                                                  id=""
                                                  placeholder="2"
                                                  className="mg0"
                                                />
                                                <input
                                                  type="tel"
                                                  name="form-control"
                                                  id=""
                                                  placeholder="2"
                                                  className="mg0"
                                                />
                                              </div>
                                              <div className="resend-timer">
                                                <p>
                                                  Resend code in{" "}
                                                  <span>00:10</span>
                                                </p>
                                              </div>
                                            </Col>
                                          </Row>
                                        </form>
                                        <div className="chng-otp-btn">
                                          <a
                                            href="javascript:void(0);"
                                            onClick={handleCloseemailotp}
                                            className="chng-otp-cancel"
                                          >
                                            Cancel
                                          </a>
                                          <a
                                            href="javascript:;"
                                            className="chng-otp-ver"
                                            onClick={handleShowemailotpsucess}
                                          >
                                            Verification
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                        </Modal.Body>
                                        </Modal>
                                   
                                        <Modal
                                      show={showemailotpsucess}
                                      onHide={handleCloseemailotpsucess}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                      <div className="succes-body">
                                      <div className="succes-alert">
                                        <img
                                          src="./assets/images/ei_check.png"
                                          alt="Check"
                                        />
                                        <div>
                                          <h6>Success to Change</h6>
                                          <p>
                                            your success to change your phone
                                            number
                                          </p>
                                        </div>
                                        <div className="succes-return-btn">
                                          <a
                                            href="javascript:void(0);"
                                            onClick={handleCloseemailotpsucess}
                                            className="succes-return"
                                          >
                                            Return to Profile
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                        </Modal.Body>
                                        </Modal>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Settingprofile;
