import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Componentchart from "./components/Componentchart";

function Vehicledetails() {
  return (
    <section className="user-dashboard">
      <Container fluid>
        <Row className="g-0">
          <Col lg={3} md={3} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col lg={9} md={9} className="panel-col">
            <div className="dashboard-panel application-panel">
              <Row>
                <Col lg={12}>
                  <div className="dashboard-panel-topbar">
                    <Dashboardpaneltopbar />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="main-veh-box admin_vehicle_details">
                    <div className="vehicle-main-box">
                      <div className="main-veh-bx vehcl-details">
                        <div className="chng-chng-otp">
                          <i className="fas fa-chevron-left"></i>
                          <h4>Vehicle Search</h4>
                          <h4>Mercedes-Benz E Class . 2019 . KJ19 0JX</h4>
                          <h5>
                            <img
                              src="./admin_assets/images/Frame 81.png"
                              alt=""
                            />
                            John Smith .{" "}
                            <Link to="tel:+44 2134 2134">+44 2134 2134</Link> .{" "}
                            <Link to="mailto:Sample@gmail.com">
                              Sample@gmail.com
                            </Link>
                          </h5>
                        </div>
                        <div className="tabs-container">
                          <Tabs defaultActiveKey="overview" className="mb-3">
                            <Tab eventKey="overview" title="Overview">
                              {/* Overview Tab Content */}
                              <Row className="member-inner-rw" id="Overview_tabs">
                                <Col lg={12} md={12}>
                                  <div className="profile-meta-wrapper member-wrapper">
                                    <div className="profile-meta member-meta">
                                      <img
                                        src="./admin_assets/images/dashboard/Frame 81.png"
                                        alt="prfile"
                                      />
                                      <div>
                                        <h4 className="profile-name">Omar</h4>
                                        <h6 className="profile-status">
                                          <ion-icon
                                            name="checkmark-circle-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>{" "}
                                          Active
                                        </h6>
                                      </div>
                                      <div className="member">
                                        <p>Member Since: July 19, 2024</p>
                                        <Link
                                          to="#"
                                          className="change-img-btn"
                                        >
                                          Approved
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="member-frm">
                                      <form action="">
                                        <Row>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                First Name
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                name="form-control"
                                                id=""
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Last Name
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                name="form-control"
                                                id=""
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Email Address
                                              </label>
                                              <br />
                                              <input
                                                type="email"
                                                name="form-control"
                                                id=""
                                                placeholder=""
                                              />
                                            </div>
                                          </Col>
                                          <Col lg={6} md={6}>
                                            <div className="form-group">
                                              <label htmlFor="control-label">
                                                Phone Number
                                              </label>
                                              <br />
                                              <input
                                                type="tel"
                                                name="form-control"
                                                id=""
                                                placeholder="+44"
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                      </form>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row className=" image-date-picker-rw">
                                <Col lg={8} md={8} className="">
                                  <div className="image-picker">
                                    <img
                                      src="./admin_assets/images/Frame 2085663573.png"
                                      alt="car"
                                    />
                                  </div>
                                  <div className="image-picker-txt">
                                    <div className="distance-txt">
                                      <h6>Distance</h6>
                                      <span>102 Miles</span>
                                    </div>
                                    <div className="distance-txt">
                                      <h6>Passenger</h6>
                                      <span>4 Persons</span>
                                    </div>
                                  </div>
                                  <div className="image-picker-txt">
                                    <div className="distance-txt">
                                      <h6>Start</h6>
                                      <span>July 19, 2024</span>
                                    </div>
                                    <div className="distance-txt">
                                      <h6>End</h6>
                                      <span>TBD</span>
                                    </div>
                                  </div>
                                  <div className="contract-txt">
                                    <div className="rental-vehicle-docs-wrap contract-doc">
                                      <ul className="rental-files contract-files">
                                        <span className="doc-field">Contract</span>
                                        <li>
                                          <img
                                            src="./admin_assets/images/Frame 2085663522.png"
                                            alt="Docs"
                                          />
                                          <div>
                                            <h6>Contract</h6>
                                            <span>3.6 MB</span>
                                          </div>
                                          <Link
                                            to="#"
                                            className="down-btn"
                                          >
                                            Download
                                          </Link>
                                        </li>
                                        <span className="doc-field">
                                          Damage Report
                                        </span>
                                        <li>
                                          <img
                                            src="./admin_assets/images/Frame 2085663522.png"
                                            alt="Docs"
                                          />
                                          <div>
                                            <h6>Damage Report</h6>
                                            <span>3.6 MB</span>
                                          </div>
                                          <Link
                                            to="#"
                                            className="down-btn"
                                          >
                                            Download
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={4} md={4}>
                                  <div className="picker-img">
                                    <img
                                      src="./admin_assets/images/Date Picker.png"
                                      alt="date-picker"
                                    />
                                  </div>
                                  <div className="fleet-calender-txt">
                                    <h4>Fleet Calendar</h4>
                                  </div>
                                  <div className="calender-txt-box">
                                    <div className="main-txt-img">
                                      <div className="calendr-txt-img">
                                        <img
                                          src="./admin_assets/images/dashboard/Frame 2085660257 (4).png"
                                          alt="tool"
                                        />
                                      </div>
                                      <div className="txt-img-f">
                                        <span>
                                          KM19 VUG . 9 December 2024 at 09:00
                                        </span>
                                        <h5>Maintenance</h5>
                                        <h6>Oil Change and Servicing</h6>
                                      </div>
                                    </div>
                                    <div className="calendr-btn">
                                      <Link
                                        to="#"
                                        className="Maintenance-btn"
                                      >
                                        Maintenance
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="calender-txt-box expire-box">
                                    <div className="main-txt-img">
                                      <div className="calendr-txt-img">
                                        <img
                                          src="./admin_assets/images/dashboard/Frame 2085660257 (5).png"
                                          alt="tool"
                                        />
                                      </div>
                                      <div className="txt-img-f">
                                        <span>
                                          KM19 VUG . 9 December 2024 at 09:00
                                        </span>
                                        <h5>Document</h5>
                                        <h6>MOT Document is Expiration</h6>
                                      </div>
                                    </div>
                                    <div className="calendr-btn">
                                      <Link to="#" className="Expire-btn">
                                        Expire Soon
                                      </Link>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row className=" lincense-rw">
                                <Col lg={12} md={12}>
                                  <Row>
                                    <Col lg={6} md={6}>
                                      <div className="main-license-box">
                                        <h5>PCO Licence</h5>
                                        <div className="lincense-box-txt">
                                          <div className="license-txt">
                                            <p>
                                              How you had a PCO License for more
                                              than 12 Months
                                            </p>
                                          </div>
                                          <div className="license-yes">
                                            <p>Yes</p>
                                          </div>
                                        </div>
                                        <div className="license-frm">
                                          <form action="">
                                            <Row>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label htmlFor="control-label">
                                                    PCO License Number
                                                  </label>
                                                  <br />
                                                  <input
                                                    type="number"
                                                    name="form-control"
                                                    id=""
                                                    placeholder=""
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6} md={6}>
                                                <div className="form-group">
                                                  <label htmlFor="control-label">
                                                    Expiry Date
                                                  </label>
                                                  <br />
                                                  <input
                                                    type="date"
                                                    name="form-control"
                                                    id=""
                                                    placeholder=""
                                                  />
                                                </div>
                                              </Col>
                                            </Row>
                                          </form>
                                        </div>
                                        <div className="rental-vehicle-docs-wrap contract-doc paper-copy">
                                          <div className="paper-copy-bx">
                                            <ul className="rental-files contract-files">
                                              <li>
                                                <img
                                                  src="./admin_assets/images/Frame 2085663522.png"
                                                  alt="Docs"
                                                />
                                                <div>
                                                  <h6>Paper Copy</h6>
                                                  <span>3.6 MB</span>
                                                </div>
                                                <Link
                                                  to="#"
                                                  className="down-btn"
                                                >
                                                  Download
                                                </Link>
                                              </li>
                                              <li>
                                                <img
                                                  src="./admin_assets/images/Frame 2085663522.png"
                                                  alt="Docs"
                                                />
                                                <div>
                                                  <h6>Badge</h6>
                                                  <span>3.6 MB</span>
                                                </div>
                                                <Link
                                                  to="#"
                                                  className="down-btn"
                                                >
                                                  Download
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="rental-vehicle-docs-wrap contract-doc proof">
                                          <div className="proof">
                                            <div className="proof-txtx">
                                              <h5>Proof of Address</h5>
                                            </div>
                                            <ul className="rental-files contract-files">
                                              <li>
                                                <img
                                                  src="./admin_assets/images/Frame 2085663522.png"
                                                  alt="Docs"
                                                />
                                                <div>
                                                  <h6>
                                                    Bank Statement for last 3
                                                    Months
                                                  </h6>
                                                  <span>3.6 MB</span>
                                                </div>
                                                <Link
                                                  to="#"
                                                  className="down-btn"
                                                >
                                                  Download
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                      <div className="Services-Maintenance-main-box">
                                        <div className="serv-txt">
                                          <h5>Services &amp; Maintenance</h5>
                                        </div>
                                        <div className="booking-box">
                                          <div className="book-text">
                                            <div className="booking-txt-one">
                                              <span>Booking Number</span>
                                              <h6>0839</h6>
                                            </div>
                                            <div className="booking-txt-one">
                                              <span>Maintenance</span>
                                              <h6>MOT</h6>
                                            </div>
                                          </div>
                                          <div className="book-text">
                                            <div className="booking-txt-one">
                                              <span>Location</span>
                                              <h6>London</h6>
                                            </div>
                                            <div className="booking-txt-one">
                                              <span>Date</span>
                                              <h6>July 31, 2024</h6>
                                            </div>
                                          </div>
                                          <div className="book-text">
                                            <div className="booking-txt-one">
                                              <span>Time</span>
                                              <h6>09:00</h6>
                                            </div>
                                            <div className="booking-txt-one">
                                              <span>Action</span>
                                              <h6 className="bk-vehicle">
                                                Book Vehicle
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="booking-box bookig-box-2">
                                          <div className="book-text">
                                            <div className="booking-txt-one">
                                              <span>Booking Number</span>
                                              <h6>0839</h6>
                                            </div>
                                            <div className="booking-txt-one">
                                              <span>Maintenance</span>
                                              <h6>Servicing</h6>
                                            </div>
                                          </div>
                                          <div className="book-text">
                                            <div className="booking-txt-one">
                                              <span>Location</span>
                                              <h6>London</h6>
                                            </div>
                                            <div className="booking-txt-one">
                                              <span>Date</span>
                                              <h6>July 31, 2024</h6>
                                            </div>
                                          </div>
                                          <div className="book-text">
                                            <div className="booking-txt-one">
                                              <span>Time</span>
                                              <h6>09:00</h6>
                                            </div>
                                            <div className="booking-txt-one">
                                              <span>Action</span>
                                              <h6 className="bk-vehicle">
                                                Book Vehicle
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Tab>
                            <Tab
                              eventKey="telematics"
                              title="Telematics Dashboard"
                            >
                              {/* Telematics Tab Content */}
                              <div
                                className="overview-card db-default-wrapper"
                                id="telematics_tabs"
                              >
                                {/* Content Here */}
                                <Row className=" vehicle-average-row">
                                  <Col lg={4} md={4}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Total Mileage
                                      </h6>
                                      <div className="average-score">
                                        <h5>84573</h5>
                                        <span>
                                          +4.2%
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (Last Week)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={4}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Current Mileage
                                      </h6>
                                      <div className="average-score">
                                        <h5>84573</h5>
                                        <span>
                                          +4.2%
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (Last Week)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={4}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Driving Score
                                      </h6>
                                      <div className="average-score">
                                        <h5>84573</h5>
                                        <span>
                                          +4.2%
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (Last Week)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    lg={6}
                                    md={6}
                                    className=" Telematics-sc-col-1"
                                  >
                                    <div className="detail-rent-wrapper Telematics-sc-txt">
                                      <h5 className="theme-h5">Location Vehicle</h5>
                                      <div className="map">
                                        <img
                                          src="./admin_assets/images/Maps-2.png"
                                          alt="Maps"
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col
                                    lg={6}
                                    md={6}
                                    className=" Telematics-sc-col-2"
                                  >
                                    <div className="mileage-insights-wrap Telematics-sc-txt">
                                      <div className="head-options">
                                        <h5>Mileage Insights</h5>
                                        {/* <!-- <Link to="#"><ion-icon name="ellipsis-horizontal"></ion-icon></Link> --> */}
                                      </div>
                                      <div className="mileage-graph">
                                        <div className="mileage-indicate">
                                          <ion-icon
                                            name="ellipse"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                          Mileage
                                        </div>
                                        <img
                                          src="./admin_assets/images/dashboard/Graph.png"
                                          alt="Graph"
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </Tab>
                            <Tab eventKey="vehicle" title="Vehicle Details">
                              {/* Vehicle Details Tab Content */}
                              <Row className=" inner-row" id="vehicle_tabs">
                                <Col lg={6} md={6}>
                                  <div className="main-veh-txt">
                                    <h5>Vehicle Details</h5>
                                  </div>
                                  <div className="vehciles-bx-form">
                                    <form action="">
                                      <Row>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Car Make
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Car Model
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Vehicle Registration Number
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Price per Week
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Car Description
                                            </label>
                                            <br />
                                            <input
                                              type="textarea"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                              className="mg05"
                                            />
                                          </div>
                                        </Col>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <h3>Features</h3>
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Vehicle Type:
                                            </label>
                                            <br />
                                            {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                            <select
                                              name="vehicle_type:"
                                              id="vehicle"
                                            >
                                              <option value="volvo">
                                                Saloon
                                              </option>
                                              <option value="saab">
                                                Saloon
                                              </option>
                                              <option value="opel">
                                                Saloon
                                              </option>
                                              <option value="audi">
                                                Saloon
                                              </option>
                                            </select>
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Transmission:
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Fuel Type
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Miles per Gallon (MPG)
                                            </label>
                                            <br />
                                            <input
                                              type="number"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              People
                                            </label>
                                            <br />
                                            {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                            <select name="people" id="vehicle">
                                              <option value="volvo">
                                                5 People
                                              </option>
                                              <option value="saab">
                                                5 People
                                              </option>
                                              <option value="opel">
                                                5 People
                                              </option>
                                              <option value="audi">
                                                5 People
                                              </option>
                                            </select>
                                          </div>
                                        </Col>
                                        <Col lg={12} md={12}>
                                          <div className="form-group">
                                            <h3>Key Details</h3>
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Mileage Allowance:
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Additional Mileage Cost:
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Reset Period:
                                            </label>
                                            <br />
                                            <input
                                              type="text"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Holding Deposit:
                                            </label>
                                            <br />
                                            <input
                                              type="number"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              Insurance Excess:
                                            </label>
                                            <br />
                                            <input
                                              type="number"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                        <Col className=" up-bx">
                                          <div className="form-group">
                                            <label htmlFor="control-label">
                                              PCN Fee
                                            </label>
                                            <br />
                                            <input
                                              type="number"
                                              name="form-control"
                                              id=""
                                              placeholder=""
                                            />
                                          </div>
                                        </Col>
                                      </Row>
                                    </form>
                                  </div>
                                </Col>
                                <Col lg={6} md={6}>
                                  <div className="main-veh-txt">
                                    <h5>Upload Image</h5>
                                  </div>
                                  <div className="upload-img-rw">
                                    <img
                                      src="./admin_assets/images/up-img.png"
                                      alt=""
                                    />
                                  </div>
                                  <Row className=" upload-rw">
                                    <Col lg={4} md={4}>
                                      <div className="detailCar-slide-controller upload-img-dv">
                                        <ul>
                                          <li id="item1" className="">
                                            <img
                                              src="./admin_assets/images/slider/image 67.png"
                                              alt=""
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </Col>
                                    <Col lg={4} md={4}>
                                      <div className="detailCar-slide-controller upload-img-dv">
                                        <ul>
                                          <li id="item2" className="">
                                            <img
                                              src="./admin_assets/images/slider/image346.png"
                                              alt=""
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </Col>
                                    <Col lg={4} md={4}>
                                      <div className="detailCar-slide-controller upload-img-dv">
                                        <ul>
                                          <li id="item3" className="slide-active">
                                            <img
                                              src="./admin_assets/images/slider/image 66.png"
                                              alt=""
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </Col>
                                    <Row className=" upload-rw upload-delete-opt">
                                      <Col lg={3} md={3} >
                                        <div className="detailCar-slide-controller upload-img-dv">
                                          <ul>
                                            <li>
                                              <img
                                                src="./admin_assets/images/slider/image 67.png"
                                                alt=""
                                              />
                                            </li>
                                            <h6>Image_name123.jpg</h6>
                                            <span>24 Mb</span>
                                            <Link
                                              to="#"
                                              className="delete-opytion"
                                            >
                                              <img
                                                src="./admin_assets/images/slider/delete.png"
                                                alt=""
                                              />
                                            </Link>
                                          </ul>
                                        </div>
                                      </Col>
                                      <Col lg={3} md={3} >
                                        <div className="detailCar-slide-controller upload-img-dv">
                                          <ul>
                                            <li id="item2">
                                              <img
                                                src="./admin_assets/images/slider/image346.png"
                                                alt=""
                                              />
                                            </li>
                                            <h6>Image_name123.jpg</h6>
                                            <span>24 Mb</span>
                                            <Link
                                              to="#"
                                              className="delete-opytion"
                                            >
                                              <img
                                                src="./admin_assets/images/slider/delete.png"
                                                alt=""
                                              />
                                            </Link>
                                          </ul>
                                        </div>
                                      </Col>
                                      <Col lg={3} md={3} >
                                        <div className="detailCar-slide-controller upload-img-dv">
                                          <ul>
                                            <li id="item3">
                                              <img
                                                src="./admin_assets/images/slider/image 66.png"
                                                alt=""
                                              />
                                            </li>
                                            <h6>Image_name123.jpg</h6>
                                            <span>24 Mb</span>
                                            <Link
                                              to="#"
                                              className="delete-opytion"
                                            >
                                              <img
                                                src="./admin_assets/images/slider/delete.png"
                                                alt=""
                                              />
                                            </Link>
                                          </ul>
                                        </div>
                                      </Col>
                                      <Col lg={3} md={3} >
                                        <div className="detailCar-slide-controller upload-img-dv">
                                          <div className="up-img-option">
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/slider/plus.png"
                                                alt=""
                                              />
                                              <h5>Upload image</h5>
                                            </Link>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Row>
                                  <Row className=" inner-doc-sc">
                                    <div className="main-veh-txt">
                                      <h5>Document</h5>
                                    </div>
                                    <div className="doc-information">
                                      <div className="rental-vehicle-docs-wrap">
                                        <ul className="rental-files">
                                          <span className="doc-field">
                                            MOT Certificate Document
                                          </span>
                                          <li>
                                            <img
                                              src="./admin_assets/images/Frame 2085663522.png"
                                              alt="Docs"
                                            />
                                            <div>
                                              <h6>MOT Certificate</h6>
                                              <span>3.6 MB</span>
                                            </div>
                                            <Link
                                              to="#"
                                              className="down-btn"
                                            >
                                              Download
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Frame 13680.png"
                                                className="pen-img"
                                                alt="Docs"
                                              />
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Trash.png"
                                                alt="delete"
                                              />
                                            </Link>
                                          </li>
                                          <span className="doc-field">
                                            Insurance Certificate Document
                                          </span>
                                          <li>
                                            <img
                                              src="./admin_assets/images/Frame 2085663522.png"
                                              alt="Docs"
                                            />
                                            <div>
                                              <h6>Insurance Certificate</h6>
                                              <span>3.6 MB</span>
                                            </div>
                                            <Link
                                              to="#"
                                              className="down-btn"
                                            >
                                              Download
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Frame 13680.png"
                                                className="pen-img"
                                                alt="Docs"
                                              />
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Trash.png"
                                                alt="delete"
                                              />
                                            </Link>
                                          </li>
                                          <span className="doc-field">
                                            Vehicle Licence Document
                                          </span>
                                          <li>
                                            <img
                                              src="./admin_assets/images/Frame 2085663522.png"
                                              alt="Docs"
                                            />
                                            <div>
                                              <h6>Vehicle Licence</h6>
                                              <span>3.6 MB</span>
                                            </div>
                                            <Link
                                              to="#"
                                              className="down-btn"
                                            >
                                              Download
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Frame 13680.png"
                                                className="pen-img"
                                                alt="Docs"
                                              />
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Trash.png"
                                                alt="delete"
                                              />
                                            </Link>
                                          </li>
                                          <span className="doc-field">
                                            Permission Letter Document
                                          </span>
                                          <li>
                                            <img
                                              src="./admin_assets/images/Frame 2085663522.png"
                                              alt="Docs"
                                            />
                                            <div>
                                              <h6>Permission Letter</h6>
                                              <span>3.6 MB</span>
                                            </div>
                                            <Link
                                              to="#"
                                              className="down-btn"
                                            >
                                              Download
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Frame 13680.png"
                                                className="pen-img"
                                                alt="Docs"
                                              />
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Trash.png"
                                                alt="delete"
                                              />
                                            </Link>
                                          </li>
                                          <span className="doc-field">
                                            Vehicle Licence Document
                                          </span>
                                          <li>
                                            <img
                                              src="./admin_assets/images/Frame 2085663522.png"
                                              alt="Docs"
                                            />
                                            <div>
                                              <h6>Vehicle Licence</h6>
                                              <span>3.6 MB</span>
                                            </div>
                                            <Link
                                              to="#"
                                              className="down-btn"
                                            >
                                              Download
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Frame 13680.png"
                                                className="pen-img"
                                                alt="Docs"
                                              />
                                            </Link>
                                            <Link to="#">
                                              <img
                                                src="./admin_assets/images/Trash.png"
                                                alt="delete"
                                              />
                                            </Link>
                                          </li>
                                          <span className="doc-field">
                                            Vehicle Licence Document
                                          </span>
                                          <li>
                                            <img
                                              src="./admin_assets/images/Frame 2085663522 (1).png"
                                              alt="Docs"
                                            />
                                            <div>
                                              <h6>Vehicle Licence</h6>
                                              <span>3.6 MB</span>
                                            </div>
                                            <Link
                                              to="#"
                                              className="down-btn"
                                            >
                                              Download
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                            </Tab>
                            <Tab eventKey="location" title="Vehicle Location">
                              {/* Location Tab Content */}
                              <div className="veh-locate-main" id="location_tabs">
                                <Row>
                                  <Col lg={8} md={8} className="">
                                    <div className="locate-sc-txt">
                                      <h5 className="theme-h5">Location Vehicle</h5>
                                      <div className="map">
                                        <img
                                          src="./admin_assets/images/Maps-2.png"
                                          alt="Maps"
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={4}>
                                    <div className="date-img">
                                      <img
                                        className="date-picker"
                                        src="./admin_assets/images/dashboard/Date Picker.png"
                                        alt="Date"
                                      />
                                    </div>
                                  </Col>
                                  <Row className=" inner-rw-history-location">
                                    <div className="history-txt">
                                      <h5 className="theme-h5">History Location</h5>
                                      <table className="maintenance-table ds-table history-tble">
                                        <thead>
                                          <tr className="tabl-history-head">
                                            <th>Vehicle ID</th>
                                            <th>Location</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="history-data">
                                            <td>001</td>
                                            <td className="history-city">London</td>
                                            <td>-</td>
                                            <td>-</td>
                                          </tr>
                                          <tr className="history-data">
                                            <td>002</td>
                                            <td className="history-city">
                                              Obey Road
                                            </td>
                                            <td>27 June, 2024 11.00 AM</td>
                                            <td>27 June, 2024 10.00 PM</td>
                                          </tr>
                                          <tr className="history-data">
                                            <td>002</td>
                                            <td className="history-city">
                                              Obey Road
                                            </td>
                                            <td>27 June, 2024 11.00 AM</td>
                                            <td>27 June, 2024 10.00 PM</td>
                                          </tr>
                                          <tr className="history-data">
                                            <td>002</td>
                                            <td className="history-city">
                                              Obey Road
                                            </td>
                                            <td>27 June, 2024 11.00 AM</td>
                                            <td>27 June, 2024 10.00 PM</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Row>
                                </Row>
                              </div>
                            </Tab>
                            <Tab eventKey="mileage" title="Mileage Related">
                              {/* Mileage Related Tab Content */}
                              <div
                                className="overview-card db-default-wrapper"
                                id="mileage_tabs"
                              >
                                <Row className=" vehicle-average-row">
                                  <Col lg={4} md={4}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Total Mileage
                                      </h6>
                                      <div className="average-score">
                                        <h5>84573</h5>
                                        <span>
                                          +4.2%
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (Last Week)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={4}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Current Mileage
                                      </h6>
                                      <div className="average-score">
                                        <h5>84573</h5>
                                        <span>
                                          +4.2%
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (Last Week)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={4}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Driving Score
                                      </h6>
                                      <div className="average-score">
                                        <h5>84573</h5>
                                        <span>
                                          +4.2%
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (Last Week)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <div className="overall-milleage-img">

                                    <img
                                      src="./admin_assets/images/Sales statistics.png"
                                      alt="mileage"
                                    />
                                    <Componentchart/>
                                  </div>
                                  <table className="maintenance-table ds-table history-tble">
                                    <thead>
                                      <tr className="tabl-history-head">
                                        <th>Vehicle ID</th>
                                        <th>Location</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="history-data">
                                        <td>001</td>
                                        <td className="history-city">London</td>
                                        <td>-</td>
                                        <td>-</td>
                                      </tr>
                                      <tr className="history-data">
                                        <td>002</td>
                                        <td className="history-city">Obey Road</td>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>27 June, 2024 10.00 PM</td>
                                      </tr>
                                      <tr className="history-data">
                                        <td>002</td>
                                        <td className="history-city">Obey Road</td>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>27 June, 2024 10.00 PM</td>
                                      </tr>
                                      <tr className="history-data">
                                        <td>002</td>
                                        <td className="history-city">Obey Road</td>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>27 June, 2024 10.00 PM</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </Row>
                              </div>
                            </Tab>
                            <Tab eventKey="score" title="Drive Score">
                              {/* Drive Score Tab Content */}
                              <Row id="score_tabs">
                                <Col lg={12} md={12}>
                                  <div style={{ overflowX: "auto" }}>
                                    <table className="maintenance-table ds-table">
                                      <thead>
                                        <tr>
                                          <th rowspan="2">
                                            Date
                                            <ion-icon
                                              name="arrow-down-outline"
                                              role="img"
                                              className="md hydrated"
                                            ></ion-icon>
                                          </th>
                                          <th rowspan="2">
                                            Distance
                                            <br />
                                            Travelled
                                            <br />
                                            (Miles)
                                          </th>
                                          <th colspan="2" className="th-center">
                                            Hard Braking
                                          </th>
                                          <th colspan="2" className="th-center">
                                            Quick Starts
                                          </th>
                                          <th colspan="2" className="th-center">
                                            Harsh Cornering
                                          </th>
                                          <th colspan="2" className="th-center">
                                            Total
                                          </th>
                                          <th rowspan="2">Overall</th>
                                          <th rowspan="2">Safety Score</th>
                                        </tr>
                                        <tr>
                                          <th>Moderate</th>
                                          <th>Severe</th>
                                          <th>Moderate</th>
                                          <th>Severe</th>
                                          <th>Moderate</th>
                                          <th>Severe</th>
                                          <th>Moderate</th>
                                          <th>Severe</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="first-td">
                                            July 31, 2024
                                          </td>
                                          <td>189</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>1</td>
                                          <td>189</td>
                                          <td className="sr-green">
                                            <strong>85</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="first-td">
                                            July 31, 2024
                                          </td>
                                          <td>189 </td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>2</td>
                                          <td>189</td>
                                          <td className="sr-red">
                                            <strong>60</strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    </div>
                                    </Col>
                                    </Row>
                                    </Tab>
                                    </Tabs>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </Col>
                                    </Row>
                                    </div>
                                    </Col>
                                    </Row>
                                    </Container>
                                    </section>
  );
}

export default Vehicledetails;
