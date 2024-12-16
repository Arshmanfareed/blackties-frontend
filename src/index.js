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
import Cancellation from './dashboard/pages/Cancellation';
import Payment from './dashboard/pages/Payment';
import PaymentProcess from './dashboard/pages/PaymentProcess';
import Message from './dashboard/pages/Message';
import Settingprofile from './dashboard/pages/Settingprofile';
import Calenderall from './dashboard/pages/Calenderall';
import Failedpay from './dashboard/pages/Failedpay';
import Support from './dashboard/pages/Support';
import Ourvehicle from './dashboard/pages/Ourvehicle';
import Addvehicle from './admin/Addvehicle';
import Allvehicle from './admin/Allvehicle';
import Adminlogin from './admin/Adminlogin';
import Vehicledetails from './admin/Vehicledetails';
import Penaltychargesnotice from './admin/Penaltychargesnotice';
import Financialpayments from './admin/Financialpayments';
import Financialinvoice from './admin/Financialinvoice';
import Scheduleinvoice from './admin/Scheduleinvoice';
import Refundinvoice from './admin/Refundinvoice';
import Addpaymentschedule from './admin/Addpaymentschedule';
import Userinvoice from './admin/Userinvoice';
import Alluser from './admin/Alluser';
import Userinfo from './admin/Userinfo';
import Ammenduserapplication from './admin/Ammenduserapplication';
import Ammendinvoice from './admin/Ammendinvoice';
import Ammendrefundinvoice from './admin/Ammendrefundinvoice';
import Failedpayinvoice from './admin/Failedpayinvoice';
import Adminsupport from './admin/Adminsupport';
import Supportmessage from './admin/Supportmessage';
import Createticket from './admin/Createticket';
import Deposit from './admin/Deposit';
import Adminnotification from './admin/Adminnotification';
import Adminnotifications from './admin/Adminnotifications';
import Financialinvoicerevenue from './admin/Financialinvoicerevenue';
import Adminfinancialexpense from './admin/Adminfinancialexpense';
import Admindashboardmain from './admin/Admindashboardmain';
import Adminsetting from './admin/Adminsetting';
import Adminpermissionsetting from './admin/Adminaddcontrol';
import Adminaddcontrol from './admin/Adminaddcontrol';
import Adminrolepermission from './admin/Adminrolepermission';
import Admincalenderall from './admin/Admincalenderall';
import Adminaddcalender from './admin/Adminaddcalender';


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
      <Route path="/welcome" element={<><WelcomePage /></>} />
      <Route path="/applicant" element={<><Applicant /></>} />
      <Route path="/our-vehicle" element={<><Ourvehicle /></>} />
      <Route path="/rent-car" element={<><RentCar /></>} />
      <Route path="/overview" element={<><Overview /></>} />
      <Route path="/vehicle-document" element={<><Vehicledocument /></>} />
      <Route path="/penalty-charge-notice" element={<><Palentychargenotice /></>} />
      <Route path="/driver-score" element={<><Driverscore /></>} />
      <Route path="/maintenance" element={<><Maintainance /></>} />
      <Route path="/invoice" element={<><Invoice /></>} />
      <Route path="/invoice-view" element={<><InvoiceView /></>} />
      <Route path="/notifications" element={<><Notifications /></>} />
      <Route path="/single-notification" element={<><SingleNotification /></>} />
      <Route path="/settings" element={<><Profile /></>} />
      <Route path="/cancellation" element={<><Cancellation /></>} />
      <Route path="/payment" element={<><Payment /></>} />
      <Route path="/payment-process" element={<><PaymentProcess /></>} />
      <Route path="/message" element={<><Message /></>} />
      <Route path="/setting-profile" element={<><Settingprofile /></>} />
      <Route path="/calender-all" element={<><Calenderall /></>} />
      <Route path="/failed-pay" element={<><Failedpay /></>} />
      <Route path="/support-ticket" element={<><Support /></>} />

      {/* Admin Routes */}
      <Route path="/add-vehicle" element={<><Addvehicle /></>} />
      <Route path="/all-vehicle" element={<><Allvehicle /></>} />
      <Route path="/admin-login" element={<><Adminlogin /></>} />
      <Route path="/admin-vehicledetails" element={<><Vehicledetails /></>} />
      <Route path="/admin-penaltycharge" element={<><Penaltychargesnotice /></>} />
      <Route path="/admin-financialpayment" element={<><Financialpayments /></>} />
      <Route path="/admin-financialinvoice" element={<><Financialinvoice /></>} />
      <Route path="/admin-schedule-invoice" element={<><Scheduleinvoice /></>} />
      <Route path="/admin-refund-invoice" element={<><Refundinvoice /></>} />
      <Route path="/admin-ammend-invoice" element={<><Ammendinvoice /></>} />
      <Route path="/admin-ammend-refund-invoice" element={<><Ammendrefundinvoice /></>} />
      <Route path="/admin-failed-pay-invoice" element={<><Failedpayinvoice /></>} />
      <Route path="/admin-add-payment-schedule" element={<><Addpaymentschedule /></>} />
      <Route path="/admin-user-invoice" element={<><Userinvoice /></>} />
      <Route path="/admin-all-user" element={<><Alluser /></>} />
      <Route path="/admin-user-info" element={<><Userinfo /></>} />
      <Route path="/admin-user-application-ammend" element={<><Ammenduserapplication /></>} />
      <Route path="/admin-support" element={<><Adminsupport /></>} />
      <Route path="/admin-support-chat" element={<><Supportmessage /></>} />
      <Route path="/admin-support-create-ticket" element={<><Createticket /></>} />
      <Route path="/admin-deposit" element={<><Deposit /></>} />
      <Route path="/admin-notifications" element={<><Adminnotifications /></>} />
      <Route path="/admin-notification" element={<><Adminnotification /></>} />
      <Route path="/admin-financial-revenue" element={<><Financialinvoicerevenue /></>} />
      <Route path="/admin-financial-expense" element={<><Adminfinancialexpense /></>} />
      <Route path="/admin-dashboard-main" element={<><Admindashboardmain /></>} />
      <Route path="/admin-setting" element={<><Adminsetting /></>} />
      <Route path="/admin-add-admin-control" element={<><Adminaddcontrol /></>} />
      <Route path="/admin-add-role-permission" element={<><Adminrolepermission /></>} />
      <Route path="/admin-calendar-all" element={<><Admincalenderall /></>} />
      <Route path="/admin-add-calendar" element={<><Adminaddcalender /></>} />

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
