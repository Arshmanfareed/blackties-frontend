import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section>
                <Container>
                    <Row className="ac-row">
                        <Col lg={12} >
                            <div className="bnr-main-wrapper">
                                <div className="bnr-cnt-wrapper">
                                    <h1 className="theme-h1">Elevate your Rental Experience</h1>
                                    <div className="bnr-para">
                                        <p className="theme-p1">
                                            At Blackties, we put drivers first. Enjoy access to a premium fleet of high-end vehicles at competitive prices, tailored packages that keep you on the road longer, and an elevated rental experience that goes beyond the ordinary. Drive luxury, earn more, and experience the difference.
                                        </p>
                                    </div>
                                    <div className="bnr-btn-wrapper">
                                        <Link to="/our-vehicle">Check Availability Now <i class="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="bnr-dec-wrapper">
                                    <img src="./assets/images/image 72.png" alt="" />
                                    <img src="./assets/images/image 60.png" alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home-sec1">
                <Container>
                    <Row >
                        <Col lg={6} md={6} >
                            <div className="home-sec1-img-wrap">
                                <img src="./assets/images/image 77.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={6} md={6} >
                            <h2 className="theme-h2">Exclusive Driver Benefits</h2>
                            <Row className="bnf-row">
                                <Col lg={6} md={6} >
                                    <div className="bnf-col-wrapper">
                                        <img src="./assets/images/clipboard546.png" alt="" />
                                        <h3 className="theme-h4">Fully Comprehensive Insurance</h3>
                                        <p className="theme-p2">
                                            Drive with peace of mind, knowing that you’re fully covered with
                                            comprehensive insurance for every journey.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} >
                                    <div className="bnf-col-wrapper">
                                        <img src="./assets/images/car345.png" alt="" />
                                        <h3 className="theme-h4">Maintenance and Servicing Included</h3>
                                        <p className="theme-p2">
                                            All maintenance and servicing are covered, so you can focus on driving while we take care of keeping your vehicle in top condition
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className=" bnf-row">
                                <Col lg={6} md={6} >
                                    <div className="bnf-col-wrapper">
                                        <img src="./assets/images/24-7-5464.png" alt="" />
                                        <h3 className="theme-h4">24/7 RAC Breakdown Cover</h3>
                                        <p className="theme-p2">
                                            24/7 roadside assistance ensures you're never stranded, keeping you on the road when it matters most.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} >
                                    <div className="bnf-col-wrapper">
                                        <img src="./assets/images/speedometer.png" alt="" />
                                        <h3 className="theme-h4">Generous Mileage Allowance</h3>
                                        <p className="theme-p2">
                                            Generous mileage allowances with transparent pricing for extra miles, so you can drive without worry.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={12} md={12}>
                                    <div className="bnf-btn-wrapper">
                                        <Link to="/driver-benefits">Read More <i class="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section className="home-sec2">
                <Container>
                    <Row className="prd-title-wrap">
                        <Col lg={6} md={6} >
                            <h3 className="theme-h3">Our Vehicles</h3>
                        </Col>
                        <Col lg={6} md={6} >
                            <div className="filter-wrap">
                                <Link to="/car-details" className="filter">Filter<img src="./assets/images/filter.png" /></Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="products-wrapper">
                                <div className="product-img-wrap">
                                    <img src="./assets/images/image 67.png" alt="" />
                                </div>
                                <div className="product-details-wrap">
                                    <div className="stock-dis">
                                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                                    </div>
                                    <h4 className="theme-h5 product-title">
                                        Mercedes-Benz E Class
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
                                        Mercedes-Benz E Class
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
                                        Mercedes-Benz E Class
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
                    <Row >
                        <Col lg={4} md={4}>
                            <div className="products-wrapper">
                                <div className="product-img-wrap">
                                    <img src="./assets/images/image 81.png" alt="" />
                                </div>
                                <div className="product-details-wrap">
                                    <div className="stock-dis">
                                        <span className="able"><ion-icon name="ellipse"></ion-icon> Available Now</span>
                                    </div>
                                    <h4 className="theme-h5 product-title">
                                        Mercedes-Benz E Class
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
                                    <img src="./assets/images/image 83.png" alt="" />
                                </div>
                                <div className="product-details-wrap">
                                    <div className="stock-dis">
                                        <span className="abl-on"><ion-icon name="ellipse"></ion-icon> Available on 28/09</span>
                                    </div>
                                    <h4 className="theme-h5 product-title">
                                        Mercedes-Benz E Class
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
                            <div className="products-wrapper unable">
                                <div className="product-img-wrap">
                                    <img src="./assets/images/image 80.png" alt="" />
                                </div>
                                <div className="product-details-wrap">
                                    <div className="stock-dis">
                                        <span className="unable"><ion-icon name="ellipse"></ion-icon> Unavailable</span>
                                    </div>
                                    <h4 className="theme-h5 product-title">
                                        Mercedes-Benz E Class
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
                    <Row >
                        <Col lg={12} md={12}>
                            <div className="proBtn-wrap">
                                <Link to="/our-vehicle">View All</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HomePage;
