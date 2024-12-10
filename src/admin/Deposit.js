import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Deposit() {
  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel application-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12} md={12}>
                    <div className="main-veh-box deposit-main">
                      <div className="vehicle-main-box">
                        <Row className=" frm-inner-row deposit-rw">
                          <form action="" method="">
                            <Row>
                              <Col lg={3} md={3}>
                                <div className="form-group">
                                  <label htmlFor="control-label">Customer ID</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3}>
                                <div className="form-group">
                                  <label htmlFor="control-label">First Name</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3}>
                                <div className="form-group">
                                  <label htmlFor="control-label">Last Name</label>
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
                                  <label htmlFor="control-label">
                                    Phone Number
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
                        <Row className=" frm-inner-row deposit-rw-two">
                          <form action="" method="">
                            <Row>
                              <Col lg={4} md={4}>
                                <div className="form-group">
                                  <label htmlFor="control-label">
                                    Applicant Date
                                  </label>
                                  <br />
                                  <input type="date" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={4} md={4}>
                                <div className="form-group">
                                  <label htmlFor="control-label">Email</label>
                                  <br />
                                  <input type="email" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={4} md={4}>
                                <div className="form-group">
                                  <label htmlFor="control-label">Status</label>
                                  <select name="Approved" id="Approved-fld">
                                    <option value="volvo">Approved</option>
                                    <option value="saab">Approved</option>
                                    <option value="opel">Approved</option>
                                    <option value="audi">Approved</option>
                                  </select>
                                </div>
                              </Col>
                            </Row>
                          </form>
                          <Row className="inner-rw-register">
                            <Col lg={12} md={12}>
                              <div className="veh-registration-table rigistration-tabl deposit-table">
                                <table className="maintenance-table ds-table">
                                  <thead>
                                    <tr>
                                      <th>Deposit ID</th>
                                      <th>
                                        First Name
                                        <i className="fas fa-arrow-down"></i>
                                      </th>
                                      <th>Last Name</th>
                                      <th>Vehicle</th>
                                      <th>VRN</th>
                                      <th>Mileage Allowance</th>
                                      <th>mileage price</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>001</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>002</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>003</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>004</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>005</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>006</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>007</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>008</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>009</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>010</td>
                                      <td className="td-clr">Omar</td>
                                      <td className="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" className="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Col>
                          </Row>
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

export default Deposit;
