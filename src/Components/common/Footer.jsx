import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_above">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer_widget footer_widget_padding">
                                <h4 className="widget_title">
                                    About OSD Builders
                                </h4>
                                <p>For those seeking extraordinary results in construction, OSD Builders is your partner in bringing vision and precision together. Experience exceptional craftsmanship and innovative solutions with OSD Builders.</p>
                                <div className="subscribe">
                                    <form className="form-inline">
                                        <div className="input-group mb-2 mr-sm-2">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <button type="submit" className="btn">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="footer_widget footer_links">
                                <h4 className="widget_title">
                                    Our Services
                                </h4>
                                <div className="footer_nav">
                                    <ul className="footer_menu">
                                    <li className="menu-item"><a href="/commercial-interiors">Commercial Interiors</a></li>
                                    <li className="menu-item"><a href="/residential-remodeling">Residential Remodeling</a></li>
                                    <li className="menu-item"><a href="/project-management">Project Management</a></li>
                                    <li className="menu-item"><a href="/safety-management">Safety Management</a></li>
                                    <li className="menu-item"><a href="/design-collaboration">Design Collaboration</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="footer_widget footer_links">
                                <h4 className="widget_title">
                                    Useful Links
                                </h4>
                                <div className="footer_nav">
                                    <ul className="footer_menu">
                                        <li className="menu-item"><a href="/">Home</a></li>
                                        <li className="menu-item"><a href="/about">About Us</a></li>
                                        <li className="menu-item"><a href="/project">Projects</a></li>
                                        <li className="menu-item"><a href="/Careers">Careers</a></li>
                                        <li className="menu-item"><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer_widget">
                                <h4 className="widget_title">
                                    Address
                                </h4>
                                <ul>
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><span>24-12 35th St, Long Island City, NY 11103</span></li>
                                    <li><i className="fa fa-envelope" aria-hidden="true"></i><span>darragh@osdbuilders.com</span></li>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i><span>Monday - Friday (9.00am - 5.00pm)</span></li>
                                </ul>
                                <div className="side_footer_social">
                                    <ul className="bottom_social">
                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                        <li className="dribbble"><a href="#"><i className="ion-social-dribbble-outline"></i></a></li>
                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="footer_bottom_inner">
                        <div className="logo">
                            <a href="index"><img src="images/logo_foot.svg" alt="Logo" /></a>
                        </div>
                        <div className="copyright">
                            <p>&copy;2024 OSD Builders. All rights reserved.</p>
                        </div>
                        <div className="footer_nav_bottom">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="totop">
                            <a href="#"><i className="ion-ios-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;