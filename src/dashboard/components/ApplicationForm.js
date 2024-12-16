import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const token = localStorage.getItem('token');
  const currentDate = new Date().toISOString().split('T')[0];
  const [applicationFormData, setApplicationFormData] = useState({
    drivingLicenseNumber: '',
    driverLicenseExpiryDate: '',
    drivingLicenseFile: '',
    dvlaCheckCode1: '',
    dvlaCheckCode2: '',
    nationalInsuranceNumber: '',
    pcoLicenseNumber: '',
    pcoLicenseExpiryDate: '',
    pcoPaperCopyFile: '',
    pcoBadgeFile: '',
    bankStatement: '',
    pcoLicenseFirstObtained: currentDate,
    accidents: []
  });
  const handleApplicationFormData = (e) => {
    const { name, value, files } = e.target;

    setApplicationFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };
  const [checkCode_1, setCheckCode_1] = useState(new Array(6).fill(""));
  const handleCheckCode_1 = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCheckCode_1 = [...checkCode_1];
      newCheckCode_1[index] = value;
      setCheckCode_1(newCheckCode_1);
      if (value && index < newCheckCode_1.length - 1) {
        document.getElementById(`check-code-1-${index + 1}`).focus();
      }
    }
  };
  const handleCheckCode_1Backspace = (e, index) => {
    if (e.key === "Backspace" && checkCode_1[index] === "" && index > 0) {
      document.getElementById(`check-code-1-${index - 1}`).focus();
    }
  };
  const [checkCode_2, setCheckCode_2] = useState(new Array(6).fill(""));
  const handleCheckCode_2 = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCheckCode_2 = [...checkCode_2];
      newCheckCode_2[index] = value;
      setCheckCode_2(newCheckCode_2);
      if (value && index < newCheckCode_2.length - 1) {
        document.getElementById(`check-code-2-${index + 1}`).focus();
      }
    }
  };
  const handleCheckCode_2Backspace = (e, index) => {
    if (e.key === "Backspace" && checkCode_2[index] === "" && index > 0) {
      document.getElementById(`check-code-2-${index - 1}`).focus();
    }
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [accidents, setAccidents] = useState([]);
  const [accidentAppear, setAccidentAppear] = useState(false);
  const [sixPointsOnLicense, setSixPointsOnLicense] = useState(false);
  const handleSixPointsOnLicense = (e) => {
    setSixPointsOnLicense(!sixPointsOnLicense);
  };
  const totalSteps = 4;
  const prevStep = () => setCurrentStep((prev) => {
    return Math.max(prev - 1, 1);
  });
  const handleAccidentChange = (e) => {
    setAccidentAppear(!accidentAppear);
    setAccidents(e.target.checked ? [{}] : []);
  };
  const addAccident = () => {
    setAccidents((prevAccidents) => [
      ...prevAccidents,
      { date: '', faultStatus: 'fault', details: '' },
    ]);
  };
  const removeAccident = (index) => {
    setAccidents((prevAccidents) => prevAccidents.filter((_, i) => i !== index));
  };
  const handleAccidentInputChange = (e, index, field) => {
    const updatedAccidents = [...accidents];
    updatedAccidents[index][field] = e.target.value;
    setAccidents(updatedAccidents);
  }
  const navigate = useNavigate();
  const [drivingInfoLoader, setDrivingInfoLoader] = useState(false);
  const [drivingInfoError, setDrivingInfoError] = useState('');
  const [drivingHistoryLoader, setDrivingHistoryLoader] = useState(false);
  const [drivingHistoryError, setDrivingHistoryError] = useState('');
  const [pcoLicenseLoader, setPcoLicenseLoader] = useState(false);
  const [pcoLicenseError, setPcoLicenseError] = useState('');
  const [bankStatementError, setBankStatementError] = useState('');
  const [bankStatementLoader, setBankStatementLoader] = useState(false);
  const nextStep = async () =>
    setCurrentStep((prev) => {
      if (prev === 1) {
        setDrivingInfoLoader(true);
        setDrivingInfoError('');
        if (!applicationFormData.drivingLicenseNumber) {
          setDrivingInfoError('License Number is required');
          setDrivingInfoLoader(false);
          return prev;
        }
        if (!applicationFormData.driverLicenseExpiryDate) {
          setDrivingInfoError('License Expiry is required');
          setDrivingInfoLoader(false);
          return prev;
        }
        if (applicationFormData.driverLicenseExpiryDate <= currentDate) {
          setDrivingInfoError('Your License is already expired');
          setDrivingInfoLoader(false);
          return prev;
        }
        if (!applicationFormData.drivingLicenseFile) {
          setDrivingInfoError('Driving License File is required');
          setDrivingInfoLoader(false);
          return prev;
        }
        if (checkCode_1.some((digit) => digit === "")) {
          setDrivingInfoError('DVLA Check Code 1 is required');
          setDrivingInfoLoader(false);
          return prev;
        }
        applicationFormData.dvlaCheckCode1 = checkCode_1.join("");
        if (checkCode_2.some((digit) => digit === "")) {
          setDrivingInfoError('DVLA Check Code 2 is required');
          setDrivingInfoLoader(false);
          return prev;
        }
        applicationFormData.dvlaCheckCode2 = checkCode_2.join("");
        if (!applicationFormData.nationalInsuranceNumber) {
          setDrivingInfoError('National Insurance Number is required');
          setDrivingInfoLoader(false);
          return prev;
        }
        setDrivingInfoLoader(false);
      } else if (prev === 2) {
        setDrivingHistoryError('');
        setDrivingHistoryLoader(true);
        if (sixPointsOnLicense) {
          setDrivingHistoryLoader(false);
          setAccidentAppear(false);
          setSixPointsOnLicense(false);
          return 6;
        }
        if (accidentAppear) {
          if (accidents.length <= 0) {
            setDrivingHistoryError('At least one accident detail is required');
            setDrivingHistoryLoader(false);
            return prev;
          }
          for (let i = 0; i < accidents.length; i++) {
            const accident = accidents[i];
            if (!accident.date) {
              setDrivingHistoryError(`Date of accident #${i + 1} is required`);
              setDrivingHistoryLoader(false);
              return prev;
            }
            if (accident.date > currentDate) {
              setDrivingHistoryError(`Accident #${i + 1} must have a date before today`);
              setDrivingHistoryLoader(false);
              return prev;
            }
            if (!accident.faultStatus) {
              setDrivingHistoryError(`Fault/Non-Fault/Pending status is required for accident #${i + 1}`);
              setDrivingHistoryLoader(false);
              return prev;
            }
            if (!accident.details) {
              setDrivingHistoryError(`Details are required for accident #${i + 1}`);
              setDrivingHistoryLoader(false);
              return prev;
            }
          }
          applicationFormData.accidents = accidents;
        }
        setDrivingHistoryLoader(false);
      } else if (prev === 3) {
        setPcoLicenseLoader(true);
        setPcoLicenseError('');
        if (!applicationFormData.pcoLicenseNumber) {
          setPcoLicenseError('License Number is required');
          setPcoLicenseLoader(false);
          return prev;
        }
        if (!applicationFormData.pcoLicenseExpiryDate) {
          setPcoLicenseError('License Expiry Date is required');
          setPcoLicenseLoader(false);
          return prev;
        }
        if (applicationFormData.pcoLicenseExpiryDate < currentDate) {
          setPcoLicenseError('License already expired');
          setPcoLicenseLoader(false);
          return prev;
        }
        if (!applicationFormData.pcoPaperCopyFile) {
          setPcoLicenseError('Paper Copy File is required');
          setPcoLicenseLoader(false);
          return prev;
        }
        if (!applicationFormData.pcoBadgeFile) {
          setPcoLicenseError('Badge File is required');
          setPcoLicenseLoader(false);
          return prev;
        }
        setPcoLicenseLoader(false);
      }
      return Math.min(prev + 1, totalSteps + 1);
    });
  const handleRedirectToVehicles = () => {
    navigate('/rent-our-vehicle');
  }
  const handlePcoLicenseDate = (event, nextInputId, prevInputId) => {
    const input = event.target;
    const value = input.value;
    input.value = value.slice(0, 1);
    if (value.length === 1 && nextInputId && event.inputType !== "deleteContentBackward") {
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      }
    }
    if (value.length === 0 && prevInputId && event.inputType === "deleteContentBackward") {
      const prevInput = document.getElementById(prevInputId);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };
  const handleApplicationFormSubmit = async () => {
    setBankStatementError('');
    setBankStatementLoader(true);
    if (!applicationFormData.bankStatement) {
      setBankStatementError('Bank Statement is required');
      setBankStatementLoader(false);
      return;
    }
    const formData = new FormData();

    // Append fields to FormData
    formData.append("drivingLicenseNumber", applicationFormData.drivingLicenseNumber);
    formData.append("driverLicenseExpiryDate", applicationFormData.driverLicenseExpiryDate);
    formData.append("drivingLicenseFile", applicationFormData.drivingLicenseFile);
    formData.append("dvlaCheckCode1", applicationFormData.dvlaCheckCode1);
    formData.append("dvlaCheckCode2", applicationFormData.dvlaCheckCode2);
    formData.append("nationalInsuranceNumber", applicationFormData.nationalInsuranceNumber);
    formData.append("pcoLicenseNumber", applicationFormData.pcoLicenseNumber);
    formData.append("pcoLicenseExpiryDate", applicationFormData.pcoLicenseExpiryDate);
    formData.append("pcoPaperCopyFile", applicationFormData.pcoPaperCopyFile);
    formData.append("pcoBadgeFile", applicationFormData.pcoBadgeFile);
    formData.append("bankStatement", applicationFormData.bankStatement);

    // Append nested objects like "accidents" as JSON strings
    formData.append("accidents", JSON.stringify(applicationFormData.accidents));
    try {
      // Send login request to the backend.
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/user/application-process`, {
        method: "POST",
        headers: {
          "x-auth-token": token
        },
        body: formData,
      });

      // Parse the response data.
      const data = await response.json();
      if (response.ok) {
        setCurrentStep(5);
      } else {
        setDrivingHistoryError(data.error?.message || "An error occurred. Please try again.");
        setBankStatementLoader(false);
      }
    } catch (err) {
      // Handle any network or unexpected errors.
      setDrivingHistoryError("Something went wrong. Please try again.");
    } finally {
      // Set the loading state to false after request completes.
      setBankStatementLoader(false);
    }
  }

  return (
    <div className="application-form form-wizard">
      <div className="stepwizard">
        <div className="stepwizard-row setup-panel steps">
          <ul>
            {[...Array(totalSteps + 1)].map((_, i) => (
              <li key={i} className={currentStep === i + 1 ? 'active' : ''}>
                <div className="stepwizard-step">
                  <span
                    className={`btn btn-circle ${currentStep > i + 1 ? 'completed' : ''}`}
                  >
                    {i + 1}
                  </span>
                  <p>
                    {i === 0
                      ? 'Driving Information'
                      : i === 1
                        ? 'Driving History'
                        : i === 2
                          ? 'PCO Licence'
                          : 'Proof of Address'}
                  </p>
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
                  <input
                    type="text"
                    name="drivingLicenseNumber"
                    id="drivingLicenseNumber"
                    className="form-control"
                    value={applicationFormData.drivingLicenseNumber}
                    onChange={handleApplicationFormData}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Driver License Expiry Date</label>
                  <input
                    type="date"
                    name="driverLicenseExpiryDate"
                    id="driverLicenseExpiryDate"
                    className="form-control"
                    value={applicationFormData.driverLicenseExpiryDate}
                    onChange={handleApplicationFormData}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Upload Driving License Number</label>
                  <span className="file_cont">
                    <input
                      type="file"
                      name="drivingLicenseFile"
                      id="drivingLicenseFile"
                      className="form-control"
                      onChange={handleApplicationFormData}
                      required
                    />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label className="control-label">DVLA Check Code 1</label>
                    <div className="DVLA-wrap">
                      {(() => {
                        let index = 0;
                        return Array.from({ length: 3 }).map((_, rowIndex) => (
                          <div key={rowIndex} className="verific-DVLA">
                            {Array.from({ length: 2 }).map((_, colIndex) => {
                              const currentIndex = index++;
                              return (
                                <input
                                  key={`input-${currentIndex}`}
                                  id={`check-code-1-${currentIndex}`}
                                  type="number"
                                  maxLength="1"
                                  value={checkCode_1[currentIndex]}
                                  onChange={(e) => handleCheckCode_1(e.target.value, currentIndex)}
                                  onKeyDown={(e) => handleCheckCode_1Backspace(e, currentIndex)}
                                  className="verific-DVLA-input"
                                  required
                                />
                              );
                            })}
                          </div>
                        ));
                      })()}
                    </div>
                    <label className="control-label">DVLA Check Code 2</label>
                    <div className="DVLA-wrap">
                      {(() => {
                        let index = 0;
                        return Array.from({ length: 3 }).map((_, rowIndex) => (
                          <div key={rowIndex} className="verific-DVLA">
                            {Array.from({ length: 2 }).map((_, colIndex) => {
                              const currentIndex = index++;
                              return (
                                <input
                                  key={`input-${currentIndex}`}
                                  id={`check-code-2-${currentIndex}`}
                                  type="number"
                                  maxLength="1"
                                  value={checkCode_2[currentIndex]}
                                  onChange={(e) => handleCheckCode_2(e.target.value, currentIndex)}
                                  onKeyDown={(e) => handleCheckCode_2Backspace(e, currentIndex)}
                                  className="verific-DVLA-input"
                                  required
                                />
                              );
                            })}
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>National Insurance Number</label>
                  <input
                    type="text"
                    name="nationalInsuranceNumber"
                    id="nationalInsuranceNumber"
                    className="form-control"
                    value={applicationFormData.nationalInsuranceNumber}
                    onChange={handleApplicationFormData}
                    required
                  />
                </div>
                {drivingInfoError && <p className="text-danger">{drivingInfoError}</p>}
                <button type="button" className="theme-btn6 nextBtn" onClick={nextStep} disabled={drivingInfoLoader}>{drivingInfoLoader ? "Wait..." : "Next"}</button>
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
                      <input type="checkbox" onChange={handleSixPointsOnLicense} />
                      <div className="checkbox__checkmark"></div>
                      <div className="checkbox__body label">{sixPointsOnLicense ? 'Yes' : 'No'}</div>
                    </label>
                  </div>
                </div>
                <div className="form-group check-switch-group">
                  <label>Have you been in any accidents in the last three years?</label>
                  <div className="checkboxes__item">
                    <label className="checkbox style-e">
                      <input type="checkbox" id="accident" onChange={handleAccidentChange} />
                      <div className="checkbox__checkmark"></div>
                      <div className="checkbox__body label">{accidentAppear ? 'Yes' : 'No'}</div>
                    </label>
                  </div>
                </div>

                {accidentAppear && accidents.length > 0 && (
                  <div className="accident_form_main_container">
                    <div id="accident_forms_container">
                      {accidents.map((accident, index) => (
                        <div key={index} className="accident_form_single">
                          <h5 className="accident-title">{'Accident # ' + (index + 1)}</h5>
                          <div className="form-group">
                            <label>Date of Accident</label>
                            <input
                              type="date"
                              className="form-control"
                              value={accident.date}
                              onChange={(e) => handleAccidentInputChange(e, index, 'date')}
                            />
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label for="FNP">Fault/ Non Fault / Pending</label><br />
                              <select
                                id="FNP"
                                className="options-field"
                                value={accident.faultStatus}
                                onChange={(e) => handleAccidentInputChange(e, index, 'faultStatus')}
                              >
                                <option value="fault">Fault</option>
                                <option value="non_fault">Non Fault</option>
                                <option value="pending">Pending</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Details</label>
                            <textarea
                              className="form-control"
                              value={accident.details}
                              onChange={(e) => handleAccidentInputChange(e, index, 'details')}
                            />
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
                {drivingHistoryError && <p className="text-danger">{drivingHistoryError}</p>}
                <div className="NextPrev-btn-wrap">
                  <button type="button" className="theme-btn6 prevBtn" onClick={prevStep}>Back</button>
                  <button type="button" className="theme-btn6 nextBtn" onClick={nextStep} disabled={drivingHistoryLoader}>{drivingHistoryLoader ? "Wait..." : "Next"}</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div id="step-3" className="row setup-content form-container">
              <div className="col-lg-12 col-md-12">
                <div className="form-group ">
                  <label className='d-block'>When did you first obtain a PCO licence?</label>
                  <div className='pco_get_date d-flex'>
                    {/* <div className="pco_get_date d-flex">
                      <div className="pco_month d-flex">
                        <input
                          type="number"
                          placeholder="M"
                          min={0}
                          max={1}
                          aria-label="First digit of the month"
                          onInput={(e) => handlePcoLicenseDate(e, "month1")}
                          id="month1"
                          required
                        />
                        <input
                          type="number"
                          placeholder="M"
                          min={0}
                          max={9}
                          aria-label="Second digit of the month"
                          onInput={(e) => handlePcoLicenseDate(e, "month2")}
                          id="month2"
                          required
                        />
                      </div>

                      <div className="pco_year d-flex">
                        <input
                          type="number"
                          placeholder="Y"
                          min={0}
                          max={9}
                          aria-label="First digit of the year"
                          onInput={(e) => handlePcoLicenseDate(e, "year1")}
                          id="year1"
                          required
                        />
                        <input
                          type="number"
                          placeholder="Y"
                          min={0}
                          max={9}
                          aria-label="Second digit of the year"
                          onInput={(e) => handlePcoLicenseDate(e, "year2")}
                          id="year2"
                          required
                        />
                        <input
                          type="number"
                          placeholder="Y"
                          min={0}
                          max={9}
                          aria-label="Third digit of the year"
                          onInput={(e) => handlePcoLicenseDate(e, "year3")}
                          id="year3"
                          required
                        />
                        <input
                          type="number"
                          placeholder="Y"
                          min={0}
                          max={9}
                          aria-label="Fourth digit of the year"
                          onInput={(e) => handlePcoLicenseDate(e, "year4")}
                          id="year4"
                          required
                        />
                      </div>
                    </div> */}

                  </div>
                </div>
                <div className="form-group">
                  <label>PCO Licence Number</label>
                  <input
                    type="text"
                    name="pcoLicenseNumber"
                    id="pcoLicenseNumber"
                    className="form-control"
                    value={applicationFormData.pcoLicenseNumber}
                    onChange={handleApplicationFormData}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="date"
                    name="pcoLicenseExpiryDate"
                    id="pcoLicenseExpiryDate"
                    className="form-control"
                    value={applicationFormData.pcoLicenseExpiryDate}
                    onChange={handleApplicationFormData}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Upload Paper Copy</label>
                  <span className="file_cont">
                    <input
                      type="file"
                      name="pcoPaperCopyFile"
                      id="pcoPaperCopyFile"
                      className="form-control"
                      onChange={handleApplicationFormData}
                      required
                    />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                <div className="form-group">
                  <label>Upload Badge</label>
                  <span className="file_cont">
                    <input
                      type="file"
                      name="pcoBadgeFile"
                      id="pcoBadgeFile"
                      className="form-control"
                      onChange={handleApplicationFormData}
                      required
                    />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                {pcoLicenseError && <p className="text-danger">{pcoLicenseError}</p>}
                <div className="NextPrev-btn-wrap">
                  <button type="button" className="theme-btn6 prevBtn" onClick={prevStep}>Back</button>
                  <button type="button" className="theme-btn6 nextBtn" onClick={nextStep} disabled={pcoLicenseLoader}>{pcoLicenseLoader ? "Wait..." : "Next"}</button>
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
                    <input
                      type="file"
                      name="bankStatement"
                      id="bankStatement"
                      className="form-control"
                      onChange={handleApplicationFormData}
                      required
                    />
                    <span><b>Click to upload</b> or drag and drop. Maximum file size 50 MB.</span>
                  </span>
                </div>
                {bankStatementError && <p className="text-danger">{bankStatementError}</p>}
                <div className="NextPrev-btn-wrap">
                  <button type="button" className="theme-btn6 prevBtn" onClick={prevStep}>Back</button>
                  <button type="button" className="theme-btn6 nextBtn" onClick={handleApplicationFormSubmit}>{bankStatementLoader ? 'Wait...' : 'Apply now'}</button>
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
                        <ion-icon name="ellipse" role="img" className="md hydrated"></ion-icon> Pending
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
                <button type="button" className="theme-btn6" onClick={handleRedirectToVehicles}>Our Vehicle</button>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="application_rej">
              <h2>Application Rejected</h2>
              <p>
                <strong> Reason for Rejection:</strong> You have more than 6
                points on your licence
              </p>
              <br></br>
              <p>
                {" "}
                Unfortunately, we are unable to get you approved at the moment
                since you do not meet our criteria to rent a vehicle for us.
                Do not worry too much, because we are more than willing you
                accept you when you have 6 or less points on your drivers
                licence.
              </p>
              <br></br>
              <p>
                If you selected this option by accident and believe that this
                is wrong. Please apply using the button below.
              </p>
              <div className="form-group">
                <label>How many points do you have on your licence</label>
                <input type="text" className="form-control" />
              </div>
              <button
                type="button"
                className="theme-btn6"
                onClick={() => {
                  setApplicationFormData({
                    drivingLicenseNumber: '',
                    driverLicenseExpiryDate: '',
                    drivingLicenseFile: '',
                    dvlaCheckCode1: '',
                    dvlaCheckCode2: '',
                    nationalInsuranceNumber: '',
                    pcoLicenseNumber: '',
                    pcoLicenseExpiryDate: '',
                    pcoPaperCopyFile: '',
                    pcoBadgeFile: '',
                    bankStatement: '',
                    pcoLicenseFirstObtained: '',
                    accidents: []
                  });
                  checkCode_1.forEach((_, index) => {
                    checkCode_1[index] = "";
                  });
                  checkCode_2.forEach((_, index) => {
                    checkCode_2[index] = "";
                  });
                  setCurrentStep(1);
                }}
              >
                Reapply
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
