import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Driverscore() {
  return (
    <>
      <section className="user-dashboard">
    <Container fluid >
        <Row className="g-0">
            <Col lg={3} md={3} className="sidebar-col">
               <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel driver-score-panel">
                    <Row >
                        <Col lg={12} md={12}>
                            <div className="dashboard-panel-topbar">
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={12} md={12}>
                            <div className="driver-score-sec db-default-sec">
                                <div className="driver-score-card db-default-wrapper">
                                    <Row >
                                        <Col lg={12} md={12}>
                                            <div className="search-bar-wrapper">
                                                <h5 className="theme-h5">Driver Score</h5>
                                                <div>
                                                    <div className="search-bar-v1">
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                    <Link to="#" className="filter-v1">Filter <img src="./assets/images/Tuning.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col lg={12} md={12}>
                                            <div style={{overflowX:'auto'}}>
                                                <table className="maintenance-table ds-table">
                                                    <thead>
                                                        <tr>
                                                            <th rowspan="2">Date <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                            <th rowspan="2">Distance<br/>Travelled<br/>(Miles)</th>
                                                            <th colspan="2" className="th-center">Hard Braking</th>
                                                            <th colspan="2"className="th-center">Quick Starts</th>
                                                            <th colspan="2"className="th-center">Harsh Cornering</th>
                                                            <th colspan="2"className="th-center">Total</th>
                                                            <th rowspan="2">Overall</th>
                                                            <th rowspan="2">Safety Score</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Moderate</th>
                                                            <th>Severe</th>
                                                            <th>Moderate</th>
                                                            <th>Severe</th>
                                                            <th>Moderate</th>
                                                            <th>Severe</th>
                                                            <th>Moderate</th>
                                                            <th>Severe</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first-td">July 31, 2024</td>
                                                            <td>189</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>189</td>
                                                            <td className="sr-green"><strong>85</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">July 31, 2024</td>
                                                            <td>189 </td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>2</td>
                                                            <td>189</td>
                                                            <td className="sr-red"><strong>60</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col lg={12} md={12}>
                                        <div style={{overflowX:'auto'}}>
                                                <table className="maintenance-table">
                                                    <thead>
                                                        <tr>
                                                            <th className="first-th">Warning Number <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                            <th>Reason for Warning</th>
                                                            <th>Date & Time</th>
                                                            <th>Letter</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first-td">0839</td>
                                                            <td>At London Riders, we offer PCO car hire services that are designed to meet your needs. Whether you're an Uber </td>
                                                            <td>July 31, 2024</td>
                                                            <td className="tb-btn1"><Link to="#">Download</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">0838</td>
                                                            <td>At London Riders, we offer PCO car hire services that are designed to meet your needs. Whether you're an Uber </td>
                                                            <td>July 21, 2024</td>
                                                            <td className="tb-btn1"><Link to="#">Download</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
  )
}

export default Driverscore
