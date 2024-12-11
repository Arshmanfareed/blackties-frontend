import React, { useState, useEffect } from "react";
import DashboardSidebar from "../partials/dashboard-sidebar";
import DashboardPanelTopbar from "../components/DashboardPanelTopbar";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useHandleChangeImage from "../../utils/handleChangeImage";
import useHandleChangePassword from "../../utils/handleChangePassword";
import useHandleChangePhone from "../../utils/handleChangePhone";
import useHandleChangeEmail from "../../utils/handleChangeEmail";
import useHandleLogout from "../../utils/handleLogout";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useNavigate } from "react-router-dom";

function Settingprofile() {
  // Get the token from localStorage
  const token = localStorage.getItem('token');

  // State to manage the user object, initialized from localStorage or an empty object
  const [user, updateUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

  // Import the `useNavigate` hook from React Router to handle navigation
  const navigate = useNavigate();

  // useEffect hook to check if the user is authenticated
  useEffect(() => {
    // If no token or no user is found in local storage, redirect the user to the login page
    if (!token || !user) {
      navigate('/login', { state: { loginFirstError: "Please login first to access that page" } });
    }
  }, [navigate]);

  // Hook for handling logout functionality
  const handleLogout = useHandleLogout();

  // States for delete account modal visibility
  const [showdeleteaccount, setShowdeleteaccount] = useState(false);
  const handleClosedeleteaccount = () => setShowdeleteaccount(false);
  const handleShowdeleteaccount = () => setShowdeleteaccount(true);

  // States for delete account success modal visibility
  const [showdeleteaccountsucess, setShowdeleteaccountsucess] = useState(false);
  const handleClosedeleteaccountsucess = () => {
    setShowdeleteaccountsucess(false);
    setShowdeleteaccount(false);
  }

  // Import and destructure functions/variables for email change functionality
  const {
    openEmailModal,
    showEmailModal,
    closeEmailModal,
    handleChangeEmailForm,
    changeEmailFormData,
    changeEmailError,
    handleChangeEmailFormSubmit,
    changeEmailLoader,
    showEmailOtpModal,
    closeEmailOtpModal,
    changeEmailOtp,
    handleChangeEmailOtp,
    handleChangeEmailBackspace,
    changeEmailOtpError,
    setChangeEmailOtpTimer,
    changeEmailOtpLoader,
    handleChangeEmailOtpSubmit,
    changeEmailOtpTimer,
    showEmailSucess,
    handleCloseEmailSucess,
    resendEmailOtpButton,
    resendEmailOtp,
    backToEmailModal
  } = useHandleChangeEmail(user, token, updateUser);

  // Import and destructure functions/variables for phone change functionality
  const {
    openPhoneModal,
    showPhoneModal,
    closePhoneModal,
    handleChangePhoneForm,
    changePhoneFormData,
    changePhoneError,
    handleChangePhoneFormSubmit,
    changePhoneLoader,
    showPhoneOtpModal,
    closePhoneOtpModal,
    changePhoneOtp,
    handleChangePhoneOtp,
    handleChangePhoneBackspace,
    changePhoneOtpError,
    changePhoneOtpTimer,
    chnagePhoneOtpLoader,
    handleChangePhoneOtpSubmit,
    handleClosePhoneSucess,
    showPhoneSucess,
    resendPhoneOtpButton,
    resendPhoneOtp,
    backToPhoneModal,
    handleChangePhone
  } = useHandleChangePhone(user, token, updateUser);

  // Import and destructure functions/variables for password change functionality
  const {
    showPasswordModal,
    setChangePasswordError,
    setChangePasswordLoader,
    openPasswordModal,
    closePasswordModal,
    handleChangePasswordFormSubmit,
    handleChangePasswordForm,
    changePasswordError,
    changePasswordLoader,
    showPasswordSucess,
    handleClosePasswordSucess,
  } = useHandleChangePassword(user, token);

  // Import and destructure functions/variables for image change functionality
  const {
    handleShowImageChange,
    showImageChange,
    handleCloseImageChange,
    currentImage,
    updateCurrentImage,
    changeImageError,
    saveProfileImage,
    changeImageLoader,
  } = useHandleChangeImage(user, token, updateUser);

  // Toggles the visibility of password input field
  const togglePasswordVisibility = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  };

  // Handles account deletion process
  const handleDeleteAccount = async (e) => {
    try {
      // Send a POST request to delete the user account
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/admin/user/` + user.id + `/suspend`, {
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
      });

      // Parse the response JSON
      const data = await response.json();

      if (response.ok) {
        // Close the delete account modal and show the success modal
        setShowdeleteaccount(false);
        setShowdeleteaccountsucess(true);
      } else {
        // Handle errors based on the response
        if (data.error?.message) {
          setChangePasswordError(data.error.message);
        } else {
          setChangePasswordError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      // Catch network or unexpected errors
      setChangePasswordError("Something went wrong. Please try again.");
    } finally {
      // Stop the loader once the process is complete
      setChangePasswordLoader(false);
    }
  };

  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
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
                                  onClick={handleShowdeleteaccount}
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
                                            <img src={'https://blackties-backend.dev.internalstaging.com' + user.image || './assets/images/Avatar.png'} alt="prfile" />
                                            <div>
                                              <h4 className="profile-name">
                                                {user.username || 'No Name'}
                                              </h4>
                                              <h6 className="profile-status">
                                                Application not completed
                                              </h6>
                                              <h6 className="profile-id">
                                                Customer ID {user.id || 0}
                                              </h6>
                                            </div>
                                          </div>
                                          <Link
                                            href="javascript:;"
                                            className="change-img-btn"
                                            onClick={handleShowImageChange}
                                          >
                                            Change Image
                                          </Link>
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
                                                    value={user.firstname}
                                                    readOnly
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
                                                    value={user.lastname}
                                                    readOnly
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    Email Address
                                                  </label>
                                                  <img
                                                    onClick={openEmailModal}
                                                    src="./assets/images/pen.png"
                                                    alt="Check"
                                                  />
                                                  <br />
                                                  <input
                                                    type="email"
                                                    name="form-control"
                                                    id=""
                                                    className="mg0"
                                                    value={user.email}
                                                    readOnly
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    Phone Number
                                                  </label>
                                                  <img onClick={openPhoneModal}
                                                    src="./assets/images/pen.png"
                                                    alt="Check"
                                                  />
                                                  <br />
                                                  <div>
                                                    <PhoneInput
                                                      international
                                                      value={user.phoneNo}
                                                      readOnly
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
                                                    <Link
                                                      href="javascript:void(0);"
                                                      onClick={openPasswordModal}
                                                      className="change-img-btn modal-opner"
                                                      aria-controls="password_modal"
                                                      aria-expanded={showPasswordModal}
                                                    >
                                                      Change password
                                                    </Link>
                                                  </div>
                                                </div>
                                              </Col>
                                            </Row>
                                          </form>
                                        </div>
                                      </Col>
                                    </Row>

                                    {/* Change Email Modals */}
                                    <Modal
                                      show={showEmailModal}
                                      onHide={closeEmailModal}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div className="change-eml-body">
                                          <div className="eml-bx">
                                            <div className="chng-eml">
                                              <h4>Edit Email Address</h4>
                                              <Link href="#" className="cross-icon" onClick={closeEmailModal}>
                                                <i className="fas fa-times"></i>
                                              </Link>
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
                                                      name="oldEmailToChange"
                                                      id="oldEmailToChange"
                                                      className="mg0"
                                                      value={user.email}
                                                      onChange={handleChangeEmailForm}
                                                      required
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
                                                      name="newEmailToChange"
                                                      id="newEmailToChange"
                                                      className="mg0"
                                                      value={changeEmailFormData.newEmailToChange}
                                                      onChange={handleChangeEmailForm}
                                                      required
                                                    />
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      name="passwordToChange"
                                                      id="passwordToChange"
                                                      className="mg0"
                                                      value={changeEmailFormData.passwordToChange}
                                                      onChange={handleChangeEmailForm}
                                                      required
                                                    />
                                                    <i
                                                      className="fa-regular fa-eye toggle-password"
                                                      onClick={() => togglePasswordVisibility("passwordToChange")}
                                                    ></i>
                                                  </div>
                                                </Col>
                                              </Row>
                                              {changeEmailError && <p className="text-danger">{changeEmailError}</p>}
                                            </form>
                                            <div className="change-eml-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={closeEmailModal}
                                                className="eml-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                onClick={handleChangeEmailFormSubmit}
                                                href="javascript:void(0);"
                                                className={`eml-change ${changeEmailLoader ? "disabled" : ""}`}
                                                style={changeEmailLoader ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                              >
                                                {changeEmailLoader ? "Wait..." : "Save"}
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showEmailOtpModal}
                                      onHide={closeEmailOtpModal}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div className="chng-otp-body modal-box">
                                          <div className="chng-otp-bx">
                                            <div className="chng-chng-otp">
                                              <h4 onClick={backToEmailModal}>
                                                <i className="fas fa-chevron-left"></i>
                                                Back to Email
                                              </h4>
                                              <Link href="#" className="cross-icon" onClick={closeEmailOtpModal}>
                                                <i className="fas fa-times"></i>
                                              </Link>
                                            </div>
                                            <div className="chng-otp-pera">
                                              <p>
                                                A code was sent to email <span style={{ color: "rgb(167 80 255)", }}>{user.email}</span>
                                              </p>
                                            </div>
                                            <form action="">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    {changeEmailOtp.map((digit, index) => (
                                                      <input
                                                        key={index}
                                                        type="tel"
                                                        maxLength="1"
                                                        id={`otp-input-${index}`}
                                                        value={digit}
                                                        onChange={(e) => handleChangeEmailOtp(e.target.value, index)}
                                                        onKeyDown={(e) => handleChangeEmailBackspace(e, index)}
                                                        className="mg0"
                                                      />
                                                    ))}
                                                  </div>
                                                  {changeEmailOtpError && <p className="text-danger">{changeEmailOtpError}</p>}
                                                  <div className="resend-timer">
                                                    {changeEmailOtpTimer > 0 ? (
                                                      <p>
                                                        Resend code in <span>{`00:${changeEmailOtpTimer.toString().padStart(2, "0")}`}</span>
                                                      </p>
                                                    ) : (
                                                      <p>
                                                        <Link
                                                          href="#"
                                                          onClick={resendEmailOtp}
                                                          style={{
                                                            pointerEvents: resendEmailOtpButton ? "auto" : "none",
                                                            color: resendEmailOtpButton ? "rgb(127 0 255)" : "gray",
                                                            textDecoration: "none"
                                                          }}
                                                        >
                                                          Resend code
                                                        </Link>
                                                      </p>
                                                    )}
                                                  </div>
                                                </Col>
                                              </Row>
                                            </form>
                                            <div className="chng-otp-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={closeEmailOtpModal}
                                                className="chng-otp-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                href="javascript:void(0);"
                                                className={`eml-change chng-otp-ver ${changeEmailOtpLoader ? "disabled" : ""}`}
                                                style={changeEmailOtpLoader ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                onClick={handleChangeEmailOtpSubmit}
                                              >
                                                {changeEmailOtpLoader ? "Verifying..." : "Verification"}
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showEmailSucess}
                                      onHide={handleCloseEmailSucess}
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
                                                your success to change your email address
                                              </p>
                                            </div>
                                            <div className="succes-return-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleCloseEmailSucess}
                                                className="succes-return"
                                              >
                                                Return to Profile
                                              </Link>
                                            </div>
                                          </div>
                                        </div>

                                      </Modal.Body>
                                    </Modal>

                                    {/* Change Phone Number Modals */}
                                    <Modal
                                      show={showPhoneModal}
                                      onHide={closePhoneModal}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div className="change-phn-body">
                                          <div className="phn-bx">
                                            <div className="chng-phn">
                                              <h4>Edit Phone Number</h4>
                                              <Link href="#" className="cross-icon" onClick={closePhoneModal}>
                                                <i className="fas fa-times"></i>
                                              </Link>
                                            </div>
                                            <form action="">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      Phone Number
                                                    </label>
                                                    <br />
                                                    <div>
                                                      <PhoneInput
                                                        international
                                                        name="oldPhoneToChange"
                                                        id="oldPhoneToChange"
                                                        value={user.phoneNo}
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      New Phone Number
                                                    </label>
                                                    <br />
                                                    <div>
                                                      <PhoneInput
                                                        international
                                                        defaultCountry="GB"
                                                        value={changePhoneFormData.newPhoneToChange}
                                                        onChange={handleChangePhone}
                                                        className="mg0"
                                                        placeholder="Enter phone number"
                                                        required
                                                        name="newPhoneToChange"
                                                        id="newPhoneToChange"
                                                      />
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label for="control-label">
                                                      Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      name="passwordToChange"
                                                      id="passwordToChange"
                                                      className="mg0"
                                                      value={changePhoneFormData.passwordToChange}
                                                      onChange={handleChangePhoneForm}
                                                      required
                                                    />
                                                    <i
                                                      className="fa-regular fa-eye toggle-password"
                                                      onClick={() => togglePasswordVisibility("passwordToChange")}
                                                    ></i>
                                                  </div>
                                                </Col>
                                              </Row>
                                              {changePhoneError && <p className="text-danger">{changePhoneError}</p>}
                                            </form>
                                            <div className="change-phn-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={closePhoneModal}
                                                className="phn-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                onClick={handleChangePhoneFormSubmit}
                                                href="javascript:void(0);"
                                                className={`phn-change ${changePhoneLoader ? "disabled" : ""}`}
                                                style={changePhoneLoader ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                              >
                                                {changePhoneLoader ? "Wait..." : "Save"}
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showPhoneOtpModal}
                                      onHide={closePhoneOtpModal}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div className="chng-otp-body">
                                          <div className="chng-otp-bx">
                                            <div className="chng-chng-otp">
                                              <h4 onClick={backToPhoneModal}>
                                                <i className="fas fa-chevron-left"></i>
                                                Back to Phone
                                              </h4>
                                              <Link
                                                onClick={closePhoneOtpModal}
                                                href="#"
                                                className="cross-icon"
                                              >
                                                <i className="fas fa-times"></i>
                                              </Link>
                                            </div>
                                            <div className="chng-otp-pera">
                                              <p>
                                                A code was sent to email <span style={{ color: "rgb(167 80 255)", }}>{user.email}</span>
                                              </p>
                                            </div>
                                            <form action="">
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    {changePhoneOtp.map((digit, index) => (
                                                      <input
                                                        key={index}
                                                        type="tel"
                                                        maxLength="1"
                                                        id={`otp-input-${index}`}
                                                        value={digit}
                                                        onChange={(e) => handleChangePhoneOtp(e.target.value, index)}
                                                        onKeyDown={(e) => handleChangePhoneBackspace(e, index)}
                                                        className="mg0"
                                                      />
                                                    ))}
                                                  </div>
                                                  {changePhoneOtpError && <p className="text-danger">{changePhoneOtpError}</p>}
                                                  <div className="resend-timer">
                                                    {changePhoneOtpTimer > 0 ? (
                                                      <p>
                                                        Resend code in <span>{`00:${changePhoneOtpTimer.toString().padStart(2, "0")}`}</span>
                                                      </p>
                                                    ) : (
                                                      <p>
                                                        <Link
                                                          href="#"
                                                          onClick={resendPhoneOtp}
                                                          style={{
                                                            pointerEvents: resendPhoneOtpButton ? "auto" : "none",
                                                            color: resendPhoneOtpButton ? "rgb(127 0 255)" : "gray",
                                                            textDecoration: "none"
                                                          }}
                                                        >
                                                          Resend code
                                                        </Link>
                                                      </p>

                                                    )}
                                                  </div>
                                                </Col>
                                              </Row>
                                            </form>
                                            <div className="chng-otp-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={closePhoneOtpModal}
                                                className="chng-otp-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                href="javascript:void(0);"
                                                className={`eml-change chng-otp-ver ${chnagePhoneOtpLoader ? "disabled" : ""}`}
                                                style={chnagePhoneOtpLoader ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                onClick={handleChangePhoneOtpSubmit}
                                              >
                                                {chnagePhoneOtpLoader ? "Verifying..." : "Verification"}
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showPhoneSucess}
                                      onHide={handleClosePhoneSucess}
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
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleClosePhoneSucess}
                                                className="succes-return"
                                              >
                                                Return to Profile
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>

                                    {/* Change Password Modals */}
                                    <Modal
                                      show={showPasswordModal}
                                      onHide={closePasswordModal}
                                      className="password_modal"
                                      aria-labelledby="change-password-title"
                                      aria-describedby="change-password-description"
                                    >
                                      <Modal.Body>
                                        <div className="change-password-body">
                                          <div className="password-bx">
                                            <div className="chng-psd">
                                              <h4 id="change-password-title">Change Password</h4>
                                              <Link
                                                href="#"
                                                className="cross-icon"
                                                onClick={closePasswordModal}
                                              >
                                                <i className="fas fa-times"></i>
                                              </Link>
                                            </div>
                                            <form onSubmit={handleChangePasswordFormSubmit}>
                                              <Row>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label htmlFor="oldPasswordToChange">
                                                      Current Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      name="oldPasswordToChange"
                                                      id="oldPasswordToChange"
                                                      className="mg0"
                                                      onChange={handleChangePasswordForm}
                                                      required
                                                    />
                                                    <i
                                                      className="fa-regular fa-eye toggle-password"
                                                      onClick={() => togglePasswordVisibility("oldPasswordToChange")}
                                                    ></i>
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label htmlFor="newPasswordToChange">
                                                      New Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      name="newPasswordToChange"
                                                      id="newPasswordToChange"
                                                      className="mg0"
                                                      onChange={handleChangePasswordForm}
                                                      required
                                                    />
                                                    <i
                                                      className="fa-regular fa-eye toggle-password"
                                                      onClick={() => togglePasswordVisibility("newPasswordToChange")}
                                                    ></i>
                                                  </div>
                                                </Col>
                                                <Col lg={12} md={12}>
                                                  <div className="form-group">
                                                    <label htmlFor="newConfirmPasswordToChange">
                                                      Confirm Password
                                                    </label>
                                                    <br />
                                                    <input
                                                      type="password"
                                                      name="newConfirmPasswordToChange"
                                                      id="newConfirmPasswordToChange"
                                                      className="mg0"
                                                      onChange={handleChangePasswordForm}
                                                      required
                                                    />
                                                    <i
                                                      className="fa-regular fa-eye toggle-password"
                                                      onClick={() =>
                                                        togglePasswordVisibility("newConfirmPasswordToChange")
                                                      }
                                                    ></i>
                                                  </div>
                                                </Col>
                                              </Row>
                                              {changePasswordError && <p className="text-danger">{changePasswordError}</p>}
                                            </form>
                                            <div className="change-pass-btn">
                                              <Link
                                                onClick={closePasswordModal}
                                                href="javascript:void(0);"
                                                onclick="popup_alrt(this)"
                                                className="psd-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                onClick={handleChangePasswordFormSubmit}
                                                href="javascript:void(0);"
                                                className={`psd-change ${changePasswordLoader ? "disabled" : ""}`}
                                                style={changePasswordLoader ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                              >
                                                {changePasswordLoader ? "Wait..." : "Save"}
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showPasswordSucess}
                                      onHide={handleClosePasswordSucess}
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
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleClosePasswordSucess}
                                                className="succes-return"
                                              >
                                                Return to Profile
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>

                                    {/* Delete Account */}
                                    <Modal
                                      show={showdeleteaccount}
                                      onHide={handleClosedeleteaccount}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div class="succes-body delete-alert">
                                          <div class="succes-alert">
                                            <img src="./assets/images/dashboard/danger 1.png" alt="Check" />
                                            <div>
                                              <h6>Are you sure want to Delete?</h6>
                                              <p>your account will be remove from database. We will email all your data before your account is deleted.</p>
                                            </div>
                                            <div class="succes-return-btn delete-alert-btn">
                                              <Link onClick={handleClosedeleteaccount} href="javascript:;" class="chng-otp-ver">RETURN</Link>
                                              <Link href="javascript:void(0);" onClick={handleDeleteAccount} class="succes-return">Delete Account</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showdeleteaccountsucess}
                                      onHide={handleClosedeleteaccountsucess}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div class="succes-body resqt-body">
                                          <div class="succes-alert">
                                            <img src="./assets/images/ei_check.png" alt="Check" />
                                            <div>
                                              <h6>Successful Request</h6>
                                              <p>Your account is in a queue to be deleted. You will receive an email confirmation with all of your data and to confirm the closure of your account. We hope to see you soon.</p>
                                            </div>
                                            <div class="succes-return-btn resqt-body-btn">
                                              <button onClick={handleLogout} className="succes-return">
                                                Return to Website
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>

                                    {/* Change Image */}
                                    <Modal
                                      show={showImageChange}
                                      onHide={handleCloseImageChange}
                                      className="password_modal image_change_modal"
                                    >
                                      <Modal.Body>
                                        <div className="succes-body resqt-body">
                                          <Link href="#" className="cross-icon" onClick={handleCloseImageChange}>
                                            <i className="fas fa-times"></i>
                                          </Link>
                                          <div className="succes-alert">
                                            <div className="prof_img">
                                              <img
                                                src={currentImage}
                                                alt="Check"
                                                style={{ borderRadius: "50%" }}
                                              />
                                              <i className="fa-solid fa-pencil"></i>
                                              <input type="file" onChange={updateCurrentImage} />
                                            </div>
                                            <div>
                                              <h6>Change Your Profile Image</h6>
                                              <br></br>
                                            </div>
                                            {changeImageError && <p className="text-danger">{changeImageError}</p>}
                                            <div className="succes-return-btn resqt-body-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={saveProfileImage}
                                                className={`succes-return ${changeImageLoader ? "disabled" : ""}`}
                                                style={changeImageLoader ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                disabled={changeImageLoader}
                                              >
                                                {changeImageLoader ? "Saving..." : "Save Image"}
                                              </Link>
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
        </Container>
      </section>
    </>
  );
}

export default Settingprofile;
