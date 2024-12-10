import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Button, Col, Modal, ModalBody, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Penaltychargesnotice() {
    // View Popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Ammendpopup
    const[showamend, setShowamend] =useState(false);
    const handleCloseamend=()=> setShowamend(false);
    const handleShowamend=()=> setShowamend(true);
    // Add PCN
    const[showaddpcn, setShowaddpcn] =useState(false);
    const handleCloseaddpcn=()=> setShowaddpcn(false);
    const handleShowaddpcn=()=> setShowaddpcn(true);
  
  return (
    <>
      <section className="user-dashboard">
        <div className="container-fluid">
          <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel application-panel">
                <Row className="">
                  <Col lg={12} md={12} className="">
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>

                <Row className="">
                  <Col lg={12} md={12} className="">
                    <div className="main-veh-box">
                      <div className="vehicle-main-box">
                        <div className="all-veh-dv Pcn_main_bx">
                          <div className="main-veh-bx">
                            <div className="main-veh-txt">
                              <h5>Penalty Charge Notice</h5>
                            </div>
                            <div className="add_btns">
                              <Link to="#" onClick={handleShowaddpcn}>
                                <i className="fas fa-plus"></i> Add PCN
                              </Link>
                            </div>
                          </div>
                        </div>
                        <Row className=" frm-inner-row pcn_frm-inner-row">
                          <form action="" method="">
                            <Row className="">
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">
                                    Internal Number
                                  </label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Date & Time</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Authority</label>
                                  <input
                                    type="number"
                                    name="form-control"
                                    id=""
                                    className="mg0"
                                  />
                                </div>
                              </Col>
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">
                                    Ticket Number
                                  </label>
                                  <input
                                    type="text"
                                    name="form-control"
                                    id=""
                                    className="mg0"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </Row>
                        <Row className=" frm-inner-row">
                          <form action="" method="">
                            <Row className="">
                              <Col lg={2} md={2} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Vehicle</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Renter</label>
                                  <select name="Omar" id="Rented-fld">
                                    <option value="volvo">Omar</option>
                                    <option value="saab">Omar</option>
                                    <option value="opel">Omar</option>
                                    <option value="audi">Omar</option>
                                  </select>
                                </div>
                              </Col>
                              <Col lg={2} md={2} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Admin Fee</label>
                                  <input
                                    type="text"
                                    name="form-control"
                                    id=""
                                    className="mg0"
                                  />
                                </div>
                              </Col>
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Status</label>
                                  <select name="Uploaded" id="Rented-fld">
                                    <option value="volvo">Uploaded</option>
                                    <option value="saab">Pending</option>
                                    <option value="opel">Forwarded</option>
                                    <option value="audi">Uploaded</option>
                                  </select>
                                </div>
                              </Col>
                              <Col lg={3} md={3} className="">
                                <div className="form-group">
                                  <label htmlFor="control-label">Appealed</label>
                                  <select name="Yes" id="Rented-fld">
                                    <option value="volvo">Yes</option>
                                    <option value="saab">No</option>
                                    <option value="opel">Omar</option>
                                    <option value="audi">Yes</option>
                                  </select>
                                </div>
                              </Col>
                            </Row>
                          </form>
                          <Row className=" inner-rw-register">
                            <Col lg={12} md={12} className="">
                              <div className="pcn-registration-table rigistration-tabl">
                                <table className="maintenance-table ds-table">
                                  <thead>
                                    <tr>
                                      <th>Internal Number</th>
                                      <th>Date & Time</th>
                                      <th>Authority</th>
                                      <th>Ticket Number</th>
                                      <th>
                                        Vehicle
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                        >
                                          <path
                                            d="M7.99992 3.33301V12.6663M7.99992 12.6663L12.6666 7.99967M7.99992 12.6663L3.33325 7.99967"
                                            stroke="#667085"
                                            stroke-width="1.33333"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </th>
                                      <th>Renter</th>
                                      <th>Admin Fee</th>
                                      <th>Appealed</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>123</td>
                                      <td>July 31, 2024</td>
                                      <td>Council</td>
                                      <td>123</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="uploaded-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Uploaded
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2412</td>
                                      <td>July 31, 2024</td>
                                      <td>TfL</td>
                                      <td>2412</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="pending-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Pending
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>123</td>
                                      <td>July 31, 2024</td>
                                      <td>Council</td>
                                      <td>123</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="forwarded-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Forwarded
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2412</td>
                                      <td>July 31, 2024</td>
                                      <td>TfL</td>
                                      <td>2412</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="forwarded-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Forwarded
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>123</td>
                                      <td>July 31, 2024</td>
                                      <td>Council</td>
                                      <td>123</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="pending-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Pending
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2412</td>
                                      <td>July 31, 2024</td>
                                      <td>TfL</td>
                                      <td>2412</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="uploaded-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Uploaded
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>123</td>
                                      <td>July 31, 2024</td>
                                      <td>Council</td>
                                      <td>123</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="pending-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Pending
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn" onClick={handleShow}>
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2412</td>
                                      <td>July 31, 2024</td>
                                      <td>TfL</td>
                                      <td>2412</td>
                                      <td>KM19 VTY</td>
                                      <td>Omar</td>
                                      <td>£10</td>
                                      <td>Yes</td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="pending-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="8"
                                            viewBox="0 0 9 8"
                                            fill="none"
                                          >
                                            <circle
                                              cx="4.5"
                                              cy="4"
                                              r="3"
                                              fill="white"
                                            />
                                          </svg>
                                          Pending
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Col>
                          </Row>
                          <div className="show-paginaion">
                            <div className="showing-txt">
                              <h5>Showing 1 to 9 Items</h5>
                            </div>
                            <div className="showing-pagination-number">
                              <ul>
                                <li className="active">
                                  <Link to="#">1</Link>
                                </li>
                                <li>
                                  <Link to="#">2</Link>
                                </li>
                                <li>
                                  <Link to="#">3</Link>
                                </li>
                                <li>
                                  <Link to="#">4</Link>
                                </li>
                                <li>
                                  <Link to="#">5</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>



        <Modal show={show} onHide={handleClose} className="password_modal  ">
        <div className="Pcn-view-popup_bx">
        <div className="PCN-view">
            <h2>View</h2>
            <button className="close-btn" onClick={handleClose}>&times;</button>
        </div>
        <div className="PCN-view-status">
            <Link to="#" className="uploaded-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"/></svg>Uploaded</Link>
        </div>
        <div className="inner-view-detail-sc">
            <table>
                <tr>
                    <td className="sm_d">Internal Number</td>
                    <td className="sm_d">Date & Time</td>
                </tr>
                <tr className="bgrw">
                    <td className="big_d">123123</td>
                    <td className="big_d">10 December, 2024</td>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td className="sm_d">Authority</td>
                    <td className="sm_d">Ticket Number</td>
                </tr>
                <tr className="bgrw">
                    <td className="big_d">Council</td>
                    <td className="big_d">123123</td>
                </tr>
                <tr>
                    <td className="sm_d">Vehicle</td>
                    <td className="sm_d">Renter</td>
                </tr>
                <tr className="bgrw">
                    <td className="big_d">KM19 VTY</td>
                    <td className="big_d">Omar</td>
                </tr>
                <tr>
                    <td className="sm_d">Admin Fee</td>
                    <td className="sm_d">Appealed</td>
                    
                </tr>
                <tr className="bgrw">
                    <td className="big_d">£10</td>
                    <td className="big_d">Yes</td>
                </tr>
            </table>
        </div>
        <div className="row inner-doc-sc pcn_inner-doc-sc">
            <div className="doc-information">
                <div className="rental-vehicle-docs-wrap">
                <h5>Document Upload</h5>
                    <ul className="rental-files">
                        <li>
                            <div className="pdfsdetails">
                            <img src="./admin_assets/images/pdf_icon.svg" alt="Docs" className="white_pdf"/>
                            <div className="pdfsname">
                                <h6>Table Sample.Pdf</h6>
                                <span>3.6 MB</span>
                            </div>
                            </div>
                            <div className="tools-for-pdfs">
                                <Link to="#">
                                <img src="./admin_assets/images/Eye.png" className="eye-img" alt="Docs"/>
                            </Link>
                            <Link to="#">
                                <img src="./admin_assets/images/Edit 1.png" className="pen-img" alt="Docs"/>
                            </Link>
                            <Link to="#">
                                <img src="./admin_assets/images/trash-can.png" alt="delete"/>
                            </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="pcn_inner-comm-sc">
            <div className="add-pcn-view-comm_head">
                <Link to="#">
                    <img src="./admin_assets/images/plus.png" className="plus-img" alt="comm"/>Add Comment</Link>
            </div>
            <div className="add-pcn-view-comm">
                <div className="comment_bxhead">
                    <h5>Comment</h5>
                    <Link to="#">
                        <img src="./admin_assets/images/trash-can.png" alt="delete"/>
                    </Link>
                </div>
                <div className="form-group">
                    <textarea type="textarea" name="form-control" id="" placeholder="Damage Cae" className="mg05"></textarea>
                </div>
            </div>
        </div>
        <div className="pcn-view-action-btns">
            <Link to="#" className="amend-btn" onClick={handleShowamend}>Amend</Link>
        </div>
    </div>
      </Modal>
      <Modal show={showamend} onHide={handleCloseamend} className="password_modal  ">
      <div className="Pcn-view-popup_bx">
        <div className="PCN-view">
            <h2>Amend</h2>
            <button className="close-btn" onClick={handleCloseamend}>&times;</button>
        </div>
        <div className="PCN-view-status">
            <Link to="#" className="uploaded-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"/></svg>Uploaded</Link>
        </div>
        <div className="row frm-inner-row pcn_amend-inner-row">
            <form action="" method="">
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Internal Number</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="Omar"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Date & Time</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="placeholder"/>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Authority</label>
                            <select name="Council" id="Rented-fld">
                                <option value="volvo">Council</option>
                                <option value="saab">Council</option>
                                <option value="opel">Council</option>
                                <option value="audi">Council</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Ticket Number</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="placeholder"/>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Vehicle</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="KM19 VTY"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Renter</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="placeholder"/>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Admin Fee</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="£10"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                         <div className="form-group">
                            <label htmlFor="control-label">Appealed</label>
                            <select name="Council" id="Rented-fld">
                                <option value="volvo">Placeholder</option>
                                <option value="saab">Placeholder</option>
                                <option value="opel">Placeholder</option>
                                <option value="audi">Placeholder</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                       <div className="form-group">
                            <label htmlFor="control-label">Status</label>
                            <select name="Council" id="Rented-fld">
                                <option value="volvo">Placeholder</option>
                                <option value="saab">Placeholder</option>
                                <option value="opel">Placeholder</option>
                                <option value="audi">Placeholder</option>
                            </select>
                        </div>
                    </Col>
                    </Row>
            </form>
        </div>
        <div className="inner-doc-sc pcn_inner-doc-sc">
            <div className="doc-information">
                <div className="rental-vehicle-docs-wrap">
                <h5>Document Upload</h5>
                   <div className="pdf_upl-bx">
                        {/* <!-- <Link to="#"> --> */}
                            <input type="file" name=""/>
                            <img src="./admin_assets/images/pdf-upload.png" alt="pdf-upload"/>
                            <div className="filedetails">
                                <span>Click to upload</span>
                                <span>or drag and drop Maximum file size 50 MB.</span>
                            </div>
                        {/* <!-- </a> --> */}
                   </div>
                </div>
            </div>
        </div>
        <div className="pcn_inner-comm-sc">
            <div className="add-pcn-view-comm_head">
                <Link to="#">
                    <img src="./admin_assets/images/plus.png" className="plus-img" alt="comm"/>
                    Add Comment</Link>
            </div>
            <div className="add-pcn-view-comm">
                <div className="comment_bxhead">
                    <h5>Comment</h5>
                    <Link to="#">
                        <img src="./admin_assets/images/trash-can.png" alt="delete"/>
                    </Link>
                </div>
                <div className="form-group">
                    <textarea type="textarea" name="form-control" id="" placeholder="Damage Cae" className="mg05"></textarea>
                </div>
            </div>
        </div>
        <div className="pcn-view-action-btns">
            <Link to="#" className="delete-btn" onClick={handleCloseamend}>Delete</Link>
            <Link to="#" className="save-btn" onClick={handleCloseamend}>Save</Link>
        </div>
    </div>
      </Modal>
<Modal show={showaddpcn} onHide={handleCloseaddpcn} className="password_modal">
  <ModalBody>
  <div className="Pcn-view-popup_bx add-pcn-pop-bx">
        <div className="PCN-view">
            <h2>Add PCN</h2>
            <button className="close-btn" onClick={handleCloseaddpcn}>&times;</button>
        </div>
        <div className="PCN-view-status">
            <Link to="#" className="uploaded-btn"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"/></svg>Uploaded</Link>
        </div>
        <div className="row frm-inner-row Id_drivr pcn_amend-inner-row">
            <h5>Identify Drivers</h5>
            <form action="" method="">
            <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Vehicle Registration Number</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="KM19 VTY"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Date of incident</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="10 December, 2024 10:32"/>
                        </div>
                    </Col>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input className="submit_btn" type="submit" name="form-control" value="Identify"/>
                        </div>
                    </div>
                </Row>
            </form>
        </div>
        <div className="drvr_deta">
            <div className="drvrmain">
                <img src="./admin_assets/images/Frame 76.png" className="new-customers-img" alt="new-customers-img"/>
                <div className="drvrnam">
                    <h6>Rohan Shibu</h6>
                    <span>Customer ID: D0012</span>
                </div>
            </div>
            <div className="drvrcar">
                <p>Mercedes-Benz E Class</p>
                <span>example@gmail.com</span><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.5" cy="4" r="3" fill="white"/></svg><span>+44 334 2345</span>
            </div>
        </div>
        <div className="row frm-inner-row pcn_amend-inner-row pcn_info">
            <div className="pcninfo-head">
                <h2>PCN Information</h2>
            </div>
            <form action="" method="">
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Internal Number</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="1231232412"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Authority</label>
                            <select name="Council" id="Rented-fld">
                                <option value="volvo">Council</option>
                                <option value="saab">Council</option>
                                <option value="opel">Council</option>
                                <option value="audi">Council</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Ticket Number</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="placeholder"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Admin Fee</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="£10"/>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Appealed</label>
                            <select name="Council" id="Rented-fld">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                                <option value="opel">Yes</option>
                                <option value="audi">No</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Status</label>
                            <select name="Council" id="Rented-fld">
                                <option value="volvo">Placeholder</option>
                                <option value="saab">Placeholder</option>
                                <option value="opel">Placeholder</option>
                                <option value="audi">Placeholder</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Renter</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="Placeholder"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} >
                        <div className="form-group">
                            <label htmlFor="control-label">Date & Time</label>
                            <br/>
                            <input type="text" name="form-control" placeholder="Placeholder"/>
                        </div>
                    </Col>
                </Row>
            </form>
        </div>
        <div className="inner-doc-sc pcn_inner-doc-sc">
            <div className="doc-information">
                <div className="rental-vehicle-docs-wrap">
                <h5>Document Upload</h5>
                   <div className="pdf_upl-bx">
                   <input type="file" name=""/>
                        <img src="./admin_assets/images/pdf-upload.png" alt="pdf-upload"/>
                            <div className="filedetails">
                                <span>Click to upload</span>
                                <span>or drag and drop Maximum file size 50 MB.</span>
                            </div>
                     
                   </div>
                </div>
            </div>
        </div>
        <div className="pcn_inner-comm-sc">
            {/* <!-- <div className="add-pcn-view-comm_head">
                <Link to="#"><img src="./admin_assets/images/plus.png" className="plus-img" alt="comm">Add Comment</Link>
            </div> --> */}
            <div className="add-pcn-view-comm">
                <div className="comment_bxhead">
                    <h5>Comment</h5>
                    <Link to="#">
                        <img src="./admin_assets/images/trash-can.png" alt="delete"/>
                    </Link>
                </div>
                <div className="form-group">
                    <textarea type="textarea" name="form-control" id="" placeholder="Damage Cae" className="mg05"></textarea>
                </div>
            </div>
        </div>
        <div className="add-pcn-action-btns">
            <Link to="#" onClick={handleCloseaddpcn} className="cancel-btn">Cancel</Link>
            <Link to="#" onClick={handleCloseaddpcn} className="submit-btn">Submit</Link>
        </div>
    </div>
  </ModalBody>
</Modal>
      </section>
    </>
  );
}

export default Penaltychargesnotice;
