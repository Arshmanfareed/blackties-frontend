import React from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";

function Deposit() {
  return (
    <>
      <section class="user-dashboard">
        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
              <Sidebar />
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
              <div class="dashboard-panel application-panel">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="main-veh-box deposit-main">
                      <div class="vehicle-main-box">
                        <div class="row frm-inner-row deposit-rw">
                          <form action="" method="">
                            <div class="row">
                              <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                  <label for="control-label">Customer ID</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                  <label for="control-label">First Name</label>
                                  <br />
                                  <input type="text" name="form-control" />
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                  <label for="control-label">Last Name</label>
                                  <input
                                    type="text"
                                    name="form-control"
                                    id=""
                                    class="mg0"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                  <label for="control-label">
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    name="form-control"
                                    id=""
                                    class="mg0"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="row frm-inner-row deposit-rw-two">
                          <form action="" method="">
                            <div class="row">
                              <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                  <label for="control-label">
                                    Applicant Date
                                  </label>
                                  <br />
                                  <input type="date" name="form-control" />
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                  <label for="control-label">Email</label>
                                  <br />
                                  <input type="email" name="form-control" />
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                  <label for="control-label">Status</label>
                                  <select name="Approved" id="Approved-fld">
                                    <option value="volvo">Approved</option>
                                    <option value="saab">Approved</option>
                                    <option value="opel">Approved</option>
                                    <option value="audi">Approved</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div class="row inner-rw-register">
                            <div class="col-lg-12 col-md-12">
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
                                        <Link
                                          to="#"
                                          class="Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Not-Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Not-Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Not-Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Signed-btn"
                                        >
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
                                        <Link
                                          to="#"
                                          class="Not-Signed-btn"
                                        >
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
                            </div>
                          </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deposit;


