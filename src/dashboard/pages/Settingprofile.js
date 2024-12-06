import React, { useState, useEffect } from "react";
import DashboardSidebar from "../partials/dashboard-sidebar";
import DashboardPanelTopbar from "../components/DashboardPanelTopbar";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Settingprofile() {
  const token = localStorage.getItem('token');
  const [user, updateUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
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
  const [showphone, setShowphone] = useState(false);
  const handleClosephone = () => setShowphone(false);
  const handleShowphone = () => setShowphone(true);
  const [showphonesucess, setShowphonesucess] = useState(false);
  const handleClosephonesucess = () => {
    setShowphonesucess(false);
    setShowphone(false);
  }
  const handleShowphonesucess = () => setShowphonesucess(true);
  const [showemail, setShowemail] = useState(false);
  const handleCloseemail = () => setShowemail(false);
  const handleShowemail = () => setShowemail(true);
  const [showemailotp, setShowemailotp] = useState(false);
  const handleCloseemailotp = () => setShowemailotp(false);
  const handleShowemailotp = () => setShowemailotp(true);
  const [showemailotpsucess, setShowemailotpsucess] = useState(false);
  const handleCloseemailotpsucess = () => {
    setShowemailotpsucess(false);
    setShowemailotp(false);
    setShowemail(false);
  }
  const handleShowemailotpsucess = () => setShowemailotpsucess(true);
  const [showdeleteaccount, setShowdeleteaccount] = useState(false);
  const handleClosedeleteaccount = () => setShowdeleteaccount(false);
  const handleShowdeleteaccount = () => setShowdeleteaccount(true);
  const [showdeleteaccountsucess, setShowdeleteaccountsucess] = useState(false);
  const handleClosedeleteaccountsucess = () => {
    setShowdeleteaccountsucess(false);
    setShowdeleteaccount(false);
  }
  const handleShowdeleteaccountsucess = () => setShowdeleteaccountsucess(true);
  const [changePhoneLoader, setChangePhoneLoader] = useState(false);
  const [changePhoneError, setChangePhoneError] = useState('');
  const [changePhoneFormData, setChangePhoneFormData] = useState({
    oldPhoneToChange: user.phoneNo,
    newPhoneToChange: '',
    passwordToChange: ''
  });
  const handleChangePhoneForm = (e) => {
    setChangePhoneFormData({
      ...changePhoneFormData,
      [e.target.name]: e.target.value
    });
  };
  const handleChangePhoneFormSubmit = async (e) => {
    e.preventDefault();
    setChangePhoneError('');
    setChangePhoneLoader(true);
    if (!changePhoneFormData.oldPhoneToChange.trim()) {
      setChangePhoneError('Previous Phone No. is required');
      setChangePhoneLoader(false);
      return false;
    }
    if (!changePhoneFormData.newPhoneToChange.trim()) {
      setChangePhoneError('Phone No. is required');
      setChangePhoneLoader(false);
      return false;
    }
    if (!changePhoneFormData.passwordToChange.trim()) {
      setChangePhoneError('Password is required');
      setChangePhoneLoader(false);
      return false;
    }
    if (changePhoneFormData.oldPhoneToChange == changePhoneFormData.newPhoneToChange) {
      setChangePhoneError('Both phone no.s must not be same');
      setChangePhoneLoader(false);
      return false;
    }
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          password: changePhoneFormData.passwordToChange,
          phoneNo: changePhoneFormData.newPhoneToChange,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setShowphone(false);
        setChangePhoneOtpTimer(60);
        setShowotp(true);
      } else {
        if (data.error?.message) {
          setChangePhoneError(data.error.message);
        } else {
          setChangePhoneError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangePhoneError("Something went wrong. Please try again.");
    } finally {
      setChangePhoneLoader(false);
    }
  };
  const [changePhoneOtp, setChangePhoneOtp] = useState(new Array(6).fill(""));
  const [changePhoneOtpTimer, setChangePhoneOtpTimer] = useState(0);
  useEffect(() => {
    if (changePhoneOtpTimer > 0) {
      const interval = setInterval(() => setChangePhoneOtpTimer(changePhoneOtpTimer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [changePhoneOtpTimer]);
  const handleChangePhoneOtp = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...changePhoneOtp];
      newOtp[index] = value;
      setChangePhoneOtp(newOtp);
      if (value && index < changePhoneOtp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const handleChangePhoneBackspace = (e, index) => {
    if (e.key === "Backspace" && changePhoneOtp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const [changePhoneOtpError, setChangePhoneOtpError] = useState('');
  const [chnagePhoneOtpLoader, setChangePhoneOtpLoader] = useState(false);
  const handleChangePhoneOtpSubmit = async (e) => {
    e.preventDefault();
    setChangePhoneOtpError('');
    setChangePhoneOtpLoader(true);
    if (changePhoneOtp.some((digit) => digit === "")) {
      setChangePhoneOtpError('Otp is required');
      setChangePhoneOtpLoader(false);
      return false;
    }
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/verify-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          code: changePhoneOtp.join(""),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        const updatedUser = { ...user, phoneNo: changePhoneFormData.newPhoneToChange };
        updateUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setShowotp(false);
        setShowphonesucess(true);
      } else {
        if (data.error?.message) {
          setChangePhoneOtpError(data.error.message);
        } else {
          setChangePhoneOtpError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangePhoneOtpError("Something went wrong. Please try again.");
    } finally {
      setChangePhoneOtpLoader(false);
    }
  };
  const [changeEmailLoader, setChangeEmailLoader] = useState(false);
  const [changeEmailError, setChangeEmailError] = useState('');
  const [changeEmailFormData, setEmailFormData] = useState({
    oldEmailToChange: user.email,
    newEmailToChange: '',
    passwordToChange: ''
  });
  const handleChangeEmailForm = (e) => {
    setEmailFormData({
      ...changeEmailFormData,
      [e.target.name]: e.target.value
    });
  };
  const handleChangeEmailFormSubmit = async (e) => {
    e.preventDefault();
    setChangeEmailError('');
    setChangeEmailLoader(true);
    if (!changeEmailFormData.oldEmailToChange.trim()) {
      setChangeEmailError('Previous Email is required');
      setChangeEmailLoader(false);
      return false;
    }
    if (!changeEmailFormData.newEmailToChange.trim()) {
      setChangeEmailError('Email is required');
      setChangeEmailLoader(false);
      return false;
    }
    if (!changeEmailFormData.passwordToChange.trim()) {
      setChangeEmailError('Password is required');
      setChangeEmailLoader(false);
      return false;
    }
    if (changeEmailFormData.oldEmailToChange == changeEmailFormData.newEmailToChange) {
      setChangeEmailError('Both emails must not be same');
      setChangeEmailLoader(false);
      return false;
    }
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          password: changeEmailFormData.passwordToChange,
          email: changeEmailFormData.newEmailToChange,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setShowemail(false);
        setChangeEmailOtpTimer(60);
        setShowemailotp(true);
      } else {
        if (data.error?.message) {
          setChangeEmailError(data.error.message);
        } else {
          setChangeEmailError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangeEmailError("Something went wrong. Please try again.");
    } finally {
      setChangeEmailLoader(false);
    }
  };
  const [changeEmailOtp, setChangeEmailOtp] = useState(new Array(6).fill(""));
  const [changeEmailOtpTimer, setChangeEmailOtpTimer] = useState(0);
  useEffect(() => {
    if (changeEmailOtpTimer > 0) {
      const interval = setInterval(() => setChangeEmailOtpTimer(changeEmailOtpTimer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [changeEmailOtpTimer]);
  const handleChangeEmailOtp = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...changeEmailOtp];
      newOtp[index] = value;
      setChangeEmailOtp(newOtp);
      if (value && index < changeEmailOtp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const handleChangeEmailBackspace = (e, index) => {
    if (e.key === "Backspace" && changeEmailOtp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const [changeEmailOtpError, setChangeEmailOtpError] = useState('');
  const [changeEmailOtpLoader, setChangeEmailOtpLoader] = useState(false);
  const handleChangeEmailOtpSubmit = async (e) => {
    e.preventDefault();
    setChangeEmailOtpError('');
    setChangeEmailOtpLoader(true);
    if (changeEmailOtp.some((digit) => digit === "")) {
      setChangeEmailOtpError('Otp is required');
      setChangeEmailOtpLoader(false);
      return false;
    }
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/verify-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          code: changeEmailOtp.join(""),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        const updatedUser = { ...user, email: changeEmailFormData.newEmailToChange };
        updateUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setShowemailotp(false);
        setShowemailotpsucess(true);
      } else {
        if (data.error?.message) {
          setChangeEmailOtpError(data.error.message);
        } else {
          setChangeEmailOtpError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangeEmailOtpError("Something went wrong. Please try again.");
    } finally {
      setChangeEmailOtpLoader(false);
    }
  };
  const [changePasswordLoader, setChangePasswordLoader] = useState(false);
  const [changePasswordError, setChangePasswordError] = useState('');
  const [changePasswordFormData, setChangePasswordFormData] = useState({
    newPasswordToChange: '',
    newConfirmPasswordToChange: '',
    oldPasswordToChange: ''
  });
  const handleChangePasswordForm = (e) => {
    setChangePasswordFormData({
      ...changePasswordFormData,
      [e.target.name]: e.target.value
    });
  };
  const handleChangePasswordFormSubmit = async (e) => {
    e.preventDefault();
    setChangePasswordError('');
    setChangePasswordLoader(true);
    if (!changePasswordFormData.oldPasswordToChange.trim()) {
      setChangePasswordError('Current Password is required');
      setChangePasswordLoader(false);
      return false;
    }
    if (!changePasswordFormData.newPasswordToChange.trim()) {
      setChangePasswordError('New Password is required');
      setChangePasswordLoader(false);
      return false;
    }
    if (!changePasswordFormData.newConfirmPasswordToChange.trim()) {
      setChangePasswordError('Confirm Password is required');
      setChangePasswordLoader(false);
      return false;
    }
    if (changePasswordFormData.newPasswordToChange != changePasswordFormData.newConfirmPasswordToChange) {
      setChangePasswordError('New and Confirm password not match');
      setChangePasswordLoader(false);
      return false;
    }
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          password: changePasswordFormData.newPasswordToChange,
          oldPassword: changePasswordFormData.oldPasswordToChange,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setShow(false);
        setShowsucess(true);
      } else {
        if (data.error?.message) {
          setChangePasswordError(data.error.message);
        } else {
          setChangePasswordError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangePasswordError("Something went wrong. Please try again.");
    } finally {
      setChangePasswordLoader(false);
    }
  };
  const togglePasswordVisibility = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  };
  const handleDeleteAccount = async (e) => {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/admin/user/` + user.id + `/suspend`, {
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setShowdeleteaccount(false);
        setShowdeleteaccountsucess(true);
      } else {
        if (data.error?.message) {
          setChangePasswordError(data.error.message);
        } else {
          setChangePasswordError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangePasswordError("Something went wrong. Please try again.");
    } finally {
      setChangePasswordLoader(false);
    }
  };
  const [showimage_change, setShowimage_change] = useState(false);
  const handleCloseimage_change = () => setShowimage_change(false);
  const handleShowimage_change = () => setShowimage_change(true);
  const [changeImageError, setChangeImageError] = useState('');
  const [changeImageLoader, setChangeImageLoader] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(
    user?.image
      ? 'https://blackties-backend.dev.internalstaging.com' + user.image
      : './assets/images/Avatar.png'
  );
  const updateCurrentImage = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setCurrentImage(fileURL);
    }
  };
  const saveProfileImage = async (e) => {
    e.preventDefault();
    setChangeImageError('');
    setChangeImageLoader(true);
    if (!selectedImage) {
      setChangeImageError("Please select an image first!");
      setChangeImageLoader(false);
      return false;
    }
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/admin/update-user-image/` + user.id, {
        method: "PUT",
        headers: {
          "x-auth-token": token,
        },
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        const updatedUser = { ...user, image: data.data };
        updateUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        handleCloseimage_change(true);
      } else {
        if (data.error?.message) {
          setChangeImageError(data.error.message);
        } else {
          setChangeImageError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setChangeImageError("Something went wrong. Please try again.");
    } finally {
      setChangeImageLoader(false);
    }
  };
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
                                            onClick={handleShowimage_change}
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
                                                    value={user.email}
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label for="control-label">
                                                    Phone Number
                                                  </label>
                                                  <img onClick={handleShowphone}
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
                                                      value={user.phoneNo}
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
                                                      href="javascript:;"
                                                      onClick={
                                                        showpasswordmodal
                                                      }
                                                      className="change-img-btn modal-opner"
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
                                    {/* Change Password Modals */}
                                    <Modal
                                      show={show}
                                      onHide={closepasswordmodal}
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
                                                onClick={closepasswordmodal}
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
                                                onClick={closepasswordmodal}
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
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleClosesucess}
                                                className="succes-return"
                                              >
                                                Return to Profile
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>

                                    {/* Change Email Modals */}
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
                                              <Link href="#" className="cross-icon" onClick={handleCloseemail}>
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
                                                onClick={handleCloseemail}
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
                                                {changeEmailLoader ? "Wait..." : "Verification"}
                                              </Link>
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
                                              <Link href="#" className="cross-icon" onClick={handleCloseemailotp}>
                                                <i className="fas fa-times"></i>
                                              </Link>
                                            </div>
                                            <div className="chng-otp-pera">
                                              <p>
                                                A code was sent to email <span style={{ color: "rgb(167 80 255)", }}>{changeEmailFormData.newEmailToChange}</span>
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
                                                        <Link href="#" onClick={() => setChangeEmailOtpTimer(30)}>
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
                                                onClick={handleCloseemailotp}
                                                className="chng-otp-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                href="javascript:void(0);"
                                                className={`eml-change ${changeEmailOtpLoader ? "disabled" : ""}`}
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
                                                your success to change your email address
                                              </p>
                                            </div>
                                            <div className="succes-return-btn">
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleCloseemailotpsucess}
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
                                      show={showphone}
                                      onHide={handleClosephone}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                        <div className="change-phn-body">
                                          <div className="phn-bx">
                                            <div className="chng-phn">
                                              <h4>Edit Phone Number</h4>
                                              <Link href="#" className="cross-icon" onClick={handleClosephone}>
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
                                                    <div className="t-flag">
                                                      <input
                                                        type="tel"
                                                        name="oldPhoneToChange"
                                                        id="oldPhoneToChange"
                                                        placeholder="+44"
                                                        className="mg0"
                                                        value={user.phoneNo}
                                                        onChange={handleChangePhoneForm}
                                                        required
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
                                                    <div className="t-flag">
                                                      <input
                                                        type="tel"
                                                        name="newPhoneToChange"
                                                        id="newPhoneToChange"
                                                        placeholder="+44"
                                                        value={changePhoneFormData.newPhoneToChange}
                                                        onChange={handleChangePhoneForm}
                                                        className="mg0"
                                                        required
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
                                                onClick={handleClosephone}
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
                                                Back to Phone
                                              </h4>
                                              <Link
                                                onClick={handleCloseotp}
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
                                                        <Link href="#" onClick={() => setChangeEmailOtpTimer(30)}>
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
                                                onClick={handleCloseotp}
                                                className="chng-otp-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                href="javascript:void(0);"
                                                className={`eml-change ${chnagePhoneOtpLoader ? "disabled" : ""}`}
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
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleClosephonesucess}
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
                                              <Link href="javascript:void(0);" onClick={handleClosedeleteaccountsucess} class="succes-return">Return to Website</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal>

                                    {/* Change Image */}
                                    <Modal
                                      show={showimage_change}
                                      onHide={handleCloseimage_change}
                                      className="password_modal image_change_modal"
                                    >
                                      <Modal.Body>
                                        <div className="succes-body resqt-body">
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
        </div>
      </section>
    </>
  );
}

export default Settingprofile;
