import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Adminsetting() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel profile-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="profile-sec db-default-sec user-pro permission-mian set-permi">
                      <div className="profile-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="Profile-password-tabs-v1 d-flex align-items-start">
                              <div
                                className="nav flex-column nav-pills me-3"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                              >
                                <button
                                  className="nav-link active"
                                  id="v-pills-Permission-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-Permission"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-Permission"
                                  aria-selected="true"
                                >
                                  Permission
                                </button>
                                <button
                                  className="nav-link"
                                  id="v-pills-Admin-Control-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-Admin-Control"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-Admin-Control"
                                  aria-selected="true"
                                >
                                  Admin Control
                                </button>
                              </div>
                              <div
                                className="tab-content"
                                id="v-pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="v-pills-Permission"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-Permission-tab"
                                >
                                  <div className="profile-wrapper">
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-top-bar user-pro-btn set-permission">
                                          <h5>Permission</h5>
                                          <div className="profile-btn-wrap permission-btn">
                                            <Link
                                              to="/admin-add-role-permission"
                                              className="profile-cancel-btn"
                                            >
                                              Add
                                            </Link>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col lg={12} md={12}>
                                      <div className="serch-filter-dv">
                                        <div className="search-bar-v1">
                                          <button type="submit">
                                            <i className="fa fa-search"></i>
                                          </button>
                                          <input
                                            type="text"
                                            placeholder="Search here..."
                                          />
                                        </div>
                                        <Link
                                          to="#"
                                          className="filter-v1"
                                        >
                                          Filter{" "}
                                          <img
                                            src="./admin_assets/images/Tuning.svg"
                                            alt=""
                                          />
                                        </Link>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={12} md={12}>
                                      <div className="veh-registration-table rigistration-tabl">
                                        <table className="maintenance-table ds-table permission-table per-table">
                                          <thead>
                                            <tr>
                                              <th>
                                                Name{" "}
                                                <i className="fas fa-arrow-down"></i>
                                              </th>
                                              <th>Action</th>
                                              <th></th>
                                              <th></th>
                                              <th></th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td className="td-clr">
                                                Super Admin
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
                                                </Link>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="td-clr">
                                                Admin 1
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
                                                </Link>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="td-clr">
                                                Admin 2
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
                                                </Link>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="td-clr">
                                                Admin 3
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
                                                </Link>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="td-clr">
                                                Driver Admin
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
                                                </Link>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="td-clr">
                                                Finance Admin
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
                                                </Link>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="td-clr">
                                                Account Manager
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Eye_Open.png"
                                                    alt="eye"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/Edit.png"
                                                    alt="pen"
                                                  />
                                                </Link>
                                              </td>
                                              <td className="file-img">
                                                <Link to="#">
                                                  <img
                                                    src="./admin_assets/images/delete.png"
                                                    alt="delete"
                                                  />
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
                                            <Link
                                              to="#"
                                              className="previous-btn"
                                            >
                                              Previous
                                            </Link>
                                            <Link
                                              to="#"
                                              className="previous-btn"
                                            >
                                              Next
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="v-pills-Admin-Control"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-Admin-Control-tab"
                                >
                                  <div className="profile-wrapper">
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-top-bar user-pro-btn set-permission">
                                          <h5>Admin Control</h5>
                                          <div className="serch-filter-dv">
                                            <div className="search-bar-v1">
                                              <button type="submit">
                                                <i className="fa fa-search"></i>
                                              </button>
                                              <input
                                                type="text"
                                                placeholder="Search here..."
                                              />
                                            </div>
                                            <div className="profile-btn-wrap permission-btn">
                                            <Link
                                              to="/admin-add-admin-control"
                                              className="profile-cancel-btn"
                                            >
                                              Add
                                            </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <div className="veh-registration-table rigistration-tabl">
                                          <table className="maintenance-table ds-table permission-table">
                                            <thead>
                                              <tr>
                                                <th>
                                                  Name{" "}
                                                  <i className="fas fa-arrow-down"></i>
                                                </th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <th></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="td-clr">
                                                  Rohan Shibu
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>Super Admin</td>
                                                <td className="status-cell no">
                                                  <span className="status">
                                                    No
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="td-clr">Omar</td>
                                                <td>example@gmail.com</td>
                                                <td>Admin 1</td>
                                                <td className="status-cell yes">
                                                  <span className="status">
                                                    Yes
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="td-clr">
                                                  Nur Fadly
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>Admin 2</td>
                                                <td className="status-cell yes">
                                                  <span className="status">
                                                    Yes
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="td-clr">Omar</td>
                                                <td>example@gmail.com</td>
                                                <td>Admin 3</td>
                                                <td className="status-cell no">
                                                  <span className="status">
                                                    No
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="td-clr">
                                                  Rohan Shibu
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>Driver Admin</td>
                                                <td className="status-cell yes">
                                                  <span className="status">
                                                    Yes
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="td-clr">
                                                  John Doe
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>Finance Admin</td>
                                                <td className="status-cell yes">
                                                  <span className="status">
                                                    Yes
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="td-clr">
                                                  John Smith
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>Account Manager</td>
                                                <td className="status-cell no">
                                                  <span className="status">
                                                    No
                                                  </span>
                                                  <label className="switch">
                                                    <input
                                                      type="checkbox"
                                                      onchange="updateStatus(this)"
                                                    />
                                                    <span className="slider"></span>
                                                  </label>
                                                </td>
                                                <td>
                                                  <Link
                                                    to="#"
                                                    className="view-btn"
                                                  >
                                                    View
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
                                              <Link
                                                to="#"
                                                className="previous-btn"
                                              >
                                                Previous
                                              </Link>
                                              <Link
                                                to="#"
                                                className="previous-btn"
                                              >
                                                Next
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>

                                  <div className="control-form-main">
                                    {/* <Row>
                                      <Col lg={12} md={12}>
                                        <div className="profile-top-bar user-pro-btn set-permission">
                                          <Link to="#">
                                            <h5>
                                              <i className="fas fa-chevron-left"></i>
                                              Back to Admin Control
                                            </h5>
                                          </Link>
                                          <div className="profile-btn-wrap permission-btn">
                                            <Link
                                              to="#"
                                              className="control-cancel-btn"
                                            >
                                              Cancel
                                            </Link>
                                            <Link
                                              to="#"
                                              className="control-save-btn"
                                            >
                                              Save
                                            </Link>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <div className="admin-control-form-two">
                                        <form action="" method="">
                                          <Row>
                                            <Col lg={12} md={12}>
                                              <div className="form-group">
                                                <label for="control-label">
                                                  Role
                                                </label>
                                                <br />
                                                <input
                                                  type="email"
                                                  name="form-control"
                                                  placeholder="Admin"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                        </form>
                                        <Row>
                                          <Col lg={4} md={4}>
                                            <div className="checkboxes-columns">
                                              <h6>Dashboard</h6>
                                              <ul>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check01"
                                                  />
                                                  <span>Important Notices</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check02"
                                                  />
                                                  <span>Important Notices</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>

                                          <Col lg={4} md={4}>
                                            <div className="checkboxes-columns">
                                              <h6>User</h6>
                                              <ul>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check03"
                                                  />
                                                  <span>All Users</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check04"
                                                  />
                                                  <span>View Users</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check05"
                                                  />
                                                  <span>Amend Users</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check06"
                                                  />
                                                  <span>Application</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check07"
                                                  />
                                                  <span>Approval</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check08"
                                                  />
                                                  <span>Rejected</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check09"
                                                  />
                                                  <span>Amend</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check010"
                                                  />
                                                  <span>View Users</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>

                                          <Col lg={4} md={4}>
                                            <div className="checkboxes-columns">
                                              <h6>Vehicle</h6>
                                              <ul>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check011"
                                                  />
                                                  <span>Vehicle Search</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check012"
                                                  />
                                                  <span>View</span>
                                                </li>
                                                <li>
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="check013"
                                                  />
                                                  <span>View</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Row>
                                    <Row className=" rw-two-check">
                                      <Col lg={4} md={4}>
                                        <div className="checkboxes-columns">
                                          <h6>Calendar</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check014"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check015"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check016"
                                              />
                                              <span>Add Calendar</span>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="checkboxes-columns checkboxes-columns-two">
                                          <h6>PCNs</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check017"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check018"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check019"
                                              />
                                              <span>Add PCNs</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </Col>

                                      <Col lg={4} md={4}>
                                        <div className="checkboxes-columns">
                                          <h6>PCNs</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check020"
                                              />
                                              <span>Add PCNs</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check021"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check022"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check023"
                                              />
                                              <span>Delete</span>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="checkboxes-columns checkboxes-columns-two">
                                          <h6>Support & Issue</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check024"
                                              />
                                              <span>Add Issue</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check025"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check026"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check027"
                                              />
                                              <span>Delete</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </Col>

                                      <Col lg={4} md={4}>
                                        <div className="checkboxes-columns">
                                          <h6>Financials</h6>
                                          <ul>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check028"
                                              />
                                              <span>Payment</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check029"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check030"
                                              />
                                              <span>Refund</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check031"
                                              />
                                              <span>Pay</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check032"
                                              />
                                              <span>Revenue</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check033"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check034"
                                              />
                                              <span>Add Data</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check035"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check036"
                                              />
                                              <span>Delete</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check037"
                                              />
                                              <span>Expanses</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check038"
                                              />
                                              <span>View</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check039"
                                              />
                                              <span>Add Data</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check040"
                                              />
                                              <span>Amend</span>
                                            </li>
                                            <li>
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check041"
                                              />
                                              <span>Delete</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </Col>
                                    </Row> */}
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

export default Adminsetting;
