import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Link } from 'react-router-dom'

function Admincalenderall() {
  return (
    <>
      
<section class="user-dashboard">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
               <Sidebar/>
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel message-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <Dashboardpaneltopbar/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="message-sec db-default-sec ticket-sec">
                                <div class="message-card db-default-wrapper">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="ticket-main admin-calender-top">
                                            <div class="invoice-view-topbar">
                                                <Link to="javascript" class="back-to">Search</Link>
                                            </div>
                                            <div class="create-ticket-top-btns">
                                                <Link to="#" class="up-chhev"><i class="fa-solid fa-chevron-up"></i></Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                   <div class="row">
                                       <div class="col-lg-12 col-md-12">
                                           <div class="calender-top-form">
                                               <div class="row frm-inner-row user-app-frm-2">
                                                        <form action="" method="">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="form-group">
                                                                        <label for="control-label">Person</label>
                                                                        <br/>
                                                                        <input type="text" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="form-group">
                                                                        <label for="control-label">Date</label>
                                                                        <br/>
                                                                        <input type="date" name="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="form-group">
                                                                        <label for="control-label">Time</label>
                                                                        <input type="text" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="form-group">
                                                                        <label for="control-label">Reg Number</label>
                                                                        <input type="number" name="form-control" id="" class="mg0"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="form-group">
                                                                        <label for="control-label">Status</label>
                                                                        <select name="Oil-Changes" id="Oil-Changes-fld">
                                                                            <option value="volvo">Oil Changes</option>
                                                                            <option value="saab">Oil Changes</option>
                                                                            <option value="opel">Oil Changes</option>
                                                                            <option value="audi">Oil Changes</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-lg-12 col-md-12">
                                           <div class="calender-mid-picker">
                                               <div class="row">
                                                   <div class="col-lg-5 col-md-5">
                                                       <div class="picker-col-1">
                                                           <div class="claneder-date-picker-image">
                                                               <img src="./admin_assets/images/Date Picker.png" alt="calender"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                                    <div class="col-lg-7 col-md-7">
                                                       <div class="picker-col-2">
                                                        <div class="fleet-calender-txt">
                                                            <h4>Fleet Calendar</h4>
                                                        </div>
                                                         <div class="calender-txt-box">
                                                            <div class="main-txt-img">
                                                                <div class="calendr-txt-img">
                                                                    <img src="./admin_assets/images/dashboard/Frame 2085660257 (4).png" alt="tool"/>
                                                                 </div>
                                                                 <div class="txt-img-f">
                                                                    <span>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</span>
                                                                    <h5>Maintenance</h5>
                                                                     <h6>Oil Change and Servicing</h6>
                                                                 </div>
                                                            </div>
                                                            <div class="calendr-btn">
                                                                <Link to="#" class="Maintenance-btn">Maintenance</Link>
                                                             </div>
                                                        </div>
                                                        <div class="calender-txt-box">
                                                            <div class="main-txt-img">
                                                                <div class="calendr-txt-img">
                                                                    <img src="./admin_assets/images/doc.png" alt="tool"/>
                                                                 </div>
                                                                 <div class="txt-img-f">
                                                                    <span>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</span>
                                                                    <h5>Document</h5>
                                                                     <h6>MOT Document is Expiration</h6>
                                                                 </div>
                                                            </div>
                                                            <div class="calendr-btn">
                                                                <Link to="#" class="Expire-btn">Expire Soon</Link>
                                                             </div>
                                                        </div>
                                                        <div class="calender-txt-box">
                                                            <div class="main-txt-img">
                                                                <div class="calendr-txt-img">
                                                                    <img src="./admin_assets/images/doc.png" alt="tool"/>
                                                                 </div>
                                                                 <div class="txt-img-f">
                                                                    <span>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</span>
                                                                    <h5>Private Hire Vehicle</h5>
                                                                     <h6>Vehicle Mercedes E Class ready to pickup</h6>
                                                                 </div>
                                                            </div>
                                                            <div class="calendr-btn">
                                                                <Link to="#" class="Expire-btn">Expire Soon</Link>
                                                             </div>
                                                        </div>
                                                        <div class="calender-txt-box">
                                                            <div class="main-txt-img">
                                                                <div class="calendr-txt-img">
                                                                    <img src="./admin_assets/images/car.png" alt="tool"/>
                                                                 </div>
                                                                 <div class="txt-img-f">
                                                                    <span>KM19 VUG . SAID AHMED . 9 December 2024 at 09:00</span>
                                                                    <h5>Pick-Up</h5>
                                                                     <h6>Vehicle Mercedes E Class ready to pickup</h6>
                                                                 </div>
                                                            </div>
                                                            <div class="calendr-btn">
                                                                <Link to="#" class="Pick-btn">Pick-Up</Link>
                                                             </div>
                                                        </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-lg-12 col-md-12">
                                             <div class="tabs-container">
                                                {/* <!-- Tabs Header --> */}
                                                <div class="vehicle-tabs support-issue-tabs">
                                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link  active" id="All-tab" data-bs-toggle="tab" to="#All" role="tab" aria-controls="All" aria-selected="true">All</Link>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link" id="VD-tab" data-bs-toggle="tab" to="#VD" role="tab" aria-controls="New" aria-selected="false">Vehicle Documents</Link>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link" id="Dd-tab" data-bs-toggle="tab" to="#Dd" role="tab" aria-controls="Dd" aria-selected="false">Driver Documents</Link>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link" id="M-S-tab" data-bs-toggle="tab" to="#M-S" role="tab" aria-controls="M-S" aria-selected="false">Maintenance & Services</Link>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <Link class="nav-link" id="OA-tab" data-bs-toggle="tab" to="#OA" role="tab" aria-controls="OA" aria-selected="false">Operational Activities</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade active show" id="All" role="tabpanel" aria-labelledby="All-tab">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date & Times</th>
                                                                    <th>Type</th>
                                                                    <th>Full Name<i class="fas fa-arrow-down"></i></th>
                                                                    <th>Vehicles Registration Number</th>
                                                                    <th>Vehicles</th>
                                                                    <th>Notes</th>
                                                                </tr>
                                                             </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Document Expiration</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance</td>
                                                                    <td class="td-clr">Said Ahmed</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Oil Changes</td>
                                                                    <td class="td-clr">Nur Fadly</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance</td>
                                                                    <td class="td-clr">Rohan</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance</td>
                                                                    <td class="td-clr">Ahmad</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                             </tbody>
                                                        </table>
                                                         <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="#" class="previous-btn">Previous</Link>
                                                            <Link to="#" class="previous-btn">Next</Link>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="VD" role="tabpanel" aria-labelledby="VD-tab">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date & Times</th>
                                                                    <th>Type</th>
                                                                    <th>Full Name<i class="fas fa-arrow-down"></i></th>
                                                                    <th>Vehicles Registration Number</th>
                                                                    <th>Vehicles</th>
                                                                    <th>Notes</th>
                                                                </tr>
                                                             </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Vehicle Documents</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Vehicle Documents</td>
                                                                    <td class="td-clr">Said Ahmed</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Vehicle Documents</td>
                                                                    <td class="td-clr">Nur Fadly</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Vehicle Documents</td>
                                                                    <td class="td-clr">Rohan</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Vehicle Documents</td>
                                                                    <td class="td-clr">Ahmad</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                             </tbody>
                                                        </table>
                                                         <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="#" class="previous-btn">Previous</Link>
                                                            <Link to="#" class="previous-btn">Next</Link>
                                                        </div>
                                                    </div>
                                                    </div>


                                                    <div class="tab-pane fade" id="Dd" role="tabpanel" aria-labelledby="Dd-tab">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date & Times</th>
                                                                    <th>Type</th>
                                                                    <th>Full Name<i class="fas fa-arrow-down"></i></th>
                                                                    <th>Vehicles Registration Number</th>
                                                                    <th>Vehicles</th>
                                                                    <th>Notes</th>
                                                                </tr>
                                                             </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Driver Documents</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Driver Documents</td>
                                                                    <td class="td-clr">Said Ahmed</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Driver Documents</td>
                                                                    <td class="td-clr">Nur Fadly</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Driver Documents</td>
                                                                    <td class="td-clr">Rohan</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Driver Documents</td>
                                                                    <td class="td-clr">Ahmad</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                             </tbody>
                                                        </table>
                                                         <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="#" class="previous-btn">Previous</Link>
                                                            <Link to="#" class="previous-btn">Next</Link>
                                                        </div>
                                                    </div>
                                                    </div>


                                                    <div class="tab-pane fade" id="M-S" role="tabpanel" aria-labelledby="M-S-tab">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date & Times</th>
                                                                    <th>Type</th>
                                                                    <th>Full Name<i class="fas fa-arrow-down"></i></th>
                                                                    <th>Vehicles Registration Number</th>
                                                                    <th>Vehicles</th>
                                                                    <th>Notes</th>
                                                                </tr>
                                                             </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance & Services</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance & Services</td>
                                                                    <td class="td-clr">Said Ahmed</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance & Services</td>
                                                                    <td class="td-clr">Nur Fadly</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance & Services</td>
                                                                    <td class="td-clr">Rohan</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Maintenance & Services</td>
                                                                    <td class="td-clr">Ahmad</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                             </tbody>
                                                        </table>
                                                         <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="#" class="previous-btn">Previous</Link>
                                                            <Link to="#" class="previous-btn">Next</Link>
                                                        </div>
                                                    </div>
                                                    </div>



                                                     <div class="tab-pane fade" id="OA" role="tabpanel" aria-labelledby="OA-tab">
                                                        <table class="maintenance-table ds-table veh-history-tble adm-user-tble pcn-tble supp-issue">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date & Times</th>
                                                                    <th>Type</th>
                                                                    <th>Full Name<i class="fas fa-arrow-down"></i></th>
                                                                    <th>Vehicles Registration Number</th>
                                                                    <th>Vehicles</th>
                                                                    <th>Notes</th>
                                                                </tr>
                                                             </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Operational Activities</td>
                                                                    <td class="td-clr">Omar</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Operational Activities</td>
                                                                    <td class="td-clr">Said Ahmed</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Operational Activities</td>
                                                                    <td class="td-clr">Nur Fadly</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Operational Activities</td>
                                                                    <td class="td-clr">Rohan</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                                  <tr>
                                                                    <td>27 June, 2024 11.00 AM</td>
                                                                    <td>Operational Activities</td>
                                                                    <td class="td-clr">Ahmad</td>
                                                                    <td>KM19 VUG</td>
                                                                    <td>Mercedes E220</td>
                                                                    <td>send notification X days before event</td>
                                                                </tr>
                                                             </tbody>
                                                        </table>
                                                         <div class="show-paginaion adm-user-nxt-btn">
                                                        <div class="showing-txt">
                                                            <h5>Page 1 of 10</h5>
                                                        </div>
                                                        <div class="showing-pagination-number">
                                                            <Link to="#" class="previous-btn">Previous</Link>
                                                            <Link to="#" class="previous-btn">Next</Link>
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
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Admincalenderall
