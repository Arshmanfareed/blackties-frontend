import React, { useEffect } from 'react';

import DashboardSidebar from '../partials/dashboard-sidebar'
import { Link, useNavigate } from 'react-router-dom'

function WelcomePage() {

    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If no token found, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);


  return (
    <>
     <section className="user-dashboard">
    <div className="container-fluid">
        <div className="row g-0">
            <div className="col-lg-3 col-md-3 sidebar-col">
                <DashboardSidebar/>
            </div>
            <div className="col-lg-9 col-md-9 panel-col">
                <div className="dashboard-panel welcome-panel">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="dashboard-panel-topbar">
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="welcome-sec">
                                <div className="welcome-card">
                                    <div className="wrapper">
                                        <h3>Welcome</h3>
                                        <h4>It’s your first time!</h4>
                                        <p>Please to finish to submit applicant to rent a car.</p>
                                        <Link to="#" className="theme-btn6 wlcm-satrted-btn">Get Started</Link>
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

export default WelcomePage
