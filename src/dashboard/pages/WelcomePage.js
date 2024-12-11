import React, { useEffect } from 'react';

import DashboardSidebar from '../partials/dashboard-sidebar'
import { Link, useNavigate } from 'react-router-dom'

function WelcomePage() {
    // Import the `useNavigate` hook from React Router to programmatically navigate between routes
    const navigate = useNavigate();

    // useEffect hook to check user authentication when the component mounts
    useEffect(() => {
        // Retrieve the authentication token from local storage
        const token = localStorage.getItem('token');

        // Retrieve the user object from local storage and parse it into JSON format
        const user = JSON.parse(localStorage.getItem('user'));

        // Check if any of the token or user data are missing
        if (!token || !user) {
            navigate('/login', { state: { loginFirstError: "Please login first to access that page" } });
        }
    }, [navigate]);
    return (
        <>
            <section className="user-dashboard">
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col-lg-3 col-md-3 sidebar-col">
                            <DashboardSidebar />
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
                                                    <p>Fill out a quick application with necessary details such as your PCO licence, insurance information and rental preferences. Our automated system will handle the rest and get you approved fast.</p>
                                                    <Link to="/applicant" className="theme-btn6 wlcm-satrted-btn">Get Started</Link>
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
