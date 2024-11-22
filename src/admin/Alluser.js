import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Alluser() {
  return (
    <>
          <section class="user-dashboard">
        <Container fluid>
            <Row class=" g-0">
                <Col lg={3} md={3} class=" sidebar-col">
                    <Sidebar/>
                </Col>
                <Col lg={9} md={9} class=" panel-col">
                    <div class="dashboard-panel overview-panel">
                        <Row >
                            <Col lg={12} md={12} >
                                <div class="dashboard-panel-topbar">
                                   <Dashboardpaneltopbar/>
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={12} md={12} >
                                <div class="overview-sec db-default-sec adm-sec">
                                    <div class="overview-card db-default-wrapper">
                                        <div class="adm-user-tabs">
                                            <div class="tabs-container ">
                                                {/* <!-- Tabs Header --> */}
                                                <div class="vehicle-tabs">
                                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link active" id="all-users-tab" data-bs-toggle="tab" to="#all-users" role="tab" aria-controls="all-users" aria-selected="false">All Users</Link>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link" id="user-application-tab" data-bs-toggle="tab" to="#user-application" role="tab" aria-controls="user-application" aria-selected="false">Application</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link class="invoiceDownload-btn" to="javascript:;"><img src="./admin_assets/images/dashboard/download432.svg" alt="Invoice Download"/></Link>
                                                    <div class="search-bar-v1">
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane fade show active" id="all-users" role="tabpanel" aria-labelledby="all-users-tab">
                                                    <div class="row frm-inner-row user-app-frm">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Customer ID</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Phone Number</label>
                                                                        <input type="number" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                    <div class="row frm-inner-row user-app-frm-2">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Driving License Number</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Email</label>
                                                                        <input type="email" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">VRN</label>
                                                                        <input type="text" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Status</label>
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
                                                    <div class="user-app-tabl">
                                                        <div class="veh-registration-table rigistration-tabl Maintenance-tble">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble">
                                                            <thead>
                                                                <tr>
                                                                    <th>Customer ID</th>
                                                                    <th>First Name<i class="fas fa-arrow-down"></i></th>
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
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>002</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>NA</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>003</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>004</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="Pending-btn"><Link to="javascript:;">Pending</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>005</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>006</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>007</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                 <tr>
                                                                    <td>008</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>NA</td>
                                                                    <td class="Rejected-btn"><Link to="javascript:;">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>009</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>010</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td>7493 231691</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                    <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="javascript:;" class="previous-btn">Previous</Link>
                                                            <Link to="javascript:;" class="previous-btn">Next</Link>
                                                        </div>
                                                    </div>
                                            </div>


                                        <div class="tab-pane fade show" id="user-application" role="tabpanel" aria-labelledby="user-application-tab">
                                                    <div class="row frm-inner-row user-app-frm">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Customer ID</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">First Name</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Last Name</label>
                                                                        <input type="text" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Phone Number</label>
                                                                        <input type="number" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                    <div class="row frm-inner-row user-app-frm-2">
                                                        <form action="" method="">
                                                            <Row >
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Applicant Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Driving License Number</label>
                                                                        <br/>
                                                                        <input type="number" name="form-control"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Email</label>
                                                                        <input type="email" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">VRN</label>
                                                                        <input type="text" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={3} md={3} >
                                                                    <div class="form-group">
                                                                        <label for="control-label">Status</label>
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
                                                    <div class="user-app-tabl">
                                                        <div class="veh-registration-table rigistration-tabl Maintenance-tble">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble">
                                                            <thead>
                                                                <tr>
                                                                    <th>Customer ID</th>
                                                                    <th>First Name<i class="fas fa-arrow-down"></i></th>
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
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>002</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>003</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>004</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>005</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>006</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>007</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>008</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>009</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>010</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td class="td-clr">Benyoucef</td>
                                                                    <td>Ron.don@gmail.com</td>
                                                                    <td>7493 231691</td>
                                                                    <td class="approved-btn"><Link to="javascript:;">Approved</Link><Link to="javascript:;" class="Rejected-btn">Rejected</Link></td>
                                                                    <td class="view-btn"><Link to="javascript:;">View</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                    <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="javascript:;" class="previous-btn">Previous</Link>
                                                            <Link to="javascript:;" class="previous-btn">Next</Link>
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
