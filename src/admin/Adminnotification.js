import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Link } from 'react-router-dom'

function Adminnotification() {
  return (
    <>
      <section class="user-dashboard">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
              <Sidebar/>
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel notification-inPage-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="dashboard-panel-topbar">
                               <Dashboardpaneltopbar/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="notification-inPage-sec db-default-sec">
                                <div class="notification-inPage-card db-default-wrapper">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="search-bar-wrapper">
                                                <div>
                                                    <Link to="#" class="back-to"><i class="fas fa-chevron-left"></i> Back to Notification</Link>
                                                </div>
                                                <div>
                                                    <div class="search-bar-v1">
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="notification-inBody">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <div class="notfic-main-img">
                                                    <img src="./admin_assets/images/dashboard/imagenote.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12">
                                                <div class="notfic-main-user">
                                                    <div class="noific-user-img">
                                                        <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div class="notific-user-note">
                                                        <span class="notific-user">Michael Dane</span>
                                                        <span class="notific-time">10:13 AM</span>
                                                        <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                        <p class="short-notific">You have a new ride scheduled for March 20, 2024. Pickup is at 8:00 AM from 123 Main St. and drop-off by 9:00 AM at 456 Park Ave. Remember to check the vehicle's condition prior to the journey.</p>
                                                        <div class="notific-alert">
                                                            <p>Please ensure you arrive 10 minutes early to avoid any delays. Contact the client ahead of time if there are any changes or if you foresee any issues.</p>
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

export default Adminnotification
