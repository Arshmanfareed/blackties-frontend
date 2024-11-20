import React, { useEffect, useState } from 'react';
import Sidebar from './partials/Sidebar';
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Allvehicle() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authToken = localStorage.getItem("token");// Replace with the actual token

  useEffect(() => {
    // Fetching data from the API
    fetch('https://blackties-backend.dev.internalstaging.com/dev/blackties/api/v1/admin/all-vehicles/', {
      method: 'GET',
      headers: {
        'x-auth-token': authToken, // Include the auth token in the headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVehicles(data.data); // Assuming `data` is the API response structure
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [authToken]); // Add authToken to the dependency array if it can change

  return (
    <>
      <section className="user-dashboard">
        <Container fluid>
          <Row className="g-0">
            <Col lg={3} md={3} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col className="panel-col">
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
                        <div className="all-veh-dv">
                          <div className="main-veh-bx">
                            <div className="main-veh-txt">
                              <h5>Dashboard</h5>
                            </div>
                          </div>
                        </div>
                        {loading ? (
                          <p>Loading...</p>
                        ) : error ? (
                          <p className="text-danger">Error: {error}</p>
                        ) : (
                          <div className="veh-registration-table rigistration-tabl">
                            <table className="maintenance-table ds-table">
                              <thead>
                                <tr>
                                  <th>Vehicle Registration Number</th>
                                  <th>Car Make</th>
                                  <th>Car Model</th>
                                  <th>Fuel Type</th>
                                  <th>MPG</th>
                                  <th>Cost per week</th>
                                  <th>Transmission</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {vehicles.map((vehicle) => (
                                  <tr key={vehicle.id}>
                                    <td>{vehicle.vehicle_registration_number}</td>
                                    <td>{vehicle.car_make}</td>
                                    <td>{vehicle.car_model}</td>
                                    <td>{vehicle.fuel_type}</td>
                                    <td>{vehicle.miles_per_gallon}</td>
                                    <td>£{vehicle.price_per_week}</td>
                                    <td>{vehicle.transmission}</td>
                                    <td>
                                      <Link
                                        to={`/admin-vehicledetails`}
                                        className="view-btn"
                                      >
                                        View
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
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

export default Allvehicle;
