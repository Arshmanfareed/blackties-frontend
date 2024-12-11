// import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import { Form } from 'react-bootstrap'
import React, { useState, useRef } from 'react';
import ApplicationForm from '../components/ApplicationForm';

function Applicant() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps] = useState(3);
  const [accidentForms, setAccidentForms] = useState([]);
  const accidentFormTemplate = useRef(null);

  const handleNext = (index) => {
    if (index < totalSteps) {
      setCurrentStep(index + 1);
    }
  };

  const handlePrevious = (index) => {
    if (index > 1) {
      setCurrentStep(index - 1);
    }
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleAccidentChange = (e) => {
    if (e.target.checked) {
      setAccidentForms([{}]);
    } else {
      setAccidentForms([]);
    }
  };

  const handleAddAccident = () => {
    setAccidentForms([...accidentForms, {}]);
  };

  const handleRemoveAccident = (index) => {
    setAccidentForms(accidentForms.filter((_, i) => i !== index));
  };
  return (
    <>
      <section className="user-dashboard">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-lg-3 col-md-3 sidebar-col">
              <DashboardSidebar />
            </div>
            <div className="col-lg-9 col-md-9 panel-col">
              <div className="dashboard-panel application-panel">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="dashboard-panel-topbar">
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="application-sec">
                      <div className="application-wrapper">
                        <div className="row">
                          <div className="col-lg-5 col-md-5">
                            <div className="application-content">
                              <h3>Why We Require Your Information</h3>
                              <p>At Blackties, we believe in smart risk management to ensure a seamless rental experience for both our customers and our business partners. As part of this commitment, we have a straightforward application process designed to meet the criteria set by us and our insurance partners.</p>
                              <h6>What Does This Mean for You?</h6>
                              <p>This is a short, simple application process that helps us get to know you better and preapprove you for future rentals. Once you’re preapproved, you’ll enjoy the freedom to browse and rent any of our available high-end vehicles with just a single click. Think of it as unlocking exclusive access — when new vehicles come in, you’ll be the first to know and rent without any delay or extra paperwork.</p>
                              <h6>Why Preapproval?</h6>
                              <p>By completing this preapproval, you are not committing to renting a vehicle today. Instead, you're setting yourself up for an easier, faster experience whenever you're ready. We make it easy for you to stay on the road in style with minimal hassle and maximum flexibility.</p>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <ApplicationForm />
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

export default Applicant
