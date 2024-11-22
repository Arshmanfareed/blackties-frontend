import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import { Link } from 'react-router-dom'

function Adminnotifications() {
  return (
    <>
      <section class="user-dashboard">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
               <Sidebar/>
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel notifications-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="dashboard-panel-topbar">
                               <Dashboardpaneltopbar/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="notifications-sec db-default-sec">
                                <div class="notifications-card db-default-wrapper">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="search-bar-wrapper">
                                                <h5 class="theme-h5">Notifications</h5>
                                                <div>
                                                    <div class="search-bar-v1">
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                    <Link to="javacscript:;" class="nofitic-markRead-btn">Mark as Read</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="user-notifications-wrapper">
                                                <ul>
                                                    <li>
                                                        <Link to="/admin-notification" class="active">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin-notification">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin-notification">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                     <li>
                                                        <Link to="/admin-notification">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                     <li>
                                                        <Link to="/admin-notification">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin-notification">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                            <div class="nofitic-vehicles">
                                                                <img src="./admin_assets/images/dashboard/image 67.png" alt="vehicle"/>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin-notification">
                                                            <div class="notific-data-box">
                                                                <div class="noific-user-img">
                                                                    <img src="./admin_assets/images/dashboard/New Customers List.png" alt="User"/>
                                                                    <i class="fas fa-circle"></i>
                                                                </div>
                                                                <div>
                                                                    <h6 class="notific-user">Michael Dane</h6>
                                                                    <p class="short-notific">Lorem ipsum dolor sit amet consectetur. Consequat habitasse tincidunt ut sed semper.</p>
                                                                    <span class="notific-time">10:13 AM</span>
                                                                    <span class="notific-date"><i class="fas fa-circle"></i> Sep 23, 2024</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </Link>
                                                        <div class="notific-file-download">
                                                            <div class="notific-file-data">
                                                                <img src="./admin_assets/images/dashboard/img-frame.png" alt="jpg"/>
                                                                <div>
                                                                    <h6>Table Sample.jpg</h6>
                                                                    <span class="file-size">3 MB</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Link to="#" class="notific-file-down">Download</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="invoice-order-pagination">
                                                <div class="pagination-indicator">
                                                    <h6>page <span class="initail">1</span> to <span class="total">10</span></h6>
                                                </div>
                                                <div class="pagination-nav">
                                                    <Link to="#" class="pg-prev">Previous</Link>
                                                    <Link to="#" class="pg-next">Next</Link>
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

export default Adminnotifications
