import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'

function Ammendrefundinvoice() {
  return (
    <>
      
<section className="user-dashboard">
    <div className="container-fluid">
        <div className="row g-0">
            <div className="col-lg-3 col-md-3 sidebar-col">
                <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-9 panel-col">
                <div className="dashboard-panel invoice-view-panel amended-invoice-view-panel">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="dashboard-panel-topbar">
                                <Dashboardpaneltopbar/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="invoice-view-sec db-default-sec">
                                <div className="invoice-view-card db-default-wrapper admin-invoice-view-card admin-invoice-pay-card admin-amended-invoice-pay-card">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="invoice-view-topbar ">
                                                <a href="#" className="back-to"><i class="fas fa-chevron-left"></i> Back to Invoice</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row inner-amend-box">
                                        <div className="col-md-7">
                                            <div className="invoice-view-card db-default-wrapper payment-schedule-card amend-bx">
                                                <div className="row invoice-view-details admin-invoice-view-details">
                                                    <div className="col-lg-6 col-md-6">
                                                        <h2>BLACKTIES</h2>
                                                        <h5>RENTAL</h5>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                       <p className="inv-address">328 Summerwood Road, Isleworth, Greater London, TW7 7QP </p>
                                                    </div>
                                                </div>
                                                <div className="row invoice-view-subscription">
                                                    <div className="col-lg-4 col-md-4">
                                                       <p><span>Full Name</span>
                                                        <br/>
                                                        John Doe
                                                    </p> 
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                       <p><span>Phone:</span>
                                                        <br/>
                                                        +44 334 2345
                                                    </p> 
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                       <p><span>Email:</span>
                                                        <br/>
                                                        example@gmail.com
                                                    </p>
                                                    </div>
                                                </div>
                                                 <div className="row invoice-view-subscription-2">
                                                    <div className="col-lg-4 col-md-4">
                                                       <p><span>Receipt Date:</span>
                                                        <br/>
                                                        12/8/2024
                                                    </p> 
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                       <p><span>Receipt #:</span>
                                                        <br/>
                                                        RT-435
                                                    </p> 
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                       <p><span>Payment Method:</span>
                                                        <br/>
                                                        Credit Card
                                                    </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                                <div style={{overflowX:"x"}}>
                                                    <table className="cancellation-disc-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="first-th">Description</th>
                                                                <th>Amount</th>
                                                                <th>Vat %</th>
                                                                <th>Amount (GBP)</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="no-brdr">
                                                                <td className="first-td">Damage Car</td>
                                                                <td>£360</td>
                                                                <td>10 %</td>
                                                                <td>£360</td>
                                                                <td><a href="#"><img src="./admin_assets/images/trash-can.png" alt="delete"/></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="big-td"><a href="#"><img src="./admin_assets/images/plus.png" className="plus-img" alt="comm"/>Add another Payment</a></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>£360</td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6">
                                                <div style={{overflowX:"auto"}}>
                                                    <table className="cancellation-disc-table">
                                                        <tbody>
                                                            <tr>
                                                            <td>Total excl Vat</td>
                                                            <td></td>
                                                            <td>£360</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VAT 20 %</td>
                                                            <td></td>
                                                            <td>£360</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Total</td>
                                                            <td>£360</td>
                                                        </tr>
                                                    </tbody></table>
                                                </div>
                                            </div>
                                                <div className="amend-bx-btns">
                                                     <a href="#" className="save-btn">Save</a>
                                                     <a href="#" className="refund-btn">Refund</a>
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

export default Ammendrefundinvoice
