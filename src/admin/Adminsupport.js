import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

function Support() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className="g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel application-panel ">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12} md={12}>
                    <div className="support-main  db-default-sec">
                      <Row>
                        <Col lg={3} md={3}>
                          <div className="outstanding-bx">
                            <div className="outstanding-txt">
                              <h4>New</h4>
                              <div className="support-num-perctgre">
                                <div className="suprt-num">
                                  <h3>12</h3>
                                </div>
                                <div className="suprt-percantage">
                                  <h3>
                                    +4.2% <i className="fas fa-arrow-up"></i>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} md={3}>
                          <div className="outstanding-bx">
                            <div className="outstanding-txt">
                              <h4>Open</h4>
                              <div className="support-num-perctgre">
                                <div className="suprt-num">
                                  <h3>23</h3>
                                </div>
                                <div className="suprt-percantage">
                                  <h3>
                                    +4.2% <i className="fas fa-arrow-up"></i>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} md={3}>
                          <div className="outstanding-bx">
                            <div className="outstanding-txt">
                              <h4>Pending</h4>
                              <div className="support-num-perctgre">
                                <div className="suprt-num">
                                  <h3>7</h3>
                                </div>
                                <div className="suprt-percantage">
                                  <h3>
                                    +4.2% <i className="fas fa-arrow-up"></i>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} md={3}>
                          <div className="outstanding-bx">
                            <div className="outstanding-txt">
                              <h4>Resolved</h4>
                              <div className="support-num-perctgre">
                                <div className="suprt-num">
                                  <h3>5</h3>
                                </div>
                                <div className="suprt-percantage">
                                  <h3>
                                    +4.2% <i className="fas fa-arrow-up"></i>
                                  </h3>
                                </div>
                              </div>  
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} md={12}>
                          <div className="support-issue-main-bx">
                            <div className="support-issue-head">
                              <h4>Support & Issue</h4>
                              <Link to="#" className="view-support">
                                View
                              </Link>
                              <div className="issue-btns">
                                <Link to="#" className="active">
                                  Weekly
                                </Link>
                                <Link to="#">Monthly</Link>
                                <Link to="#">Yearly</Link>
                                <Link to="#">Custom</Link>
                              </div>
                              <div className="time-frame">
                                <span>
                                  Timeframe
                                  <input
                                    type="date"
                                    name="form-control"
                                    placeholder="14 October to 20 October 2024"
                                  />
                                </span>
                              </div>
                              <div className="tivcket-btn">
                                <Link to="/admin-support-create-ticket">
                                  <i className="fas fa-plus"></i>Add Ticket
                                </Link>
                              </div>
                            </div>
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
                                      id="New-tab"
                                      data-bs-toggle="tab"
                                      to="#New"
                                      role="tab"
                                      aria-controls="New"
                                      aria-selected="false"
                                    >
                                      New
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="Open-tab"
                                      data-bs-toggle="tab"
                                      to="#Open"
                                      role="tab"
                                      aria-controls="Open"
                                      aria-selected="false"
                                    >
                                      Open
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="Pending-tab"
                                      data-bs-toggle="tab"
                                      to="#Pending"
                                      role="tab"
                                      aria-controls="Pending"
                                      aria-selected="false"
                                    >
                                      Pending
                                    </Link>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <Link
                                      className="nav-link"
                                      id="Resolved-tab"
                                      data-bs-toggle="tab"
                                      to="#Resolved"
                                      role="tab"
                                      aria-controls="Resolved"
                                      aria-selected="false"
                                    >
                                      Resolved
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
                                        <th>Ticket ID</th>
                                        <th>Date & Time</th>
                                        <th>Person</th>
                                        <th>Vehicle</th>
                                        <th>Categories</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">

                                            <Dropdown className="dots-content visible ">
                                                <Dropdown.Toggle className="dropdown-toggle dropdown-basic" variant="" id="dropdown-basic">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                                </Dropdown.Toggle>
                                            <Dropdown.Menu >
                                                  <Dropdown.Item href="/admin-support-chat" className="dot-brng-btn"><img src="/admin_assets/images/Eye2.png" className="check-img" alt="check-img"/>View Action</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-2" className="dot-delete-btn"><img src="/admin_assets/images/trash-can.png" className="trash-can-img" alt="trash-can-img"/>Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                                </Dropdown>
                                          </td>

                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        {/* <td><div className="open-dropdown">
                                                                        <button
                                                                          className="btn btn-toggle dropdown-toggle" type="button" id="dropdownMenuButton"data-bs-toggle="dropdown" aria-expanded="false">Open
                                                                        </button>
                                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                          <li><Link className="dropdown-item active" to="#" ><i className="fa-regular fa-eye"></i>View</Link></li>
                                                                          <li><Link className="dropdown-item delete" to="#"><img src="./resources/images/trash-can.png" alt="trash"/>Delete</Link></li>
                                                                        </ul>
                                                                      </div>
                                                                    </td> */}
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
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
                                  id="New"
                                  role="tabpanel"
                                  aria-labelledby="New-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Ticket ID</th>
                                        <th>Date & Time</th>
                                        <th>Person</th>
                                        <th>Vehicle</th>
                                        <th>Categories</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="New-btn">
                                          <Link to="#">New</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
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
                                  id="Open"
                                  role="tabpanel"
                                  aria-labelledby="Open-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Ticket ID</th>
                                        <th>Date & Time</th>
                                        <th>Person</th>
                                        <th>Vehicle</th>
                                        <th>Categories</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Open-btn">
                                          <Link to="#">Open</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
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
                                  id="Pending"
                                  role="tabpanel"
                                  aria-labelledby="Pending-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Ticket ID</th>
                                        <th>Date & Time</th>
                                        <th>Person</th>
                                        <th>Vehicle</th>
                                        <th>Categories</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Pending-btn">
                                          <Link to="#">Pending</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
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
                                  id="Resolved"
                                  role="tabpanel"
                                  aria-labelledby="Resolved-tab"
                                >
                                  <table className="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                    <thead>
                                      <tr>
                                        <th>Ticket ID</th>
                                        <th>Date & Time</th>
                                        <th>Person</th>
                                        <th>Vehicle</th>
                                        <th>Categories</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Rohan Shibu</td>
                                        <td>Mercedes E220</td>
                                        <td>Queries</td>
                                        <td className="High-btn">
                                          <Link to="#">High</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Nur Fadly</td>
                                        <td>Mercedes E220</td>
                                        <td>Complaints</td>
                                        <td className="Medium-btn">
                                          <Link to="#">Medium</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>ADA2142</td>
                                        <td>27 June, 2024 10:00 AM</td>
                                        <td className="td-clr">Omar</td>
                                        <td>Mercedes E220</td>
                                        <td>Reported Issues</td>
                                        <td className="Low-btn">
                                          <Link to="#">Low</Link>
                                        </td>
                                        <td className="Resolved-btn">
                                          <Link to="#">Resolved</Link>
                                        </td>
                                        <td className="tb-btn2">
                                          <Link to="#">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </Link>
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
                          </div>
                        </Col>
                      </Row>
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

export default Support;
