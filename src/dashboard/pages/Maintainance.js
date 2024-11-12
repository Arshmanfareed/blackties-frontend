import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import DashboardSidebar from '../partials/dashboard-sidebar'

function Maintainance() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isAppointmentActive, setIsAppointmentActive] = useState(true);

    // Toggle the display of the booking details option menu
    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuVisible(!isMenuVisible);
    };

    // Close the menu if clicked outside
    const handleClickOutside = (event) => {
        if (!event.target.closest(".BD-option-toggle") && !event.target.closest(".BD-option-menu")) {
            setIsMenuVisible(false);
        }
    };

    useEffect(() => {
        // Attach click event listener to handle clicks outside the menu
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Toggle appointment visibility
    const toggleAppointmentBody = () => {
        setIsAppointmentActive(!isAppointmentActive);
    };

    return (
        <>
            <section className="user-dashboard">
                <div className={`Book-Appointment-body ${isAppointmentActive ? 'active' : ''}`}>
                    <div className="Book-Appointment-form">
                        <Form action="" method="post">
                            <Row className="row">
                                <Col lg={6} md={3}>
                                    <h6>Book Appointment</h6>
                                </Col>
                                <Col lg={6} md={3} className="close-icon-col">
                                    <ion-icon name="close-outline" className="close-icon" onClick={toggleAppointmentBody}></ion-icon>
                                </Col>
                                <Col lg={12} md={12}>
                                    <label htmlFor="label-control">Date of Book</label><br/>
                                    <input type="date" name="control-form" id=""/>
                                </Col>
                                <Col lg={12} md={12}>
                                    <label htmlFor="label-control">Time</label><br/>
                                    <input type="time" name="control-form" id=""/>
                                </Col>
                                <Col lg={12} md={12}>
                                    <label htmlFor="location">Location</label><br/>
                                    <select id="location">
                                        <option value="london">London</option>
                                        <option value="Lorem1">Lorem1</option>
                                        <option value="Lorem2">Lorem2</option>
                                        <option value="Lorem3">Lorem3</option>
                                    </select>
                                </Col>
                                <Col md={6} lg={6}>
                                    <button type="button" className="theme-btn7 cancelAppoit-btn" id="cancelAppoit" onClick={toggleAppointmentBody}>Cancel</button>
                                </Col>
                                <Col md={6} lg={6}>
                                    <button type="submit" className="theme-btn6">Submit</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>

                <Container fluid>
                    <Row className="g-0">
                        <Col lg={3} md={3} className="sidebar-col">
                            <DashboardSidebar />
                        </Col>
                        <Col lg={9} md={9} className="panel-col">
                            <div className="dashboard-panel maintenance-panel">
                                <Row>
                                    <Col lg={12} md={12}>
                                        <div className="dashboard-panel-topbar"></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} md={12}>
                                        <div className="maintenance-sec db-default-sec">
                                            <div className="maintenance-card db-default-wrapper">
                                                <Row>
                                                    <Col lg={12} md={12}>
                                                        <div className="search-bar-wrapper">
                                                            <h5 className="theme-h5">Maintenance</h5>
                                                            <div>
                                                                <div className="search-bar-v1">
                                                                    <button type="submit"><i className="fa fa-search"></i></button>
                                                                    <input type="text" placeholder="Search here..."/>
                                                                </div>
                                                                <a href="javascript:;" className="filter-v1">Filter <img src="./assets/images/Tuning.svg" alt=""/></a>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={12} md={12}>
                                                        <div style={{ overflowX: 'auto' }}>
                                                            <table className="maintenance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="first-th">Description <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                                        <th>Due Date</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="first-td">MOT</td>
                                                                        <td>July 31, 2024</td>
                                                                        <td className="tb-btn1"><a href="javascript:;">Book Vehicle</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="first-td">Servicing</td>
                                                                        <td>July 21, 2024</td>
                                                                        <td className="tb-btn1"><a href="javascript:;">Book Vehicle</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="row">
                                                    <Col lg={12} md={12}>
                                                        <h5 className="theme-h5">Booking Details</h5>
                                                        <div style={{ overflowX: 'auto' }}>
                                                            <table className="maintenance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="first-th">Booking Number <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                                        <th>Maintenance Type</th>
                                                                        <th>Location</th>
                                                                        <th>Date</th>
                                                                        <th>Time</th>
                                                                        <th>...</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="first-td">0839</td>
                                                                        <td>MOT</td>
                                                                        <td>London</td>
                                                                        <td>July 31, 2024</td>
                                                                        <td>09:00</td>
                                                                        <td className="tb-btn2">
                                                                            <a href="javascript:;" className="BD-option-toggle" onClick={toggleMenu}>
                                                                                <i class="fa-solid fa-ellipsis-vertical"></i><ion-icon name="ellipsis-vertical"></ion-icon>
                                                                            </a>
                                                                            <div className="booking-detail-options BD-option-menu" style={{ display: isMenuVisible ? 'block' : 'none' }}>
                                                                                <ul>
                                                                                    <li><a href="javascript:;" className="view" id="BD_view" onClick={toggleAppointmentBody}><i class="fa-regular fa-eye"></i>View</a></li>
                                                                                    <li><a href="javascript:;" className="cancel"><i class="fa-solid fa-xmark"></i>Cancel</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="first-td">0838</td>
                                                                        <td>Servicing</td>
                                                                        <td>London</td>
                                                                        <td>July 21, 2024</td>
                                                                        <td>09:00</td>
                                                                        <td className="tb-btn2">
                                                                            <a href="javascript:;"><i class="fa-solid fa-ellipsis-vertical"></i><ion-icon name="ellipsis-vertical"></ion-icon></a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Col>
                                                </div>
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

export default Maintainance;
