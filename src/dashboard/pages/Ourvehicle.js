import React from 'react'
import DashboardSidebar from '../partials/dashboard-sidebar'
import DashboardPanelTopbar from '../components/DashboardPanelTopbar'
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Ourvehicle() {
    const numbers = Array.from({ length: 5 }, (_, index) => index+1);
  return (
    <>

<section class="user-dashboard">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-3 col-md-3 sidebar-col">
                <DashboardSidebar/>
            </div>
            <div class="col-lg-9 col-md-9 panel-col">
                <div class="dashboard-panel application-panel">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="dashboard-panel-topbar">
                                <DashboardPanelTopbar/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="rent-car-sec db-default-sec">
                                <div class="rent-car-card db-default-wrapper dashboard_our_Vehicle">
                                    <div class="wrapper">
                                    <section className="home-sec2 vehicle_page">
                                <Container>
                                    <Row className="prd-title-wrap">
                                        <Col lg={12} md={12} >
                                            <h3 className="theme-h3">Our Vehicles</h3>
                                        
                                        <div className='rent_vehicle_filter'>
                                                    <div className="search-bar-v1">
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                        <input type="text" placeholder="Search here..."/>
                                                    </div>
                                                    {/* <Link to="#" className="filter-v1">Filter <img src="./assets/images/Tuning.svg" alt=""/></Link> */}
                                                    <div className="filter-wrap">
                                                {/* <a href="#" className="filter">Filter<img src="./assets/images/filter.png" /></a> */}
                                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="filter">
                                        Filter <img src="./assets/images/filter.png" alt="Filter" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <span className='pl-2'>FILTER BY</span>
                                        <Dropdown drop="right" className="submenu">
                                        <Dropdown.Toggle as="div" className="dropdown-item">Fuel Type</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/sub-action-1">Sub Action 1</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown drop="right" className="submenu">
                                        <Dropdown.Toggle as="div" className="dropdown-item">Car Type</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/sub-action-1">Sub Action 1</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown drop="right" className="submenu">
                                        <Dropdown.Toggle as="div" className="dropdown-item">Color</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as="div">
                                            <Form.Check
                                    type="checkbox"
                                    label="Black"
                                    id="Black"
                                    onClick={(e) => e.stopPropagation()}
                                />    
                                    <Form.Check
                                    type="checkbox"
                                    label="Silver"
                                    id="Silver"
                                    onClick={(e) => e.stopPropagation()}
                                />    
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                            </div>
                                                </div>
                                           
                                        </Col>
                                    </Row>
                                    <Row>
                                    {numbers.map((number) => (
                                        <Col lg={4} md={4} key={number}>
                                            <div className="products-wrapper">
                                                <div className="product-img-wrap">
                                                <img 
                                                src={`./assets/images/${number}.png`} // Dynamic image source
                                                alt={`Image of ${number}`} 
                                            />
                                                </div>
                                                <div className="product-details-wrap">
                                                    <div className="stock-dis">
                                                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                                                    </div>
                                                    <h4 className="theme-h5 product-title">
                                                        Mercedes-Benz E ClassNameclassName
                                                    </h4>
                                                    <span className="product-type">E 300de</span>
                                                    <div className="product-act">
                                                        <h6 className="price">£280.00 / <span className="limits">week</span></h6>
                                                        <Link to="#" className="theme-btn3">View Vehicle</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        ))}
                                        <Col lg={4} md={4} >
                                            <div className="products-wrapper unable">
                                                <div className="product-img-wrap">
                                                        <img src="./assets/images/image 80.png" alt="" />
                                                </div>
                                                <div className="product-details-wrap">
                                                    <div className="stock-dis">
                                                        <span className="unable"><ion-icon name="ellipse"></ion-icon> Unavailable</span>
                                                    </div>
                                                    <h4 className="theme-h5 product-title">
                                                        Mercedes-Benz E ClassNameclassName
                                                    </h4>
                                                    <span className="product-type">E 300de</span>
                                                    <div className="product-act">
                                                        <h6 className="price">£280.00 / <span className="limits">week</span></h6>
                                                        <Link to="#" className="theme-btn3">View Vehicle</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row  className='pagination_row'>
                                        <Col lg={12} md={12}>
                                        <nav aria-label="Page navigation" className='navigation'>
                                            <div className='post_count'>
                                            Showing 1 to 9 Items
                                            </div>
                                            <ul className='d-flex justify-content-end list-unstyled'>
                                                <li ><span className='prev'><i className="fa-solid fa-chevron-left"></i></span></li>
                                                    <li><a className='active'>1</a></li>
                                                    <li><a>2</a></li>
                                                    <li><a>3</a></li>
                                                    <li><a>4</a></li>
                                                    <li><a>5</a></li>
                                                    <li><span className='next'><i className="fa-solid fa-chevron-right"></i></span></li>
                                            </ul>
                                        </nav>
                                        </Col>
                                    </Row>
                                    </Container>
</section>
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

export default Ourvehicle
