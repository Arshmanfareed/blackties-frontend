import React, { useState } from "react";
import DashboardSidebar from "../partials/dashboard-sidebar";
import { Form } from "react-bootstrap";
import CanvasSection from "../components/CanvasSec";
import DocumentSignatureForm from "../components/CanvasSec";
import SignatureUpload from "../components/CanvasSec";
import { Link } from "react-router-dom";

function RentCar() {
    const [isActive, setIsActive] = useState(false);
      // Toggle form visibility
  const toggleForm = () => {
    setIsActive(!isActive);
  };
 // Conditionally set the display property based on isActive state
 const formContainerStyle = {
    display: isActive ? 'block' : 'none', // Show or hide based on isActive
  };
  return (
    <>
      <section className="user-dashboard">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-lg-3 col-md-3 sidebar-col">
              <DashboardSidebar />
            </div>
            <div className="col-lg-9 col-md-9 panel-col">
              <div className="dashboard-panel rent-car-panel">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="dashboard-panel-topbar"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="rent-car-sec db-default-sec">
                      <div className="rent-car-card db-default-wrapper">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="row back-to-sec">
                              <div className="col-lg-12 col-md-12">
                                <Link to="/rent-our-vehicle" className="back-to">
                                <i class="fa-solid fa-angle-left"></i>{" "}
                                  Back to Our Vehicles
                                </Link>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="detailCar-slider owl-carousel owl-theme">
                                  <div data-item="item1" className="item">
                                    <img
                                      src="./assets/images/slider/image 67.png"
                                      alt=""
                                    />
                                  </div>
                                  <div data-item="item2" className="item">
                                    <img
                                      src="./assets/images/slider/image346.png"
                                      alt=""
                                    />
                                  </div>
                                  <div data-item="item3" className="item">
                                    <img
                                      src="./assets/images/slider/image 66.png"
                                      alt=""
                                    />
                                  </div>
                                  <div data-item="item4" className="item">
                                    <img
                                      src="./assets/images/slider/image 68.png"
                                      alt=""
                                    />
                                  </div>
                                  <div data-item="item5" className="item">
                                    <img
                                      src="./assets/images/slider/image 67.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="detailCar-slide-controller">
                                  <ul>
                                    <li id="item1" className="slide-active">
                                      <img
                                        src="./assets/images/slider/image 67.png"
                                        alt=""
                                      />
                                    </li>
                                    <li id="item2">
                                      <img
                                        src="./assets/images/slider/image 65.png"
                                        alt=""
                                      />
                                    </li>
                                    <li id="item3">
                                      <img
                                        src="./assets/images/slider/image 66.png"
                                        alt=""
                                      />
                                    </li>
                                    <li id="item4">
                                      <img
                                        src="./assets/images/slider/image 68.png"
                                        alt=""
                                      />
                                    </li>
                                    <li id="item5">
                                      <img
                                        src="./assets/images/slider/image 67.png"
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="detail-car-ptag">
                                  <div>
                                    <div className="stock-dis">
                                      <span className="able">
                                        <ion-icon name="ellipse"></ion-icon>{" "}
                                        Available Now
                                      </span>
                                    </div>
                                    <h4 className="theme-h6 product-title">
                                      Mercedes E220
                                    </h4>
                                    <div className="product-id">
                                      <h6>VH12893719HJFHJ</h6>
                                    </div>
                                  </div>
                                  <div className="product-act">
                                    <h6 className="price">
                                      £280.00 /{" "}
                                      <span className="limits">week</span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row car-discription">
                              <div className="col-lg-12 col-md-12">
                                <h4 className="theme-h5">Car Description</h4>
                                <p className="theme-p3">
                                  At London Riders, we offer PCO car hire
                                  services that are designed to meet your needs.
                                  Whether you're an Uber driver looking to
                                  provide a premium service to your passengers,
                                  or you simply want to drive a luxurious car,
                                  the E Class Mercedes is the perfect choice.
                                </p>
                              </div>
                            </div>
                            <div className="row car-features d-flex justify-content-between">
                              <div className="col-lg-2 col-md-2">
                                <div className="car-features-boxes">
                                  <img
                                    src="./assets/images/Frame1.png"
                                    alt=""
                                  />
                                  <h6>Saloon</h6>
                                </div>
                              </div>
                              <div className="col-lg-2 col-md-2">
                                <div className="car-features-boxes">
                                  <img
                                    src="./assets/images/Frame2.png"
                                    alt=""
                                  />
                                  <h6>⁠Diesel Hybrid</h6>
                                </div>
                              </div>
                              <div className="col-lg-2 col-md-2">
                                <div className="car-features-boxes">
                                  <img
                                    src="./assets/images/Frame3.png"
                                    alt=""
                                  />
                                  <h6>5 People</h6>
                                </div>
                              </div>
                              <div className="col-lg-2 col-md-2">
                                <div className="car-features-boxes">
                                  <img
                                    src="./assets/images/Frame4.png"
                                    alt=""
                                  />
                                  <h6>Automatic</h6>
                                </div>
                              </div>
                              <div className="col-lg-2 col-md-2">
                                <div className="car-features-boxes">
                                  <img
                                    src="./assets/images/Frame5.png"
                                    alt=""
                                  />
                                  <h6>40 mpg</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="stepwizard">
                              <div className="stepwizard-row setup-panel steps">
                                <ul>
                                  <li>
                                    <div className="stepwizard-step">
                                      <span
                                        href="#step-1"
                                        type="button"
                                        className="btn btn-circle"
                                      >
                                        1
                                      </span>
                                      <p>Information</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="stepwizard-step">
                                      <span
                                        href="#step-2"
                                        type="button"
                                        className="btn btn-circle"
                                        disabled="disabled"
                                      >
                                        2
                                      </span>
                                      <p>Option</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="stepwizard-step">
                                      <span
                                        href="#step-3"
                                        type="button"
                                        className="btn btn-circle"
                                        disabled="disabled"
                                      >
                                        3
                                      </span>
                                      <p>Deposit</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="stepwizard-step">
                                      <span
                                        href="#step-4"
                                        type="button"
                                        className="btn btn-circle"
                                        disabled="disabled"
                                      >
                                        4
                                      </span>
                                      <p>Contract</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="stepwizard-step">
                                      <span
                                        href="#step-5"
                                        type="button"
                                        className="btn btn-circle"
                                        disabled="disabled"
                                      >
                                        4
                                      </span>
                                      <p>Contract</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="LR-Form-wrapper rent-car-form-wrapper">
                              <Form className="" >
                              {/* <!-- step 1 --> */}
                              <div
                                className="row  setup-content form-container active" style={formContainerStyle}
                                id="step-1"
                              >
                                <div className="col-lg-12 col-md-12 rent-car-info-col">
                                  <h4 className="theme-h5">Information</h4>
                                  <p>
                                    To secure your vehicle and ensure a smooth
                                    rental experience, we require a fully
                                    refundable holding deposit of £500.00. This
                                    deposit allows us to reserve the vehicle for
                                    you and helps cover any potential damages or
                                    outstanding balances.{" "}
                                  </p>
                                  <p>
                                    Rest assured, your deposit is safe: it will
                                    be returned at the end of the rental period,
                                    provided there are no additional charges, or
                                    if you decide not to proceed with the rental
                                    at the time of viewing.{" "}
                                  </p>
                                  <p>
                                    Before confirming your rental, you will have
                                    the opportunity to review and sign the
                                    contract, as well as complete a detailed
                                    damage report, including photos and videos
                                    to document the vehicle’s condition.{" "}
                                  </p>
                                  <p>
                                    Our goal is to provide peace of mind, so you
                                    can proceed with confidence, knowing that
                                    your deposit is protected and the process is
                                    fully transparent.
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="theme-btn6 nextBtn mt-5"
                                >
                                  Next
                                </button>
                              </div>
                              {/* <!-- step 2 --> */}
                              <div
                                className="row setup-content form-container" style={formContainerStyle}
                                id="step-2"
                              >
                                <div className="col-lg-12 col-md-12 info-alert-col">
                                  <h4 className="theme-h5">Option</h4>
                                  <div className="form-group check-switch-group">
                                    <label htmlFor="control-label">Dashcam</label>
                                    <div className="checkboxes__item">
                                      <label className="checkbox style-e">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body label">
                                          No
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="alert-info-box">
                                    <div>
                                      <img
                                        src="./assets/images/dashboard/Info circle.svg"
                                        alt="Info"
                                      />
                                    </div>
                                    <div>
                                      <h6>Informative </h6>
                                      <p>
                                        Dashcams come standard on our fleet and
                                        will capture both the interior and
                                        exterior of the vehicle. This is to
                                        ensure that in the event of an incident,
                                        we have your back covered. These can be
                                        removed at a fee of £10.00 a week
                                      </p>
                                    </div>
                                  </div>
                                  <div className="fee">
                                    <h6>Dashcam Fee</h6>
                                    <h5>£0.00</h5>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 info-alert-col">
                                  <div className="form-group check-switch-group">
                                    <label htmlFor="control-label">Deposit</label>
                                    <div className="checkboxes__item">
                                      <label className="checkbox style-e">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body label">
                                          No
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="alert-info-box">
                                    <div>
                                      <img
                                        src="./assets/images/dashboard/Info circle.svg"
                                        alt="Info"
                                      />
                                    </div>
                                    <div>
                                      <h6>Informative </h6>
                                      <p>
                                        A deposit is held for the safety of our
                                        business. However, we have the ability
                                        to remove a deposit at a higher weekly
                                        rate. This does not absolve your
                                        liability to damages on the vehicle, but
                                        will make your life easier
                                      </p>
                                    </div>
                                  </div>
                                  <div className="fee">
                                    <h6>Deposit Fee</h6>
                                    <h5>£0.00</h5>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 info-alert-col">
                                  <div className="form-group check-switch-group">
                                    <label htmlFor="control-label">PCNs</label>
                                    <div className="checkboxes__item">
                                      <label className="checkbox style-e">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body label">
                                          No
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="alert-info-box">
                                    <div>
                                      <img
                                        src="./assets/images/dashboard/Info circle.svg"
                                        alt="Info"
                                      />
                                    </div>
                                    <div>
                                      <h6>Informative </h6>
                                      <p>
                                        We will remove any fees regarding PCNs
                                        that arise
                                      </p>
                                    </div>
                                  </div>
                                  <div className="fee">
                                    <h6>PCNs Flat Fee</h6>
                                    <h5>£50</h5>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="fee-summary-wrap">
                                    <h4 className="theme-h5">Summary</h4>
                                    <div className="fee">
                                      <h6>Dashcam fee</h6>
                                      <h5>£0.00</h5>
                                    </div>
                                    <div className="fee">
                                      <h6>Deposit fee</h6>
                                      <h5>£0.00</h5>
                                    </div>
                                    <div className="fee">
                                      <h6>PCNs</h6>
                                      <h5>£50</h5>
                                    </div>
                                  </div>
                                  <div className="total-fee">
                                    <h5>Total</h5>
                                    <h5>£50</h5>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="NextPrev-btn-wrap">
                                    <button
                                      type="button"
                                      className="theme-btn6 prevBtn"
                                    >
                                      Back
                                    </button>
                                    <button
                                      type="button"
                                      className="theme-btn6 nextBtn"
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- step 3 --> */}
                              <div
                                className="row setup-content form-container" style={formContainerStyle}
                                id="step-3"
                              >
                                <div className="col-lg-12 col-md-12">
                                  <div className="pay-mathod-title">
                                    <h4 className="theme-h5">Payment Method</h4>
                                    <p>
                                      Please deposit before you can rental car
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="debit-card-wrap">
                                    <div className="debit-card-title">
                                      <h6>Debit Card</h6>
                                      <img
                                        src="./assets/images/dashboard/Visa.png"
                                        alt="Visa"
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Card Number
                                          </label>
                                          <input
                                            type="number"
                                            name="form-control"
                                            placeholder="XXXX XXXX XXXX XXXX"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Expration Date
                                          </label>
                                          <input
                                            type="date"
                                            name="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="control-label">
                                            Card Holder
                                          </label>
                                          <input
                                            type="text"
                                            name="form-control"
                                            placeholder="Your name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="control-label">CVC</label>
                                          <input
                                            type="number"
                                            name="form-control"
                                            placeholder="CVC"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="NextPrev-btn-wrap">
                                    <button
                                      type="button"
                                      className="theme-btn6 prevBtn"
                                    >
                                      Back
                                    </button>
                                    <button
                                      type="button"
                                      className="theme-btn6 nextBtn"
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- step 4 --> */}
                              <div
                                className="row setup-content form-container" style={formContainerStyle}
                                id="step-4"
                              >
                                <div className="col-lg-12 col-md-12">
                                  <h4 className="theme-h5 ct">Contract</h4>
                                  <div className="file-download-boxes">
                                    <div className="fdb-title-wrap">
                                      <h5 className="theme-h5">
                                        Damage Report
                                      </h5>
                                      <img
                                        src="./assets/images/dashboard/document23423.svg"
                                        alt="Document"
                                      />
                                    </div>
                                    <div className="fdb-action-wrap">
                                      <p>
                                        At London Riders, we offer PCO car hire
                                        services that are designed to meet your
                                        needs.
                                      </p>
                                      <Link
to="#" onClick={(e) => e.preventDefault()}
                                        className="theme-btn3"
                                      >
                                        Download
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="file-download-boxes">
                                    <div className="fdb-title-wrap">
                                      <h5 className="theme-h5">Contract</h5>
                                      <img
                                        src="./assets/images/dashboard/document23423.svg"
                                        alt="Document"
                                      />
                                    </div>
                                    <div className="fdb-action-wrap">
                                      <p>
                                        At London Riders, we offer PCO car hire
                                        services that are designed to meet your
                                        needs.
                                      </p>
                                      <Link
to="#" onClick={(e) => e.preventDefault()}
                                        className="theme-btn3"
                                      >
                                        Download
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <SignatureUpload/>
                                {/* <div className="col-lg-12 col-md-12">
                                  <label htmlFor="label-control">
                                    Upload Document
                                  </label>
                                  <div className="row file-upload-wrap">
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 upload_img_preview_wrapper">
                                      <div className="upload-file-group">
                                        <input
                                          disabled
                                          type="file"
                                          name="form-control"
                                          className="upload_img_preview"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="signature-wrapper">
                                    <label htmlFor="label-control">Signature</label>
                                    <div id="signature">
                                      <canvas width="680" height="285"></canvas>
                                      <div className="controls">
                                        <Link
to="#" onClick={(e) => e.preventDefault()}
                                          id="clearSig"
                                        >
                                          <img
                                            src="./assets/images/dashboard/ph_eraser-fill.png"
                                            alt=""
                                          />
                                        </Link>
                                        <Link
to="#" onClick={(e) => e.preventDefault()}
                                          id="disable_pen"
                                          data-disable="true"
                                        >
                                          <img
                                            src="./assets/images/dashboard/mingcute_signature-line.svg"
                                            alt=""
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                <div className="col-lg-12 col-md-12">
                                  <div className="NextPrev-btn-wrap sign-btn-wrap">
                                    <button
                                      type="button"
                                      className="theme-btn6 prevBtn"
                                    >
                                      Back
                                    </button>
                                    <button
                                      type="button"
                                      className="theme-btn6 nextBtn"
                                      id="download"
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- final step --> */}
                              <div
                                className="row setup-content form-container" style={formContainerStyle}
                                id="step-5"
                              >
                                <div className="col-lg-12 col-md-12">
                                  <div className="appcation-approval-wrap">
                                    <div className="approve-status">
                                      <img
                                        src="./assets/images/dashboard/icon-park-solid_success.svg"
                                        alt="success"
                                      />
                                      <h2>Congratulations! 🎉</h2>
                                    </div>
                                    <div className="approve-msg">
                                      <p>
                                        We’re excited to have you as part of the
                                        Blackties family. Your vehicle is ready
                                        and waiting for you. You can now track
                                        your rental, manage mileage, and access
                                        all the important details through your
                                        personal dashboard.
                                      </p>
                                      <p>
                                        If you have any questions or need
                                        assistance, our support team is here for
                                        you 24/7.
                                      </p>
                                      <p>
                                        Drive safely, and enjoy your journey
                                        with Blackties!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 rent-car-approved">
                                  <button className="theme-btn6" type="submit">
                                    View my Vehicle
                                  </button>
                                </div>
                              </div>
                            </Form>
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

export default RentCar;
