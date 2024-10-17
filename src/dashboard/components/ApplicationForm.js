import React, { useState } from 'react';

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [accidents, setAccidents] = useState([]);
  const totalSteps = 5; // Total number of steps

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAccidentChange = (e) => {
    if (e.target.checked) {
      setAccidents([...accidents, {}]); // Add an empty object for a new accident
    } else {
      setAccidents([]); // Clear accidents if unchecked
    }
  };

  const addAccident = () => {
    setAccidents([...accidents, {}]);
  };

  const removeAccident = (index) => {
    setAccidents(accidents.filter((_, i) => i !== index));
  };

  return (
    <div className="application-form form-wizard">
      <div className="stepwizard">
        <div className="stepwizard-row setup-panel steps">
          <ul>
            {[...Array(totalSteps)].map((_, i) => (
              <li key={i} className={currentStep === i + 1 ? 'active' : ''}>
                <div className="stepwizard-step">
                  <span
                    className={`btn btn-circle ${currentStep > i + 1 ? 'completed' : ''}`}
                    onClick={() => setCurrentStep(i + 1)}
                  >
                    {i + 1}
                  </span>
                  <p>{i === 0 ? 'Driving Information' : i === 1 ? 'Driving History' : i === 2 ? 'PCO Licence' : 'Proof of Address'}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="LR-Form-wrapper myContainer">
        <form role="form">
          {/* Step 1 */}
          {currentStep === 1 && (
            <div id="step-1" className="row setup-content form-container active">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>Driving License Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Driver License Expiry Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Upload Driving License Number</label>
                  <span className="file_cont">
                    <input type="file" className="form-control" />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <label for="control-label">DVLA Check Code 1</label>
                        <div className="DVLA-wrap">
                            <div id="" className="verific-DVLA">
                                <input type="number" inputmode="numeric" maxlength="1" />
                                <input type="number" inputmode="numeric" maxlength="1" />
                            </div>
                            <div id="" className="verific-DVLA">
                                <input type="number" inputmode="numeric" maxlength="1" />
                                <input type="number" inputmode="numeric" maxlength="1" />
                            </div>
                            <div id="" className="verific-DVLA">
                                <input type="number" inputmode="numeric" maxlength="1" />
                                <input type="number" inputmode="numeric" maxlength="1" />
                            </div>
                        </div>
                        <label for="control-label">DVLA Check Code 2</label>
                        <div className="DVLA-wrap">
                            <div id="" className="verific-DVLA">
                                <input type="number" inputmode="numeric" maxlength="1" />
                                <input type="number" inputmode="numeric" maxlength="1" />
                            </div>
                            <div id="" className="verific-DVLA">
                                <input type="number" inputmode="numeric" maxlength="1" />
                                <input type="number" inputmode="numeric" maxlength="1" />
                            </div>
                            <div id="" className="verific-DVLA">
                                <input type="number" inputmode="numeric" maxlength="1" />
                                <input type="number" inputmode="numeric" maxlength="1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                  <label>National Insurance Number</label>
                  <input type="text" className="form-control" />
                </div>
                <button type="button" className="theme-btn6 nextBtn" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div id="step-2" className="row setup-content form-container">
              <div className="col-lg-12 col-md-12">
                <div className="form-group check-switch-group">
                  <label>Have you got more than 6 Points on your License?</label>
                  <div className="checkboxes__item">
                    <label className="checkbox style-e">
                      <input type="checkbox" onChange={handleAccidentChange} />
                      <div className="checkbox__checkmark"></div>
                      <div className="checkbox__body label">Yes</div>
                    </label>
                  </div>
                </div>
                <div className="form-group check-switch-group">
                  <label>Have you been in any accidents in the last three years?</label>
                  <div className="checkboxes__item">
                    <label className="checkbox style-e">
                      <input type="checkbox" id="accident" onChange={handleAccidentChange} />
                      <div className="checkbox__checkmark"></div>
                      <div className="checkbox__body label">No</div>
                    </label>
                  </div>
                </div>

                {accidents.length > 0 && (
                  <div className="accident_form_main_container">
                    <div id="accident_forms_container">
                      {accidents.map((_, index) => (
                        <div key={index} className="accident_form_single">
                          <h5 className="accident-title">Accident</h5>
                          <div className="form-group">
                            <label>Date of Accident</label>
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-lg-12 col-md-12">
                                                                     <div className="form-group">
                                                                         <label for="FNP">Fault/ Non Fault / Pending</label><br/>
                                                                         <select id="FNP" className="options-field">
                                                                             <option value="fault">Fault</option>
                                                                             <option value="non_fault">Non Fault</option>
                                                                             <option value="pending">Pending</option>
                                                                         </select>
                                                                     </div>
                                                                 </div>
                          <div className="form-group">
                            <label>Details</label>
                            <textarea className="form-control"></textarea>
                          </div>
                          <button type="button" onClick={() => removeAccident(index)} className='removeBtn'>Remove</button>
                        </div>
                      ))}
                      <div className='anotherInc-btn-wrap'>
                      <button type="button" id="add_accident" onClick={addAccident}>
                      <ion-icon name="add-outline"></ion-icon> Add another Incident
                      </button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="NextPrev-btn-wrap">
                  <button type="button" className="theme-btn6 prevBtn" onClick={prevStep}>Back</button>
                  <button type="button" className="theme-btn6 nextBtn" onClick={nextStep}>Next</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div id="step-3" className="row setup-content form-container">
              <div className="col-lg-12 col-md-12">
                <div className="form-group check-switch-group">
                  <label>Have you had a PCO License for more than 12 Months?</label>
                  <div className="checkboxes__item">
                    <label className="checkbox style-e">
                      <input type="checkbox" />
                      <div className="checkbox__checkmark"></div>
                      <div className="checkbox__body label">Yes</div>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Date of Accident</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Date of Accident</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Upload Paper Copy</label>
                  <span className="file_cont">
                    <input type="file" className="form-control" />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                <div className="form-group">
                  <label>Upload Badge</label>
                  <span className="file_cont">
                    <input type="file" className="form-control" />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                <div className="NextPrev-btn-wrap">
                  <button type="button" className="theme-btn6 prevBtn" onClick={prevStep}>Back</button>
                  <button type="button" className="theme-btn6 nextBtn" onClick={nextStep}>Next</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {currentStep === 4 && (
            <div id="step-4" className="row setup-content form-container">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>Upload Bank Statement fot last 3 Month</label>
                  <span className="file_cont">
                    <input type="file" className="form-control" />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                <div className="NextPrev-btn-wrap">
                  <button type="button" className="theme-btn6 prevBtn" onClick={prevStep}>Back</button>
                  <button type="button" className="theme-btn6 nextBtn" onClick={nextStep}>Next</button>
                </div>
              </div>
            </div>
          )}

           {/* Step 4: Confirmation Step */}
           {currentStep === 5 && (
            <div id="step-5" className="row setup-content form-container">
              <div className="col-lg-12 col-md-12">
                <div className="application-approval-wrap">
                  <div className="approve-status">
                    <img src="./assets/images/dashboard/icon-park-solid_success.svg" alt="success" />
                    <h2>You are all done for now!</h2>
                    <div className="status-tag">
                      <span className="sp">Status:</span>
                      <span className="stag">
                        <ion-icon name="ellipse" role="img" className="md hydrated"></ion-icon> Accepted
                      </span>
                    </div>
                  </div>
                  <div className="approve-msg">
                    <p>Your application has been submitted to the reviewing team. This should not take more than one business day. In the meantime, please click the button below to view our available stock of vehicles.</p>
                    <p>If you have any questions, please feel free to contact us on 07493 231691</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
              <button type="button" className="theme-btn6" onClick={() => alert('Form submitted!')}>Our Vehicle</button>

                {/* <button type="submit" className="theme-btn6">Our Vehicles</button> */}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
