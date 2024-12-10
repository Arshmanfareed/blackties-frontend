import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Col, Container, Modal, ModalBody, Row } from "react-bootstrap";

function Admindashboardmain() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Amend Modal
  const [showamend, setShowamend] = useState(false);

  const handleCloseamend = () => setShowamend(false);
  const handleShowamend = () => setShowamend(true);

  // Payment Modal
  const [showpayment, setShowpayment] = useState(false);

  const handleClosepayment = () => setShowpayment(false);
  const handleShowpayment = () => setShowpayment(true);
  // Add Payment Modal
  const [showaddpayment, setShowaddpayment] = useState(false);

  const handleCloseaddpayment = () => setShowaddpayment(false);
  const handleShowaddpayment = () => setShowaddpayment(true);

  //   Delete Modal
  const [showdelete, setShowdelete] = useState(false);

  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = () => setShowdelete(true);

  //   Payment Sucess Modal
  const [showpaymentsucess, setShowpaymentsucess] = useState(false);

  const handleClosepaymentsucess = () => setShowpaymentsucess(false);
  const handleShowpaymentsucess = () => setShowpaymentsucess(true);

  //   Payment Failed Modal
  const [showpaymentfailed, setShowpaymentfailed] = useState(false);

  const handleClosepaymentfailed = () => setShowpaymentfailed(false);
  const handleShowpaymentfailed = () => setShowpaymentfailed(true);

  //   Unrated Vehicle Modal
  const [showunratedvehicle, setShowunratedvehicle] = useState(false);

  const handleCloseunratedvehicle = () => setShowunratedvehicle(false);
  const handleShowunratedvehicle = () => setShowunratedvehicle(true);

  //   Unrated Vehicle Modal
  const [showunratedvehicle_updated, setShowunratedvehicle_updated] =
    useState(false);

  const handleCloseunratedvehicle_updated = () => {
    setShowunratedvehicle_updated(false);
    setShowunratedvehicle(true);
  };
  const handleShowunratedvehicle_updated = () => {
    setShowunratedvehicle_updated(true);
    setShowunratedvehicle(false);
  };

  //   MOT Modal
  const [showmot, setShowmot] = useState(false);

  const handleClosemot = () => setShowmot(false);
  const handleShowmot = () => setShowmot(true);

  //   MOT Update Modal
  const [showmot_update, setShowmot_update] = useState(false);

  const handleClosemot_update = () => {
    setShowmot_update(false);
    setShowmot(true);
  };
  const handleShowmot_update = () => {
    setShowmot_update(true);
    setShowmot(false);
  };

  //   Driver Liscense Modal
  const [show_drivlis, setShow_drivlis] = useState(false);

  const handleClose_drivlis = () => {
    setShow_drivlis(false);
  };
  const handleShow_drivlis = () => {
    setShow_drivlis(true);
  };
  //   Driver Liscense Update Modal
  const [show_drivlis_update, setShow_drivlis_update] = useState(false);

  const handleClose_drivlis_update = () => {
    setShow_drivlis_update(false);
  };
  const handleShow_drivlis_update = () => {
    setShow_drivlis_update(true);
  };

  //  PCO  Driver Liscense  Modal
  const [show_pco_driver_lis, setShow_pco_driver_lis] = useState(false);

  const handleClose_pco_driver_lis = () => {
    setShow_pco_driver_lis(false);
  };
  const handleShow_pco_driver_lis = () => {
    setShow_pco_driver_lis(true);
  };

    //  PCO  Driver Liscense Update  Modal
    const [show_pco_driver_lis_update, setShow_pco_driver_lis_update] = useState(false);

    const handleClose_pco_driver_lis_update = () => {
      setShow_pco_driver_lis_update(false);
    };
    const handleShow_pco_driver_lis_update = () => {
      setShow_pco_driver_lis_update(true);
    };

  return (
    <>
      <section className="user-dashboard admin-dashboard-main">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel overview-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <h2>Dashboard</h2>
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="overview-sec db-default-sec adm-sec">
                      <div className="overview-card db-default-wrapper">
                        <div className="adm-user-tabs">
                          <div className="tabs-container ">
                            {/* <!-- Tabs Header --> */}
                            <div className="vehicle-tabs">
                              <ul
                                className="nav nav-tabs"
                                id="myTab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <Link
                                    className="nav-link active"
                                    id="important-notices-tab"
                                    data-bs-toggle="tab"
                                    to="#important-notices"
                                    role="tab"
                                    aria-controls="important-notices"
                                    aria-selected="false"
                                  >
                                    Important Notices
                                  </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <Link
                                    className="nav-link"
                                    id="statistics-tab"
                                    data-bs-toggle="tab"
                                    to="#statistics"
                                    role="tab"
                                    aria-controls="statistics"
                                    aria-selected="false"
                                  >
                                    Statistics
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-content" id="v-pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="important-notices"
                              role="tabpanel"
                              aria-labelledby="important-notices-tab"
                            >
                              <Row className=" frm-inner-row admin-dash-frm">
                                <Col md={6} className=" brdr-r">
                                  <div className="unpd-inv">
                                    <div className="unpd-inv-deta">
                                      <h1>Unpaid Invoices</h1>
                                      <span>30</span>
                                      <button>£1,000</button>
                                    </div>
                                    <div className="unpd-inv-v-btn">
                                      <Link to="#">View All</Link>
                                    </div>
                                  </div>
                                  <form action="" method="">
                                    <Row>
                                      <Col md={4} lg={6}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Invoice
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            name="form-control"
                                          />
                                        </div>
                                      </Col>
                                      <Col md={4} lg={6}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Driver
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            name="form-control"
                                          />
                                        </div>
                                      </Col>
                                      <Col md={4} lg={6}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">VRN</label>
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
                                  <div className="user-app-tabl">
                                    <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                      <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                        <thead>
                                          <tr>
                                            <th>Invoice Number</th>
                                            <th>Date of Invoice</th>
                                            <th>
                                              Driver{" "}
                                              <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>VRN</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>001</td>
                                            <td>July 19, 2024</td>
                                            <td className="td-clr">
                                              Omar Benyoucef
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td>£280</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={handleShow}
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>002</td>
                                            <td>July 19, 2024</td>
                                            <td className="td-clr">
                                              Omar Benyoucef
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td>£280</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={handleShow}
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>003</td>
                                            <td>July 19, 2024</td>
                                            <td className="td-clr">
                                              Omar Benyoucef
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td>£280</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={handleShow}
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>004</td>
                                            <td>July 19, 2024</td>
                                            <td className="td-clr">
                                              Omar Benyoucef
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td>£280</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={handleShow}
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className="unpd-inv">
                                    <div className="unpd-inv-deta">
                                      <h1>Pending Approvals</h1>
                                      <span>30</span>
                                    </div>
                                    <div className="unpd-inv-v-btn">
                                      <Link to="#">View All</Link>
                                    </div>
                                  </div>
                                  <form action="" method="">
                                    <Row>
                                      <Col lg={6} md={6}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Name
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            name="form-control"
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={6} md={6}>
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Phone Number
                                          </label>
                                          <input
                                            type="number"
                                            name="form-control"
                                            id=""
                                            className="mg0"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                  </form>
                                  <div className="user-app-tabl">
                                    <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                      <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                        <thead>
                                          <tr>
                                            <th>Customer ID</th>
                                            <th>
                                              Full Name{" "}
                                              <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>Phone Number</th>
                                            <th>Time Since Application</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>001</td>
                                            <td className="td-clr">Omar</td>
                                            <td>07493231691</td>
                                            <td>1 Hour</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>002</td>
                                            <td className="td-clr">Omar</td>
                                            <td>07493231691</td>
                                            <td>43 Minutes</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>003</td>
                                            <td className="td-clr">Omar</td>
                                            <td>07493231691</td>
                                            <td>30 Minutes</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>004</td>
                                            <td className="td-clr">Omar</td>
                                            <td>07493231691</td>
                                            <td>13 Minutes</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} className="brdr-r nopd-col">
                                  <div className="unpd-inv">
                                    <div className="unpd-inv-deta">
                                      <h1>Unrented Vehicle</h1>
                                    </div>
                                    <div className="unpd-inv-v-btn">
                                      <Link to="#">
                                        Go To Calendar
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="user-app-tabl">
                                    <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                      <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                        <thead>
                                          <tr>
                                            <th>
                                              Vehicle{" "}
                                              <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>VRN</th>
                                            <th>Time Since Last Rental</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class)
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={
                                                  handleShowunratedvehicle
                                                }
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class)
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={
                                                  handleShowunratedvehicle
                                                }
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class)
                                            </td>
                                            <td>N/A</td>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={
                                                  handleShowunratedvehicle
                                                }
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class)
                                            </td>
                                            <td>N/A</td>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={
                                                  handleShowunratedvehicle
                                                }
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={6} className="nopd-col">
                                  <div className="unpd-inv">
                                    <div className="unpd-inv-deta">
                                      <h1>Outgoing</h1>
                                    </div>
                                    <div className="unpd-inv-cal-btn">
                                      <Link to="#">
                                        Go to Calendar
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="user-app-tabl">
                                    <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                      <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                        <thead>
                                          <tr>
                                            <th>Date & Time</th>
                                            <th>
                                              Vehicle{" "}
                                              <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>VRN</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>N/A</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>N/A</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={6} className="brdr-r nopd-col">
                                  <div className="unpd-inv">
                                    <div className="unpd-inv-deta">
                                      <h1>Documents</h1>
                                    </div>
                                    <div className="unpd-inv-cal-btn">
                                      <Link to="#">
                                        Go to Calendar
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="user-app-tabl">
                                    <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                      <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                        <thead>
                                          <tr>
                                            <th>Document Type</th>
                                            <th>
                                              Full Name{" "}
                                              <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>VRN</th>
                                            <th>Days until expiry</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Vehicle PCO Licence</td>
                                            <td className="td-clr">N/A</td>
                                            <td>KM19 VUG</td>
                                            <td>19</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={
                                                  handleShowunratedvehicle
                                                }
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>MOT</td>
                                            <td className="td-clr">N/A</td>
                                            <td>KM19 VUG</td>
                                            <td>21</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={handleShowmot}
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Driver’s Licence</td>
                                            <td className="td-clr">Omar</td>
                                            <td>N/A</td>
                                            <td>45</td>
                                            <td className="view-btn">
                                              <Link
                                                to="#"
                                                onClick={handleShow_drivlis}
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Driver’s PCO Licence </td>
                                            <td className="td-clr">Omar</td>
                                            <td>N/A</td>
                                            <td>75</td>
                                            <td className="view-btn">
                                              <Link
                                                onClick={
                                                  handleShow_pco_driver_lis
                                                }
                                                to="#"
                                              >
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={6} className="nopd-col">
                                  <div className="unpd-inv">
                                    <div className="unpd-inv-deta">
                                      <h1>Incoming</h1>
                                    </div>
                                    <div className="unpd-inv-cal-btn">
                                      <Link to="#">
                                        Go to Calendar
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="user-app-tabl">
                                    <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                      <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                        <thead>
                                          <tr>
                                            <th>Date & Time</th>
                                            <th>
                                              Vehicle{" "}
                                              <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>VRN</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>KM19 VUG</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>N/A</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>July 19, 2024 10:00</td>
                                            <td className="td-clr">
                                              2019 Mercedes-Benz E Class
                                            </td>
                                            <td>N/A</td>
                                            <td className="view-btn">
                                              <Link to="#">
                                                View
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div
                              className="tab-pane fade show"
                              id="statistics"
                              role="tabpanel"
                              aria-labelledby="statistics-tab"
                            >
                              <div className="support-issue-head">
                                <h4>Statistics</h4>
                                <div className="statshead-cal">
                                  <div className="viewbyd">
                                    <Link
                                      to="#"
                                      className="view-support"
                                    >
                                      View
                                    </Link>
                                    <div className="issue-btns">
                                      <Link
                                        to="#"
                                        className="active"
                                      >
                                        Weekly
                                      </Link>
                                      <Link to="#">Monthly</Link>
                                      <Link to="#">Yearly</Link>
                                      <Link to="#">Custom</Link>
                                    </div>
                                  </div>
                                  <div className="time-frame">
                                    <span>
                                      Timeframe{" "}
                                      <input
                                        type="date"
                                        name="form-control"
                                        placeholder="14 October to 20 October 2024"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="main-stats-box">
                                <Row className=" admin-dash-stats">
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Revenue
                                      </h6>
                                      <div className="average-score">
                                        <h5>£3.600.00</h5>
                                        <span>
                                          +4.2%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Expenses
                                      </h6>
                                      <div className="average-score">
                                        <h5>1.002</h5>
                                        <span>
                                          +2.5%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Total Vehicles
                                      </h6>
                                      <div className="average-score">
                                        <h5>32</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap brdrnn">
                                      <h6 className="vehicle-average-title">
                                        Vehicles Rented
                                      </h6>
                                      <div className="average-score">
                                        <h5>32</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className=" admin-dash-stats">
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Utilisation Rate
                                      </h6>
                                      <div className="average-score">
                                        <h5>100 %</h5>
                                        <span>
                                          +4.2%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Average Rental Duration
                                      </h6>
                                      <div className="average-score">
                                        <h5>3 Days</h5>
                                        <span>
                                          +2.5%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        New Driver Registrations
                                      </h6>
                                      <div className="average-score">
                                        <h5>12</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Maintenance Schedule Alerts
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap brdrnn">
                                      <h6 className="vehicle-average-title">
                                        Vehicles Rented
                                      </h6>
                                      <div className="average-score">
                                        <h5>32</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="admin-dash-stats">
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Complaint and Issue Report
                                      </h6>
                                      <div className="average-score">
                                        <h5>13</h5>
                                        <span>
                                          +4.2%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Insurance Claims
                                      </h6>
                                      <div className="average-score">
                                        <h5>3</h5>
                                        <span>
                                          +2.5%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Fleet Age distribution
                                      </h6>
                                      <div className="average-score">
                                        <h5>12</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap brdrnn">
                                      <h6 className="vehicle-average-title">
                                        Retention Period
                                      </h6>
                                      <div className="average-score">
                                        <h5>32</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="admin-dash-stats">
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Website Analytics
                                      </h6>
                                      <div className="average-score">
                                        <h5>13</h5>
                                        <span>
                                          +4.2%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Pending Approvals / Verification
                                      </h6>
                                      <div className="average-score">
                                        <h5>3</h5>
                                        <span>
                                          +2.5%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Outstanding Fines and Penalties
                                      </h6>
                                      <div className="average-score">
                                        <h5>12</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap brdrnn">
                                      <h6 className="vehicle-average-title">
                                        Profit Margins
                                      </h6>
                                      <div className="average-score">
                                        <h5>32</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className=" admin-dash-stats brdrnn">
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <h6 className="vehicle-average-title">
                                        Upcoming Bookings
                                      </h6>
                                      <div className="average-score">
                                        <h5>13</h5>
                                        <span>
                                          +4.2%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <div className="average-score">
                                        <h5>3</h5>
                                        <span>
                                          +2.5%{" "}
                                          <ion-icon
                                            name="arrow-up-outline"
                                            role="img"
                                            className="md hydrated"
                                          ></ion-icon>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap">
                                      <div className="average-score">
                                        <h5>12</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                  <Col lg={3} md={3}>
                                    <div className="vehicle-average-wrap brdrnn">
                                      <div className="average-score">
                                        <h5>32</h5>
                                        <span className="red-clr">
                                          -2.2%{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M8.0035 14C8.18921 14.0009 8.37523 13.9249 8.50883 13.772L13.1688 8.43865C13.4111 8.16139 13.3827 7.74023 13.1055 7.49797C12.8282 7.25571 12.4071 7.28409 12.1648 7.56135L8.66682 11.5647L8.66682 2.66667C8.66682 2.29848 8.36834 2 8.00015 2C7.63196 2 7.33349 2.29848 7.33349 2.66667L7.33349 11.5533L3.83489 7.56064C3.59224 7.28372 3.17105 7.25594 2.89413 7.49859C2.61721 7.74124 2.58943 8.16244 2.83208 8.43936L7.44845 13.7077C7.56839 13.8841 7.77074 14 8.00015 14C8.00127 14 8.00238 14 8.0035 14Z"
                                              fill="#6E7074"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <span className="compared-weeks">
                                        Compared to (last month)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <div className="stats-graph">
                                <img
                                  src="./admin_assets/images/ssdsds.png"
                                  alt="Sales-statistics"
                                />
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
        </Container>

        {/* <!--------------------------------- Admin Dashboard Main Unpaid Pop-up ----------------------------------> */}

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="password_modal"
        >
          <ModalBody>
            <div className="unpaid-pp">
              <button className="close-btn" onClick={handleClose}>
                ×
              </button>
              <Row className=" innr-row">
                <Col md={4}>
                  <div className="cstmr-bx">
                    <div className="cstmr-mn-deta">
                      <img
                        src="./admin_assets/images/customer2.png"
                        alt="customer2"
                      />
                      <div className="c_nm">
                        <h4>Omar Benyoucef</h4>
                        <p>Member Since: July 19, 2024</p>
                      </div>
                    </div>
                    <div className="cstmr-details">
                      <form action="" method="">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label htmlFor="control-label">Customer ID</label>
                              <br />
                              <input
                                type="text"
                                name="form-control"
                                placeholder="BTR123412"
                              />
                            </div>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label htmlFor="control-label">Email Address</label>
                              <br />
                              <input
                                type="text"
                                name="form-control"
                                placeholder="Ron.don@gmail.com "
                              />
                            </div>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label htmlFor="control-label">Phone Number</label>
                              <input
                                type="number"
                                name="form-control"
                                id=""
                                className="mg0"
                                placeholder="+44  123 123 123"
                              />
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                  <div className="vehical-bx">
                    <div className="veh-head">
                      <h4>Vehicle</h4>
                      <Link to="#" className="active-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                        </svg>
                        Active
                      </Link>
                    </div>
                    <div className="vehicle-img">
                      <img
                        src="./admin_assets/images/car1212.png"
                        alt="car1212"
                      />
                    </div>
                    <div className="car-details">
                      <h6>Mercedes-Benz E-Class</h6>
                      <p>2019</p>
                      <span>26 April at 16:05</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                      >
                        <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                      </svg>
                      <span>KE19 OJS</span>
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="invoice-view-card db-default-wrapper unpaid-inv-card">
                    <Row className=" invoice-view-details admin-invoice-view-details">
                      <Col lg={6} md={6}>
                        <h2>BLACKTIES</h2>
                        <h5>RENTAL</h5>
                      </Col>
                      <Col lg={6} md={6}>
                        <p className="inv-address">
                          328 Summerwood Road, Isleworth, Greater London, TW7
                          7QP{" "}
                        </p>
                      </Col>
                    </Row>
                    <Row className=" invoice-view-subscription">
                      <Col md={4} lg={6}>
                        <p>
                          <span>Full Name</span>
                          <br />
                          John Doe
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Phone:</span>
                          <br />
                          +44 334 2345
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Email:</span>
                          <br />
                          example@gmail.com
                        </p>
                      </Col>
                    </Row>
                    <Row className=" invoice-view-subscription-2">
                      <Col lg={4} md={4}>
                        <p>
                          <span>Receipt Date:</span>
                          <br />
                          12/8/2024
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Receipt #:</span>
                          <br />
                          RT-435
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Payment Method:</span>
                          <br />
                          Credit Card
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12}>
                        <div style={{ overflowX: "auto" }}>
                          <table className="cancellation-disc-table">
                            <thead>
                              <tr>
                                <th className="first-th">Description</th>
                                <th>Price</th>
                                <th>Vat %</th>
                                <th>Amount (GBP)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="first-td">Damage Car</td>
                                <td>£360</td>
                                <td>10 %</td>
                                <td>£360</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>Total excl Vat</td>
                                <td></td>
                                <td>£360</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>VAT 20 %</td>
                                <td></td>
                                <td>£360</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>£360</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="unpaid-pp-btns">
                    <Link
                      to="#"
                      className="amend-btn"
                      onClick={handleShowamend}
                    >
                      Amend
                    </Link>
                    <Link
                      to="#"
                      className="delete-btn"
                      onClick={handleShowdelete}
                    >
                      Delete
                    </Link>
                    <Link
                      to="#"
                      className="try-payment-btn"
                      onClick={handleShowpayment}
                    >
                      Try Payment
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>

        {/* <!--------------------------------- Admin Dashboard Main Amend Pop-up ----------------------------------> */}

        <Modal
          show={showamend}
          onHide={handleCloseamend}
          animation={false}
          className="password_modal"
        >
          <ModalBody>
            <div className="unpaid-pp amend-pp">
              <button className="close-btn" onClick={handleCloseamend}>
                ×
              </button>
              <Row className="   innr-row">
                <Col md={4}>
                  <div className="cstmr-bx">
                    <div className="cstmr-mn-deta">
                      <img
                        src="./admin_assets/images/customer2.png"
                        alt="customer2"
                      />
                      <div className="c_nm">
                        <h4>Omar Benyoucef</h4>
                        <p>Member Since: July 19, 2024</p>
                      </div>
                    </div>
                    <div className="cstmr-details">
                      <form action="" method="">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label htmlFor="control-label">Customer ID</label>
                              <br />
                              <input
                                type="text"
                                name="form-control"
                                placeholder="BTR123412"
                              />
                            </div>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label htmlFor="control-label">Email Address</label>
                              <br />
                              <input
                                type="text"
                                name="form-control"
                                placeholder="Ron.don@gmail.com "
                              />
                            </div>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label htmlFor="control-label">Phone Number</label>
                              <input
                                type="number"
                                name="form-control"
                                id=""
                                className="mg0"
                                placeholder="+44  123 123 123"
                              />
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                  <div className="vehical-bx">
                    <div className="veh-head">
                      <h4>Vehicle</h4>
                      <Link to="#" className="active-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                        </svg>
                        Active
                      </Link>
                    </div>
                    <div className="vehicle-img">
                      <img
                        src="./admin_assets/images/car1212.png"
                        alt="car1212"
                      />
                    </div>
                    <div className="car-details">
                      <h6>Mercedes-Benz E-Class</h6>
                      <p>2019</p>
                      <span>26 April at 16:05</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                      >
                        <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                      </svg>
                      <span>KE19 OJS</span>
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="invoice-view-card db-default-wrapper unpaid-inv-card">
                    <Row className=" invoice-view-details admin-invoice-view-details">
                      <Col lg={6} md={6}>
                        <h2>BLACKTIES</h2>
                        <h5>RENTAL</h5>
                      </Col>
                      <Col lg={6} md={6}>
                        <p className="inv-address">
                          328 Summerwood Road, Isleworth, Greater London, TW7
                          7QP{" "}
                        </p>
                      </Col>
                    </Row>
                    <Row className=" invoice-view-subscription">
                      <Col lg={4} md={4}>
                        <p>
                          <span>Full Name</span>
                          <br />
                          John Doe
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Phone:</span>
                          <br />
                          +44 334 2345
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Email:</span>
                          <br />
                          example@gmail.com
                        </p>
                      </Col>
                    </Row>
                    <Row className=" invoice-view-subscription-2">
                      <Col lg={4} md={4}>
                        <p>
                          <span>Receipt Date:</span>
                          <br />
                          12/8/2024
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Receipt #:</span>
                          <br />
                          RT-435
                        </p>
                      </Col>
                      <Col lg={4} md={4}>
                        <p>
                          <span>Payment Method:</span>
                          <br />
                          Credit Card
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12}>
                        <div style={{ overflowX: "auto" }}>
                          <table className="cancellation-disc-table">
                            <thead>
                              <tr>
                                <th className="first-th">Description</th>
                                <th>Amount</th>
                                <th>Vat %</th>
                                <th>Amount (GBP)</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="first-td">PCN Fee</td>
                                <td>£360</td>
                                <td>10 %</td>
                                <td>£360</td>
                                <td>
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/trash-can.png"
                                      alt="delete"
                                    />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="first-td">Insurance Excess</td>
                                <td>£360</td>
                                <td>-</td>
                                <td>£360</td>
                                <td>
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/trash-can.png"
                                      alt="delete"
                                    />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="first-td">Refund</td>
                                <td>£360</td>
                                <td></td>
                                <td>£360</td>
                                <td>
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/trash-can.png"
                                      alt="delete"
                                    />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="big-td">
                                  <Link to="#">
                                    <img
                                      src="./admin_assets/images/plus.png"
                                      className="plus-img"
                                      alt="comm"
                                    />
                                    Add another Payment
                                  </Link>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                          <table className="cancellation-disc-table">
                            <tbody>
                              <tr>
                                <td>Total excl Vat</td>
                                <td></td>
                                <td>£360</td>
                              </tr>
                              <tr>
                                <td>VAT 20 %</td>
                                <td></td>
                                <td>£360</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>Total</td>
                                <td>£360</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="amend-pp-btns">
                    <Link
                      to="#"
                      className="cancel-btn"
                      onClick={handleCloseamend}
                    >
                      Cancel
                    </Link>
                    <Link
                      to="#"
                      className="save-btn"
                      onClick={handleCloseamend}
                    >
                      Save
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>

        {/* <!--------------------------------- Admin Dashboard Main Deleted Pop-up ----------------------------------> */}
        <Modal
          show={showdelete}
          onHide={handleClosedelete}
          animation={false}
          className="password_modal"
        >
          <ModalBody>
            <div className="delete-alert-pop-up">
              <img
                src="./admin_assets/images/Icon.png"
                className="Icon-img"
                alt="Icon-img"
              />
              <div className="alrt-deta">
                <h6>Are you sure you want to delete this invoice?</h6>
                <p>
                  This action cannot be undone”. When this is deleted, it soft
                  deletes and it can be recovered.
                </p>
                <div className="alrt-btns">
                  <Link
                    to="#"
                    className="cancel-btn"
                    onClick={handleClosedelete}
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="yes-btn"
                    onClick={handleClosedelete}
                  >
                    Yes
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!--------------------------------- Admin Dashboard Main Try Payment Pop-up ----------------------------------> */}
        <Modal
          show={showpayment}
          onHide={handleClosepayment}
          animation={false}
          className="password_modal"
        >
          <ModalBody>
            <div className="cardpay-popup_bx">
              <div className="card-main-head">
                <h2>Confirmation Payment</h2>
                <button className="close-btn" onClick={handleClosepayment}>
                  ×
                </button>
              </div>
              <div className="card-innr-blk">
                <div className="card-selection">
                  <h4>Select a Card</h4>
                  <Link to="#" onClick={handleShowaddpayment}>
                    <img
                      src="./admin_assets/images/plus.png"
                      className="plus-img"
                      alt="comm"
                    />
                    Add Card
                  </Link>
                </div>
                <div className="payment-method-wrapper">
                  <form action="">
                    <div className="payment-options-list payment-options1">
                      <div className="checkboxes__item">
                        <label className="checkbox payment-radio">
                          <input type="checkbox" checked="checked" />
                          <div className="checkbox__checkmark"></div>
                          <div className="checkbox__body">
                            <div className="checkbox-inbody">
                              <img
                                src="./admin_assets/images/dashboard/Visa_Inc._logo 1.svg"
                                alt=""
                              />
                              <div>
                                <h6>Visa Ending in 1231</h6>
                                <span className="exp">Expired date 12/24</span>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="payment-options-list payment-options2">
                      <div className="checkboxes__item">
                        <label className="checkbox payment-radio">
                          <input type="checkbox" />
                          <div className="checkbox__checkmark"></div>
                          <div className="checkbox__body">
                            <div className="checkbox-inbody">
                              <img
                                src="./admin_assets/images/dashboard/mc.svg"
                                alt=""
                              />
                              <div>
                                <h6>Visa Ending in 1231</h6>
                                <span className="exp">Expired date 12/24</span>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card-bttm-head">
                <h3>Total Refund</h3>
                <h3>£360</h3>
              </div>

              <div className="card-pay-action-btns">
                <Link
                  to="#"
                  className="cancel-btn"
                  onClick={handleShowpaymentfailed}
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="payment-btn"
                  onClick={handleShowpaymentsucess}
                >
                  Payment
                </Link>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!--------------------------------- Admin Dashboard Main Try Payment Confirmation Pop-up ----------------------------------> */}

        <Modal
          show={showaddpayment}
          onHide={handleCloseaddpayment}
          animation={false}
          className="password_modal"
        >
          <ModalBody>
            <div className="cardpay-popup_bx">
              <div className="card-main-head">
                <h2>Confirmation Payment</h2>
                <button className="close-btn">×</button>
              </div>
              <div className="card-innr-blk">
                <div className="card-selection">
                  <h4>Select a Card</h4>
                  <Link to="#">
                    <img
                      src="./admin_assets/images/plus.png"
                      className="plus-img"
                      alt="comm"
                    />
                    Add Card
                  </Link>
                </div>
                <div className="payment-method-wrapper">
                  <form action="">
                    <div className="payment-options-list payment-options1">
                      <div className="checkboxes__item">
                        <label className="checkbox payment-radio">
                          <input type="checkbox" checked="checked" />
                          <div className="checkbox__checkmark"></div>
                          <div className="checkbox__body">
                            <div className="checkbox-inbody">
                              <img
                                src="./admin_assets/images/dashboard/Visa_Inc._logo 1.svg"
                                alt=""
                              />
                              <div>
                                <h6>Visa Ending in 1231</h6>
                                <span className="exp">Expired date 12/24</span>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="payment-options-list payment-options2">
                      <div className="checkboxes__item">
                        <label className="checkbox payment-radio">
                          <input type="checkbox" />
                          <div className="checkbox__checkmark"></div>
                          <div className="checkbox__body">
                            <div className="checkbox-inbody">
                              <img
                                src="./admin_assets/images/dashboard/mc.svg"
                                alt=""
                              />
                              <div>
                                <h6>Visa Ending in 1231</h6>
                                <span className="exp">Expired date 12/24</span>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="payment-card-wrapper">
                  <img
                    src="./admin_assets/images/dashboard/card1.png"
                    alt="card"
                  />
                </div>
                <div className="LR-Form-wrapper payment-process-form">
                  <form action="">
                    <div className="debit-card-wrap">
                      <div className="debit-card-title">
                        <h6>Debit Card</h6>
                        <img
                          src="./admin_assets/images/dashboard/Visa.png"
                          alt="Visa"
                        />
                      </div>
                      <Row>
                        <Col lg={12} md={12}>
                          <div className="form-group">
                            <label htmlFor="control-label">Card Number</label>
                            <input
                              type="number"
                              name="form-control"
                              placeholder="XXXX XXXX XXXX XXXX"
                            />
                          </div>
                        </Col>
                        <Col lg={12} md={12}>
                          <div className="form-group">
                            <label htmlFor="control-label">Expration Date</label>
                            <input type="date" name="form-control" />
                          </div>
                        </Col>
                        <Col lg={12} md={12}>
                          <div className="form-group">
                            <label htmlFor="control-label">Card Holder</label>
                            <input
                              type="text"
                              name="form-control"
                              placeholder="Your name"
                            />
                          </div>
                        </Col>
                        <Col lg={12} md={12}>
                          <div className="form-group">
                            <label htmlFor="control-label">CVC</label>
                            <input
                              type="number"
                              name="form-control"
                              placeholder="CVC"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card-bttm-head">
                <h3>Total Refund</h3>
                <h3>£360</h3>
              </div>

              <div className="card-pay-action-btns">
                <Link
                  to="#"
                  className="cancel-btn"
                  onClick={handleCloseaddpayment}
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="payment-btn"
                  onClick={handleCloseaddpayment}
                >
                  Payment
                </Link>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!--------------------------------- Admin Dashboard Main Payment Processing Pop-up ----------------------------------> */}
        <Modal
          show={showpaymentsucess}
          onHide={handleClosepaymentsucess}
          className="password_modal"
        >
          <ModalBody>
            <div className="pyment-procesw-pop-up">
              <img
                src="./admin_assets/images/Icon.png"
                className="Icon-img"
                alt="Icon-img"
              />
              <div className="alrt-deta">
                <h6>Payment processing...</h6>
                <table>
                  <tr>
                    <td className="td-1">Invoice Number</td>
                    <td className="td-2">INV 123124</td>
                  </tr>
                  <tr>
                    <td className="td-1">Payment Name</td>
                    <td className="td-2">Invoice A</td>
                  </tr>
                  <tr>
                    <td className="td-1">Total Payment</td>
                    <td className="td-2">£360</td>
                  </tr>
                  <tr>
                    <td className="td-1">Status Payment</td>
                    <td className="status-tagbtns">
                      <Link to="#" className="completed-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                        </svg>
                        Completed
                      </Link>
                    </td>
                  </tr>
                </table>

                <div className="alrt-btns">
                  <Link
                    to="#"
                    className="back-btn"
                    onClick={handleClosepaymentsucess}
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!--------------------------------- Admin Dashboard Main Payment Processing Failed Pop-up ----------------------------------> */}
        <Modal
          show={showpaymentfailed}
          onHide={handleClosepaymentfailed}
          className="password_modal"
        >
          <ModalBody>
            <div className="pyment-procesw-pop-up">
              <img
                src="./admin_assets/images/Icon.png"
                className="Icon-img"
                alt="Icon-img"
              />
              <div className="alrt-deta">
                <h6>Payment processing...</h6>
                <table>
                  <tr>
                    <td className="td-1">Invoice Number</td>
                    <td className="td-2">INV 123124</td>
                  </tr>
                  <tr>
                    <td className="td-1">Payment Name</td>
                    <td className="td-2">Invoice A</td>
                  </tr>
                  <tr>
                    <td className="td-1">Total Payment</td>
                    <td className="td-2">£360</td>
                  </tr>
                  <tr>
                    <td className="td-1">Status Payment</td>
                    <td className="status-tagbtns">
                      <Link to="#" className="failed-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4" r="3" fill="white"></circle>
                        </svg>
                        Failed
                      </Link>
                    </td>
                  </tr>
                </table>

                <div className="failed-alert">
                  <img
                    src="./admin_assets/images/Error.png"
                    className="Error-img"
                    alt="Error-img"
                  />
                  <div className="error-data">
                    <h6>Failed to Payment</h6>
                    <p>your payment failed to pay because etc............</p>
                  </div>
                </div>

                <div className="alrt-btns">
                  <Link
                    to="#"
                    className="back-btn"
                    onClick={handleClosepaymentfailed}
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!------------------------------Admin Dashboard Main PCO POPUP----------------------> */}
        <Modal
          show={showunratedvehicle}
          onHide={handleCloseunratedvehicle}
          className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleCloseunratedvehicle}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                  <div className="pco-update">
                    <Link
                      to="#"
                      className="update-btn"
                      onClick={handleShowunratedvehicle_updated}
                    >
                      Update
                    </Link>
                  </div>
                </div>
                <div className="pco-img-txt">
                  <div className="image-text">
                    <img
                      src="./admin_assets/images/image 67.png"
                      className="car-img"
                      alt="car-img"
                    />
                  </div>
                  <div className="img-text-head">
                    <h4>Mercedes-Benz E Class</h4>
                    <h6>Sedan Car</h6>
                  </div>
                  <div className="image-tag">
                    <p>KM19 VUG</p>
                  </div>
                </div>
                <div className="pco-licens">
                  <h5>PCO Licence</h5>
                </div>
                <div className="date-main">
                  <div className="date-txt">
                    <p>Expiry Date</p>
                    <h6>23 May 2024</h6>
                  </div>
                  <div className="expired-date">
                    <Link to="javascript;:" className="yellow-expired-btn">
                      19 Day until Expired
                    </Link>
                  </div>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>PCO Licence</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!------------------------------Admin Dashboard Main PCO UPDATE POPUP----------------------> */}
        <Modal
          show={showunratedvehicle_updated}
          onHide={handleCloseunratedvehicle_updated}
          className="password_modal "
        >
          <ModalBody>
            <div className="pco-pop-up pco-update">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link
                    to="#"
                    onClick={handleCloseunratedvehicle_updated}
                  >
                    <h5>
                      <i className="fas fa-chevron-left"></i> Back to Dashboard
                    </h5>
                  </Link>
                  {/* <div className="pco-update">
              <Link to="#" className="update-btn">Update</Link>
          </div> */}
                </div>
                <div className="pco-img-txt">
                  <div className="image-text">
                    <img
                      src="./admin_assets/images/image 67.png"
                      className="car-img"
                      alt="car-img"
                    />
                  </div>
                  <div className="img-text-head">
                    <h4>Mercedes-Benz E Class</h4>
                    <h6>Sedan Car</h6>
                  </div>
                  <div className="image-tag">
                    <p>KM19 VUG</p>
                  </div>
                </div>
                <div className="pco-licens">
                  <h5>PCO Licence</h5>
                </div>
                <div className="date-main">
                  <div className="date-txt">
                    <p>Expiry Date</p>
                    <h6>23 May 2024</h6>
                  </div>
                  <div className="expired-date">
                    <Link to="javascript;:" className="yellow-expired-btn">
                      7 Days until Expiry
                    </Link>
                  </div>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>PCO Licence</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <form action="" method="">
                  <Row>
                    <Col lg={12} md={12}>
                      <div className="form-group">
                        <label htmlFor="control-label">New Expiry Date</label>
                        <br />
                        <input type="date" name="form-control" placeholder="" />
                      </div>
                    </Col>
                    <Col lg={12} md={12} className=" up-bx">
                      <div className="form-group">
                        <label htmlFor="control-label">
                          Please upload Document
                        </label>
                        <br />
                        <span className="file_cont">
                          <input type="file" name="form-control" />
                          <span>
                            <b>Click to upload</b> or drag and drop Maximum file
                            size 50 MB.
                          </span>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
              <div className="Amend-mot-buttons">
                <Link
                  to="#"
                  className="control-cancel-btn"
                  onClick={handleCloseunratedvehicle_updated}
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="control-save-btn"
                  onClick={handleCloseunratedvehicle_updated}
                >
                  Save
                </Link>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* <!------------------------------Admin Dashboard Main MTO POPUP----------------------> */}
        <Modal
          show={showmot}
          onHide={handleClosemot}
          className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleClosemot}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                  <div className="pco-update">
                    <Link
                      to="#"
                      className="update-btn"
                      onClick={handleShowmot_update}
                    >
                      Update
                    </Link>
                  </div>
                </div>
                <div className="pco-img-txt">
                  <div className="image-text">
                    <img
                      src="./admin_assets/images/image 67.png"
                      className="car-img"
                      alt="car-img"
                    />
                  </div>
                  <div className="img-text-head">
                    <h4>Mercedes-Benz E Class</h4>
                    <h6>Sedan Car</h6>
                  </div>
                  <div className="image-tag">
                    <p>KM19 VUG</p>
                  </div>
                </div>
                <div className="pco-licens">
                  <h5>MOT</h5>
                </div>
                <div className="date-main">
                  <div className="date-txt">
                    <p>Expiry Date</p>
                    <h6>23 May 2024</h6>
                  </div>
                  <div className="expired-date">
                    <Link to="javascript;:" className="yellow-expired-btn">
                      19 Day until Expired
                    </Link>
                  </div>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>MOT</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* <!------------------------------Admin Dashboard Main Amend MOT POPUP----------------------> */}
        <Modal
          show={showmot_update}
          onHide={handleClosemot_update}
          className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up pco-update Amend-mot">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleClosemot_update}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                </div>
                <div className="pco-img-txt">
                  <div className="image-text">
                    <img
                      src="./admin_assets/images/image 67.png"
                      className="car-img"
                      alt="car-img"
                    />
                  </div>
                  <div className="img-text-head">
                    <h4>Mercedes-Benz E Class</h4>
                    <h6>2019</h6>
                  </div>
                  <div className="image-tag">
                    <p>KM19 VUG</p>
                  </div>
                </div>
                <div className="pco-licens">
                  <h5>MOT</h5>
                </div>
                <div className="date-main">
                  <div className="date-txt">
                    <p>Expiry Date</p>
                    <h6>23 May 2024</h6>
                  </div>
                  <div className="expired-date">
                    <Link to="javascript;:" className="yellow-expired-btn">
                      7 Days until Expiry
                    </Link>
                  </div>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>MOT</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <form action="" method="">
                  <Row>
                    <Col lg={12} md={12}>
                      <div className="form-group">
                        <label htmlFor="control-label">New Expiry Date</label>
                        <br />
                        <input type="date" name="form-control" placeholder="" />
                        <span className="warning-pera">
                          <img
                            src="./admin_assets/images/Error.png"
                            alt="warning"
                          />
                          warning: new expiry date should be 6 months from new
                          MOT date
                        </span>
                      </div>
                    </Col>
                    <Col lg={12} md={12} className=" up-bx">
                      <div className="form-group">
                        <label htmlFor="control-label">Upload New MOT</label>
                        <br />
                        <span className="file_cont">
                          <input type="file" name="form-control" />
                          <span>
                            <b>Click to upload</b> or drag and drop Maximum file
                            size 50 MB.
                          </span>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </form>
                <div className="Amend-mot-buttons">
                  <Link
                    to="#"
                    className="control-cancel-btn"
                    onClick={handleClosemot_update}
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="control-save-btn"
                    onClick={handleClosemot_update}
                  >
                    Save
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* <!------------------------------Admin Dashboard Main Driver License POPUP----------------------> */}
        <Modal
          show={show_drivlis}
          onHide={handleClose_drivlis}
          className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up pco-update Amend-mot Driver-pops">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleClose_drivlis}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                </div>
                <div className="driver-update-btn">
                  <Link
                    onClick={handleShow_drivlis_update}
                    to="#"
                    className="update-button"
                  >
                    Update
                  </Link>
                </div>
              </div>
              <div className="driver-main">
                <div className="profile-meta-wrapper user-pro-one-wrapper driver">
                  <div className="profile-meta">
                    <img
                      src="./admin_assets/images/dashboard/Frame 81.png"
                      alt="prfile"
                    />
                    <div>
                      <h4 className="profile-name">Omar Benyoucef</h4>
                      <h6 className="profile-date">Member Since: July 19, 2024</h6>
                    </div>
                  </div>
                  <div className="approved-btnss">
                    <Link to="#" className="Approved-btn">
                      Approved
                    </Link>
                  </div>
                  <form action="" method="">
                    <Row>
                      <Col lg={6} md={6} >
                        <div className="form-group">
                          <label htmlFor="control-label">Email Address</label>
                          <br />
                          <input
                            type="email"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Phone Number</label>
                          <br />
                          <div className="t-flag">
                            <input
                              type="number"
                              name="form-control"
                              placeholder="+44"
                              className="mg0"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="dr-license-head">
                  <h5>Drivers Licence</h5>
                  <form action="" method="">
                    <Row>
                      <Col lg={12} md={12} >
                        <div className="form-group">
                          <label htmlFor="control-label">Name</label>
                          <br />
                          <input
                            type="text"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">License Number</label>
                          <br />
                          <input
                            type="number"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Expiry Date</label>
                          <br />
                          <input
                            type="date"
                            name="form-control"
                            placeholder=""
                          />
                          <div className="expired-date">
                            <Link to="javascript;:" className="yellow-expired-btn">
                              19 Day until Expired
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>Drivers License</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* <!------------------------------Admin Dashboard Main Amend Driver License POPUP----------------------> */}
        <Modal
          show={show_drivlis_update}
          onHide={handleClose_drivlis_update}
          className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up pco-update Amend-mot Driver-pops Amend-driver">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleClose_drivlis_update}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                </div>
              </div>
              <div className="driver-main">
                <div className="profile-meta-wrapper user-pro-one-wrapper driver">
                  <div className="profile-meta">
                    <img
                      src="./admin_assets/images/dashboard/Frame 81.png"
                      alt="prfile"
                    />
                    <div>
                      <h4 className="profile-name">Omar Benyoucef</h4>
                      <h6 className="profile-date">Member Since: July 19, 2024</h6>
                    </div>
                  </div>
                  <div className="approved-btnss">
                    <Link to="#" className="Approved-btn">
                      Approved
                    </Link>
                  </div>
                  <form action="" method="">
                    <Row>
                      <Col lg={6} md={6} >
                        <div className="form-group">
                          <label htmlFor="control-label">Email Address</label>
                          <br />
                          <input
                            type="email"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Phone Number</label>
                          <br />
                          <div className="t-flag">
                            <input
                              type="number"
                              name="form-control"
                              placeholder="+44"
                              className="mg0"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="dr-license-head">
                  <h5>Drivers Licence</h5>
                  <form action="" method="">
                    <Row>
                      <Col lg={12} md={12} >
                        <div className="form-group">
                          <label htmlFor="control-label">Name</label>
                          <br />
                          <input
                            type="text"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">License Number</label>
                          <br />
                          <input
                            type="number"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Expiry Date</label>
                          <br />
                          <input
                            type="date"
                            name="form-control"
                            placeholder=""
                          />
                          <div className="expired-date">
                            <Link
                              to="javascript;:"
                              className="yellow-expired-btn untill-expiry"
                            >
                              7 Days until Expiry
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>Drivers License</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <form action="" method="">
                  <Row>
                    <Col lg={12} md={12} >
                      <div className="form-group">
                        <label htmlFor="control-label">New Expiry Date</label>
                        <br />
                        <input type="date" name="form-control" placeholder="" />
                      </div>
                    </Col>
                    <Col lg={12} md={12} className=" up-bx">
                      <div className="form-group">
                        <label htmlFor="control-label">
                          Upload New Driver License
                        </label>
                        <br />
                        <span className="file_cont">
                          <input type="file" name="form-control" />
                          <span>
                            <b>Click to upload</b> or drag and drop Maximum file
                            size 50 MB.
                          </span>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </form>
                <div className="Amend-mot-buttons">
                  <Link
                    to="#"
                    onClick={handleClose_drivlis_update}
                    className="control-cancel-btn"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    onClick={handleClose_drivlis_update}
                    className="control-save-btn"
                  >
                    Save
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* <!------------------------------Admin Dashboard Main Driver PCO Licence POPUP----------------------> */}
        <Modal
          show={show_pco_driver_lis}
          onHide={handleClose_pco_driver_lis}
          className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up pco-update Amend-mot Driver-pops Amend-driver driver-pco">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleClose_pco_driver_lis}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                </div>
                <div className="driver-update-btn">
                  <Link to="#" className="update-button" onClick={handleShow_pco_driver_lis_update} >
                    Update
                  </Link>
                </div>
              </div>
              <div className="driver-main">
                <div className="profile-meta-wrapper user-pro-one-wrapper driver">
                  <div className="profile-meta">
                    <img
                      src="./admin_assets/images/dashboard/Frame 81.png"
                      alt="prfile"
                    />
                    <div>
                      <h4 className="profile-name">Omar Benyoucef</h4>
                      <h6 className="profile-date">Member Since: July 19, 2024</h6>
                    </div>
                  </div>
                  <div className="approved-btnss">
                    <Link to="#" className="Approved-btn">
                      Approved
                    </Link>
                  </div>
                  <form action="" method="">
                    <Row>
                      <Col lg={6} md={6} >
                        <div className="form-group">
                          <label htmlFor="control-label">Email Address</label>
                          <br />
                          <input
                            type="email"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Phone Number</label>
                          <br />
                          <div className="t-flag">
                            <input
                              type="number"
                              name="form-control"
                              placeholder="+44"
                              className="mg0"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="dr-license-head">
                  <h5>Drivers PCO Licence</h5>
                  <form action="" method="">
                    <Row>
                      <Col lg={12} md={12} >
                        <div className="form-group">
                          <label htmlFor="control-label">Name</label>
                          <br />
                          <input
                            type="text"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">PCO License Number</label>
                          <br />
                          <input
                            type="number"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Expiry Date</label>
                          <br />
                          <input
                            type="date"
                            name="form-control"
                            placeholder=""
                          />
                          <div className="expired-date">
                            <Link to="javascript;:" className="yellow-expired-btn">
                              19 Day until Expired
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>Drivers PCO Licence</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>Drivers PCO Badge</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* <!------------------------------Admin Dashboard Main Amend Driver  PCOLicence POPUP----------------------> */}
        <Modal
        show={show_pco_driver_lis_update}
        onHide={handleClose_pco_driver_lis_update}
        className="password_modal"
        >
          <ModalBody>
            <div className="pco-pop-up pco-update Amend-mot Driver-pops Amend-driver driver-pco Amend-driver-Pco-licence">
              <div className="pco-txt">
                <div className="pco-head">
                  <Link to="#" onClick={handleClose_pco_driver_lis_update}>
                    <h5>
                      <i className="fas fa-chevron-left"></i>Back to Dashboard
                    </h5>
                  </Link>
                </div>
              </div>
              <div className="driver-main">
                <div className="profile-meta-wrapper user-pro-one-wrapper driver">
                  <div className="profile-meta">
                    <img
                      src="./admin_assets/images/dashboard/Frame 81.png"
                      alt="prfile"
                    />
                    <div>
                      <h4 className="profile-name">Omar Benyoucef</h4>
                      <h6 className="profile-date">Member Since: July 19, 2024</h6>
                    </div>
                  </div>
                  <div className="approved-btnss">
                    <Link to="#" className="Approved-btn">
                      Approved
                    </Link>
                  </div>
                  <form action="" method="">
                    <Row>
                      <Col lg={6} md={6} >
                        <div className="form-group">
                          <label htmlFor="control-label">Email Address</label>
                          <br />
                          <input
                            type="email"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Phone Number</label>
                          <br />
                          <div className="t-flag">
                            <input
                              type="number"
                              name="form-control"
                              placeholder="+44"
                              className="mg0"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="dr-license-head">
                  <h5>Drivers PCO Licence</h5>
                  <form action="" method="">
                    <Row>
                      <Col lg={12} md={12} >
                        <div className="form-group">
                          <label htmlFor="control-label">Name</label>
                          <br />
                          <input
                            type="text"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">License Number</label>
                          <br />
                          <input
                            type="number"
                            name="form-control"
                            placeholder=""
                          />
                        </div>
                      </Col>
                      <Col lg={12} md={12} className=" up-bx">
                        <div className="form-group">
                          <label htmlFor="control-label">Expiry Date</label>
                          <br />
                          <input
                            type="date"
                            name="form-control"
                            placeholder=""
                          />
                          <div className="expired-date">
                            <Link
                              to="javascript;:"
                              className="yellow-expired-btn untill-expiry"
                            >
                              7 Days until Expiry
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>Drivers PCO Licence</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rental-vehicle-docs-wrap contract-doc user-pro-doc">
                  <ul className="rental-files contract-files">
                    <li>
                      <img
                        src="./admin_assets/images/Frame 2085663522.png"
                        alt="Docs"
                      />
                      <div>
                        <h6>Drivers PCO Badge</h6>
                        <span>3.6 MB</span>
                      </div>
                      <Link to="#" className="View-btn">
                        View
                      </Link>
                      <Link to="#" className="down-btn">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <form action="" method="">
                  <Row>
                    <Col lg={12} md={12} >
                      <div className="form-group">
                        <label htmlFor="control-label">New Expiry Date</label>
                        <br />
                        <input type="date" name="form-control" placeholder="" />
                      </div>
                    </Col>
                    <Col lg={12} md={12} className=" up-bx">
                      <div className="form-group">
                        <label htmlFor="control-label">
                          Upload Drivers PCO License
                        </label>
                        <br />
                        <span className="file_cont">
                          <input type="file" name="form-control" />
                          <span>
                            <b>Click to upload</b> or drag and drop Maximum file
                            size 50 MB.
                          </span>
                        </span>
                      </div>
                    </Col>
                    <Col lg={12} md={12} className=" up-bx">
                      <div className="form-group">
                        <label htmlFor="control-label">
                          Upload Drivers PCO Badge
                        </label>
                        <br />
                        <span className="file_cont">
                          <input type="file" name="form-control" />
                          <span>
                            <b>Click to upload</b> or drag and drop Maximum file
                            size 50 MB.
                          </span>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </form>
                <div className="Amend-mot-buttons">
                  <Link to="#" onClick={handleClose_pco_driver_lis_update} className="control-cancel-btn">
                    Cancel
                  </Link>
                  <Link to="#" onClick={handleClose_pco_driver_lis_update} className="control-save-btn">
                    Save
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
}

export default Admindashboardmain;
