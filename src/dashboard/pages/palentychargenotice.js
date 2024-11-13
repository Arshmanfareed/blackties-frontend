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
                                                {/* <div>
                                                    <div className="search-bar-v1">
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                    <Link to="#" className="filter-v1">Filter <img src="./assets/images/Tuning.svg" alt=""/></Link>
                                                </div> */}
                                            </div>
                                            <p>You can view all of the penalty charge notices you have received here. Unfortunately, there is a lot of administrative work to forward a ticket over to yourselves, the renter, thus the fee. However, if you successfully appeal a ticket, this administrative fee is refunded.</p>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col lg={12} md={12} >
                                        <div style={{ overflowX: 'auto' }}>
                                                <table className="maintenance-table">
                                                    <thead>
                                                        <tr>
                                                            <th className="first-th">Internal Number </th>
                                                            <th>Date</th>
                                                            <th>Time</th>
                                                            <th>Authority</th>
                                                            <th>Ticket Number</th>
                                                            <th>Vehicle <i class="fa-solid fa-arrow-down"></i></th>
                                                            <th>Admin Fee</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>123</td>
                                                            <td>July 31, 2024</td>
                                                            <td>10:43</td>
                                                            <td>Council</td>
                                                            <td>123</td>
                                                            <td className="first-td">KM19 VTY</td>                                                            
                                                            <td>£10</td>
                                                            <td className="tb-btn1">
                                                                <Link to="#" className='m-2'>View</Link>
                                                                <Link to="#">Download</Link>
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                            <td>123</td>
                                                            <td>July 31, 2024</td>
                                                            <td>10:43</td>
                                                            <td>TfL</td>
                                                            <td>123</td>
                                                            <td className="first-td">KM19 VTY</td>                                                            
                                                            <td>£10</td>
                                                            <td className="tb-btn1">
                                                                <Link to="#" className='m-2'>View</Link>
                                                                <Link to="#">Download</Link>
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                            <td>123</td>
                                                            <td>July 31, 2024</td>
                                                            <td>10:43</td>
                                                            <td>Council</td>
                                                            <td>123</td>
                                                            <td className="first-td">KM19 VTY</td>                                                            
                                                            <td>£10</td>
                                                            <td className="tb-btn1">
                                                                <Link to="#" className='m-2'>View</Link>
                                                                <Link to="#">Download</Link>
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                            <td>123</td>
                                                            <td>July 31, 2024</td>
                                                            <td>10:43</td>
                                                            <td>TfL</td>
                                                            <td>123</td>
                                                            <td className="first-td">KM19 VTY</td>                                                            
                                                            <td>£10</td>
                                                            <td className="tb-btn1">
                                                                <Link to="#" className='m-2'>View</Link>
                                                                <Link to="#">Download</Link>
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                            <td>123</td>
                                                            <td>July 31, 2024</td>
                                                            <td>10:43</td>
                                                            <td>Council</td>
                                                            <td>123</td>
                                                            <td className="first-td">KM19 VTY</td>                                                            
                                                            <td>£10</td>
                                                            <td className="tb-btn1">
                                                                <Link to="#" className='m-2'>View</Link>
                                                                <Link to="#">Download</Link>
                                                                </td>
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
