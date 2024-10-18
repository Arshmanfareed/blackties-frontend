import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Palentychargenotice() {
  return (
    <>
      <section className="user-dashboard">
    <Container fluid >
        <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
                <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel penalty-panel">
                    <Row >
                        <Col lg={12} md={12} >
                            <div className="dashboard-panel-topbar">
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={12} md={12} >
                            <div className="penalty-sec db-default-sec">
                                <div className="penalty-card db-default-wrapper">
                                    <Row >
                                        <Col lg={12} md={12} >
                                            <div className="search-bar-wrapper">
                                                <h5 className="theme-h5">Penalty Charge Notice</h5>
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
                                        <Col lg={12} md={12} >
                                        <div style={{ overflowX: 'auto' }}>
                                                <table className="maintenance-table">
                                                    <thead>
                                                        <tr>
                                                            <th className="first-th">Penalty Charge Notice <ion-icon name="arrow-down-outline"></ion-icon></th>
                                                            <th>Date & Time</th>
                                                            <th>PCN Fee</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first-td">0839</td>
                                                            <td>July 31, 2024</td>
                                                            <td>£10</td>
                                                            <td className="tb-btn1"><Link to="#">Download</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">0838</td>
                                                            <td>July 21, 2024</td>
                                                            <td>£10</td>
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

export default Palentychargenotice
