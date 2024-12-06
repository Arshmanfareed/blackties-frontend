import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Deposit() {
  return (
    <>
      <section class="user-dashboard">
        <Container fluid>
          <Row class=" g-0">
            <Col lg={3} md={3} class=" sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} class=" panel-col">
              <div class="dashboard-panel application-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div class="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12} md={12}>
                    <div class="main-veh-box deposit-main">
                      <div class="vehicle-main-box">
                        <Row class=" frm-inner-row deposit-rw">
                          <form action="" method="">
                            <Row>
                              <Col lg={3} md={3}>
                                <div class="form-group">
                                  <label htmlFor="control-label">Customer ID</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3}>
                                <div class="form-group">
                                  <label htmlFor="control-label">First Name</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={3} md={3}>
                                <div class="form-group">
                                  <label htmlFor="control-label">Last Name</label>
                                  <input
                                    type="text"
                                    name="form-control"
                                    id=""
                                    class="mg0"
                                  />
                                </div>
                              </Col>
                              <Col lg={3} md={3}>
                                <div class="form-group">
                                  <label htmlFor="control-label">
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    name="form-control"
                                    id=""
                                    class="mg0"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </Row>
                        <Row class=" frm-inner-row deposit-rw-two">
                          <form action="" method="">
                            <Row>
                              <Col lg={4} md={4}>
                                <div class="form-group">
                                  <label htmlFor="control-label">
                                    Applicant Date
                                  </label>
                                  <br />
                                  <input type="date" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={4} md={4}>
                                <div class="form-group">
                                  <label htmlFor="control-label">Email</label>
                                  <br />
                                  <input type="email" name="form-control" />
                                </div>
                              </Col>
                              <Col lg={4} md={4}>
                                <div class="form-group">
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
                          <Row class="inner-rw-register">
                            <Col lg={12} md={12}>
                              <div class="veh-registration-table rigistration-tabl deposit-table">
                                <table class="maintenance-table ds-table">
                                  <thead>
                                    <tr>
                                      <th>Deposit ID</th>
                                      <th>
                                        First Name
                                        <i class="fas fa-arrow-down"></i>
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
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>002</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>003</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>004</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>005</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>006</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>007</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>008</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>009</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Signed-btn">
                                          Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>010</td>
                                      <td class="td-clr">Omar</td>
                                      <td class="td-clr">Benyoucef</td>
                                      <td>Mercedes E220</td>
                                      <td>7493 231691</td>
                                      <td>1000 Miles</td>
                                      <td>1000 Miles</td>
                                      <td>
                                        <Link to="#" class="Not-Signed-btn">
                                          Not Signed
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" class="view-btn">
                                          View
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Col>
                          </Row>
                          <div class="show-paginaion adm-user-nxt-btn">
                            <div class="showing-txt">
                              <h5>Page 1 of 10</h5>
                            </div>
                            <div class="showing-pagination-number">
                              <Link to="#" class="previous-btn">
                                Previous
                              </Link>
                              <Link to="#" class="previous-btn">
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
