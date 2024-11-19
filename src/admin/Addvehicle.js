import React, { useEffect,useRef, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link, useNavigate } from "react-router-dom";
import Addcarimages from "./components/Addcarimages";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";


function Addvehicle() {
  
  const [formData, setFormData] = useState({
      car_make: "",
    car_model: "",
    vehicle_registration_number: "",
    price_per_week: "",
    car_description: "",
    vehicle_type: "",
    transmission: "",
    fuel_type: "",
    miles_per_gallon: "",
    people: "",
    mileage_allowance: "",
    additional_mileage_cost: "",
    reset_period: "",
    holding_deposit: "",
    insurance_excess: "",
    pcn_fee: "",
    vehicle_gallery: "",
    mot_certificate_document: "",
    insurance_certificate_document: "",
    vehicle_licence_document: "",
    permission_letter_document: "",
    image: "",
  });

    // State to manage response or errors
  const [responseMessage, setResponseMessage] = useState("");

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
 // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  const authToken = localStorage.getItem("token");

  if (!authToken) {
    setResponseMessage("Error: No authentication token found.");
    return;
  }

  console.log("Form Data being submitted:", formData); // Log the form data for debugging

    try {
      const response = await axios.post(
        "https://blackties-backend.dev.internalstaging.com/dev/blackties/api/v1/admin/add-vehicle/",
        formData,
        {
          headers: {
            "x-auth-token": authToken,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("API Response:", response); // Log the response for debugging

      setResponseMessage(`Success: ${response.data.message}`);
      // Clear the form if successful
    } catch (error) {
      console.error("Error details:", error);
      setResponseMessage(`Error: ${error.response?.data?.message || "Something went wrong"}`);
    }
};



  // const [formData, setFormData] = useState({
  //   car_make: "",
  //   car_model: "",
  //   vehicle_registration_number: "",
  //   price_per_week: "",
  //   car_description: "",
  //   vehicle_type: "",
  //   transmission: "",
  //   fuel_type: "",
  //   miles_per_gallon: "",
  //   people: "",
  //   mileage_allowance: "",
  //   additional_mileage_cost: "",
  //   reset_period: "",
  //   holding_deposit: "",
  //   insurance_excess: "",
  //   pcn_fee: "",
  //   vehicle_gallery: "",
  //   mot_certificate_document: "",
  //   insurance_certificate_document: "",
  //   vehicle_licence_document: "",
  //   permission_letter_document: "",
  //   image: "",
  // });
  
  // // // const [carImages, setCarImages] = useState([]);
  // // const [error, setError] = useState("");
  // // const formRef = useRef(null);
  // const [errors, setErrors] = useState({});
  // const [success, setSuccess] = useState(false);
  // const navigate = useNavigate();

  // const handleFileChange = (e) => {
  //   const files = e.target.files;
  //   if (files.length > 0) {
  //     const file = files[0];
  //     const reader = new FileReader();
  //     reader.onload   
  //  = (event) => {
  //       setCarImages([...carImages, event.target.result]);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  
  // const handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleFormChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  
  // const handleValidation = () => {
  //   const requiredFields = [
  //     "car_make",
  //     "car_model",
  //     "vehicle_registration_number",
  //     "price_per_week",
  //   ];
  
  //   for (const field of requiredFields) {
  //     if (!formData[field]) {
  //       setErrors(`Please fill in the required field: ${field}`);
  //       return false;
  //     }
  //   }
  
  //   // Add additional validation checks here
  
  //   return true;
  // };
  
  // const ImagePreview = ({ src }) => (
  //   <div className="upload_data-wrap">
  //     <img src={src} alt="Image Preview" style="max-width: 100%; height: auto;" />
  //   </div>
  // );
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!handleValidation()) return;
  
  //   const authToken = localStorage.getItem("token");
  //   if (!authToken) {
  //     alert("Authorization required");
  //     return;
  //   }
  
    // const formDataObj = new FormData();
    // Object.keys(formData).forEach((key) => {
    //   formDataObj.append(key, formData[key]);
    // });
  
    // try {
    //   const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/admin/add-vehicle/`,{
    //     // formDataObj,
    //     method: 'POST',
    //   headers: {
    //         "x-auth-token": authToken,
    //         'Content-Type': 'application/json',
    //       },
    //       body:JSON.stringify({
    //         car_make: formData.car_make,
    //         car_model: formData.car_model,
    //         vehicle_registration_number: formData.vehicle_registration_number,
    //         price_per_week: formData.price_per_week,
    //         car_description: formData.car_description,
    //         vehicle_type: formData.vehicle_type,
    //         transmission: formData.transmission,
    //         fuel_type: formData.fuel_type,
    //         miles_per_gallon: formData.miles_per_gallon,
    //         people: formData.people,
    //         mileage_allowance: formData.mileage_allowance,
    //         additional_mileage_cost: formData.additional_mileage_cost,
    //         reset_period: formData.reset_period,
    //         holding_deposit: formData.holding_deposit,
    //         insurance_excess: formData.insurance_excess,
    //         pcn_fee: formData.pcn_fee,
    //         vehicle_gallery: formData.vehicle_gallery,
    //         mot_certificate_document: formData.mot_certificate_document,
    //         insurance_certificate_document: formData.insurance_certificate_document,
    //         vehicle_licence_document: formData.vehicle_licence_document,
    //         permission_letter_document: formData.permission_letter_document,
    //         image: formData.image,
    //       })
    //     });
    //     if (response.ok) {
    //       const data = await response.json();  
          
    //       // Assuming 'data' contains the user ID and email in the response
    //       // const createdUserId = data.data.userCreated.id; 
    //       // const createdUserEmail = formData.email;
    
    //       // // Save the user ID and email to localStorage
    //       // localStorage.setItem('user_id', createdUserId);
    //       // localStorage.setItem('user_email', createdUserEmail);
    
    //       setSuccess(true);
    //       setErrors({});
          
    //       // Redirect to verification page
    //       // navigate('/verification');
    //     } else {
    //       const errorData = await response.json(); // Get the error data from response
          
    //       // Check if the error contains a specific message
    //       if (errorData.error && errorData.error.message) {
    //         // Set the error message in the state
    //         setErrors({ general: errorData.error.message }); // Display the general error message
    //       } else {
    //         setErrors({ general: 'Registration failed. Please try again.' });
    //       }
    //     }
    //   } catch (err) {
    //     console.error('Registration error:', err); 
    //     setErrors({ general: 'Something went wrong. Please try again.' });
    //   }
    // };
  
  // const handleSaveClick = () => {
  //   if (formRef.current) {
  //     formRef.current.requestSubmit();
  //   }

  // };
  

    

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
                            {/* <Form.Control
                              // onClick={handleSubmit}
                              // onClick={handleSaveClick}
                              type="submit"
                              className="phn-change"
                              value='Save'
                            /> */}
                                    <button type="submit" class="phn-change" onClick={handleSubmit}>Submit</button>

                              {/* Save
                            </Form.Control> */}
                            {/* {error && <div className="error-message">{error}</div>} */}
                            {responseMessage && <p>{responseMessage}</p>}
                          </div>
                        </div>
                        <div className="row inner-row">
                          <div className="col-lg-6 col-md-6">
                            <div className="main-veh-txt">
                              <h5>Vehicle Details</h5>
                            </div>
                            <div className="vehciles-bx-form">
                            <Form 
      // ref={formRef}
      >
                                <Row >
                                  <Col lg={12} md={12} >
                                    <div className="form-group">
                                      <label for="control-label">
                                        Car Make
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="car_make"
                                        id="car_make"
                                        value={formData.car_make}
                                        onChange={handleChange}
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
                                        name="car_model"
                                        id="car_model"
                                        placeholder=""
                                        value={formData.car_model}
                                        onChange={handleChange}
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
                                        name="vehicle_registration_number"
                                        id="vehicle_registration_number"
                                        placeholder=""
                                        value={formData.vehicle_registration_number}
                                        onChange={handleChange}
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
                                        name="price_per_week"
                                        id="price_per_week"
                                        placeholder=""
                                        value={formData.price_per_week}
                                        onChange={handleChange}
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
                                        name="car_description"
                                        id="car_description"
                                        placeholder=""
                                        className="mg05"
                                        value={formData.car_description}
                                        onChange={handleChange}
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
                                      <select name="vehicle_type" id="vehicle" value={formData.vehicle_type}  onChange={handleChange}>
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
                                        transmission:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="transmission"
                                        id="transmission"
                                        placeholder=""
                                        value={formData.transmission}
                                        onChange={handleChange}
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
                                        name="fuel_type"
                                        id="fuel_type"
                                        placeholder=""
                                        value={formData.fuel_type}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">
                                        Miles per Gallon (miles_per_gallon)
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="miles_per_gallon"
                                        id="miles_per_gallon"
                                        placeholder=""
                                        value={formData.miles_per_gallon}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">people</label>
                                      <br />
                                      {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                      <select name="people" id="people" value={formData.people}  onChange={handleChange}>
                                        <option value="volvo">5 people</option>
                                        <option value="saab">5 people</option>
                                        <option value="opel">5 people</option>
                                        <option value="audi">5 people</option>
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
                                        name="mileage_allowance"
                                        id="mileage_allowance"
                                        placeholder=""
                                        value={formData.mileage_allowance}
                                        onChange={handleChange}
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
                                        name="additional_mileage_cost"
                                        id="additional_mileage_cost"
                                        placeholder=""
                                        value={formData.additional_mileage_cost}
                                        onChange={handleChange}
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
                                        name="reset_period"
                                        id="reset_period"
                                        placeholder=""
                                        value={formData.reset_period}
                                        onChange={handleChange}
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
                                        name="holding_deposit"
                                        id="holding_deposit"
                                        placeholder=""
                                        value={formData.holding_deposit}
                                        onChange={handleChange}
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
                                        name="insurance_excess"
                                        id="insurance_excess"
                                        placeholder=""
                                        value={formData.insurance_excess}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label for="control-label">PCN Fee</label>
                                      <br />
                                      <input
                                        type="number"
                                        name="pcn_fee"
                                        id="pcn_fee"
                                        placeholder=""
                                        value={formData.pcn_fee}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                            </Form>
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
                                  {/* {fileInputs.map((enabled, index) => (
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
                                  ))} */}
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
                                       onChange={handleChange}
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
                                      onChange={handleChange} >
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
                                      onChange={handleChange} >
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
                                      onChange={handleChange}
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
