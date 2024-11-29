import React from 'react'
import Sidebar from './partials/Sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'

function Adminaddcalender() {
  return (
    <>
      
<section class="user-dashboard">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
               <Sidebar/>
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel message-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <Dashboardpaneltopbar/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="message-sec db-default-sec ticket-sec">
                                <div class="message-card db-default-wrapper">
                                    
                                     <div class="Mot-certificate-body privte-hire Vehicle-License-pop Vehicle-Pick-Up crate-cal-main">
                                        <div class="Mot-certificate-bx crate-cal">
                                            <div class="chng-psd">
                                                <h4>Add Calendar Event</h4>
                                                 <a href="javascript:;" class="cross-icon"><i class="fas fa-times"></i></a>
                                            </div>
                                            <form action="">
                                                <div class="row">
                                                      <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <label for="control-label">Type Calendar</label>
                                                            <select name="Oil-Changes" id="Oil-Changes-fld">
                                                                <option value="volvo">MOT Document</option>
                                                                <option value="saab">MOT Document</option>
                                                                <option value="opel">MOT Document</option>
                                                                <option value="audi">MOT Document</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <label for="control-label">Document Type</label><br/>
                                                            <input type="text" id="" name="form-control" value=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <label for="control-label">Registration Number:</label><br/>
                                                            <input type="number" id="" name="form-control" value=""/>
                                                        </div>
                                                    </div>
                                                   <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <label for="control-label">Make  & Model</label><br/>
                                                            <input type="text" id="" name="form-control" value=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <label for="control-label">Expiry Date</label><br/>
                                                            <input type="date" id="" name="form-control" value=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 up-bx">
                                                        <div class="form-group">
                                                            <label for="control-label">Please upload Document</label><br/>
                                                           <span class="file_cont">
                                                            <input type="file" name="form-control"/>
                                                                <span>
                                                                    <b>Click to upload</b> or drag and drop Maximum file size 50 MB.
                                                                </span>
                                                            </span>
                                                        </div>
                                                     </div>
                                                </div>
                                            </form>
                                            <div class="change-pass-btn">
                                                <a href="javascript:void(0);" onclick="popup_alrt(this)"  class="psd-cancel">Cancel</a>
                                                <a href="javascript:;" class="psd-change">Submit</a>
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

export default Adminaddcalender
