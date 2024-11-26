import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Dropdown, Modal, ModalBody } from "react-bootstrap";

function Financialinvoicerevenue() {
  // View Modal
  const [showView, setShowview] = useState(false);
  const handleCloseview = () => setShowview(false);
  const handleOpenview = () => setShowview(true);

  // Add Modal
  const [showadd, SetShowadd] = useState(false);
  const handleCloseadd = () => SetShowadd(false);
  const handleOpenadd = () => SetShowadd(true);

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible); // Toggle the visibility
  };

//   Remove Modal
const [showremove,setShowremove]=useState(false);
const handleCloseremove=()=>setShowremove(false);
const handleOpenremove=()=>setShowremove(true);

  return (
    <>
      <section class="user-dashboard">
        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
              <Sidebar />
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
              <div class="dashboard-panel penalty-panel">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="penalty-sec db-default-sec">
                      <div class="row main-payments">
                        <div class="col-md-4">
                          <div class="main-payments-bx">
                            <div class="pmnt-name">
                              <p>Revenue</p>
                              <h4>£2.000</h4>
                            </div>
                            <div class="pmnt-dt">
                              <span>Next Payment Date</span>
                              <span>27 June, 2024</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="main-payments-bx">
                            <div class="pmnt-name">
                              <p>Expenses</p>
                              <h4>£1.000</h4>
                            </div>
                            <div class="pmnt-dt">
                              <span>Payment Expired Date</span>
                              <span>27 June, 2024</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="main-payments-bx">
                            <div class="pmnt-name">
                              <p>Total Revenue</p>
                              <h4>£1.000</h4>
                            </div>
                            <div class="pmnt-dt">
                              <span>Next Payment Date</span>
                              <span>27 June, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="penalty-card db-default-wrapper admin-financial-revenue">
                        <div class="row">
                          <nav class="invoice-tabs">
                            <div
                              class="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                class="nav-link active"
                                id="nav-revenue-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-revenue"
                                type="button"
                                role="tab"
                                aria-controls="nav-revenue"
                                aria-selected="true"
                              >
                                <h5>Revenue</h5>
                              </button>
                              <button
                                class="nav-link"
                                id="nav-recently-delete-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-recently-delete"
                                type="button"
                                role="tab"
                                aria-controls="nav-recently-delete"
                                aria-selected="false"
                              >
                                <h5>Recently Delete</h5>
                              </button>
                            </div>
                          </nav>
                          <div
                            class="invoice-tabs-content tab-content"
                            id="nav-tabContent"
                          >
                            <div
                              class="tab-pane fade show active"
                              id="nav-revenue"
                              role="tabpanel"
                              aria-labelledby="nav-revenue-tab"
                            >
                              <div class="support-issue-head">
                                <h4>Revenue</h4>
                                <div class="viewbyd">
                                  <a href="javascript:;" class="view-support">
                                    View
                                  </a>
                                  <div class="issue-btns">
                                    <a href="javascript:;" class="active">
                                      Weekly
                                    </a>
                                    <a href="javascript:;">Monthly</a>
                                    <a href="javascript:;">Yearly</a>
                                    <a href="javascript:;">Custom</a>
                                  </div>
                                </div>
                                <div class="time-frame">
                                  <span>
                                    Timeframe
                                    <input
                                      type="date"
                                      name="form-control"
                                      placeholder="14 October to 20 October 2024"
                                    />
                                  </span>
                                </div>
                                <div class="revenue-main-btns">
                                  <div class="tivcket-btn">
                                    <a
                                      href="javascript:;"
                                      onClick={handleOpenadd}
                                    >
                                      Add Data <i class="fas fa-plus"></i>
                                    </a>
                                  </div>
                                  <div class="file-dow-btn">
                                    <a href="javascript:;">
                                      <img
                                        src="./admin_assets/images/File-download.png"
                                        alt="file-download"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="row frm-inner-row invoice-tab-frm revenue-tab-frm">
                                <form action="" method="">
                                  <div class="row">
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Date & Time
                                        </label>
                                        <br />
                                        <input
                                          type="date"
                                          name="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Transaction ID
                                        </label>
                                        <br />
                                        <input
                                          type="number"
                                          name="form-control"
                                          placeholder="placeholder"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Transaction Description
                                        </label>
                                        <input
                                          type="text"
                                          name="form-control"
                                          id=""
                                          class="mg0"
                                          placeholder="placeholder"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">From</label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">
                                            placeholder
                                          </option>
                                          <option value="volvo">Omar</option>
                                          <option value="volvo">Rohan</option>
                                          <option value="saab">Omar</option>
                                          <option value="opel">Rohan</option>
                                          <option value="audi">Omar</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">To</label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">
                                            placeholder
                                          </option>
                                          <option value="volvo">Omar</option>
                                          <option value="volvo">Rohan</option>
                                          <option value="saab">Omar</option>
                                          <option value="opel">Rohan</option>
                                          <option value="audi">Omar</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>

                              <div class="row frm-inner-row invoice-tab-frm revenue-tab-frm2">
                                <form action="" method="">
                                  <div class="row">
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Amount
                                        </label>
                                        <br />
                                        <input
                                          type="number"
                                          name="form-control"
                                          placeholder="placeholder"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Categories
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="audi">
                                            placeholder
                                          </option>
                                          <option value="volvo">Income</option>
                                          <option value="volvo">
                                            Liability
                                          </option>
                                          <option value="saab">Asset</option>
                                          <option value="opel">Expense</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Income/Expense
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">Income</option>
                                          <option value="volvo">
                                            Liability
                                          </option>
                                          <option value="saab">Asset</option>
                                          <option value="opel">Expense</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Asset/Liability
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">Asset</option>
                                          <option value="volvo">Asset</option>
                                          <option value="saab">Asset</option>
                                          <option value="opel">Asset</option>
                                          <option value="audi">Asset</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          PDF Uploaded?
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">Yes</option>
                                          <option value="volvo">No</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <div style={{ overflowX: "auto" }}>
                                    <table class="maintenance-table">
                                      <thead>
                                        <tr>
                                          <th class="first-th">Date & Time</th>
                                          <th class="first-th">
                                            Transaction ID
                                          </th>
                                          <th>Transaction Description</th>
                                          <th>From</th>
                                          <th>To</th>
                                          <th>Amount</th>
                                          <th>Categories</th>
                                          <th>Income/Expense</th>
                                          <th>Asset/Liability</th>
                                          <th></th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="v-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="view-btn"
                                              onClick={handleOpenview}
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£4,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="v-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              onClick={handleOpenview}
                                              class="view-btn"
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="liability-btn"
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
                                                ></circle>
                                              </svg>
                                              Liability
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="v-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              onClick={handleOpenview}
                                              class="view-btn"
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="cat-asset-btn"
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
                                                ></circle>
                                              </svg>
                                              Asset
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="v-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              onClick={handleOpenview}
                                              class="view-btn"
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="expense-btn"
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
                                                ></circle>
                                              </svg>
                                              Expense
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="v-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              onClick={handleOpenview}
                                              class="view-btn"
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="v-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              onClick={handleOpenview}
                                              class="view-btn"
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              class="d-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files2.png"
                                                alt="filesr"
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="javascript:;"
                                              onClick={handleOpenview}
                                              class="view-btn"
                                            >
                                              View
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <div class="invoice-order-pagination">
                                    <div class="pagination-indicator">
                                      <h6>
                                        page <span class="initail">1</span> to{" "}
                                        <span class="total">10</span>
                                      </h6>
                                    </div>
                                    <div class="pagination-nav">
                                      <a href="javascript:;" class="pg-prev">
                                        Previous
                                      </a>
                                      <a href="javascript:;" class="pg-next">
                                        Next
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="tab-pane fade show"
                              id="nav-recently-delete"
                              role="tabpanel"
                              aria-labelledby="nav-recently-delete"
                            >
                              <div class="support-issue-head">
                                <h4>Revenue</h4>
                                <div class="viewbyd">
                                  <a href="javascript:;" class="view-support">
                                    View
                                  </a>
                                  <div class="issue-btns">
                                    <a href="javascript:;" class="active">
                                      Weekly
                                    </a>
                                    <a href="javascript:;">Monthly</a>
                                    <a href="javascript:;">Yearly</a>
                                    <a href="javascript:;">Custom</a>
                                  </div>
                                </div>
                                <div class="time-frame">
                                  <span>
                                    Timeframe
                                    <input
                                      type="date"
                                      name="form-control"
                                      placeholder="14 October to 20 October 2024"
                                    />
                                  </span>
                                </div>
                                <div class="revenue-main-btns">
                                  <div class="file-dow-btn">
                                    <a href="javascript:;">
                                      <img
                                        src="./admin_assets/images/File-download.png"
                                        alt="file-download"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="row frm-inner-row invoice-tab-frm revenue-tab-frm">
                                <form action="" method="">
                                  <div class="row">
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Date & Time
                                        </label>
                                        <br />
                                        <input
                                          type="date"
                                          name="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Transaction ID
                                        </label>
                                        <br />
                                        <input
                                          type="number"
                                          name="form-control"
                                          placeholder="placeholder"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Transaction Description
                                        </label>
                                        <input
                                          type="text"
                                          name="form-control"
                                          id=""
                                          class="mg0"
                                          placeholder="placeholder"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">From</label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">
                                            placeholder
                                          </option>
                                          <option value="volvo">Omar</option>
                                          <option value="volvo">Rohan</option>
                                          <option value="saab">Omar</option>
                                          <option value="opel">Rohan</option>
                                          <option value="audi">Omar</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">To</label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">
                                            placeholder
                                          </option>
                                          <option value="volvo">Omar</option>
                                          <option value="volvo">Rohan</option>
                                          <option value="saab">Omar</option>
                                          <option value="opel">Rohan</option>
                                          <option value="audi">Omar</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>

                              <div class="row frm-inner-row invoice-tab-frm revenue-tab-frm2">
                                <form action="" method="">
                                  <div class="row">
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Amount
                                        </label>
                                        <br />
                                        <input
                                          type="number"
                                          name="form-control"
                                          placeholder="placeholder"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Categories
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="audi">
                                            placeholder
                                          </option>
                                          <option value="volvo">Income</option>
                                          <option value="volvo">
                                            Liability
                                          </option>
                                          <option value="saab">Asset</option>
                                          <option value="opel">Expense</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Income/Expense
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">Income</option>
                                          <option value="volvo">
                                            Liability
                                          </option>
                                          <option value="saab">Asset</option>
                                          <option value="opel">Expense</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          Asset/Liability
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">Asset</option>
                                          <option value="volvo">Asset</option>
                                          <option value="saab">Asset</option>
                                          <option value="opel">Asset</option>
                                          <option value="audi">Asset</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                      <div class="form-group">
                                        <label for="control-label">
                                          PDF Uploaded?
                                        </label>
                                        <select name="payment" id="payment-fld">
                                          <option value="volvo">Yes</option>
                                          <option value="volvo">No</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <div style={{ overflowX: "auto" }}>
                                    <table class="maintenance-table">
                                      <thead>
                                        <tr>
                                          <th class="first-th">Date & Time</th>
                                          <th class="first-th">
                                            Transaction ID
                                          </th>
                                          <th>Transaction Description</th>
                                          <th>From</th>
                                          <th>To</th>
                                          <th>Amount</th>
                                          <th>Categories</th>
                                          <th>Income/Expense</th>
                                          <th>Asset/Liability</th>
                                          <th></th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="dot-td">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="link"
                                                id="dropdown-basic"
                                                className="v-dots-btn p-0 border-0"
                                              >
                                                <img
                                                  src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                  alt="dots"
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                  }}
                                                />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu className="hidden-content dots-content ">
                                                <Dropdown.Item
                                                  href="#"
                                                  className="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    alt="check-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Bring Back
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                onClick={handleOpenremove}
                                                  href="#"
                                                  className="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    alt="trash-can-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Delete
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£4,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="dot-td">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="link"
                                                id="dropdown-basic"
                                                className="v-dots-btn p-0 border-0"
                                              >
                                                <img
                                                  src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                  alt="dots"
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                  }}
                                                />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu className="hidden-content dots-content ">
                                                <Dropdown.Item
                                                  href="#"
                                                  className="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    alt="check-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Bring Back
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                onClick={handleOpenremove}
                                                  href="#"
                                                  className="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    alt="trash-can-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Delete
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="liability-btn"
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
                                                ></circle>
                                              </svg>
                                              Liability
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="dot-td">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="link"
                                                id="dropdown-basic"
                                                className="v-dots-btn p-0 border-0"
                                              >
                                                <img
                                                  src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                  alt="dots"
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                  }}
                                                />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu className="hidden-content dots-content ">
                                                <Dropdown.Item
                                                  href="#"
                                                  className="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    alt="check-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Bring Back
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                onClick={handleOpenremove}
                                                  href="#"
                                                  className="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    alt="trash-can-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Delete
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="cat-asset-btn"
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
                                                ></circle>
                                              </svg>
                                              Asset
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="dot-td">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="link"
                                                id="dropdown-basic"
                                                className="v-dots-btn p-0 border-0"
                                              >
                                                <img
                                                  src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                  alt="dots"
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                  }}
                                                />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu className="hidden-content dots-content ">
                                                <Dropdown.Item
                                                  href="#"
                                                  className="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    alt="check-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Bring Back
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                onClick={handleOpenremove}
                                                  href="#"
                                                  className="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    alt="trash-can-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Delete
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="expense-btn"
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
                                                ></circle>
                                              </svg>
                                              Expense
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="dot-td">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="link"
                                                id="dropdown-basic"
                                                className="v-dots-btn p-0 border-0"
                                              >
                                                <img
                                                  src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                  alt="dots"
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                  }}
                                                />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu className="hidden-content dots-content ">
                                                <Dropdown.Item
                                                  href="#"
                                                  className="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    alt="check-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Bring Back
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                onClick={handleOpenremove}
                                                  href="#"
                                                  className="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    alt="trash-can-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Delete
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files.png"
                                                alt="filesg"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="dot-td">
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="link"
                                                id="dropdown-basic"
                                                className="v-dots-btn p-0 border-0"
                                              >
                                                <img
                                                  src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                  alt="dots"
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                  }}
                                                />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu className="hidden-content dots-content ">
                                                <Dropdown.Item
                                                  href="#"
                                                  className="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    alt="check-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Bring Back
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                onClick={handleOpenremove}
                                                  href="#"
                                                  className="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    alt="trash-can-img"
                                                    style={{
                                                      width: "16px",
                                                      marginRight: "8px",
                                                    }}
                                                  />
                                                  Delete
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>27 June, 2024 10:00 AM</td>
                                          <td>TR124301</td>
                                          <td class="first-td">Invoices A</td>
                                          <td>Omar</td>
                                          <td>Rohan</td>
                                          <td>£5,00</td>
                                          <td class="status-tagbtns">
                                            <a
                                              href="javascript:;"
                                              class="incoming-btn"
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
                                                ></circle>
                                              </svg>
                                              Incoming
                                            </a>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Income
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td>
                                            <Dropdown>
                                              <Dropdown.Toggle
                                                variant="primary"
                                                className="income-btn"
                                              >
                                                Assets
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu >
                                                <Dropdown.Item href="#">
                                                  Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Something else here
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </td>
                                          <td class="pdfs-td">
                                            <a
                                              href="javascript:;"
                                              class="view-pdf-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/files2.png"
                                                alt="filesr"
                                              />
                                            </a>
                                            <div class="hidden-content pdf-content">
                                              <div class="pdfs-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-view-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Eye2.png"
                                                    class="Eye2-img"
                                                    alt="Eye2-img"
                                                  />
                                                  View
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-change-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/Edit 1.png"
                                                    class="Edit 1-img"
                                                    alt="Edit 1-img"
                                                  />
                                                  Change
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-upload-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/file_upload.png"
                                                    class="file_upload"
                                                    alt="file_upload-img"
                                                  />
                                                  Upload PDF
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="pdf-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="dot-td">
                                            <a
                                              href="javascript:;"
                                              class="view-dots-btn"
                                            >
                                              <img
                                                src="./admin_assets/images/pepicons-pop_dots-y.png"
                                                alt="dots"
                                              />
                                            </a>
                                            <div
                                              class={`hidden-content dots-content ${
                                                isVisible ? "visible" : ""
                                              }`}
                                            >
                                              <div class="dot-pp-btns">
                                                <a
                                                  href="javascript:;"
                                                  class="dot-brng-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/check.png"
                                                    class="check-img"
                                                    alt="check-img"
                                                  />
                                                  Bring Back
                                                </a>
                                                <a
                                                  href="javascript:;"
                                                  class="dot-delete-btn"
                                                >
                                                  <img
                                                    src="./admin_assets/images/trash-can.png"
                                                    class="trash-can-img"
                                                    alt="trash-can-img"
                                                  />
                                                  Delete
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <div class="invoice-order-pagination">
                                    <div class="pagination-indicator">
                                      <h6>
                                        page <span class="initail">1</span> to{" "}
                                        <span class="total">10</span>
                                      </h6>
                                    </div>
                                    <div class="pagination-nav">
                                      <a href="javascript:;" class="pg-prev">
                                        Previous
                                      </a>
                                      <a href="javascript:;" class="pg-next">
                                        Next
                                      </a>
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
              </div>
            </div>
          </div>
        </div>
        {/* <!----------------------------- Admin Financials Invoice Revenue ADD Popup  ------------------------------------> */}

        <Modal
          show={showadd}
          onHide={handleCloseadd}
          className="password_modal"
        >
          <ModalBody>
            <div class="revenue-PP-one">
              <div class="pp-main-head">
                <h2>Add Data</h2>
                <button class="close-btn" onClick={handleCloseadd}>
                  ×
                </button>
              </div>
              <div class="row frm-inner-row Popup-inner-row">
                <form action="" method="">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Date & Time</label>
                        <br />
                        <input
                          type="date"
                          name="form-control"
                          placeholder="Omar"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">
                          Transaction Description
                        </label>
                        <br />
                        <input
                          type="number"
                          name="form-control"
                          placeholder="123123"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label for="control-label">From</label>
                        <select name="Council" id="Rented-fld">
                          <option value="volvo">Rohan</option>
                          <option value="saab">Rohan Shibu</option>
                          <option value="opel">Rohan S</option>
                          <option value="audi">Omar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="cstmr-bx">
                    <div class="cstmr-srchbox">
                      <div class="drvr_deta active">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan Shibu</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan S</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Omar</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Omar A</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label for="control-label">To</label>
                        <select name="Council" id="Rented-fld">
                          <option value="volvo">Rohan</option>
                          <option value="saab">Rohan Shibu</option>
                          <option value="opel">Rohan S</option>
                          <option value="audi">Omar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="cstmr-bx">
                    <div class="cstmr-srchbox">
                      <div class="drvr_deta active">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan Shibu</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan S</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Omar</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                      <div class="drvr_deta">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Omar A</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Amount</label>
                        <br />
                        <input
                          type="number"
                          name="form-control"
                          placeholder="2024 Mersedes E220"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Categories</label>
                        <select name="Council" id="Rented-fld">
                          <option value="volvo">10 December, 2024</option>
                          <option value="saab">10 December, 2024</option>
                          <option value="opel">10 December, 2024</option>
                          <option value="audi">10 December, 2024</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Income/Expense</label>
                        <select name="Council" id="Rented-fld">
                          <option value="volvo">Expense</option>
                          <option value="saab">Income</option>
                          <option value="opel">Expense</option>
                          <option value="audi">Income</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Asset/Liability</label>
                        <select name="Council" id="Rented-fld">
                          <option value="volvo">Asset</option>
                          <option value="saab">Asset</option>
                          <option value="opel">Asset</option>
                          <option value="audi">Asset</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row rental-vehicle-docs-wrap">
                    <h5>Document Upload</h5>
                    <div class="pdf_upl-bx">
                      <input type="file" name="" />
                      <img
                        src="./admin_assets/images/pdf-upload.png"
                        alt="pdf-upload"
                      />
                      <div class="filedetails">
                        <span>Click to upload</span>
                        <span>or drag and drop Maximum file size 50 MB.</span>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="revenue-add-action-btns">
                  <a href="javascript:;" class="delete-btn">
                    Delete
                  </a>
                  <a href="javascript:;" class="cancel-btn">
                    Cancel
                  </a>
                  <a href="javascript:;" class="submit-btn">
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!----------------------------- Admin Financials Invoice Revenue View Popup  ------------------------------------> */}

        <Modal
          show={showView}
          onHide={handleCloseview}
          className="password_modal"
        >
          <ModalBody>
            <div class="revenue-PP-two">
              <div class="pp-main-head">
                <h2>View Data</h2>
                <button class="close-btn" onClick={handleCloseview}>
                  ×
                </button>
              </div>
              <div class="row frm-inner-row Popup-inner-row">
                <form action="" method="">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Date & Time</label>
                        <br />
                        <input
                          type="text"
                          name="form-control"
                          placeholder="27 June, 2024 10:00 AM"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">
                          Transaction Description
                        </label>
                        <br />
                        <input
                          type="number"
                          name="form-control"
                          placeholder="123123"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label for="control-label">From</label>
                        <div class="drvr_deta active">
                          <div class="drvrmain">
                            <img
                              src="./admin_assets/images/new-customers-list.png"
                              class="new-customers-img"
                              alt="new-customers-img"
                            />
                            <div class="drvrnam">
                              <h6>Rohan Shibu</h6>
                              <span>Customer ID: D0012</span>
                            </div>
                          </div>
                          <div class="drvrcar">
                            <p>Mercedes-Benz E Class</p>
                            <span>example@gmail.com</span>
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
                              ></circle>
                            </svg>
                            <span>+44 334 2345</span>
                          </div>
                          <div class="cstmr-view-deta-eye">
                            <a href="javascript:;" class="uploaded-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                  stroke="white"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="control-label">To</label>
                      <div class="drvr_deta active">
                        <div class="drvrmain">
                          <img
                            src="./admin_assets/images/new-customers-list.png"
                            class="new-customers-img"
                            alt="new-customers-img"
                          />
                          <div class="drvrnam">
                            <h6>Rohan Shibu</h6>
                            <span>Customer ID: D0012</span>
                          </div>
                        </div>
                        <div class="drvrcar">
                          <p>Mercedes-Benz E Class</p>
                          <span>example@gmail.com</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            fill="none"
                          >
                            <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                          </svg>
                          <span>+44 334 2345</span>
                        </div>
                        <div class="cstmr-view-deta-eye">
                          <a href="javascript:;" class="uploaded-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.9987 12C11.6806 12 14.6654 8 14.6654 8C14.6654 8 11.6806 4 7.9987 4C4.3168 4 1.33203 8 1.33203 8C1.33203 8 4.3168 12 7.9987 12Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.0013 9.33464C8.73768 9.33464 9.33464 8.73768 9.33464 8.0013C9.33464 7.26492 8.73768 6.66797 8.0013 6.66797C7.26492 6.66797 6.66797 7.26492 6.66797 8.0013C6.66797 8.73768 7.26492 9.33464 8.0013 9.33464Z"
                                stroke="white"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Amount</label>
                        <br />
                        <input
                          type="number"
                          name="form-control"
                          placeholder="2024 Mersedes E220"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Categories</label>
                        <input
                          type="text"
                          name="form-control"
                          placeholder="10 December, 2024"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Income/Expense</label>
                        <input
                          type="text"
                          name="form-control"
                          placeholder="Expense"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label for="control-label">Asset/Liability</label>
                        <input
                          type="text"
                          name="form-control"
                          placeholder="Asset"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="chngs-pdf-ppr">
                        <img
                          src="./admin_assets/images/paper-pdf.png"
                          class="paper-pdf-img"
                          alt="paper-pdf-img"
                        />
                        <div class="pdfdetail">
                          <h6>Paper Copy</h6>
                          <p>3.6 MB</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pdf-chng-btns">
                        <a href="javascript:;" class="view-btn">
                          View
                        </a>
                        <a href="javascript:;" class="download-btn">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!----------------------------- Admin Financials Invoice Revenue Remove Popup  ------------------------------------> */}

<Modal className="password_modal" show={showremove} onHide={handleCloseremove}>
    <ModalBody>
    <div class="remove-alert-pop-up">
       <img src="./admin_assets/images/Icon.png" class="Icon-img" alt="Icon-img"/>
       <div class="alrt-deta">
           <h6>Are sure to want to Remove?</h6>
           <p>Lorem ipsum dolor sit amet consectetur. Gravida sed sit nisl metus.</p>
           <div class="alrt-btns">
               <a href="javascript:;" class="cancel-btn" onClick={handleCloseremove}>Cancel</a>
               <a href="javascript:;" class="yes-btn" onClick={handleCloseremove}>Yes</a>
           </div>
       </div>
    </div>
    </ModalBody>
</Modal>

      </section>
    </>
  );
}

export default Financialinvoicerevenue;
