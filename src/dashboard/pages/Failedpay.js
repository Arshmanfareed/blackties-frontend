import React, { useState } from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Failedpay() {
    // Retry Payment
    const [showretrypaymeny, setShowretrypaymeny] = useState(false);

    const handleCloseretrypaymeny = () => setShowretrypaymeny(false);
    const handleShowretrypaymeny = () => setShowretrypaymeny(true);


    // Add Card
    const[showcard,setShowcard]=useState(false);
    const handleClosecard=()=>setShowcard(false);
    const handleShowcard=()=>setShowcard(true);

    // Sucess Card
    const[showcardsucess,setShowcardsucess]=useState(false);
    const handleClosecardsucess=()=>{
        setShowcardsucess(false);
        setShowcard(false);
        setShowretrypaymeny(false);
    }
    const handleShowcardsucess=()=>setShowcardsucess(true);

    // Payment Failed
    const[showpaymentfailed,setShowpaymentfailed]=useState(false);
    const handleClosepaymentfailed=()=>{
        setShowpaymentfailed(false);
    }
    const handleShowpaymentfailed=()=>setShowpaymentfailed(true);

  return (
    <>

<section className="user-dashboard">
    <div className="container-fluid">
        <Row className=" g-0">
            <Col lg={3} md={3} className=" sidebar-col">
               <DashboardSidebar/>
            </Col>
            <Col lg={9} md={9} className="panel-col">
                <div className="dashboard-panel invoice-view-panel">
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="dashboard-panel-topbar">
                               <DashboardPanelTopbar/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="invoice-view-sec db-default-sec">
                                <div className="invoice-view-card db-default-wrapper">
                                    <Row>
                                        <Col lg={12} md={12}>
                                            <div className="invoice-view-topbar">
                                                <Link href="javascript" className="back-to"><i className="fa-solid fa-angle-left"></i> Back to Payment & Invoices</Link>
                                                    <div className="doc-prints-wrap">
                                                        <Link href="javascript:;"><img src="./assets/images/dashboard/huge-icon.svg" alt="PDF"/></Link>
                                                        <Link href="javascript:;"><img src="./assets/images/dashboard/Mail.svg" alt="Mail"/></Link>
                                                        <Link href="javascript:;"><img src="./assets/images/dashboard/printer.svg" alt="Print"/></Link>
                                                        <Link href="javascript:void(0);" onClick={handleShowretrypaymeny}  className="psd-cancel">Retry Payment</Link>
                                                    </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className=" invoice-view-details">
                                        <Col lg={6} md={6}>
                                            <h2>BLACKTIES</h2>
                                            <p className="inv-address">328 Summerwood Road, <br/> Isleworth, <br/> Greater London, <br/> TW7 7QP</p>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <h3>INVOICE</h3>
                                            <p className="inv-info">Invoice#<strong>114152</strong> <br/> Invoice Date <strong>Aug 01, 2024</strong> <br/> Invoice Amount <strong>£360</strong></p>
                                            <p className="inv-info">Customer ID<br/><strong>21312ADA</strong></p>
                                        </Col>
                                    </Row>
                                    <Row className=" invoice-view-subscription">
                                        <Col lg={6} md={6}>
                                            <p className="billing-name">Billing to</p>
                                            <p className="user">Omar Waldii</p>
                                            <p className="country">United Kingdom</p>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <p className="subscription-id">Subscription <br/> <strong>ID 213123JKHSAD</strong> </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12}>
                                                <div style={{overflowX:'auto'}}>
                                                    <table className="cancellation-disc-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="first-th">Description</th>
                                                                <th>Price</th>
                                                                <th>Vat %</th>
                                                                <th>Amount (GBP)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="first-td">PCN Fee</td>
                                                                <td>£360</td>
                                                                <td>10 %</td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first-td">Insurance Excess</td>
                                                                <td>£360</td>
                                                                <td>-</td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>Total excl Vat</td>
                                                                <td></td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>VAT 20 %</td>
                                                                <td></td>
                                                                <td>£360</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td></td>
                                                                <td>Total</td>
                                                                <td>£360</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>








<Modal show={showretrypaymeny} className="password_modal " onHide={handleCloseretrypaymeny}>     
    <Modal.Body>

    <Row className=" payment-method-row retry-payment-body">
                                        <Col lg={12} md={12}>
                                            <div className="payment-method-head retry-payment-head">
                                                <h5>Retry Payment</h5>
                                                <Link href="#" className="cross-icon" onClick={handleCloseretrypaymeny}><i className="fas fa-times"></i></Link>
                                            </div>
                                            <div className="retry-bdy-bx">
                                                <div className="select-crd">
                                                    <h5>Select a Card</h5>
                                                    <Link href="#" className="cross-icon" onClick={handleShowcard}><i className="fas fa-plus"></i>Add Card</Link>
                                                </div>
                                            
                                            <div className="payment-method-wrapper">
                                                <form action="">
                                                    <div className="payment-options-list payment-options1 retry-payment-list">
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox payment-radio">
                                                                <input type="radio" name='card_pay' checked="checked"/>
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">
                                                                    <div className="checkbox-inbody">
                                                                        <img src="./assets/images/dashboard/Visa_Inc._logo 1.svg" alt=""/>
                                                                        <div>
                                                                            <h6>Visa Ending in 1231</h6>
                                                                            <span className="exp">Expired date 12/24</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="pay-mathod-default">
                                                            <Link href="javascript:;"><i class="fa-solid fa-circle"></i>default</Link>
                                                        </div>
                                                    </div>
                                                    <div className="payment-options-list payment-options2 retry-payment-list">
                                                        <div className="checkboxes__item">
                                                            <label className="checkbox payment-radio">
                                                                <input type="radio" name='card_pay'/>
                                                                <div className="checkbox__checkmark"></div>
                                                                <div className="checkbox__body">
                                                                    <div className="checkbox-inbody">
                                                                        <img src="./assets/images/dashboard/mc.svg" alt=""/>
                                                                        <div>
                                                                            <h6>Visa Ending in 1231</h6>
                                                                            <span className="exp">Expired date 12/24</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="default-or-delete">
                                                            <Link href="javascript:;" className="set-def">Set as Default</Link>
                                                            {/* <!-- <Link href="javascript:;" className="del"><ion-icon name="trash-outline"></ion-icon></Link> --> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="retry-pay-payment-total">
                                                <div className="payment-head">
                                                    <h3>Total Payment</h3>
                                                </div>
                                                 <div className="payment-head">
                                                    <h3>£360</h3>
                                                </div>
                                            </div>
                                            <div className="change-pass-btn">
                                                <Link  onClick={handleCloseretrypaymeny}  className="psd-cancel">Cancel</Link>
                                                <Link onClick={handleShowpaymentfailed} className="psd-change">Pay Now</Link>
                                            </div>
                                            </div>
                                        </Col>
                                    </Row>
    </Modal.Body>
</Modal>


{/* Add Card */}
<Modal 
show={showcard} className="password_modal " onHide={handleClosecard}
>     
    <Modal.Body>

    <Row>
                                        <Col lg={12} md={12}>
                                            <div className="payment-card">
                                                <div className="pay-top">
                                                    <h5>Retry Payment</h5>
                                                    <Link href="#" className="cross-icon" onClick={handleClosecard}><i className="fas fa-times"></i></Link>
                                                </div>
                                                <div className="pay-card-body">
                                                    <div className="pay-card-head-top">
                                                        <h5 onClick={handleClosecard} ><i className="fas fa-chevron-left" ></i>Back to Saved Cards</h5>
                                                    </div>
                                                    <div className="card-image">
                                                        <img src="./assets/images/dashboard/card1.png" alt="Debit-Card"/>
                                                    </div>
                                                    <div className="credit-crd-bdy-bx">
                                                    <div className="credit-card-head">
                                                        <h5>Credit Card</h5>
                                                        <img src="./assets/images/dashboard/Visa.png" alt="Visa-Card"/>
                                                    </div>
                                                    <div className="credit-card-form">
                                                         <form action="" method="">
                                                            <Row>
                                                                <Col lg={12} md={12}>
                                                                     <div className="form-group">
                                                                        <label for="control-label">Card Number</label><br/>
                                                                        <input type="number" name="form-control" id="" placeholder="XXXX XXXX XXXX XXXX"/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={12} md={12}>
                                                                    <div className="form-group">
                                                                        <label for="control-label">Expration Date</label><br/>
                                                                        <input type="date" name="form-control" id="" placeholder="MM/YY"/>
                                                                    </div>
                                                                </Col>
                                                                 <Col lg={12} md={12}>
                                                                    <div className="form-group">
                                                                        <label for="control-label">Card Holder</label><br/>
                                                                        <input type="text" name="form-control" id="" placeholder="Your name"/>
                                                                    </div>
                                                                </Col>
                                                                 <Col lg={12} md={12}>
                                                                    <div className="form-group">
                                                                        <label for="control-label">CVC</label><br/>
                                                                        <input type="text" name="form-control" id="" placeholder="CVC"/>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>
                                                </div>
                                            <div className="retry-pay-payment-total payment-card-price">
                                                <div className="payment-head">
                                                    <h3>Total Payment</h3>
                                                </div>
                                                 <div className="payment-head">
                                                    <h3>£360</h3>
                                                </div>
                                            </div>
                                            <div className="change-pass-btn payment-card-btn">
                                                <Link href="javascript:void(0);" onClick={handleClosecard}  className="psd-cancel">Back</Link>
                                                <Link href="javascript:;" onClick={handleShowcardsucess} className="psd-change">Pay Now</Link>
                                            </div>
                                                </div> 
                                            </div>
                                        </Col>
                                    </Row>
    </Modal.Body>
</Modal>



{/* Payment Sucess */}
<Modal 
show={showcardsucess} className="password_modal " onHide={handleClosecardsucess}
>     
    <Modal.Body>
    <div className="succes-body pay-successfull">
                        <div className="succes-alert">
                            <img src="./assets/images/ei_check.png" alt="Check"/>
                        <div>
                            <h6>Payment Successful</h6>
                            <p>Thank you for paying the amount of £___. Your payment has been successfully processed.</p>
                        </div>
                            <div className="succes-return-btn pay-successfull-btns"> 
                                <Link href="javascript:void(0);" onClick={handleClosecardsucess}  className="succes-return">Return to invoices</Link>
                            </div>
                        </div>
                    </div>
    </Modal.Body>
    </Modal>




{/* Payment Failed */}
<Modal 
show={showpaymentfailed} className="password_modal " onHide={handleClosepaymentfailed}
>     
    <Modal.Body>
    <div className="succes-body pay-failed">
                        <div className="succes-alert">
                            <img src="./assets/images/dashboard/danger 1.png" alt="Check"/>
                        <div>
                            <h6>Payment Failed</h6>
                            <p>Your payment has been declined for the following reason ___. Please return to the payment section below.</p>
                        </div>
                            <div className="succes-return-btn pay-failed-btns"> 
                                <Link onClick={handleClosepaymentfailed} className="succes-return">RETURN</Link>
                            </div>
                        </div>
                    </div>
    </Modal.Body>
    </Modal>

                </div>
            </Col>
            </Row>
        </div>
    </section>

    </>
  )
}

export default Failedpay
