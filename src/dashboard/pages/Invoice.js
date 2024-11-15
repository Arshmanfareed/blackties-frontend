import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardSidebar from "../partials/dashboard-sidebar";
import { Link } from "react-router-dom";
import DashboardPanelTopbar from "../components/DashboardPanelTopbar";

function Invoice() {
  // // State to track the active dropdown menu for each row
  // const [activeRowIndex, setActiveRowIndex] = useState(null);
  // const invoiceOptionMenuRefs = useRef([]);

  // // Toggle the visibility of the dropdown menu for a specific row
  // const toggleMenu = (index, event) => {
  //   event.stopPropagation();
  //   setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  // // Close the menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (invoiceOptionMenuRefs.current) {
  //       const isClickOutside = invoiceOptionMenuRefs.current.every(
  //         (menuRef, index) => {
  //           return !menuRef.contains(event.target) && activeRowIndex !== index;
  //         }
  //       );
  //       if (isClickOutside) {
  //         setActiveRowIndex(null);
  //       }
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [activeRowIndex]);

  // // Sample data for invoices (you can replace it with actual data)
  // const invoiceData = [
  //   { orderNumber: '001', subject: 'Rental - Mercedes-Benz E class', customerName: 'Omar Benyoucef', email: 'sample@gmail.com', total: '£360', dueDate: 'July 31, 2024', status: 'Refunded' },
  //   { orderNumber: '002', subject: 'Rental - BMW X5', customerName: 'John Doe', email: 'john@gmail.com', total: '£450', dueDate: 'August 5, 2024', status: 'Completed' },
  //   { orderNumber: '001', subject: 'Rental - Mercedes-Benz E class', customerName: 'Omar Benyoucef', email: 'sample@gmail.com', total: '£360', dueDate: 'July 31, 2024', status: 'Refunded' },
  //   { orderNumber: '002', subject: 'Rental - BMW X5', customerName: 'John Doe', email: 'john@gmail.com', total: '£450', dueDate: 'August 5, 2024', status: 'Completed' },
  //   { orderNumber: '003', subject: 'Rental - Audi Q7', customerName: 'Jane Doe', email: 'jane@gmail.com', total: '£400', dueDate: 'August 12, 2024', status: 'Postponed' },
  //   // Add more invoice entries here
  // ];

  return (
    <>
      {/* <section className="user-dashboard">
        <Container fluid>
          <Row className="row g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <DashboardSidebar />
            </Col>
            <Col lg={9} md={9} className="panel-col">
              <div className="dashboard-panel penalty-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar"></div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="penalty-sec db-default-sec">
                      <div className="penalty-card db-default-wrapper">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="invoice-topbar-wrap">
                              <h5 className="theme-h5">Invoice</h5>
                              <input type="week" name="weekly" id="weekly" />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div >
                              <table className="maintenance-table">
                                <thead>
                                  <tr>
                                    <th className="first-th">Order Number</th>
                                    <th className="first-th">
                                      Subject <ion-icon name="arrow-down-outline"></ion-icon>
                                    </th>
                                    <th>Customer Name</th>
                                    <th>Billing to</th>
                                    <th>Total Amount</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {invoiceData.map((invoice, index) => (
                                    <tr key={index}>
                                      <td>{invoice.orderNumber}</td>
                                      <td className="first-td">{invoice.subject}</td>
                                      <td>{invoice.customerName}</td>
                                      <td>{invoice.email}</td>
                                      <td>{invoice.total}</td>
                                      <td>{invoice.dueDate}</td>
                                      <td 
                                       className={
                                        invoice.status === 'Completed'
                                          ? 'invoice-complete'
                                          : invoice.status === 'Refunded'
                                          ? 'invoice-refund'
                                          : invoice.status === 'Postponed'
                                          ? 'invoice-refund'
                                          : ''
                                      }>
                                        <span>
                                          <ion-icon name="ellipse"></ion-icon>{' '}
                                          {invoice.status}
                                        </span>
                                      </td>
                                      <td className="tb-btn2">
                                        <Link
                                          className="invoice-option-toggle"
                                          to="#"
                                          onClick={(event) => toggleMenu(index, event)}
                                        >
                                          <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </Link>
                                        <div
                                          className="invoice-options invoice-option-menu"
                                          style={{
                                            display: activeRowIndex === index ? 'block' : 'none',
                                          }}
                                          ref={(el) => (invoiceOptionMenuRefs.current[index] = el)}
                                        >
                                          <ul>
                                            <li>
                                              <Link to="/failed-pay" className="invoice-view">
                                                <ion-icon name="eye-outline"></ion-icon>View
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="#" className="invoice-delete">
                                                <ion-icon name="trash-outline"></ion-icon>Delete
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12} md={12}>
                            <div className="invoice-order-pagination">
                              <div className="pagination-indicator">
                                <h6>
                                  page <span className="initail">1</span> to <span className="total">10</span>
                                </h6>
                              </div>
                              <div className="pagination-nav">
                                <Link to="#" className="pg-prev">
                                  Previous
                                </Link>
                                <Link to="#" className="pg-next">
                                  Next
                                </Link>
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
      </section> */}

<section class="user-dashboard">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
                <DashboardSidebar/>
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel invoice-view-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="dashboard-panel-topbar">
                               <DashboardPanelTopbar/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="outsatanding-main">
                            <div class="outstanding-bx">
                                <div class="outstanding-txt">
                                    <h4>Outstanding Balance</h4>
                                    <h3>£2.000</h3>
                                </div>
                            </div>
                            <div class="outstanding-tble-one">
                                <div class="tble-one-head">
                                    <h5>Refunded Invoices</h5>
                                </div>
                                <table class="maintenance-table ds-table table-main">
                                    <thead>
                                        <tr>
                                            <th>Invoice Number</th>
                                            <th>Date of Invoice</th>
                                            <th>Time of Invoice</th>
                                            <th>Amount Due</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th class="lst-hed"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-data">
                                           <td>001</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Refunded</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="outstanding-tble-one outstanding-tble-two">
                                <div class="tble-one-head">
                                    <h5>Unpaid Invoices</h5>
                                </div>
                                <table class="maintenance-table ds-table table-main">
                                    <thead>
                                        <tr>
                                            <th>Invoice Number</th>
                                            <th>Date of Invoice</th>
                                            <th>Time of Invoice</th>
                                            <th>Amount Due</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th class="lst-hed"></th>
                                            <th class="lst-hed"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-data">
                                           <td>001</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Failed</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                            <td><a href="javascript:;">pay</a></td>
                                        </tr>
                                        <tr class="table-data">
                                           <td>002</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Failed</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                            <td><a href="javascript:;">pay</a></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div class="outstanding-tble-one outstanding-tble-three">
                                <div class="tble-one-head tabl-four">
                                    <h5>Paid Invoices</h5>
                                    <div class="weekly-txt">
                                        <h6><a href="javascript:;">Weekly<i class="fas fa-chevron-down"></i></a></h6>
                                    </div>
                                    <div class="file-uploader">
                                        <a href="javascript:;"><img src="./assets/images/uploader.png" alt="Uploader"/></a>   
                                    </div>
                                    <div class="search-bar-v1">
                                        <button type="submit"><i class="fa fa-search"></i></button>
                                        <input type="text" placeholder="Search here..."/>
                                    </div>
                                </div>
                                <table class="maintenance-table ds-table table-main">
                                    <thead>
                                        <tr>
                                            <th>Invoice Number</th>
                                            <th>Date of Invoice</th>
                                            <th>Time of Invoice</th>
                                            <th>Amount Due</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th class="lst-hed"></th>
                                            <th class="lst-hed"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-data">
                                            <td>001</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Completed</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                        </tr>
                                        <tr class="table-data">
                                            <td>002</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Completed</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                        </tr>
                                        <tr class="table-data">
                                            <td>003</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Completed</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                        </tr>
                                        <tr class="table-data">
                                            <td>004</td>
                                            <td>July 31, 2024</td>
                                            <td>10:00 </td>
                                            <td>£360</td>
                                            <td><a href="javascript:;">Completed</a></td>
                                            <td><a href="javascript:;">View</a></td>
                                            <td><a href="javascript:;">Download</a></td>
                                        </tr>
                                    </tbody>

                                </table>
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="invoice-order-pagination">
                                    <div class="pagination-indicator">
                                        <h6>page <span class="initail">1</span> to <span class="total">10</span></h6>
                                    </div>
                                    <div class="pagination-nav">
                                        <a href="javascript:;" class="pg-prev">Previous</a>
                                        <a href="javascript:;" class="pg-next">Next</a>
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
</section>
    </>
  );
}

export default Invoice;
