import React, { useState } from "react";
import DashboardSidebar from "../partials/dashboard-sidebar";
import DashboardPanelTopbar from "../components/DashboardPanelTopbar";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';


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


// Delete Account
const [showdeleteaccount, setShowdeleteaccount] = useState(false);
const handleClosedeleteaccount = () => setShowdeleteaccount(false);
const handleShowdeleteaccount = () => setShowdeleteaccount(true);


const [showdeleteaccountsucess, setShowdeleteaccountsucess] = useState(false);
const handleClosedeleteaccountsucess = () =>{ 
  setShowdeleteaccountsucess(false);
  setShowdeleteaccount(false);

}
const handleShowdeleteaccountsucess = () => setShowdeleteaccountsucess(true);

const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Set the selected file
  };

  const handleImageUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedFile); // Append file to formData

      const userId = "1"; // Replace with dynamic user ID
      const apiUrl = `https://blackties-backend.dev.internalstaging.com/dev/blackties/api/v1/admin/update-user-image/${userId}`;

      const response = await axios.put(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6IlVTRVIiLCJlbWFpbCI6Imx1Y2Fzd2lsbGlzNzQxQHlvcG1haWwuY29tIiwicGhvbmVObyI6IjQ0NDU1NTIyMjQ0NTU1IiwidXNlcm5hbWUiOiJsdWNhc3dpbGxpczc0MSIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lIjoiV2lsbGlzIiwicGxhdGZvcm0iOm51bGwsImZjbVRva2VuIjpudWxsLCJjb2RlIjpudWxsLCJvdHAiOjE5MDYzMCwib3RwRXhwaXJ5IjoiMjAyNC0xMC0xMFQxNDoxNDo0MS4wMDBaIiwic3RhdHVzIjoiQUNUSVZFIiwic29ja2V0SWQiOm51bGwsImxhbmd1YWdlIjoiZW4iLCJjdXJyZW5jeSI6InVuaXRlZF9zdGF0ZXNfZG9sbGFyIiwidGVtcEVtYWlsIjpudWxsLCJpc09ubGluZSI6ZmFsc2UsImxhc3RMb2dpbiI6IjIwMjQtMTAtMTdUMTU6MDQ6MjkuMDAwWiIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMTBUMTQ6MTQ6NDEuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMTdUMTU6MDQ6MjkuMDAwWiIsImlhdCI6MTcyOTE3NzQ3N30.Ui5KAGyCw9Sdu6c07P8HTg2AKTl7-kya27xPIagcTZU`, // Replace with actual token
        },
      });

      alert("Image updated successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to update image. Please try again.");
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
                                          <Link
                                            href="javascript:;"
                                            className="change-img-btn"
                                          >
                                            Change Image
                                          </Link>
                                          <div>
                                            <input type="file" onChange={handleFileChange} accept="image/*" />
                                            <button className="change-img-btn" onClick={handleImageUpload}>
                                              Change Image
                                            </button>
                                          </div>
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
                                              <Link
                                                href="#"
                                                className="cross-icon"
                                                onClick={closepasswordmodal}
                                              >
                                                <i className="fas fa-times"></i>
                                              </Link>
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
                                              <Link
                                                onClick={closepasswordmodal}
                                                href="javascript:void(0);"
                                                onclick="popup_alrt(this)"
                                                className="psd-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                                onClick={handleShowotp}
                                                href="javascript:;"
                                                className="psd-change"
                                              >
                                                Save
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
                                                Back to Change Password
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
                                              <Link
                                                href="javascript:void(0);"
                                                onClick={handleCloseotp}
                                                className="chng-otp-cancel"
                                              >
                                                Cancel
                                              </Link>
                                              <Link
                                              onClick={handleShowsucess}
                                                href="javascript:;"
                                                className="chng-otp-ver modal-opner"
                                              >
                                                Verification
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
                                          <Link href="#" className="cross-icon"  onClick={handleClosephone}>
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
                                                    name="form-control"
                                                    id=""
                                                    placeholder="+44"
                                                    className="mg0"
                                                  />
                                                  {/* <Link 
                                                  onClick={showpasswordmodal}><img src="./assets/images/ei_check.png"/></Link> */}
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
                                          <Link
                                            href="javascript:void(0);"
                                            onClick={handleClosephone}
                                            className="phn-cancel"
                                          >
                                            Cancel
                                          </Link>
                                          <Link
                                            href="javascript:;"
                                            onClick={handleShowphonesucess}
                                            className="phn-change"
                                          >
                                            Save
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
                                          <Link
                                            href="javascript:void(0);"
                                            onClick={handleCloseemail}
                                            className="eml-cancel"
                                          >
                                            Cancel
                                          </Link>
                                          <Link
                                            href="javascript:;"
                                            className="eml-change"
                                            onClick={handleShowemailotp}
                                          >
                                            Verification
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
                                          <Link
                                            href="javascript:void(0);"
                                            onClick={handleCloseemailotp}
                                            className="chng-otp-cancel"
                                          >
                                            Cancel
                                          </Link>
                                          <Link
                                            href="javascript:;"
                                            className="chng-otp-ver"
                                            onClick={handleShowemailotpsucess}
                                          >
                                            Verification
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
                                            your success to change your phone
                                            number
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
                                    


                                    {/* Delete Profile */}
                                    <Modal
                                      show={showdeleteaccount}
                                      onHide={handleClosedeleteaccount}
                                      className="password_modal "
                                    >
                                      <Modal.Body>
                                      <div class="succes-body delete-alert">
                                          <div class="succes-alert">
                                              <img src="./assets/images/dashboard/danger 1.png" alt="Check"/>
                                              <div>
                                                  <h6>Are you sure want to Delete?</h6>
                                                  <p>your account will be remove from database. We will email all your data before your account is deleted.</p>
                                              </div>
                                              <div class="succes-return-btn delete-alert-btn"> 
                                                  <Link onClick={handleClosedeleteaccount} href="javascript:;" class="chng-otp-ver">RETURN</Link>
                                                  <Link href="javascript:void(0);" onClick={handleShowdeleteaccountsucess} onclick="popup_alrt(this)"  class="succes-return">Delete Account</Link>
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
                                              <img src="./assets/images/ei_check.png" alt="Check"/>
                                              <div>
                                                  <h6>Successful Request</h6>
                                                  <p>Your account is in a queue to be deleted. You will receive an email confirmation with all of your data and to confirm the closure of your account. We hope to see you soon.</p>
                                              </div>
                                              <div class="succes-return-btn resqt-body-btn"> 
                                                  <Link href="javascript:void(0);" onClick={handleClosedeleteaccountsucess}  class="succes-return">Return to Website</Link>
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
