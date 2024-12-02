import React, { useState } from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Support() {
       // Ticket Close
       const [showticketclose, setShowticketclose] = useState(false);

       const handleCloseticketclose = () => setShowticketclose(false);
       const handleShowticketclose = () => setShowticketclose(true);
//    Add Ticket
       const [showaddticket, setShowaddticket] = useState(false);

       const handleCloseaddticket = () => setShowaddticket(false);
       const handleShowaddticket = () => setShowaddticket(true);
  return (
    <>
<section className="user-dashboard">
    <div className="container-fluid">
        <div className="row g-0">
            <div className="col-lg-3 col-md-3 sidebar-col">
               <DashboardSidebar/>
            </div>
            <div className="col-lg-9 col-md-9 panel-col">
                <div className="dashboard-panel profile-panel">
                    <Row className="row">
                        <Col lg={12} md={12}>
                            <div className="dashboard-panel-topbar">
                                <DashboardPanelTopbar/>
                            </div>
                        </Col>
                    </Row>
                       <Row className="row">
                        <Col lg={12} md={12}>
                            <div className="message-sec db-default-sec">
                                <div className="message-card db-default-wrapper">
                                    <Row className="row">
                                        <Col lg={12} md={12}>
                                            <div className="invoice-view-topbar support-tckt-btn">
                                                <Link onClick={handleShowaddticket} className="addTicket-btn"><i className="fa-solid fa-plus"></i> Add Ticket</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="row">
                                        <Col lg={5} >
                                            <div className="msg-menu-wraper">
                                                <div className="search-bar-v1">
                                                    <button type="submit"><i className="fa fa-search"></i></button>
                                                    <input type="text" placeholder="Search here..."/>
                                                </div>
                                                <div className="unresolve-head">
                                                    <h6>Unresolved</h6>
                                                    <div className="msg-menu">
                                                    <ul>
                                                         <li>
                                                            <Link href="javascript:;" className="msg admin-2">
                                                                <div className="user-relate">
                                                                    <div className="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 2</h6>
                                                                    </div>
                                                                    <div className="msg-trace">
                                                                        <div className="time-date">10:13 AM</div>
                                                                        <div className="msg-alert"><i className="fa-solid fa-circle"></i>Issue</div>
                                                                    </div>
                                                                </div>
                                                                <div className="user-short-msg">
                                                                    <p>The contract says that additional mileage is 25p a Mile...</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </div>
                                               <div className="resolve-head">
                                                    <h6>Resolved</h6><i className="fas fa-chevron-left"></i>
                                                </div>
                                                <div className="msg-menu">
                                                    <ul>
                                                        <li>
                                                            <Link href="javascript:;" className="msg admin-1">
                                                                <div className="user-relate">
                                                                    <div className="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 2</h6>
                                                                    </div>
                                                                    <div className="msg-trace">
                                                                        <div className="time-date">10:13 AM</div>
                                                                        <div className="msg-alert"><i className="fa-solid fa-circle"></i>Issue</div>
                                                                    </div>
                                                                </div>
                                                                <div className="user-short-msg">
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet...</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="javascript:;" className="msg admin-1">
                                                                <div className="user-relate">
                                                                    <div className="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 1</h6>
                                                                    </div>
                                                                    <div className="msg-trace">
                                                                        <div className="time-date">10:13 AM</div>
                                                                        <div className="msg-alert"><i className="fa-solid fa-circle"></i>Compliment</div>
                                                                    </div>
                                                                </div>
                                                                <div className="user-short-msg">
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet...</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="javascript:;" className="msg admin-1">
                                                                <div className="user-relate">
                                                                    <div className="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 1</h6>
                                                                    </div>
                                                                    <div className="msg-trace">
                                                                        <div className="time-date">10:13 AM</div>
                                                                        <div className="msg-alert"><i className="fa-solid fa-circle"></i>Compliment</div>
                                                                    </div>
                                                                </div>
                                                                <div className="user-short-msg">
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet...</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={7} >
                                            <div className="chat-board-wrapper">
                                                <div className="chat-board-topBar">
                                                    <div className="chat-user-profile">
                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                        <h6>Admin 2</h6>
                                                    </div>
                                                    <div className="chat-XOptions">
                                                        <Link href="javascript:;" className="chat-fav"><img src="./assets/images/dashboard/Vector532.png"/></Link>
                                                       
                                                        <Link onClick={handleShowticketclose} className="chat-close"> Close The Ticket</Link>
                                                    </div>
                                                </div>
                                                <div className="chat-board-body">
                                                    <div className="admin1-wrap">
                                                        <div className="msg-tabs-wrap">
                                                            <div className="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div className="msg-active-time"><span className="active"><i className="fa-solid fa-check"></i>Seen</span><span className="timming">10:00</span></div>
                                                            </div>
                                                            <div className="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="admin2-wrap">
                                                        <div className="msg-tabs-wrap">
                                                            <div className="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                            <div className="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div className="msg-active-time"><span className="active"><i className="fa-solid fa-check"></i>Seen</span><span className="timming">10:00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="admin1-wrap">
                                                        <div className="msg-tabs-wrap">
                                                            <div className="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div className="msg-active-time"><span className="active"><i className="fa-solid fa-check"></i>Seen</span><span className="timming">10:00</span></div>
                                                            </div>
                                                            <div className="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="admin2-wrap">
                                                        <div className="msg-tabs-wrap">
                                                            <div className="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                            <div className="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div className="msg-active-time"><span className="active"><i className="fa-solid fa-check"></i>Seen</span><span className="timming">10:00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-text-field">
                                                    <div className='file_attachement'>
                                                        <img src='./assets/images/clip.png'/>
<input type='file' name='file_attached' id='file_attached'/>
                                                    </div>
                                                    <div className="wrap">
                                                        <textarea name="msg" id="" placeholder="You cannot write on this support ticket since it is resolved."></textarea>
                                                        <div className="file-send-wrap">
                                                            <span className="file-send-btn">
                                                                <label for="chat-docs"><i className="fas fa-paper-plane"></i></label>
                                                                <input type="button" name="chat-docs" id="chat-docs"/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>

{/* Close Ticket */}
                    
<Modal show={showticketclose} className="password_modal " onHide={handleCloseticketclose}>     
    <Modal.Body>

    <div className="succes-body Confirm-alert">
                        <div className="succes-alert">
                            <img src="./assets/images/dashboard/danger 1.png" alt="Check"/>
                        <div>
                            <p>Are you sure you want to close the ticket?</p>
                        </div>
                            <div className="succes-return-btn Confirm-alert-btns"> 
                                <Link onClick={handleCloseticketclose} className="chng-otp-ver">CLOSE TICKET</Link>
                                <Link onClick={handleCloseticketclose}  className="succes-return">RETURN</Link>
                            </div>
                        </div>
                    </div>
    </Modal.Body>
    </Modal>

    {/* Add Support Ticket */}
    <Modal show={showaddticket} className='password_modal' onHide={handleCloseaddticket}>
        <Modal.Body>
        <div className="create-ticket-pop">
                        <Col lg={12} md={12} >
                            <div className="tckt-bx">
                                <h4>Create Ticket</h4>
                                <Link onClick={handleCloseaddticket} className="cross-icon"><i className="fas fa-times"></i></Link>
                            </div>
                            <div className="tckt-pera">
                                <p>Have questions or need further assistance? Submit a ticket here, and our team will get back to you promptly.</p>
                            </div>
                            <div className="tckt-img-main">
                                <div className="tckt-img-text">
                                    <img src="./assets/images/dashboard/Frame 81.png" alt="prfile"/>
                                    <div className="profile-data">
                                        <h4 className="profile-name">Omar Benyoucef</h4>
                                        <h6 className="profile-meta">Member Since: July 19, 2024</h6>
                                    </div>
                                </div>
                                    <div className="tckt-form">
                                     <form action="" method="">
                                        <Row>
                                            <Col lg={6} md={6}>
                                                 <div className="form-group">
                                                    <label for="control-label">Email Address</label><br/>
                                                    <input type="email" name="form-control" id="" className="mg0"/>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="form-group">
                                                    <label for="control-label">Phone Number</label><br/>
                                                    <div className="t-flag">
                                                        <input type="tel" name="form-control" id="" placeholder="+44" className="mg0"/>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                    </div>
                                    </div>
                                    <div className="labeling-form">
                                        <form action="" method="">
                                        <div className="row">
                                            <Col lg={12} md={12}>
                                                <div className="form-group">
                                                    <label for="control-label">Vehicle Registration Number <span>(If Applicable)</span></label><br/>
                                                    <input type="text" name="form-control"/>
                                                </div>
                                            </Col>
                                             <Col lg={12} md={12}>
                                                <div className="form-group">
                                                    <label for="control-label">Issue</label><br/>
                                                    <input type="text" name="form-control"/>
                                                </div>
                                            </Col>
                                             <Col lg={12} md={12}>
                                                <div className="form-group">
                                                    <label for="control-label">Please explain in more detail</label><br/>
                                                    <input type="textarea" name="form-control" placeholder="The contract says that additional mileage is 25p a Mile, can we negotiate this?"/>
                                                </div>
                                                <div href="javascript:;" className="filter-v1 tickt_att">
                                                <input type="file" name="chat-docs" />
                                                <img src="./assets/images/clip.png" alt=""/>Attachment
                                                </div>
                                            </Col>
                                            <Col lg={12} md={12}>
                                                <div className="form-group">
                                                    <label for="control-label">What resolution are you expecting?</label><br/>
                                                    <input type="text" name="form-control" placeholder="I expect this to be 15p a mile."/>
                                                </div>
                                            </Col>
                                        </div>
                                    </form>
                                    <div className="change-pass-btn">
                                        <Link onClick={handleCloseaddticket}  className="psd-cancel">Cancel</Link>
                                        <Link onClick={handleCloseaddticket} className="psd-change">Create</Link>
                                     </div>
                                    </div>
                        </Col>
                    </div>

        </Modal.Body>
    </Modal>


                    </div>
                </div>
            </div>
            </div>
        </section>

    </>
  )
}

export default Support
