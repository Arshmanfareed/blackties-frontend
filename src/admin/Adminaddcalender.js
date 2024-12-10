import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Adminaddcalender() {
    return (
        <>

            <section className="user-dashboard">
                <Container fluid>
                    <Row className=" g-0">
                        <Col lg={3} md={3} className=" sidebar-col">
                            <Sidebar />
                        </Col>
                        <Col lg={9} md={9} className="panel-col">
                            <div className="dashboard-panel message-panel">
                                <Row >
                                    <Col lg={12} md={12} >
                                        <Dashboardpaneltopbar />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col lg={12} md={12} >
                                        <div className="message-sec db-default-sec ticket-sec">
                                            <div className="message-card db-default-wrapper">

                                                <div className="Mot-certificate-body privte-hire Vehicle-License-pop Vehicle-Pick-Up crate-cal-main">
                                                    <div className="Mot-certificate-bx crate-cal">
                                                        <div className="chng-psd">
                                                            <h4>Add Calendar Event</h4>
                                                            <Link to="#" className="cross-icon"><i className="fas fa-times"></i></Link>
                                                        </div>
                                                        <form action="">
                                                            <Row>
                                                                <Col lg={12} md={12} >
                                                                    <div className="form-group">
                                                                        <label for="control-label">Type Calendar</label>
                                                                        <select name="Oil-Changes" id="Oil-Changes-fld">
                                                                            <option value="volvo">MOT Document</option>
                                                                            <option value="saab">MOT Document</option>
                                                                            <option value="opel">MOT Document</option>
                                                                            <option value="audi">MOT Document</option>
                                                                        </select>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6} md={6} >
                                                                    <div className="form-group">
                                                                        <label for="control-label">Document Type</label><br />
                                                                        <input type="text" id="" name="form-control" value="" />
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6} md={6}>
                                                                    <div className="form-group">
                                                                        <label for="control-label">Registration Number:</label><br />
                                                                        <input type="number" id="" name="form-control" value="" />
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6} md={6}>
                                                                    <div className="form-group">
                                                                        <label for="control-label">Make  & Model</label><br />
                                                                        <input type="text" id="" name="form-control" value="" />
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6} md={6}>
                                                                    <div className="form-group">
                                                                        <label for="control-label">Expiry Date</label><br />
                                                                        <input type="date" id="" name="form-control" value="" />
                                                                    </div>
                                                                </Col>
                                                                <Col lg={12} md={12} className="up-bx">
                                                                    <div className="form-group">
                                                                        <label for="control-label">Please upload Document</label><br />
                                                                        <span className="file_cont">
                                                                            <input type="file" name="form-control" />
                                                                            <span>
                                                                                <b>Click to upload</b> or drag and drop Maximum file size 50 MB.
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                        <div className="change-pass-btn">
                                                            <Link to="javascript:void(0);" onclick="popup_alrt(this)" className="psd-cancel">Cancel</Link>
                                                            <Link to="#" className="psd-change">Submit</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form action="">
                                                <Row>
                                                    <Col lg={12} md={12} >
                                                        <div className="form-group">
                                                            <label htmlFor="control-label">Type Calendar</label>
                                                            <select name="Oil-Changes" id="Oil-Changes-fld">
                                                                <option value="volvo">MOT Document</option>
                                                                <option value="saab">MOT Document</option>
                                                                <option value="opel">MOT Document</option>
                                                                <option value="audi">MOT Document</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6} >
                                                        <div className="form-group">
                                                            <label htmlFor="control-label">Document Type</label><br />
                                                            <input type="text" id="" name="form-control" value="" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="control-label">Registration Number:</label><br />
                                                            <input type="number" id="" name="form-control" value="" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="control-label">Make  & Model</label><br />
                                                            <input type="text" id="" name="form-control" value="" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="control-label">Expiry Date</label><br />
                                                            <input type="date" id="" name="form-control" value="" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} md={12} className="up-bx">
                                                        <div className="form-group">
                                                            <label htmlFor="control-label">Please upload Document</label><br />
                                                            <span className="file_cont">
                                                                <input type="file" name="form-control" />
                                                                <span>
                                                                    <b>Click to upload</b> or drag and drop Maximum file size 50 MB.
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                            <div className="change-pass-btn">
                                                <Link to="javascript:void(0);" onclick="popup_alrt(this)" className="psd-cancel">Cancel</Link>
                                                <Link to="#" className="psd-change">Submit</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >

        </>
    )
}

export default Adminaddcalender
