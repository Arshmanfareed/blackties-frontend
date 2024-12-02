import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Admincalenderall() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel message-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <Dashboardpaneltopbar />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="message-sec db-default-sec ticket-sec">
                      <div className="message-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="ticket-main admin-calender-top">
                              <div className="invoice-view-topbar">
                                <Link to="javascript" className="back-to">
                                  Search
                                </Link>
                              </div>
                              <div className="create-ticket-top-btns">
                                <Link to="#" className="up-chhev">
                                  <i className="fa-solid fa-chevron-up"></i>
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="calender-top-form">
                              <Row className=" frm-inner-row user-app-frm-2">
                                <form action="" method="">
                                  <Row>
                                    <Col lg={3} md={3}>
                                      <div className="form-group">
                                        <label for="control-label">
                                          Person
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          name="form-control"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={3} md={3}>
                                      <div className="form-group">
                                        <label for="control-label">Date</label>
                                        <br />
                                        <input
                                          type="date"
                                          name="form-control"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={3} md={3}>
                                      <div className="form-group">
                                        <label for="control-label">Time</label>
                                        <input
                                          type="text"
                                          name="form-control"
                                          id=""
                                          className="mg0"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={3} md={3}>
                                      <div className="form-group">
                                        <label for="control-label">
                                          Reg Number
                                        </label>
                                        <input
                                          type="number"
                                          name="form-control"
                                          id=""
                                          className="mg0"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={3} md={3}>
                                      <div className="form-group">
                                        <label for="control-label">
                                          Status
                                        </label>
                                        <select
                                          name="Oil-Changes"
                                          id="Oil-Changes-fld"
                                        >
                                          <option value="volvo">
                                            Oil Changes
                                          </option>
                                          <option value="saab">
                                            Oil Changes
                                          </option>
                                          <option value="opel">
                                            Oil Changes
                                          </option>
                                          <option value="audi">
                                            Oil Changes
                                          </option>
                                        </select>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="calender-mid-picker">
                              <Row>
                                <Col lg={5} md={5}>
                                  <div className="picker-col-1">
                                    <div className="claneder-date-picker-image">
                                      <img
                                        src="./admin_assets/images/Date Picker.png"
                                        alt="calender"
                                      />
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={7} md={7}>
                                  <div className="picker-col-2">
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
                                            KM19 VUG . SAID AHMED . 9 December
                                            2024 at 09:00
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
                                    <div className="calender-txt-box">
                                      <div className="main-txt-img">
                                        <div className="calendr-txt-img">
                                          <img
                                            src="./admin_assets/images/doc.png"
                                            alt="tool"
                                          />
                                        </div>
                                        <div className="txt-img-f">
                                          <span>
                                            KM19 VUG . SAID AHMED . 9 December
                                            2024 at 09:00
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
                                    <div className="calender-txt-box">
                                      <div className="main-txt-img">
                                        <div className="calendr-txt-img">
                                          <img
                                            src="./admin_assets/images/doc.png"
                                            alt="tool"
                                          />
                                        </div>
                                        <div className="txt-img-f">
                                          <span>
                                            KM19 VUG . SAID AHMED . 9 December
                                            2024 at 09:00
                                          </span>
                                          <h5>Private Hire Vehicle</h5>
                                          <h6>
                                            Vehicle Mercedes E Class ready to
                                            pickup
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="calendr-btn">
                                        <Link to="#" className="Expire-btn">
                                          Expire Soon
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="calender-txt-box">
                                      <div className="main-txt-img">
                                        <div className="calendr-txt-img">
                                          <img
                                            src="./admin_assets/images/car.png"
                                            alt="tool"
                                          />
                                        </div>
                                        <div className="txt-img-f">
                                          <span>
                                            KM19 VUG . SAID AHMED . 9 December
                                            2024 at 09:00
                                          </span>
                                          <h5>Pick-Up</h5>
                                          <h6>
                                            Vehicle Mercedes E Class ready to
                                            pickup
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="calendr-btn">
                                        <Link to="#" className="Pick-btn">
                                          Pick-Up
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="tabs-container">
                              {/* <!-- Tabs Header --> */}
                              <div className="vehicle-tabs support-issue-tabs">
                                <ul
                                  className="nav nav-tabs"
                                  id="myTab"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link  active"
                                      id="All-tab"
                                      data-bs-toggle="tab"
                                      to="#All"
                                      role="tab"
                                      aria-controls="All"
                                      aria-selected="true"
                                    >
                                      All
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="VD-tab"
                                      data-bs-toggle="tab"
                                      to="#VD"
                                      role="tab"
                                      aria-controls="New"
                                      aria-selected="false"
                                    >
                                      Vehicle Documents
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="Dd-tab"
                                      data-bs-toggle="tab"
                                      to="#Dd"
                                      role="tab"
                                      aria-controls="Dd"
                                      aria-selected="false"
                                    >
                                      Driver Documents
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="M-S-tab"
                                      data-bs-toggle="tab"
                                      to="#M-S"
                                      role="tab"
                                      aria-controls="M-S"
                                      aria-selected="false"
                                    >
                                      Maintenance & Services
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="OA-tab"
                                      data-bs-toggle="tab"
                                      to="#OA"
                                      role="tab"
                                      aria-controls="OA"
                                      aria-selected="false"
                                    >
                                      Operational Activities
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-content" id="myTabContent">
                                <div
                                  className="tab-pane fade active show"
                                  id="All"
                                  role="tabpanel"
                                  aria-labelledby="All-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Date & Times</th>
                                        <th>Type</th>
                                        <th>
                                          Full Name
                                          <i className="fas fa-arrow-down"></i>
                                        </th>
                                        <th>Vehicles Registration Number</th>
                                        <th>Vehicles</th>
                                        <th>Notes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Document Expiration</td>
                                        <td className="td-clr">Omar</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance</td>
                                        <td className="td-clr">Said Ahmed</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Oil Changes</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance</td>
                                        <td className="td-clr">Rohan</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance</td>
                                        <td className="td-clr">Ahmad</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="show-paginaion adm-user-nxt-btn">
                                    <div className="showing-txt">
                                      <h5>Page 1 of 10</h5>
                                    </div>
                                    <div className="showing-pagination-number">
                                      <Link to="#" className="previous-btn">
                                        Previous
                                      </Link>
                                      <Link to="#" className="previous-btn">
                                        Next
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="tab-pane fade"
                                  id="VD"
                                  role="tabpanel"
                                  aria-labelledby="VD-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Date & Times</th>
                                        <th>Type</th>
                                        <th>
                                          Full Name
                                          <i className="fas fa-arrow-down"></i>
                                        </th>
                                        <th>Vehicles Registration Number</th>
                                        <th>Vehicles</th>
                                        <th>Notes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Vehicle Documents</td>
                                        <td className="td-clr">Omar</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Vehicle Documents</td>
                                        <td className="td-clr">Said Ahmed</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Vehicle Documents</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Vehicle Documents</td>
                                        <td className="td-clr">Rohan</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Vehicle Documents</td>
                                        <td className="td-clr">Ahmad</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="show-paginaion adm-user-nxt-btn">
                                    <div className="showing-txt">
                                      <h5>Page 1 of 10</h5>
                                    </div>
                                    <div className="showing-pagination-number">
                                      <Link to="#" className="previous-btn">
                                        Previous
                                      </Link>
                                      <Link to="#" className="previous-btn">
                                        Next
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="tab-pane fade"
                                  id="Dd"
                                  role="tabpanel"
                                  aria-labelledby="Dd-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Date & Times</th>
                                        <th>Type</th>
                                        <th>
                                          Full Name
                                          <i className="fas fa-arrow-down"></i>
                                        </th>
                                        <th>Vehicles Registration Number</th>
                                        <th>Vehicles</th>
                                        <th>Notes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Driver Documents</td>
                                        <td className="td-clr">Omar</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Driver Documents</td>
                                        <td className="td-clr">Said Ahmed</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Driver Documents</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Driver Documents</td>
                                        <td className="td-clr">Rohan</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Driver Documents</td>
                                        <td className="td-clr">Ahmad</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="show-paginaion adm-user-nxt-btn">
                                    <div className="showing-txt">
                                      <h5>Page 1 of 10</h5>
                                    </div>
                                    <div className="showing-pagination-number">
                                      <Link to="#" className="previous-btn">
                                        Previous
                                      </Link>
                                      <Link to="#" className="previous-btn">
                                        Next
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="tab-pane fade"
                                  id="M-S"
                                  role="tabpanel"
                                  aria-labelledby="M-S-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Date & Times</th>
                                        <th>Type</th>
                                        <th>
                                          Full Name
                                          <i className="fas fa-arrow-down"></i>
                                        </th>
                                        <th>Vehicles Registration Number</th>
                                        <th>Vehicles</th>
                                        <th>Notes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance & Services</td>
                                        <td className="td-clr">Omar</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance & Services</td>
                                        <td className="td-clr">Said Ahmed</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance & Services</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance & Services</td>
                                        <td className="td-clr">Rohan</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Maintenance & Services</td>
                                        <td className="td-clr">Ahmad</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="show-paginaion adm-user-nxt-btn">
                                    <div className="showing-txt">
                                      <h5>Page 1 of 10</h5>
                                    </div>
                                    <div className="showing-pagination-number">
                                      <Link to="#" className="previous-btn">
                                        Previous
                                      </Link>
                                      <Link to="#" className="previous-btn">
                                        Next
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="tab-pane fade"
                                  id="OA"
                                  role="tabpanel"
                                  aria-labelledby="OA-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Date & Times</th>
                                        <th>Type</th>
                                        <th>
                                          Full Name
                                          <i className="fas fa-arrow-down"></i>
                                        </th>
                                        <th>Vehicles Registration Number</th>
                                        <th>Vehicles</th>
                                        <th>Notes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Operational Activities</td>
                                        <td className="td-clr">Omar</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Operational Activities</td>
                                        <td className="td-clr">Said Ahmed</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Operational Activities</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Operational Activities</td>
                                        <td className="td-clr">Rohan</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>27 June, 2024 11.00 AM</td>
                                        <td>Operational Activities</td>
                                        <td className="td-clr">Ahmad</td>
                                        <td>KM19 VUG</td>
                                        <td>Mercedes E220</td>
                                        <td>
                                          send notification X days before event
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="show-paginaion adm-user-nxt-btn">
                                    <div className="showing-txt">
                                      <h5>Page 1 of 10</h5>
                                    </div>
                                    <div className="showing-pagination-number">
                                      <Link to="#" className="previous-btn">
                                        Previous
                                      </Link>
                                      <Link to="#" className="previous-btn">
                                        Next
                                      </Link>
                                    </div>
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

export default Admincalenderall;
