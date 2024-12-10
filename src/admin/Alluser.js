import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Alluser() {
  return (
    <>
          <section className="user-dashboard">
        <Container fluid>
            <Row className=" g-0">
                <Col lg={3} md={3} className=" sidebar-col">
                    <Sidebar/>
                </Col>
                <Col lg={9} md={9} className=" panel-col">
                    <div className="dashboard-panel overview-panel">
                        <Row >
                            <Col lg={12} md={12} >
                                <div className="dashboard-panel-topbar">
                                   <Dashboardpaneltopbar/>
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={12} md={12} >
                                <div className="overview-sec db-default-sec adm-sec">
                                    <div className="overview-card db-default-wrapper">
                                        <div className="adm-user-tabs">
                                            <div className="tabs-container ">
                                                {/* <!-- Tabs Header --> */}
                                                <div className="vehicle-tabs">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <Link className="nav-link active" id="all-users-tab" data-bs-toggle="tab" to="#all-users" role="tab" aria-controls="all-users" aria-selected="false">All Users</Link>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <Link className="nav-link" id="user-application-tab" data-bs-toggle="tab" to="#user-application" role="tab" aria-controls="user-application" aria-selected="false">Application</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link className="invoiceDownload-btn" to="#"><img src="./admin_assets/images/dashboard/download432.svg" alt="Invoice Download"/></Link>
                                                    <div className="search-bar-v1">
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="all-users" role="tabpanel" aria-labelledby="all-users-tab">
                                                    <Row className=" frm-inner-row user-app-frm">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Customer ID</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Phone Number</label>
                                                                        <input type="number" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </Row>
                                                    <div className="row frm-inner-row user-app-frm-2">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Driving License Number</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Email</label>
                                                                        <input type="email" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">VRN</label>
                                                                        <input type="text" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Status</label>
                                                                        <select name="Approved" id="Approved-fld">
                                                                            <option value="volvo">Approved</option>
                                                                            <option value="saab">Approved</option>
                                                                            <option value="opel">Approved</option>
                                                                            <option value="audi">Approved</option>
                                                                        </select>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                    <div className="user-app-tabl">
                                                        <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                                        <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                                            <thead>
                                                                <tr>
                                                                    <th>Customer ID</th>
                                                                    <th>First Name<i className="fas fa-arrow-down"></i></th>
                                                                    <th>Last Name</th>
                                                                    <th>Email Address</th>
                                                                    <th>Phone Number</th>
                                                                    <th>Driving License Number</th>
                                                                    <th>VRN</th>
                                                                    <th>Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>001</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="/admin-user-info">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>002</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>NA</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="/admin-user-info">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>003</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>004</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="Pending-btn"><Link to="#">Pending</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>005</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>006</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>007</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>008</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>NA</td>
                                                                    <td className="Rejected-btn"><Link to="#">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>009</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>010</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                    <div className="show-paginaion adm-user-nxt-btn">
                                                        <div className="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div className="showing-pagination-number">
                                                            <Link to="#" className="previous-btn">Previous</Link>
                                                            <Link to="#" className="previous-btn">Next</Link>
                                                        </div>
                                                    </div>
                                            </div>


                                        <div className="tab-pane fade show" id="user-application" role="tabpanel" aria-labelledby="user-application-tab">
                                                    <div className="row frm-inner-row user-app-frm">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Customer ID</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Phone Number</label>
                                                                        <input type="number" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                    <div className="row frm-inner-row user-app-frm-2">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Driving License Number</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Email</label>
                                                                        <input type="email" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">VRN</label>
                                                                        <input type="text" name="form-control" id="" className="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div className="form-group">
                                                                        <label htmlFor="control-label">Status</label>
                                                                        <select name="Approved" id="Approved-fld">
                                                                            <option value="volvo">Approved</option>
                                                                            <option value="saab">Approved</option>
                                                                            <option value="opel">Approved</option>
                                                                            <option value="audi">Approved</option>
                                                                        </select>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                    <div className="user-app-tabl">
                                                        <div className="veh-registration-table rigistration-tabl Maintenance-tble">
                                                        <table className="maintenance-table ds-table veh-history-tble adm-user-tble">
                                                            <thead>
                                                                <tr>
                                                                    <th>Customer ID</th>
                                                                    <th>First Name<i className="fas fa-arrow-down"></i></th>
                                                                    <th>Last Name</th>
                                                                    <th>Email Address</th>
                                                                    <th>Phone Number</th>
                                                                    <th>Action</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>001</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>002</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>003</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>004</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>005</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>006</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>007</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>008</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>009</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>010</td>
                                                                    <td className="td-clr">Omar</td>
                                                                    <td className="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td className="approved-btn"><Link to="#">Approved</Link><Link to="#" className="Rejected-btn">Rejected</Link></td>
                                                                    <td className="view-btn"><Link to="#">View</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                    <div className="show-paginaion adm-user-nxt-btn">
                                                        <div className="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div className="showing-pagination-number">
                                                            <Link to="#" className="previous-btn">Previous</Link>
                                                            <Link to="#" className="previous-btn">Next</Link>
                                                        </div>
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
            
        </section>
    </>
  )
}

export default Alluser
