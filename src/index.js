import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import How_It_Works from './pages/how_it_works'

import Header from './pages/component/Header';
import Footer from './pages/component/Footer';
import Our_Vehicle from './pages/Our_Vehicle';
import Driver_benefits from './pages/Driver_benefits';
import Car_details from './pages/Car_details';
import Login from './pages/Login';
import Register from './pages/Register';
import Verification from './pages/Verification';
import Forget_password from './pages/Forget_password';
import Create_password from './pages/Create_password';
import Applicant from './dashboard/pages/applicant';
import WelcomePage from './dashboard/pages/WelcomePage';
import RentCar from './dashboard/pages/RentCar';
import Overview from './dashboard/pages/overview';
import Vehicledocument from './dashboard/pages/Vehicledocument';
import Palentychargenotice from './dashboard/pages/palentychargenotice';
import Driverscore from './dashboard/pages/Driverscore';
import Maintainance from './dashboard/pages/Maintainance';
import Invoice from './dashboard/pages/Invoice';
import InvoiceView from './dashboard/pages/InvoiceView';
import Notifications from './dashboard/pages/Notifications';
import SingleNotification from './dashboard/pages/SingleNotification';
import Profile from './dashboard/pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
  <Routes>
  <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/our-vehicle" element={<><Header /><Our_Vehicle /><Footer /></>} />
        <Route path="/driver-benefits" element={<><Header /><Driver_benefits /><Footer /></>} />
        <Route path="/car-details" element={<><Header /><Car_details /><Footer /></>} />
        <Route path="/how-it-works" element={<><Header /><How_It_Works /><Footer /></>} />
        <Route path="/login" element={<><Header /><Login /><Footer /></>} />
        <Route path="/register" element={<><Header /><Register /><Footer /></>} />
        <Route path="/verification" element={<><Header /><Verification /><Footer /></>} />
        <Route path="/forget-password" element={<><Header /><Forget_password /><Footer /></>} />
        <Route path="/create-password" element={<><Header /><Create_password /><Footer /></>} />
    {/* Dashboard Routes */}
    <Route path="/applicant" element={<><Applicant /></>} />
    <Route path="/welcome" element={<><WelcomePage /></>} />
    <Route path="/rent-car" element={<><RentCar /></>} />
    <Route path="/overview" element={<><Overview /></>} />
    <Route path="/vehicle-document" element={<><Vehicledocument /></>} />
    <Route path="/palenty-charge-notice" element={<><Palentychargenotice /></>} />
    <Route path="/driver-score" element={<><Driverscore /></>} />
    <Route path="/maintenance" element={<><Maintainance /></>} />
    <Route path="/invoice" element={<><Invoice /></>} />
    <Route path="/invoice-view" element={<><InvoiceView /></>} />
    <Route path="/notifications" element={<><Notifications /></>} />
    <Route path="/single-notification" element={<><SingleNotification /></>} />
    <Route path="/settings" element={<><Profile /></>} />

  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
