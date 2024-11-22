import React from 'react'
import { Link } from 'react-router-dom'

function Dashboardpaneltopbar() {
  return (
    <>
      <div className="dashboard-panel-topbar">
    <div className="mobile-dash-topbar-wrap">
        <div className="dash-brand-wrapper">
            <Link href="#">Blackties<br /><span>Rental</span></Link>
        </div>
        <button className="dash-mobileNav-btn"><ion-icon name="reorder-three-outline"></ion-icon></button>
    </div>
</div>
    </>
  )
}

export default Dashboardpaneltopbar
