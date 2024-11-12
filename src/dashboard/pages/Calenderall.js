import React, { useState } from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Calenderall() {
    // Cancle 
    const [showcancle, setShowcancle] = useState(false);

    const handleClosecancle = () => setShowcancle(false);
    const handleShowcancle = () => setShowcancle(true);

    // Private Hire Lisence
    const [showpvthire, setShowpvthire] = useState(false);

    const handleClosepvthire = () => setShowpvthire(false);
    const handleShowpvthire = () => setShowpvthire(true);

    // Driving Lisence
    const [showdrivingliscense, setShowdrivingliscense] = useState(false);

    const handleClosedrivingliscense = () => setShowdrivingliscense(false);
    const handleShowdrivingliscense = () => setShowdrivingliscense(true);

  return (
    <>
      
      <section class="user-dashboard">
  <div class="container-fluid">
    <Row class="row g-0">
      <Col lg={3} md={3} class="col-lg-3 col-md-3 sidebar-col"> 
        <DashboardSidebar/>
        </Col>
      <Col lg={9} md={9} class="col-lg-9 col-md-9 panel-col">
        <div class="dashboard-panel profile-panel">
          <Row class="row">
            <Col lg={12} md={12} class="col-lg-12 col-md-12">
              <div class="dashboard-panel-topbar">
                 <DashboardPanelTopbar/>
                 </div>
            </Col>
          </Row>
          <Row class="row">
            <Col lg={12} md={12} class="col-lg-12 col-md-12">
              <div class="profile-sec db-default-sec">
                <div class="profile-card db-default-wrapper">
                  <Row class="row">
                    <Col lg={12} md={12} class="col-lg-12 col-md-12">
                      <div class="profile-wrapper">
                        <Row class="row">
                          <Col lg={12} md={12} class="col-lg-12 col-md-12">
                            <div class="profile-top-bar">
                              <h5>Calendar</h5>
                            </div>
                          </Col>
                          <Row class="row">
                            <div class="calender-top">
                              <Col lg={12} md={12} class="col-lg-12 col-md-12">
                                <div class="cal-blck-bx">
                                  <div class="cal-left-txt">
                                    <div class="cal-img">
                                      <img src="./assets/images/Frame-1.png" alt="prfile"/>
                                    </div>
                                    <div class="cal-text">
                                      <p>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</p>
                                      <h4>Vehicle Viewing</h4>
                                      <span>@ 328 Summerwood Road, Isleworth, TW7 7QP</span>
                                    </div>
                                  </div>
                                  <div class="cal-btn">
                                    <Link href="#" onClick={handleShowcancle} class="cncl-btn">Cancel</Link>
                                  </div>
                                </div>
                                <div class="cal-blck-bx">
                                  <div class="cal-left-txt">
                                    <div class="cal-img">
                                      <img src="./assets/images/Frame-4.png" alt="prfile"/>
                                    </div>
                                    <div class="cal-text">
                                      <p>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</p>
                                      <h4>Service</h4>
                                      <span>@ 328 Summerwood Road, Isleworth, TW7 7QP</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="cal-blck-bx">
                                  <div class="cal-left-txt">
                                    <div class="cal-img">
                                      <img src="./assets/images/Frame-3.png" alt="prfile"/>
                                    </div>
                                    <div class="cal-text">
                                      <p>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</p>
                                      <h4>Private Hire Licence</h4>
                                      <span>Your private hire licence is expiring on 9 December 2024, please update it.</span>
                                    </div>
                                  </div>
                                  <div class="cal-btn">
                                    <Link href="#" class="cncl-btn-purple" onClick={handleShowpvthire}>Update</Link>
                                  </div>
                                </div>
                                <div class="cal-blck-bx">
                                  <div class="cal-left-txt">
                                    <div class="cal-img">
                                      <img src="./assets/images/Frame-2.png" alt="prfile"/>
                                    </div>
                                    <div class="cal-text">
                                      <p>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</p>
                                      <h4>Private Hire Licence</h4>
                                      <span>Your private hire licence is expiring on 9 December 2024, please update it.</span>
                                    </div>
                                  </div>
                                  <div class="cal-btn">
                                    <Link href="#" class="cncl-btn-purple" onClick={handleShowdrivingliscense}>Update</Link>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </Row>
                          <Modal show={showcancle} className="password_modal " onHide={handleClosecancle}>     
                            <Modal.Body>
                            <div class="calen-bx-body">
                                <div class="calen-bx-alert">
                                    <img src="./assets/images/Icon.png" alt="Check"/>
                                <div>
                                    <p>Are you sure you want to cancel<br/>
                                        the appointment?</p>
                                </div>
                                <div class="calen-bx-btn"> 
                                    <Link href="javascript:;" onClick={handleClosecancle} class="calen-bx-change">Go Back</Link>
                                    <Link href="javascript:void(0);" onClick={handleClosecancle} class="calen-bx-return">Cancel</Link>
                                </div>
                                </div>
                            </div>
                                </Modal.Body>        
                        </Modal>


                          

                        <Modal show={showpvthire} className="password_modal " onHide={handleClosepvthire}>     
                        <Modal.Body>
                            <div class="private-hire-pop">
                                <div class="private-top-head">
                                    <h4>Private Hire License</h4>
                                    <Link href="#" class="cross-icon" onClick={handleClosepvthire}><i class="fas fa-times"></i></Link>
                                </div>
                                <div class="private-head-pera">
                                    <p>Private Hire License for 123123 is expiring on 10 December 2024</p>
                                </div>
                                <div class="pvt-form">
                                 <form action="">
                                    <Row class="row">
                                        <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label for="control-label">License Number</label><br/>
                                                <input type="tel" name="form-control" id="" placeholder="" class="mg01"/>
                                            </div>
                                        </Col>
                                    <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">Date of Issue</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg02"/>
                                        </div>
                                     </Col>
                                     <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">Start Date</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg03"/>
                                        </div>
                                     </Col>
                                      <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">Expire Date</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg04"/>
                                        </div>
                                     </Col>
                                      <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label for="control-label">New License Number</label><br/>
                                                <input type="tel" name="form-control" id="" placeholder="" class="mg05"/>
                                            </div>
                                        </Col> 
                                        <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">New Expiry date</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg06"/>
                                        </div>
                                     </Col> 
                                     <Col lg={12} md={12} class="col-lg-12 col-md-12 up-bx">
                                        <div class="form-group">
                                            <label for="control-label">Please upload Document</label><br/>
                                           <span class="file_cont">
                                            <input type="file" name="form-control"/>
                                                <span>
                                                    <b>Click to upload</b> or drag and drop Maximum file size 50 MB.
                                                </span>
                                            </span>
                                        </div>
                                     </Col>
                                    <div class="change-phn-btn">
                                        <Link href="javascript:void(0);" onClick={handleClosepvthire} class="phn-cancel">Cancel</Link>
                                        <Link href="javascript:;" onClick={handleClosepvthire} class="phn-change">Save</Link>
                                    </div> 
                                    </Row>  
                                </form>
                                </div>
                            </div>
                            </Modal.Body>
                            </Modal>

                            <Modal show={showdrivingliscense} className="password_modal " onHide={handleClosedrivingliscense}>     
                            <Modal.Body>

                               <div class="private-hire-pop">
                                <div class="private-top-head">
                                    <h4>Driver License</h4>
                                    <Link href="#" class="cross-icon" onClick={handleClosedrivingliscense}><i class="fas fa-times"></i></Link>
                                </div>
                                <div class="private-head-pera">
                                    {/* <p>Private Hire License for 123123 is expiring on 10 December 2024</p> */}
                                </div>
                                <div class="pvt-form">
                                 <form action="">
                                    <Row class="row">
                                        <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label for="control-label">License Number</label><br/>
                                                <input type="tel" name="form-control" id="" placeholder="" class="mg01"/>
                                            </div>
                                        </Col>
                                    <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">Date of Issue</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg02"/>
                                        </div>
                                     </Col>
                                     <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">Start Date</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg03"/>
                                        </div>
                                     </Col>
                                      <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">Expire Date</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg04"/>
                                        </div>
                                     </Col>
                                        <Col lg={6} md={6} class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="control-label">New Expiry date</label><br/>
                                            <input type="date" name="form-control" id="" placeholder="" class="mg06"/>
                                        </div>
                                     </Col> 
                                     <Col lg={12} md={12} class="col-lg-12 col-md-12 up-bx">
                                        <div class="form-group">
                                            <label for="control-label">Please upload Document</label><br/>
                                           <span class="file_cont">
                                            <input type="file" name="form-control"/>
                                                <span>
                                                    <b>Click to upload</b> or drag and drop Maximum file size 50 MB.
                                                </span>
                                            </span>
                                        </div>
                                     </Col>
                                    <div class="change-phn-btn">
                                        <Link href="javascript:void(0);" onClick={handleClosedrivingliscense}  class="phn-cancel">Cancel</Link>
                                        <Link href="javascript:;" onClick={handleClosedrivingliscense} class="phn-change">Save</Link>
                                    </div> 
                                    </Row>  
                                </form>
                                </div>
                            </div>
                            </Modal.Body>
                            </Modal>
</Row>
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
                      {/* </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
</section> */}
    </>
  );
}

export default Calenderall;
