import React, { useEffect, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import Addcarimages from "./components/Addcarimages";
import { Col, Row } from "react-bootstrap";
function Addvehicle() {
  const [fileInputs, setFileInputs] = useState([true]); // Track which file inputs are enabled

  const [formData, setFormData] = useState({
    carMake: "",
    carModel: "",
    registrationNumber: "",
    pricePerWeek: "",
    carDescription: "",
    vehicleType: "Saloon",
    transmission: "",
    fuelType: "",
    mpg: "",
    people: "5 People",
    mileageAllowance: "",
    additionalMileageCost: "",
    resetPeriod: "",
    holdingDeposit: "",
    insuranceExcess: "",
    pcnFee: "",
    vehicle_gallery:"",
    mot_certificate_document:"",
    insurance_certificate_document:"",
    vehicle_licence_document:"",
    permission_letter_document:"",
    image:"",

  });

  const [carImages, setCarImages] = useState([]); // State for uploaded images
  const [error, setError] = useState("");

  const handleFileChange = (e, index) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgPreview = document.createElement("div");
        imgPreview.className = "upload_data-wrap";
        imgPreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">`;
        e.target.closest(".upload-file-group").appendChild(imgPreview);
      };
      reader.readAsDataURL(file);
      // Enable the next file input
      setFileInputs((prev) => {
        const newInputs = [...prev];
        newInputs[index + 1] = true;
        return newInputs;
      });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImagesChange = (images) => {
    setCarImages(images); // Update the uploaded images state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("x-auth-token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6IlVTRVIiLCJlbWFpbCI6Imx1Y2Fzd2lsbGlzNzQxQHlvcG1haWwuY29tIiwicGhvbmVObyI6IjQ0NDU1NTIyMjQ0NTU1IiwidXNlcm5hbWUiOiJsdWNhc3dpbGxpczc0MSIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lIjoiV2lsbGlzIiwicGxhdGZvcm0iOm51bGwsImZjbVRva2VuIjpudWxsLCJjb2RlIjpudWxsLCJvdHAiOjE5MDYzMCwib3RwRXhwaXJ5IjoiMjAyNC0xMC0xMFQxNDoxNDo0MS4wMDBaIiwic3RhdHVzIjoiQUNUSVZFIiwic29ja2V0SWQiOm51bGwsImxhbmd1YWdlIjoiZW4iLCJjdXJyZW5jeSI6InVuaXRlZF9zdGF0ZXNfZG9sbGFyIiwidGVtcEVtYWlsIjpudWxsLCJpc09ubGluZSI6ZmFsc2UsImxhc3RMb2dpbiI6IjIwMjQtMTAtMTdUMTU6MDQ6MjkuMDAwWiIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMTBUMTQ6MTQ6NDEuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMTdUMTU6MDQ6MjkuMDAwWiIsImlhdCI6MTcyOTE3NzQ3N30.Ui5KAGyCw9Sdu6c07P8HTg2AKTl7-kya27xPIagcTZU');
    const authToken = localStorage.getItem("x-auth-token");

    // Validate formData
    if (
      !formData.carMake || 
      !formData.carModel || 
      !formData.registrationNumber // Add all required fields here
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  
    

    console.log("Auth Token:", authToken);
    if (!authToken) {
      alert("Authorization required");
      return;
    }
  
    // Send POST request to the API
    fetch("https://blackties-backend.staging.designinternal.com/dev/blackties/api/v1/admin/add-vehicle/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        car_make: formData.carMake,
        car_model: formData.carModel,
        vehicle_registration_number: formData.registrationNumber,
        price_per_week: formData.pricePerWeek,
        car_description: formData.carDescription,
        vehicle_type: formData.vehicleType,
        transmission: formData.transmission,
        fuel_type: formData.fuelType,
        miles_per_gallon: formData.mpg,
        people: formData.people,
        mileage_allowance: formData.mileageAllowance,
        additional_mileage_cost: formData.additionalMileageCost,
        reset_period: formData.resetPeriod,
        holding_deposit: formData.holdingDeposit,
        insurance_excess: formData.insuranceExcess,
        pcn_fee: formData.pcnFee,
        vehicle_gallery: formData.vehicle_gallery,
        mot_certificate_document: formData.mot_certificate_document,
        insurance_certificate_document: formData.insurance_certificate_document,
        vehicle_licence_document: formData.vehicle_licence_document,
        permission_letter_document: formData.permission_letter_document,
        image: formData.image,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text || response.statusText);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully added vehicle:", data);
        alert("Vehicle added successfully!");
        setError("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("There was an error adding the vehicle. Please try again.");
      });
  };
  
    

  return (
    <>
      <section className="user-dashboard">
        <div className="container-fluid">
          <div className="row g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel application-panel">
                <Row >
                  <Col lg={12} md={12} >
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row >
                  <Col lg={12} md={12} >
                    <div className="main-veh-box">
                      <div className="vehicle-main-box">
                        <div className="main-veh-bx">
                          <div className="main-veh-txt">
                            <h5>Dashboard</h5>
                          </div>
                          <div className="main-veh-btn">
                            <Link
                              href="javascript:void(0);"
                              onclick="popup_alrt(this)"
                              className="phn-cancel"
                            >
                              Cancel
                            </Link>
                            <button
                              onClick={handleSubmit}
                              className="phn-change"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                        <div className="row inner-row">
                          <div className="col-lg-6 col-md-6">
                            <div className="main-veh-txt">
                              <h5>Vehicle Details</h5>
                            </div>
                            <div className="vehciles-bx-form">
                              <form onSubmit={handleSubmit}>
                                <Row >
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <label for="control-label">
                                        Car Make
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="carMake"
                                        id="carMake"
                                        value={formData.carMake}
                                        onChange={handleFormChange}
                                        placeholder=""
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <label for="control-label">
                                        Car Model
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="carModel"
                                        id="carModel"
                                        placeholder=""
                                        value={formData.carModel}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <label for="control-label">
                                        Vehicle Registration Number
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="registrationNumber"
                                        id="registrationNumber"
                                        placeholder=""
                                        value={formData.registrationNumber}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <label for="control-label">
                                        Price per Week
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="pricePerWeek"
                                        id="pricePerWeek"
                                        placeholder=""
                                        value={formData.pricePerWeek}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <label for="control-label">
                                        Car Description
                                      </label>
                                      <br />
                                      <input
                                        type="textarea"
                                        name="carDescription"
                                        id="carDescription"
                                        placeholder=""
                                        className="mg05"
                                        value={formData.carDescription}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <h3>Features</h3>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Vehicle Type:
                                      </label>
                                      <br />
                                      {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                      <select name="vehicle_type" id="vehicle" value={formData.vehicleType}  onChange={handleFormChange}>
                                        <option value="volvo">Saloon</option>
                                        <option value="saab">Saloon</option>
                                        <option value="opel">Saloon</option>
                                        <option value="audi">Saloon</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Transmission:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="transmission"
                                        id="transmission"
                                        placeholder=""
                                        value={formData.transmission}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Fuel Type
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="fuelType"
                                        id="fuelType"
                                        placeholder=""
                                        value={formData.fuelType}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Miles per Gallon (MPG)
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="mpg"
                                        id="mpg"
                                        placeholder=""
                                        value={formData.mpg}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">People</label>
                                      <br />
                                      {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                      <select name="people" id="people" value={formData.people}  onChange={handleFormChange}>
                                        <option value="volvo">5 People</option>
                                        <option value="saab">5 People</option>
                                        <option value="opel">5 People</option>
                                        <option value="audi">5 People</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <h3>Key Details</h3>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Mileage Allowance:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="mileageAllowance"
                                        id="mileageAllowance"
                                        placeholder=""
                                        value={formData.mileageAllowance}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Additional Mileage Cost:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="additionalMileageCost"
                                        id="additionalMileageCost"
                                        placeholder=""
                                        value={formData.additionalMileageCost}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Reset Period:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="resetPeriod"
                                        id="resetPeriod"
                                        placeholder=""
                                        value={formData.resetPeriod}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Holding Deposit:
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="holdingDeposit"
                                        id="holdingDeposit"
                                        placeholder=""
                                        value={formData.holdingDeposit}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Insurance Excess:
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="insuranceExcess"
                                        id="insuranceExcess"
                                        placeholder=""
                                        value={formData.insuranceExcess}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">PCN Fee</label>
                                      <br />
                                      <input
                                        type="number"
                                        name="pcnFee"
                                        id="pcnFee"
                                        placeholder=""
                                        value={formData.pcnFee}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="main-veh-txt">
                              <h5>Upload Image</h5>
                            </div>
                            <div className="upload-img-rw">
                              <img
                                src="./admin_assets/images/up-img.png"
                                alt=""
                              />
                            </div>
                            <div className="row upload-rw">
                              <div className="col-lg-4 col-md-4">
                                <div className="detailCar-slide-controller upload-img-dv">
                                  <ul>
                                    <li id="item1" className="slide-active">
                                      <img
                                        src="./admin_assets/images/slider/image 67.png"
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="detailCar-slide-controller upload-img-dv">
                                  <ul>
                                    <li id="item2">
                                      <img
                                        src="./admin_assets/images/slider/image346.png"
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="detailCar-slide-controller upload-img-dv">
                                  <ul>
                                    <li id="item3">
                                      <img
                                        src="./admin_assets/images/slider/image 66.png"
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <Addcarimages/> */}
                            <div className="Canvassec add_vehicle_images">
                              <Col lg={12} md={12} >
                                <label htmlFor="label-control"></label>
                                <div className="row file-upload-wrap">
                                  {fileInputs.map((enabled, index) => (
                                    <div
                                      key={index}
                                      className="col-lg-2 col-md-2 upload_img_preview_wrapper"
                                    >
                                      <div className="upload-file-group">
                                        <input
                                          type="file"
                                          className="upload_img_preview"
                                          onChange={(e) =>
                                            handleFileChange(e, index)
                                          }
                                          disabled={!enabled}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                            </div>
                            <div className="row inner-doc-sc">
                              <div className="main-veh-txt">
                                <h5>Document</h5>
                              </div>
                              <div className="doc-information">
                                <div className="rental-vehicle-docs-wrap">
                                  <ul className="rental-files">
                                    <span className="doc-field">
                                      MOT Certificate Document
                                    </span>
                                    <li>
                                      <img
                                        src="./admin_assets/images/Frame 2085663522.png"
                                        alt="Docs"
                                      />
                                      <div>
                                        <h6>MOT Certificate</h6>
                                        <span>3.6 MB</span>
                                      </div>
                                      <Link
                                        href="javascript:;"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                      <input type="file" 
                                      name="mot_certificate_document"
                                       id="mot_certificate_document" 
                                       value={formData.mot_certificate_document}
                                       onChange={handleFormChange}
                                       >
                                      </input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link href="javascript:;">
                                        <img
                                          src="./admin_assets/images/Trash.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </li>
                                    <span className="doc-field">
                                      Insurance Certificate Document
                                    </span>
                                    <li>
                                      <img
                                        src="./admin_assets/images/Frame 2085663522.png"
                                        alt="Docs"
                                      />
                                      <div>
                                        <h6>Insurance Certificate</h6>
                                        <span>3.6 MB</span>
                                      </div>
                                      <Link
                                        href="javascript:;"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                      <input type="file"
                                      name="insurance_certificate_document"
                                      id="insurance_certificate_document"
                                      value={formData.insurance_certificate_document}
                                      onChange={handleFormChange} >
                                      </input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link href="javascript:;">
                                        <img
                                          src="./admin_assets/images/Trash.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </li>
                                    <span className="doc-field">
                                      Vehicle Licence Document
                                    </span>
                                    <li>
                                      <img
                                        src="./admin_assets/images/Frame 2085663522.png"
                                        alt="Docs"
                                      />
                                      <div>
                                        <h6>Vehicle Licence</h6>
                                        <span>3.6 MB</span>
                                      </div>
                                      <Link
                                        href="javascript:;"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                      <input type="file"
                                      name="vehicle_licence_document"
                                      id="vehicle_licence_document"
                                      value={formData.vehicle_licence_document}
                                      onChange={handleFormChange} >
                                      </input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link href="javascript:;">
                                        <img
                                          src="./admin_assets/images/Trash.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </li>
                                    <span className="doc-field">
                                      Permission Letter Document
                                    </span>
                                    <li>
                                      <img
                                        src="./admin_assets/images/Frame 2085663522.png"
                                        alt="Docs"
                                      />
                                      <div>
                                        <h6>Permission Letter</h6>
                                        <span>3.6 MB</span>
                                      </div>
                                      <Link
                                        href="javascript:;"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                      <input type="file"
                                      name="permission_letter_document"
                                      id="permission_letter_document"
                                      value={formData.permission_letter_document}
                                      onChange={handleFormChange}
                                      >
                                      </input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link href="javascript:;">
                                        <img
                                          src="./admin_assets/images/Trash.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </li>
                                    <span className="doc-field">
                                      Vehicle Licence Document
                                    </span>
                                    <li>
                                      <img
                                        src="./admin_assets/images/Frame 2085663522.png"
                                        alt="Docs"
                                      />
                                      <div>
                                        <h6>Vehicle Licence</h6>
                                        <span>3.6 MB</span>
                                      </div>
                                      <Link
                                        href="javascript:;"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                      <input type="file">
                                      </input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                    
                                      <Link href="javascript:;">
                                        <img
                                          src="./admin_assets/images/Trash.png"
                                          alt="delete"
                                        />
                                      </Link>
                                    </li>
                                    <span className="doc-field">
                                      Vehicle Licence Document
                                    </span>
                                    <li>
                                      <img
                                        src="./admin_assets/images/Frame 2085663522 (1).png"
                                        alt="Docs"
                                      />
                                      <div>
                                        <h6>Vehicle Licence</h6>
                                        <span>3.6 MB</span>
                                      </div>
                                      <Link
                                        href="javascript:;"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                </div>
                </Col>
                </div>
                </div>
                </section>
    </>
  );
}

export default Addvehicle;
