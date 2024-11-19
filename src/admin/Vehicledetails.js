import React from 'react';
import Sidebar from './partials/Sidebar';
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from 'react-bootstrap';

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
                      <div class="chng-chng-otp">
                                                <i class="fas fa-chevron-left"></i>
                                                <h4>Vehicle Search</h4>
                                                <h4>Mercedes-Benz E Class . 2019 . KJ19 0JX</h4>
                                                <h5><img src="./admin_assets/images/Frame 81.png" alt=""/>John Smith . <a href="tel:+44 2134 2134">+44 2134 2134</a> . <a href="mailto:Sample@gmail.com">Sample@gmail.com</a></h5>
                                            </div>
                        <div className="tabs-container">
                          <Tabs defaultActiveKey="overview" className="mb-3">
                            <Tab eventKey="overview" title="Overview">
                              {/* Overview Tab Content */}
                              <div class="row member-inner-rw"  id="Overview_tabs">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="profile-meta-wrapper member-wrapper">
                                                                    <div class="profile-meta member-meta">
                                                                        <img src="./admin_assets/images/dashboard/Frame 81.png" alt="prfile"/>
                                                                        <div>
                                                                            <h4 class="profile-name">Omar</h4>
                                                                            <h6 class="profile-status"><ion-icon name="checkmark-circle-outline" role="img" class="md hydrated"></ion-icon> Active</h6>
                                                                        </div>
                                                                        <div class="member">
                                                                            <p>Member Since: July 19, 2024</p>
                                                                            <a href="javascript:;" class="change-img-btn">Approved</a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="member-frm">
                                                                        <form action="">
                                                                            <div class="row">
                                                                                <div class="col-lg-6 col-md-6">
                                                                                    <div class="form-group">
                                                                                        <label for="control-label">First Name</label>
                                                                                        <br/>
                                                                                        <input type="text" name="form-control" id="" placeholder=""/>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-lg-6 col-md-6">
                                                                                    <div class="form-group">
                                                                                        <label for="control-label">Last Name</label>
                                                                                        <br/>
                                                                                        <input type="text" name="form-control" id="" placeholder=""/>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-lg-6 col-md-6">
                                                                                    <div class="form-group">
                                                                                        <label for="control-label">Email Address</label>
                                                                                        <br/>
                                                                                        <input type="email" name="form-control" id="" placeholder=""/>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-lg-6 col-md-6">
                                                                                    <div class="form-group">
                                                                                        <label for="control-label">Phone Number</label>
                                                                                        <br/>
                                                                                        <input type="tel" name="form-control" id="" placeholder="+44"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row image-date-picker-rw">
                                                            <div class="col-lg-8 col-md-8">
                                                                <div class="image-picker">
                                                                    <img src="./admin_assets/images/Frame 2085663573.png" alt="car"/>
                                                                </div>
                                                                <div class="image-picker-txt">
                                                                    <div class="distance-txt">
                                                                        <h6>Distance</h6>
                                                                        <span>102 Miles</span>
                                                                    </div>
                                                                    <div class="distance-txt">
                                                                        <h6>Passenger</h6>
                                                                        <span>4 Persons</span>
                                                                    </div>
                                                                </div>
                                                                <div class="image-picker-txt">
                                                                    <div class="distance-txt">
                                                                        <h6>Start</h6>
                                                                        <span>July 19, 2024</span>
                                                                    </div>
                                                                    <div class="distance-txt">
                                                                        <h6>End</h6>
                                                                        <span>TBD</span>
                                                                    </div>
                                                                </div>
                                                                <div class="contract-txt">
                                                                    <div class="rental-vehicle-docs-wrap contract-doc">
                                                                        <ul class="rental-files contract-files">
                                                                            <span class="doc-field">Contract</span>
                                                                            <li>
                                                                                <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                <div>
                                                                                    <h6>Contract</h6>
                                                                                    <span>3.6 MB</span>
                                                                                </div>
                                                                                <a href="javascript:;" class="down-btn">Download</a>
                                                                            </li>
                                                                            <span class="doc-field">Damage Report</span>
                                                                            <li>
                                                                                <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                <div>
                                                                                    <h6>Damage Report</h6>
                                                                                    <span>3.6 MB</span>
                                                                                </div>
                                                                                <a href="javascript:;" class="down-btn">Download</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4">
                                                                <div class="picker-img">
                                                                    <img src="./admin_assets/images/Date Picker.png" alt="date-picker"/>
                                                                </div>
                                                                <div class="fleet-calender-txt">
                                                                    <h4>Fleet Calendar</h4>
                                                                </div>
                                                                <div class="calender-txt-box">
                                                                    <div class="main-txt-img">
                                                                        <div class="calendr-txt-img">
                                                                            <img src="./admin_assets/images/dashboard/Frame 2085660257 (4).png" alt="tool"/>
                                                                        </div>
                                                                        <div class="txt-img-f">
                                                                            <span>KM19 VUG . 9 December 2024 at 09:00</span>
                                                                            <h5>Maintenance</h5>
                                                                            <h6>Oil Change and Servicing</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div class="calendr-btn">
                                                                        <a href="javascript:;" class="Maintenance-btn">Maintenance</a>
                                                                    </div>
                                                                </div>
                                                                <div class="calender-txt-box expire-box">
                                                                    <div class="main-txt-img">
                                                                        <div class="calendr-txt-img">
                                                                            <img src="./admin_assets/images/dashboard/Frame 2085660257 (5).png" alt="tool"/>
                                                                        </div>
                                                                        <div class="txt-img-f">
                                                                            <span>KM19 VUG . 9 December 2024 at 09:00</span>
                                                                            <h5>Document</h5>
                                                                            <h6>MOT Document is Expiration</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div class="calendr-btn">
                                                                        <a href="javascript:;" class="Expire-btn">Expire Soon</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row lincense-rw">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="main-license-box">
                                                                            <h5>PCO Licence</h5>
                                                                            <div class="lincense-box-txt">
                                                                                <div class="license-txt">
                                                                                    <p>How you had a PCO License for more than 12 Months</p>
                                                                                </div>
                                                                                <div class="license-yes">
                                                                                    <p>Yes</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="license-frm">
                                                                                <form action="">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-6 col-md-6">
                                                                                            <div class="form-group">
                                                                                                <label for="control-label">PCO License Number</label>
                                                                                                <br/>
                                                                                                <input type="number" name="form-control" id="" placeholder=""/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-6 col-md-6">
                                                                                            <div class="form-group">
                                                                                                <label for="control-label">Expiry Date</label>
                                                                                                <br/>
                                                                                                <input type="date" name="form-control" id="" placeholder=""/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div class="rental-vehicle-docs-wrap contract-doc paper-copy">
                                                                                <div class="paper-copy-bx">
                                                                                    <ul class="rental-files contract-files">
                                                                                        <li>
                                                                                            <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                            <div>
                                                                                                <h6>Paper Copy</h6>
                                                                                                <span>3.6 MB</span>
                                                                                            </div>
                                                                                            <a href="javascript:;" class="down-btn">Download</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                            <div>
                                                                                                <h6>Badge</h6>
                                                                                                <span>3.6 MB</span>
                                                                                            </div>
                                                                                            <a href="javascript:;" class="down-btn">Download</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="rental-vehicle-docs-wrap contract-doc proof">
                                                                                <div class="proof">
                                                                                    <div class="proof-txtx">
                                                                                        <h5>Proof of Address</h5>
                                                                                    </div>
                                                                                    <ul class="rental-files contract-files">
                                                                                        <li>
                                                                                            <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                            <div>
                                                                                                <h6>Bank Statement for last 3 Months</h6>
                                                                                                <span>3.6 MB</span>
                                                                                            </div>
                                                                                            <a href="javascript:;" class="down-btn">Download</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="Services-Maintenance-main-box">
                                                                            <div class="serv-txt">
                                                                                <h5>Services &amp; Maintenance</h5>
                                                                            </div>
                                                                            <div class="booking-box">
                                                                                <div class="book-text">
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Booking Number</span>
                                                                                        <h6>0839</h6>
                                                                                    </div>
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Maintenance</span>
                                                                                        <h6>MOT</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="book-text">
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Location</span>
                                                                                        <h6>London</h6>
                                                                                    </div>
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Date</span>
                                                                                        <h6>July 31, 2024</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="book-text">
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Time</span>
                                                                                        <h6>09:00</h6>
                                                                                    </div>
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Action</span>
                                                                                        <h6 class="bk-vehicle">Book Vehicle</h6>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div class="booking-box bookig-box-2">
                                                                                <div class="book-text">
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Booking Number</span>
                                                                                        <h6>0839</h6>
                                                                                    </div>
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Maintenance</span>
                                                                                        <h6>Servicing</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="book-text">
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Location</span>
                                                                                        <h6>London</h6>
                                                                                    </div>
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Date</span>
                                                                                        <h6>July 31, 2024</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="book-text">
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Time</span>
                                                                                        <h6>09:00</h6>
                                                                                    </div>
                                                                                    <div class="booking-txt-one">
                                                                                        <span>Action</span>
                                                                                        <h6 class="bk-vehicle">Book Vehicle</h6>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                            </Tab>
                            <Tab eventKey="telematics" title="Telematics Dashboard" >
                              {/* Telematics Tab Content */}
                              <div className="overview-card db-default-wrapper" id="telematics_tabs">
                                {/* Content Here */}
                                <div class="row vehicle-average-row">
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="vehicle-average-wrap">
                                                                        <h6 class="vehicle-average-title">Total Mileage</h6>
                                                                        <div class="average-score">
                                                                            <h5>84573</h5>
                                                                            <span>+4.2%<ion-icon name="arrow-up-outline" role="img" class="md hydrated"></ion-icon></span>
                                                                        </div>
                                                                        <span class="compared-weeks">Compared to (Last Week)</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="vehicle-average-wrap">
                                                                        <h6 class="vehicle-average-title">Current Mileage</h6>
                                                                        <div class="average-score">
                                                                            <h5>84573</h5>
                                                                            <span>+4.2%<ion-icon name="arrow-up-outline" role="img" class="md hydrated"></ion-icon></span>
                                                                        </div>
                                                                        <span class="compared-weeks">Compared to (Last Week)</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="vehicle-average-wrap">
                                                                        <h6 class="vehicle-average-title">Driving Score</h6>
                                                                        <div class="average-score">
                                                                            <h5>84573</h5>
                                                                            <span>+4.2%<ion-icon name="arrow-up-outline" role="img" class="md hydrated"></ion-icon></span>
                                                                        </div>
                                                                        <span class="compared-weeks">Compared to (Last Week)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-6 col-md-6 Telematics-sc-col-1">
                                                                    <div class="detail-rent-wrapper Telematics-sc-txt">
                                                                        <h5 class="theme-h5">Location Vehicle</h5>
                                                                        <div class="map">
                                                                            <img src="./admin_assets/images/Maps-2.png" alt="Maps"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 Telematics-sc-col-2">
                                                                    <div class="mileage-insights-wrap Telematics-sc-txt">
                                                                        <div class="head-options">
                                                                            <h5>Mileage Insights</h5>
                                                                            {/* <!-- <a href="javascript:;"><ion-icon name="ellipsis-horizontal"></ion-icon></a> --> */}
                                                                        </div>
                                                                        <div class="mileage-graph">
                                                                            <div class="mileage-indicate">
                                                                                <ion-icon name="ellipse" role="img" class="md hydrated"></ion-icon>Mileage</div>
                                                                            <img src="./admin_assets/images/dashboard/Graph.png" alt="Graph"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                              </div>
                            </Tab>
                            <Tab eventKey="vehicle" title="Vehicle Details" >
                              {/* Vehicle Details Tab Content */}
                              <div class="row inner-row" id="vehicle_tabs">
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="main-veh-txt">
                                                                    <h5>Vehicle Details</h5>
                                                                </div>
                                                                <div class="vehciles-bx-form">
                                                                    <form action="">
                                                                        <div class="row">
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Car Make</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Car Model</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Vehicle Registration Number</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Price per Week</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Car Description</label>
                                                                                    <br/>
                                                                                    <input type="textarea" name="form-control" id="" placeholder="" class="mg05"/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <h3>Features</h3>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Vehicle Type:</label>
                                                                                    <br/>
                                                                                    {/* <!-- <input type="text" name="form-control" id="" placeholder="" class="mg05"><i class="fas fa-chevron-down"></i> --> */}
                                                                                    <select name="vehicle_type:" id="vehicle">
                                                                                        <option value="volvo">Saloon</option>
                                                                                        <option value="saab">Saloon</option>
                                                                                        <option value="opel">Saloon</option>
                                                                                        <option value="audi">Saloon</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Transmission:</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Fuel Type</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Miles per Gallon (MPG)</label>
                                                                                    <br/>
                                                                                    <input type="number" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">People</label>
                                                                                    <br/>
                                                                                    {/* <!-- <input type="text" name="form-control" id="" placeholder="" class="mg05"><i class="fas fa-chevron-down"></i> --> */}
                                                                                    <select name="people" id="vehicle">
                                                                                        <option value="volvo">5 People</option>
                                                                                        <option value="saab">5 People</option>
                                                                                        <option value="opel">5 People</option>
                                                                                        <option value="audi">5 People</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <h3>Key Details</h3>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Mileage Allowance:</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Additional Mileage Cost:</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Reset Period:</label>
                                                                                    <br/>
                                                                                    <input type="text" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Holding Deposit:</label>
                                                                                    <br/>
                                                                                    <input type="number" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">Insurance Excess:</label>
                                                                                    <br/>
                                                                                    <input type="number" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-12 up-bx">
                                                                                <div class="form-group">
                                                                                    <label for="control-label">PCN Fee</label>
                                                                                    <br/>
                                                                                    <input type="number" name="form-control" id="" placeholder=""/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="main-veh-txt">
                                                                    <h5>Upload Image</h5>
                                                                </div>
                                                                <div class="upload-img-rw">
                                                                    <img src="./admin_assets/images/up-img.png" alt=""/>
                                                                </div>
                                                                <div class="row upload-rw">
                                                                    <div class="col-lg-4 col-md-4">
                                                                        <div class="detailCar-slide-controller upload-img-dv">
                                                                            <ul>
                                                                                <li id="item1" class="">
                                                                                    <img src="./admin_assets/images/slider/image 67.png" alt=""/>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4 col-md-4">
                                                                        <div class="detailCar-slide-controller upload-img-dv">
                                                                            <ul>
                                                                                <li id="item2" class="">
                                                                                    <img src="./admin_assets/images/slider/image346.png" alt=""/>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4 col-md-4">
                                                                        <div class="detailCar-slide-controller upload-img-dv">
                                                                            <ul>
                                                                                <li id="item3" class="slide-active">
                                                                                    <img src="./admin_assets/images/slider/image 66.png" alt=""/>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row upload-rw upload-delete-opt">
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <div class="detailCar-slide-controller upload-img-dv">
                                                                                <ul>
                                                                                    <li>
                                                                                        <img src="./admin_assets/images/slider/image 67.png" alt=""/>
                                                                                    </li>
                                                                                    <h6>Image_name123.jpg</h6>
                                                                                    <span>24 Mb</span>
                                                                                    <a href="javascript:;" class="delete-opytion">
                                                                                        <img src="./admin_assets/images/slider/delete.png" alt=""/>
                                                                                    </a>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <div class="detailCar-slide-controller upload-img-dv">
                                                                                <ul>
                                                                                    <li id="item2">
                                                                                        <img src="./admin_assets/images/slider/image346.png" alt=""/>
                                                                                    </li>
                                                                                    <h6>Image_name123.jpg</h6>
                                                                                    <span>24 Mb</span>
                                                                                    <a href="javascript:;" class="delete-opytion">
                                                                                        <img src="./admin_assets/images/slider/delete.png" alt=""/>
                                                                                    </a>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <div class="detailCar-slide-controller upload-img-dv">
                                                                                <ul>
                                                                                    <li id="item3">
                                                                                        <img src="./admin_assets/images/slider/image 66.png" alt=""/>
                                                                                    </li>
                                                                                    <h6>Image_name123.jpg</h6>
                                                                                    <span>24 Mb</span>
                                                                                    <a href="javascript:;" class="delete-opytion">
                                                                                        <img src="./admin_assets/images/slider/delete.png" alt=""/>
                                                                                    </a>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <div class="detailCar-slide-controller upload-img-dv">
                                                                                <div class="up-img-option">
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/slider/plus.png" alt=""/>
                                                                                        <h5>Upload image</h5>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row inner-doc-sc">
                                                                    <div class="main-veh-txt">
                                                                        <h5>Document</h5>
                                                                    </div>
                                                                    <div class="doc-information">
                                                                        <div class="rental-vehicle-docs-wrap">
                                                                            <ul class="rental-files">
                                                                                <span class="doc-field">MOT Certificate Document</span>
                                                                                <li>
                                                                                    <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                    <div>
                                                                                        <h6>MOT Certificate</h6>
                                                                                        <span>3.6 MB</span>
                                                                                    </div>
                                                                                    <a href="javascript:;" class="down-btn">Download</a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Frame 13680.png" class="pen-img" alt="Docs"/>
                                                                                    </a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Trash.png" alt="delete"/>
                                                                                    </a>
                                                                                </li>
                                                                                <span class="doc-field">Insurance Certificate Document</span>
                                                                                <li>
                                                                                    <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                    <div>
                                                                                        <h6>Insurance Certificate</h6>
                                                                                        <span>3.6 MB</span>
                                                                                    </div>
                                                                                    <a href="javascript:;" class="down-btn">Download</a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Frame 13680.png" class="pen-img" alt="Docs"/>
                                                                                    </a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Trash.png" alt="delete"/>
                                                                                    </a>
                                                                                </li>
                                                                                <span class="doc-field">Vehicle Licence Document</span>
                                                                                <li>
                                                                                    <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                    <div>
                                                                                        <h6>Vehicle Licence</h6>
                                                                                        <span>3.6 MB</span>
                                                                                    </div>
                                                                                    <a href="javascript:;" class="down-btn">Download</a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Frame 13680.png" class="pen-img" alt="Docs"/>
                                                                                    </a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Trash.png" alt="delete"/>
                                                                                    </a>
                                                                                </li>
                                                                                <span class="doc-field">Permission Letter Document</span>
                                                                                <li>
                                                                                    <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                    <div>
                                                                                        <h6>Permission Letter</h6>
                                                                                        <span>3.6 MB</span>
                                                                                    </div>
                                                                                    <a href="javascript:;" class="down-btn">Download</a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Frame 13680.png" class="pen-img" alt="Docs"/>
                                                                                    </a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Trash.png" alt="delete"/>
                                                                                    </a>
                                                                                </li>
                                                                                <span class="doc-field">Vehicle Licence Document</span>
                                                                                <li>
                                                                                    <img src="./admin_assets/images/Frame 2085663522.png" alt="Docs"/>
                                                                                    <div>
                                                                                        <h6>Vehicle Licence</h6>
                                                                                        <span>3.6 MB</span>
                                                                                    </div>
                                                                                    <a href="javascript:;" class="down-btn">Download</a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Frame 13680.png" class="pen-img" alt="Docs"/>
                                                                                    </a>
                                                                                    <a href="javascript:;">
                                                                                        <img src="./admin_assets/images/Trash.png" alt="delete"/>
                                                                                    </a>
                                                                                </li>
                                                                                <span class="doc-field">Vehicle Licence Document</span>
                                                                                <li>
                                                                                    <img src="./admin_assets/images/Frame 2085663522 (1).png" alt="Docs"/>
                                                                                    <div>
                                                                                        <h6>Vehicle Licence</h6>
                                                                                        <span>3.6 MB</span>
                                                                                    </div>
                                                                                    <a href="javascript:;" class="down-btn">Download</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                            </Tab>
                            <Tab eventKey="location" title="Vehicle Location">
                              {/* Location Tab Content */}
                              <div class="veh-locate-main"  id="location_tabs">
                                                            <div class="row">
                                                                <div class="col-lg-8 col-md-8">
                                                                    <div class="locate-sc-txt">
                                                                        <h5 class="theme-h5">Location Vehicle</h5>
                                                                        <div class="map">
                                                                            <img src="./admin_assets/images/Maps-2.png" alt="Maps"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="date-img">
                                                                        <img class="date-picker" src="./admin_assets/images/dashboard/Date Picker.png" alt="Date"/>
                                                                    </div>
                                                                </div>
                                                                <div class="row inner-rw-history-location">
                                                                    <div class="history-txt">
                                                                        <h5 class="theme-h5">History Location</h5>
                                                                        <table class="maintenance-table ds-table history-tble">
                                                                            <thead>
                                                                                <tr class="tabl-history-head">
                                                                                    <th>Vehicle ID</th>
                                                                                    <th>Location</th>
                                                                                    <th>Start Date</th>
                                                                                    <th>End Date</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr class="history-data">
                                                                                    <td>001</td>
                                                                                    <td class="history-city">London</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr class="history-data">
                                                                                    <td>002</td>
                                                                                    <td class="history-city">Obey Road</td>
                                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                                    <td>27 June, 2024 10.00 PM</td>
                                                                                </tr>
                                                                                <tr class="history-data">
                                                                                    <td>002</td>
                                                                                    <td class="history-city">Obey Road</td>
                                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                                    <td>27 June, 2024 10.00 PM</td>
                                                                                </tr>
                                                                                <tr class="history-data">
                                                                                    <td>002</td>
                                                                                    <td class="history-city">Obey Road</td>
                                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                                    <td>27 June, 2024 10.00 PM</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                            </Tab>
                            <Tab eventKey="mileage" title="Mileage Related" >
                              {/* Mileage Related Tab Content */}
                              <div class="overview-card db-default-wrapper" id="mileage_tabs">
                                                            <div class="row vehicle-average-row">
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="vehicle-average-wrap">
                                                                        <h6 class="vehicle-average-title">Total Mileage</h6>
                                                                        <div class="average-score">
                                                                            <h5>84573</h5>
                                                                            <span>+4.2%<ion-icon name="arrow-up-outline" role="img" class="md hydrated"></ion-icon></span>
                                                                        </div>
                                                                        <span class="compared-weeks">Compared to (Last Week)</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="vehicle-average-wrap">
                                                                        <h6 class="vehicle-average-title">Current Mileage</h6>
                                                                        <div class="average-score">
                                                                            <h5>84573</h5>
                                                                            <span>+4.2%<ion-icon name="arrow-up-outline" role="img" class="md hydrated"></ion-icon></span>
                                                                        </div>
                                                                        <span class="compared-weeks">Compared to (Last Week)</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class="vehicle-average-wrap">
                                                                        <h6 class="vehicle-average-title">Driving Score</h6>
                                                                        <div class="average-score">
                                                                            <h5>84573</h5>
                                                                            <span>+4.2%<ion-icon name="arrow-up-outline" role="img" class="md hydrated"></ion-icon></span>
                                                                        </div>
                                                                        <span class="compared-weeks">Compared to (Last Week)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="overall-milleage-img">
                                                                    <img src="./admin_assets/images/Sales statistics.png" alt="mileage"/>
                                                                </div>
                                                                <table class="maintenance-table ds-table history-tble">
                                                                    <thead>
                                                                        <tr class="tabl-history-head">
                                                                            <th>Vehicle ID</th>
                                                                            <th>Location</th>
                                                                            <th>Start Date</th>
                                                                            <th>End Date</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr class="history-data">
                                                                            <td>001</td>
                                                                            <td class="history-city">London</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>
                                                                        <tr class="history-data">
                                                                            <td>002</td>
                                                                            <td class="history-city">Obey Road</td>
                                                                            <td>27 June, 2024 11.00 AM</td>
                                                                            <td>27 June, 2024 10.00 PM</td>
                                                                        </tr>
                                                                        <tr class="history-data">
                                                                            <td>002</td>
                                                                            <td class="history-city">Obey Road</td>
                                                                            <td>27 June, 2024 11.00 AM</td>
                                                                            <td>27 June, 2024 10.00 PM</td>
                                                                        </tr>
                                                                        <tr class="history-data">
                                                                            <td>002</td>
                                                                            <td class="history-city">Obey Road</td>
                                                                            <td>27 June, 2024 11.00 AM</td>
                                                                            <td>27 June, 2024 10.00 PM</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                            </Tab>
                            <Tab eventKey="score" title="Drive Score">
                              {/* Drive Score Tab Content */}
                              <div class="row"  id="score_tabs">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div style={{ overflowX: 'auto' }}>
                                                                    <table class="maintenance-table ds-table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th rowspan="2">Date
                                                                                    <ion-icon name="arrow-down-outline" role="img" class="md hydrated"></ion-icon>
                                                                                </th>
                                                                                <th rowspan="2">Distance
                                                                                    <br/>Travelled
                                                                                    <br/>(Miles)</th>
                                                                                <th colspan="2" class="th-center">Hard Braking</th>
                                                                                <th colspan="2" class="th-center">Quick Starts</th>
                                                                                <th colspan="2" class="th-center">Harsh Cornering</th>
                                                                                <th colspan="2" class="th-center">Total</th>
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
                                                                                <td class="first-td">July 31, 2024</td>
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
                                                                                <td class="sr-green"><strong>85</strong></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="first-td">July 31, 2024</td>
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
                                                                                <td class="sr-red"><strong>60</strong></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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