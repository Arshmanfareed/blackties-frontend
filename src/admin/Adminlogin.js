import React from 'react'
import DashboardSidebar from '../dashboard/partials/dashboard-sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import Sidebar from './partials/Sidebar'
import { Link } from 'react-router-dom'

function Adminlogin() {
  return (
    <>
    <section class="user-dashboard">
        <div class="container-fluid">
            <div class="row g-0">
                {/* <div class="col-lg-3 col-md-3 sidebar-col">
                    <Sidebar/>
                </div> */}
                <div class="col-lg-12 col-md-12 panel-col login_admin">
                    <div class="dashboard-panel application-panel">
                        {/* <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="dashboard-panel-topbar">
                                   <Dashboardpaneltopbar/>
                                </div>
                            </div>
                        </div> */}
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="login-main-bx">
                                    <div class="login-txt">
                                        <img src="./admin_assets/images/login-logo.png" alt="logo"/>
                                        <div class="login-frm">
                                             <form action="">
                                                <div class="row">
                                                     <div class="col-lg-12 col-md-12">
                                                         <div class="form-group">
                                                            <label for="control-label">Email</label>
                                                            <br/>
                                                            <input type="email" name="form-control" id="" placeholder="Enter your email"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                         <div class="form-group">
                                                            <label for="control-label">Password</label>
                                                            <br/>
                                                            <input type="password" name="form-control" id="" placeholder="Enter your password"/>
                                                            <ion-icon class="toggle-password" name="eye-outline"></ion-icon>
                                                        </div>
                                                    </div>
                                                    <div class="sbmt-btn">
                                                        <Link to="/add-vehicle" class="submit-btn">Login</Link>
                                                    </div>
                                                 </div>
                                            </form>
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

export default Adminlogin
