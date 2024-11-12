import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import DetailCarSlider from './component/DetailCarSlider';
import { Link } from 'react-router-dom';
function Car_details() {
  return (
    <>
      <section className=" detail-car-sec1">
        <Container>
    <Row className="back-to-sec">
        <Col lg={12} md={12} >
            <Link to="/our-vehicle" className="back-to"><ion-icon name="chevron-back-outline"></ion-icon> Back to Our Vehicles</Link>
        </Col>
    </Row>
    <DetailCarSlider />
    {/* <Row >
        <Col lg={9} md={9} >        

            <div className="detailCar-slider owl-carousel owl-theme">
                <div data-item="item1" className="item"><img src="./assets/images/slider/image 67.png" alt="" /></div>
                <div data-item="item2" className="item"><img src="./assets/images/slider/image346.png" alt="" /></div>
                <div data-item="item3" className="item"><img src="./assets/images/slider/image 66.png" alt="" /></div>
                <div data-item="item4" className="item"><img src="./assets/images/slider/image 68.png" alt="" /></div>
                <div data-item="item5" className="item"><img src="./assets/images/slider/image 67.png" alt="" /></div>
            </div>
        </Col>
        <Col lg={3} md={3} >
            <div className="detailCar-slide-controller">
                <ul>
                    <li id="item1" className="slide-active"><img src="./assets/images/slider/image 67.png" alt="" /></li>
                    <li id="item2"><img src="./assets/images/slider/image 65.png" alt="" /></li>
                    <li id="item3"><img src="./assets/images/slider/image 66.png" alt="" /></li>
                    <li id="item4"><img src="./assets/images/slider/image 68.png" alt="" /></li>
                    <li id="item5"><img src="./assets/images/slider/image 67.png" alt="" /></li>
                </ul>
            </div>
        </Col>
    </Row> */}
    <Row >
        <Col lg={12} md={12} >
            <div className="detail-car-ptag">
                <div>
                    <div className="stock-dis">
                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                    </div>
                    <h4 className="theme-h6 product-title">
                        Mercedes E220
                    </h4>
                    <div className="product-act">
                        <h6 className="price">£280.00 / <span className="limits">week</span></h6>
                    </div>
                </div>
                <div className="rent-now-btn">
                    <Link to="/login" className="theme-btn5">Rent Now</Link>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="car-features d-flex justify-content-between">
        <Col lg={2} md={2} >
            <div className="car-features-boxes">
                <img src="./assets/images/Frame1.png" alt="" />
                <h6>Saloon</h6>
            </div>
        </Col>
        <Col lg={2} md={2} >
            <div className="car-features-boxes">
                <img src="./assets/images/Frame2.png" alt="" />
                <h6>⁠Diesel Hybrid</h6>
            </div>
        </Col>
        <Col lg={2} md={2} >
            <div className="car-features-boxes">
                <img src="./assets/images/Frame3.png" alt="" />
                <h6>5 People</h6>
            </div>
        </Col>
        <Col lg={2} md={2} >
            <div className="car-features-boxes">
                <img src="./assets/images/Frame4.png" alt="" />
                <h6>Automatic</h6>
            </div>
        </Col>
        <Col lg={2} md={2} >
            <div className="car-features-boxes">
                <img src="./assets/images/Frame5.png" alt="" />
                <h6>40 mpg</h6>
            </div>
        </Col>
    </Row>
    <Row className=" car-discription">
        <Col lg={12} md={12} className="col-lg-12 col-md-12">
            <h4 className="theme-h5">Car Description</h4>
            <p className="theme-p3">At London Riders, we offer PCO car hire services that are designed to meet your needs. Whether you're an Uber driver looking to provide a premium service to your passengers, or you simply want to drive a luxurious car, the E className Mercedes is the perfect choice. With its efficient performance, advanced features, and stylish design, this car is sure to impress. Don't miss out on this opportunity to drive one of the most sought-after cars in the PCO car hire market. Enquire now and experience the luxury of the E className Mercedes!</p>
        </Col>
    </Row>
    <Row className=" car-facilities">
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon.png" alt="" />
                <h4 className="theme-h4">Fully Comprehensive Insurance</h4>
                <p className="theme-p2">Drive with peace of mind, knowing that you’re fully covered with comprehensive insurance for every journey.</p>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-1.png" alt="" />
                <h4 className="theme-h4">Servicing & Maintenance</h4>
                <p className="theme-p2">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-2.png" alt="" />
                <h4 className="theme-h4">Tyre & Brake Replacement</h4>
                <p className="theme-p2">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>
        </Col>
    </Row>
    <Row className="car-facilities">
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-3.png" alt="" />
                <h4 className="theme-h4">Driver Support</h4>
                <p className="theme-p2">Our dedicated support team is here to assist you any time of the day, ensuring you have the help you need.</p>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-4.png" alt="" />
                <h4 className="theme-h4">24/7 RAC Breakdown Cover</h4>
                <p className="theme-p2">24/7 roadside assistance ensures you're never stranded, keeping you on the road when it matters most.</p>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-5.png" alt="" />
                <h4 className="theme-h4">Generous Mileage Allowance</h4>
                <p className="theme-p2">Generous mileage allowances with transparent pricing for extra miles, so you can drive without worry.</p>
            </div>
        </Col>
    </Row>
    <Row className="car-facilities">
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-6.png" alt="" />
                <h4 className="theme-h4">No Credit Check Rental Option</h4>
                <p className="theme-p2">Qualify for vehicle rental without undergoing a credit check, making it easier for new drivers to get on the road faster.</p>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-7.png" alt="" />
                <h4 className="theme-h4">Right to Buy Rented Vehicle</h4>
                <p className="theme-p2">If you have rented a vehicle with us for longer than 6 months, you have the option to buy the current vehicle you have rented for a pre-agreed price at the time of rental.</p>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="car-facilities-wrap">
                <img src="./assets/images/Featured icon-8.png" alt="" />
                <h4 className="theme-h4">Real-Time Vehicle Monitoring</h4>
                <p className="theme-p2">Access live vehicle tracking, receive instant alerts on vehicle health, and get 24/7 support through the Blackties platform for maintenance</p>
            </div>
        </Col>
    </Row>
    </Container>    
</section>

<section className=" other-car-sec">
    
    <Container>
    
    <Row >
        <Col lg={12} >
            <div className="other-car-wrap">
                <h3>Other vehicles available</h3>
                <Link to="/our-vehicle">View All</Link>
            </div>
        </Col>
    </Row>
    <Row>
        <Col lg={4} md={4} >
            <div className="products-wrapper">
                <div className="product-img-wrap">
                        <img src="./assets/images/image 67.png" alt="" />
                </div>
                <div className="product-details-wrap">
                    <div className="stock-dis">
                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                    </div>
                    <h4 className="theme-h5 product-title">
                         Mercedes-Benz E className
                    </h4>
                    <span className="product-type">E 300de</span>
                    <div className="product-act">
                        <h6 className="price">£280.00 / <span className="limits">week</span></h6>
                        <Link to="/car-details" className="theme-btn3">View Vehicle</Link>
                    </div>
                </div>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="products-wrapper">
                <div className="product-img-wrap">
                        <img src="./assets/images/image 68.png" alt="" />
                </div>
                <div className="product-details-wrap">
                    <div className="stock-dis">
                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                    </div>
                    <h4 className="theme-h5 product-title">
                         Mercedes-Benz E className
                    </h4>
                    <span className="product-type">E 300de</span>
                    <div className="product-act">
                        <h6 className="price">£280.00 / <span className="limits">week</span></h6>
                        <Link to="/car-details" className="theme-btn3">View Vehicle</Link>
                    </div>
                </div>
            </div>
        </Col>
        <Col lg={4} md={4} >
            <div className="products-wrapper">
                <div className="product-img-wrap">
                        <img src="./assets/images/image 82.png" alt="" />
                </div>
                <div className="product-details-wrap">
                    <div className="stock-dis">
                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                    </div>
                    <h4 className="theme-h5 product-title">
                         Mercedes-Benz E className
                    </h4>
                    <span className="product-type">E 300de</span>
                    <div className="product-act">
                        <h6 className="price">£280.00 / <span className="limits">week</span></h6>
                        <Link to="/car-details" className="theme-btn3">View Vehicle</Link>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    </Container>
</section>
    </>
  )
}

export default Car_details
