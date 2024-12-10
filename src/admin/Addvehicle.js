import React, { useEffect, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Dashboardpaneltopbar from "./partials/Dashboardpaneltopbar";
import { Link } from "react-router-dom";
import Addcarimages from "./components/Addcarimages";
import { Col, Container, Row } from "react-bootstrap";
function Addvehicle() {
  const [fileInputs, setFileInputs] = useState([true]); // Track which file inputs are enabled

  const [formData, setFormData] = useState({
    car_make: "",
    car_model: "",
    vehicle_registration_number: "",
    price_per_week: "",
    car_description: "",
    vehicle_type: "Saloon",
    transmission: "",
    fuel_type: "",
    miles_per_gallon: "",
    people: "5 People",
    image: "",
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
  });

  const [carImages, setCarImages] = useState([]); // State for uploaded images
  const [error, setError] = useState("");

  // const handleImageChange = (e, index) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Update the fileInputs array with the File object
  //     const newFileInputs = [...fileInputs];
  //     newFileInputs[index] = file; // Store the File object
  //     setFileInputs(newFileInputs);

  //     // Show the image preview
  //     const reader = new FileReader();
  //     reader.onloadend = (event) => {
  //       const imgPreview = document.createElement("div");
  //       imgPreview.className = "upload_data-wrap";
  //       imgPreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">`;

  //       // Prevent duplicate previews
  //       const uploadGroup = e.target.closest(".upload-file-group");
  //       const existingPreview = uploadGroup.querySelector(".upload_data-wrap");
  //       if (existingPreview) {
  //         uploadGroup.removeChild(existingPreview);
  //       }

  //       uploadGroup.appendChild(imgPreview);
  //     };
  //     reader.readAsDataURL(file); // Convert file to base64 for preview only
  //   }
  // };

  // const handleImageChange = (e, index) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = (event) => {

  //       const imgPreview = document.createElement("div");
  //       imgPreview.className = "upload_data-wrap";
  //       imgPreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">`;
  //       e.target.closest(".upload-file-group").appendChild(imgPreview);

  //       // Assuming fileInputs is an array of objects or image containers
  //       const newFileInputs = [...fileInputs];
  //       newFileInputs[index] = reader.result;  // Set the base64 value
  //       setFileInputs(newFileInputs);
  //     };
  //     reader.readAsDataURL(file); // This converts the file to base64
  //   }
  // };

  // Handle file input change

  const handleImageChange = (e, index) => {
    const files = e.target.files;
    if (files.length > 0) {
      const updatedInputs = [...fileInputs];
      updatedInputs[index] = files[0]; // Save the file object
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgPreview = document.createElement("div");
        imgPreview.className = "upload_data-wrap";
        imgPreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">`;
        e.target.closest(".upload-file-group").appendChild(imgPreview);
      };
      reader.readAsDataURL(file);

      setFileInputs(updatedInputs);
    }
  };

  // Add a new file input
  const addFileInput = () => {
    setFileInputs([...fileInputs, ""]); // Add an empty placeholder for a new file
  };

  // Remove a file input
  const removeFileInput = (index) => {
    const updatedInputs = [...fileInputs];
    updatedInputs.splice(index, 1); // Remove the file input at the specified index
    setFileInputs(updatedInputs);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImagesChange = (images) => {
    setCarImages(images); // Update the uploaded images state
  };

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result; // Base64 data of the file
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: base64, // Update only the specific field
      }));
    };
    reader.readAsDataURL(file); // Read the file as a Data URL
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const authToken = localStorage.getItem("token");

  //   if (!authToken) {
  //     alert("Authorization required");
  //     return;
  //   }

  //   // Validate formData
  //   if (!formData.car_make || !formData.car_model || !formData.vehicle_registration_number) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   // Remove empty fields from payload
  //   const sanitizedPayload = Object.fromEntries(
  //     Object.entries(formData).filter(([key, value]) => value !== "")
  //   );

  //   fetch("http://localhost:5050/dev/blackties/api/v1/admin/add-vehicle", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-auth-token": authToken,
  //     },
  //     body: JSON.stringify(sanitizedPayload),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.text().then((text) => {
  //           throw new Error(text || response.statusText);
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Successfully added vehicle:", data);
  //       alert("Vehicle added successfully!");
  //       setError("");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.message);
  //       try {
  //         const parsedError = JSON.parse(error.message);
  //         setError(parsedError.error?.message || "An unexpected error occurred.");
  //       } catch (e) {
  //         setError("An error occurred while adding the vehicle. Please try again.");
  //       }
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem("token");

    if (!authToken) {
      alert("Authorization required");
      return;
    }

    // Validate formData
    if (
      !formData.car_make ||
      !formData.car_model ||
      !formData.vehicle_registration_number
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create a FormData object
    const formDataPayload = new FormData();

    // Append text fields to FormData
    for (let key in formData) {
      formDataPayload.append(key, formData[key]);
    }

    // Append images to FormData
    fileInputs.forEach((file, index) => {
      if (file) {
        formDataPayload.append(`vehicle_gallery[]`, file); // Append File objects directly
      }
    });

    // Send the data using fetch
    fetch(
      "https://blackties-backend.dev.internalstaging.com/dev/blackties/api/v1/admin/add-vehicle",
      {
        method: "POST",
        headers: {
          "x-auth-token": authToken, // Do not set Content-Type manually for FormData
        },
        body: formDataPayload,
      }
    )
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
        console.error("Error:", error.message);
        try {
          const parsedError = JSON.parse(error.message);
          setError(
            parsedError.error?.message || "An unexpected error occurred."
          );
        } catch (e) {
          setError(
            "An error occurred while adding the vehicle. Please try again."
          );
        }
      });
  };

  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className=" g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col lg={9} md={9} className=" panel-col">
              <div className="dashboard-panel application-panel">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="dashboard-panel-topbar">
                      <Dashboardpaneltopbar />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12}>
                    <div className="main-veh-box">
                      <div className="vehicle-main-box">
                        <div className="main-veh-bx">
                          <div className="main-veh-txt">
                            <h5>Dashboard</h5>
                          </div>
                          <div className="main-veh-btn">
                            <Link
                              to="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setError(""); // Clear error on cancel
                              }}
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

                          {/* Display the error message */}
                          {error && (
                            <div
                              className="error-message"
                              style={{ color: "red", marginTop: "10px" }}
                            >
                              <div className="alert alert-danger" role="alert">
                                {error}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="row inner-row">
                          <div className="col-lg-6 col-md-6">
                            <div className="main-veh-txt">
                              <h5>Vehicle Details</h5>
                            </div>
                            <div className="vehciles-bx-form">
                              <form onSubmit={handleSubmit}>
                                <Row>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Car Make
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="car_make"
                                        id="car_make"
                                        value={formData.car_make}
                                        onChange={handleFormChange}
                                        placeholder=""
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Car Model
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="car_model"
                                        id="car_model"
                                        placeholder=""
                                        value={formData.car_model}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Vehicle Registration Number
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="vehicle_registration_number"
                                        id="vehicle_registration_number"
                                        placeholder=""
                                        value={
                                          formData.vehicle_registration_number
                                        }
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Price per Week
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="price_per_week"
                                        id="price_per_week"
                                        placeholder=""
                                        value={formData.price_per_week}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <label htmlFor="control-label">
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
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <h3>Features</h3>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Vehicle Type:
                                      </label>
                                      <br />
                                      {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                      <select
                                        name="vehicle_type"
                                        id="vehicle"
                                        value={formData.vehicle_type}
                                        onChange={handleFormChange}
                                      >
                                        <option value="volvo">Saloon</option>
                                        <option value="saab">Saloon</option>
                                        <option value="opel">Saloon</option>
                                        <option value="audi">Saloon</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
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
                                      <label htmlFor="control-label">
                                        Fuel Type
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="fuel_type"
                                        id="fuel_type"
                                        placeholder=""
                                        value={formData.fuel_type}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Miles per Gallon (MPG)
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="miles_per_gallon"
                                        id="miles_per_gallon"
                                        placeholder=""
                                        value={formData.miles_per_gallon}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">People</label>
                                      <br />
                                      {/* <!-- <input type="text" name="form-control" id="" placeholder="" className="mg05"><i className="fas fa-chevron-down"></i> --> */}
                                      <select
                                        name="people"
                                        id="people"
                                        value={formData.people}
                                        onChange={handleFormChange}
                                      >
                                        <option value="5">5 People</option>
                                        <option value="5">5 People</option>
                                        <option value="5">5 People</option>
                                        <option value="5">5 People</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12}>
                                    <div className="form-group">
                                      <h3>Key Details</h3>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Mileage Allowance:
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="mileage_allowance"
                                        id="mileage_allowance"
                                        placeholder=""
                                        value={formData.mileage_allowance}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Additional Mileage Cost:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="additional_mileage_cost"
                                        id="additional_mileage_cost"
                                        placeholder=""
                                        value={formData.additional_mileage_cost}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Reset Period:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        name="reset_period"
                                        id="reset_period"
                                        placeholder=""
                                        value={formData.reset_period}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Holding Deposit:
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="holding_deposit"
                                        id="holding_deposit"
                                        placeholder=""
                                        value={formData.holding_deposit}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">
                                        Insurance Excess:
                                      </label>
                                      <br />
                                      <input
                                        type="number"
                                        name="insurance_excess"
                                        id="insurance_excess"
                                        placeholder=""
                                        value={formData.insurance_excess}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className=" up-bx">
                                    <div className="form-group">
                                      <label htmlFor="control-label">PCN Fee</label>
                                      <br />
                                      <input
                                        type="number"
                                        name="pcn_fee"
                                        id="pcn_fee"
                                        placeholder=""
                                        value={formData.pcn_fee}
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
                              <label>Add Vehicle Images</label>
                              <div className="row file-upload-wrap">
                                {fileInputs.map((file, index) => (
                                  <div
                                    key={index}
                                    className="col-lg-2 col-md-2 upload_img_preview_wrapper"
                                  >
                                    <div className="upload-file-group">
                                      <input
                                        type="file"
                                        className="upload_img_preview"
                                        onChange={(e) =>
                                          handleImageChange(e, index)
                                        }
                                      />
                                      {file && (
                                        <div className="del_btn">
                                          <p>{file.name}</p>
                                          <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() =>
                                              removeFileInput(index)
                                            }
                                          >
                                            <i className="fa-solid fa-trash"></i>
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                                <Col lg={2} md={2}>
                                  <button
                                    type="button"
                                    className="btn btn-primary add_more_vehicle_gallery"
                                    onClick={addFileInput}
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                    Add More
                                  </button>
                                </Col>
                              </div>
                            </div>
                            {/* <div className="Canvassec add_vehicle_images">
                              <Col lg={12} md={12} >
                                <label htmlhtmlFor="label-control"></label>
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
                                            handleImageChange(e, index)
                                          }
                                          disabled={!enabled}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                            </div> */}
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
                                        to="#"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                        <input
                                          type="file"
                                          name="mot_certificate_document"
                                          id="mot_certificate_document"
                                          //  value={formData.mot_certificate_document}
                                          accept="application/pdf"
                                          onChange={(e) =>
                                            handleFileChange(
                                              e,
                                              "mot_certificate_document"
                                            )
                                          }
                                        ></input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link to="#">
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
                                        to="#"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                        <input
                                          type="file"
                                          name="insurance_certificate_document"
                                          id="insurance_certificate_document"
                                          accept="application/pdf"
                                          onChange={(e) =>
                                            handleFileChange(
                                              e,
                                              "insurance_certificate_document"
                                            )
                                          }
                                        ></input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link to="#">
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
                                        to="#"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                        <input
                                          type="file"
                                          name="vehicle_licence_document"
                                          id="vehicle_licence_document"
                                          accept="application/pdf"
                                          onChange={(e) =>
                                            handleFileChange(
                                              e,
                                              "vehicle_licence_document"
                                            )
                                          }
                                        ></input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link to="#">
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
                                        to="#"
                                        className="down-btn"
                                      >
                                        Download
                                      </Link>
                                      <div className="upload_vehicle_docs">
                                        <input
                                          type="file"
                                          name="permission_letter_document"
                                          id="permission_letter_document"
                                          accept="application/pdf"
                                          onChange={(e) =>
                                            handleFileChange(
                                              e,
                                              "permission_letter_document"
                                            )
                                          }
                                        ></input>
                                        <img
                                          src="./admin_assets/images/Frame 13680.png"
                                          className="pen-img"
                                          alt="Docs"
                                        />
                                      </div>
                                      <Link to="#">
                                        <img
                                          src="./admin_assets/images/Trash.png"
                                          alt="delete"
                                        />
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
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Addvehicle;
