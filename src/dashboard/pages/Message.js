import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'

function Message() {
  return (
    <>
     <section class="user-dashboard">
    <div class="cancellation-alert-body addTicket-alert-body">
        <div class="addTicket-alert">
            <div class="head-wrap">
                <h6>Create Ticket</h6>
                <a href="javascript:void(0);" onclick="addTicket_alrt(this)"><ion-icon name="close-outline"></ion-icon></a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. </p>
            <form action="">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="control-label">Date & Time</label><br/>
                            <input type="date" name="form-control" id=""/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="categories">Categories</label><br/>
                            <select name="categories" id="cars">
                                <option value="Issue">Issue</option>
                                <option value="Issue2">Issue2</option>
                                <option value="Issue3">Issue3</option>
                                <option value="Issue4">Issue4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="vehicle">Vehicle</label><br/>
                            <select name="vehicle" id="cars">
                                <option value="Issue">Issue</option>
                                <option value="Issue2">Issue2</option>
                                <option value="Issue3">Issue3</option>
                                <option value="Issue4">Issue4</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="priority">Priority</label><br/>
                            <select name="priority" id="cars">
                                <option value="Issue">Issue</option>
                                <option value="Issue2">Issue2</option>
                                <option value="Issue3">Issue3</option>
                                <option value="Issue4">Issue4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                            <label for="userNotes">User Notes</label><br/>
                            <textarea name="UserNotes" id="" placeholder="27 June, 2024 10:00 AM"></textarea>
                        </div>
                    </div>
                </div>
            </form>
            <div class="addTicket-alert-btn">
                <a href="javascript:void(0);" onclick="addTicket_alrt(this)" class="cancel-addTicket">Cancel</a>
                <a href="javascript:void(0);" class="addTicket-create">Create</a>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
            <DashboardSidebar />
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel message-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                           <DashboardPanelTopbar/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="message-sec db-default-sec">
                                <div class="message-card db-default-wrapper">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="invoice-view-topbar">
                                                <a href="javascript" class="back-to"><ion-icon name="chevron-back-outline" role="img" class="md hydrated"></ion-icon> Back</a>
                                                <a href="javascript:void(0);" onclick="addTicket_alrt(this);" class="addTicket-btn"><ion-icon name="add-outline"></ion-icon> Add Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <div class="msg-menu-wraper">
                                                <div class="search-bar-v1">
                                                    <button type="submit"><i class="fa fa-search"></i></button>
                                                    <input type="text" placeholder="Search here..."/>
                                                </div>
                                                <div class="msg-menu">
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:;" class="msg admin-2">
                                                                <div class="user-relate">
                                                                    <div class="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 2</h6>
                                                                    </div>
                                                                    <div class="msg-trace">
                                                                        <div class="time-date">10:13 AM</div>
                                                                        <div class="msg-alert"><ion-icon name="ellipse"></ion-icon>Issue</div>
                                                                    </div>
                                                                </div>
                                                                <div class="user-short-msg">
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet...</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;" class="msg admin-1">
                                                                <div class="user-relate">
                                                                    <div class="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 1</h6>
                                                                    </div>
                                                                    <div class="msg-trace">
                                                                        <div class="time-date">10:13 AM</div>
                                                                        <div class="msg-alert"><ion-icon name="ellipse"></ion-icon>Issue</div>
                                                                    </div>
                                                                </div>
                                                                <div class="user-short-msg">
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet...</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;" class="msg admin-1">
                                                                <div class="user-relate">
                                                                    <div class="user-msg-profile">
                                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                                        <h6>Admin 1</h6>
                                                                    </div>
                                                                    <div class="msg-trace">
                                                                        <div class="time-date">10:13 AM</div>
                                                                        <div class="msg-alert"><ion-icon name="ellipse"></ion-icon>Issue</div>
                                                                    </div>
                                                                </div>
                                                                <div class="user-short-msg">
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet...</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="chat-board-wrapper">
                                                <div class="chat-board-topBar">
                                                    <div class="chat-user-profile">
                                                        <img src="./assets/images/dashboard/Avatar.png" alt="user profile"/>
                                                        <h6>Admin 2</h6>
                                                    </div>
                                                    <div class="chat-XOptions">
                                                        <a href="javascript:;" class="chat-fav"><img src="./assets/images/dashboard/Vector532.png"/></a>
                                                        <a href="javascript:;" class="chat-copen"><img src="./assets/images/dashboard/Coupon3432.png"/></a>
                                                        <a href="javascript:;" class="chat-sleep"><img src="./assets/images/dashboard/Group533.png"/></a>
                                                        <a href="javascript:;" class="chat-option"><ion-icon name="ellipsis-horizontal"></ion-icon></a>
                                                        <a href="javascript:;" class="chat-close"><img src="./assets/images/dashboard/Vector4354.png"/> Close</a>
                                                    </div>
                                                </div>
                                                <div class="chat-board-body">
                                                    <div class="admin1-wrap">
                                                        <div class="msg-tabs-wrap">
                                                            <div class="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div class="msg-active-time"><span class="active"><ion-icon name="checkmark-outline"></ion-icon>Seen</span><span class="timming">10:00</span></div>
                                                            </div>
                                                            <div class="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="admin2-wrap">
                                                        <div class="msg-tabs-wrap">
                                                            <div class="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div class="msg-active-time"><span class="active"><ion-icon name="checkmark-outline"></ion-icon>Seen</span><span class="timming">10:00</span></div>
                                                            </div>
                                                            <div class="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="admin1-wrap">
                                                        <div class="msg-tabs-wrap">
                                                            <div class="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div class="msg-active-time"><span class="active"><ion-icon name="checkmark-outline"></ion-icon>Seen</span><span class="timming">10:00</span></div>
                                                            </div>
                                                            <div class="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="admin2-wrap">
                                                        <div class="msg-tabs-wrap">
                                                            <div class="message-box">
                                                                <p>Lorem ipsum dolor sit amet consectetur. Nascetur amet leo in sed quisque neque. Venenatis massa sit eleifend amet et sed ipsum eget. Massa convallis vitae consequat eu sagittis luctus nunc sit. Amet eleifend ipsum sed pellentesque ante euismod egestas.</p>
                                                                <div class="msg-active-time"><span class="active"><ion-icon name="checkmark-outline"></ion-icon>Seen</span><span class="timming">10:00</span></div>
                                                            </div>
                                                            <div class="msg-us-profile">
                                                                <img src="./assets/images/dashboard/Avatar.png" alt="user"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat-text-field">
                                                    <div class="wrap">
                                                        <textarea name="msg" id="" placeholder="Lorem ipsum dolor sit amet consectetur."></textarea>
                                                        <div class="file-send-wrap">
                                                            <span class="file-send-btn">
                                                                <label for="chat-docs"><ion-icon name="add"></ion-icon></label>
                                                                <input type="file" name="chat-docs" id="chat-docs"/>
                                                            </span>
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

export default Message
