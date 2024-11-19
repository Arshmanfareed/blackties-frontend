import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Allvehicle() {
  return (
    <>
      
    <section className="user-dashboard">
        <div className="container-fluid">
            <Row className=" g-0">
                <Col lg={3} md={3} className="sidebar-col">
                   <Sidebar/>
                </Col>
                <Col className="panel-col">
                    <div className="dashboard-panel application-panel">
                        <Row >
                            <Col lg={12} md={12} >
                                <div className="dashboard-panel-topbar">
                                   <Dashboardpaneltopbar/>
                                </div>
                            </Col>
                        </Row>

                        <Row >
                            <Col lg={12} md={12} >
                                <div className="main-veh-box">
                                    <div className="vehicle-main-box">
                                        <div className="all-veh-dv">
                                            <div className="main-veh-bx">
                                                <div className="main-veh-txt">
                                                    <h5>Dashboard</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <Row className="frm-inner-row">
                                            <form action="" method="">
                                                <Row >
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Car Make</label>
                                                            <br/>
                                                            <input type="text" name="form-control"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Car Model</label>
                                                            <br/>
                                                            <input type="text" name="form-control"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Vehicle Reg Number</label>
                                                            <input type="number" name="form-control" id="" className="mg0"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Price per Week</label>
                                                            <input type="text" name="form-control" id="" className="mg0"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Vehicle Type:</label>
                                                            <input type="text" name="form-control" id="" className="mg0"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </Row>
                                        <Row className=" frm-inner-row">
                                            <form action="" method="">
                                                <Row >
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Vehicle Type:</label>
                                                            <br/>
                                                            <input type="text" name="form-control"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Transmission:</label>
                                                            <br/>
                                                            <input type="text" name="form-control"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Fuel Type</label>
                                                            <input type="text" name="form-control" id="" className="mg0"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2}>
                                                        <div className="form-group">
                                                            <label for="control-label">Miles per Gallon (MPG)</label>
                                                            <input type="text" name="form-control" id="" className="mg0"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3} md={3} >
                                                        <div className="form-group">
                                                            <label for="control-label">Status</label>
                                                            <select name="Rented" id="Rented-fld">
                                                                <option value="volvo">Rented</option>
                                                                <option value="saab">Rented</option>
                                                                <option value="opel">Rented</option>
                                                                <option value="audi">Rented</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                            <Row className=" inner-rw-register">
                                                <Col lg={12} md={12} >
                                                    <div className="veh-registration-table rigistration-tabl">
                                                        <table className="maintenance-table ds-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Vehicle Registration Number</th>
                                                                    <th>Car Make</th>
                                                                    <th>Car Model</th>
                                                                    <th>Fuel Type</th>
                                                                    <th>MPG</th>
                                                                    <th>Cost per week</th>
                                                                    <th>Transmission:</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VH12893719HJFHJ</td>
                                                                    <td>2023</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>Diesel Hybrid</td>
                                                                    <td>60</td>
                                                                    <td>£280</td>
                                                                    <td>Automatic</td>
                                                                    <td><Link to="/admin-vehicledetails" className="view-btn">View</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="show-paginaion">
                                                <div className="showing-txt">
                                                    <h5>Showing 1 to 9 Items</h5>
                                                </div>
                                                <div className="showing-pagination-number">
                                                    <ul>
                                                        <li className="active"><Link to="javascript:;">1</Link></li>
                                                        <li><Link to="javascript:;">2</Link></li>
                                                        <li><Link to="javascript:;">3</Link></li>
                                                        <li><Link to="javascript:;">4</Link></li>
                                                        <li><Link to="javascript:;">5</Link></li>
                                                    </ul>
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
        </div>
    </section>
                                        
                
    </>
  )
}

export default Allvehicle
