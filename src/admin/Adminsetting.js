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
