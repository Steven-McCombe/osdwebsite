import React from 'react';

const Footer02 = () => {
    return (
        <footer className="footer">
            <div className="footer_above2">
                <div className="container">
                    <div className="row">
                        <div className="footer_contact">
                            <div className="footer_contact_inner">
                                <div className="contact_icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="contact_content">
                                    <h6>Our Address</h6>
                                    <p>24-12 35th St, Long Island City, NY 11103</p>
                                </div>
                            </div>
                            <div className="footer_contact_inner">
                                <div className="contact_icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="contact_content">
                                    <h6>Mail Address</h6>
                                    <p>darragh@osdbuilders.com</p>
                                    <p>office@osdbuilders.com</p>
                                </div>
                            </div>
                            <div className="footer_contact_inner">
                                <div className="contact_icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="contact_content">
                                    <h6>Office Hours</h6>
                                    <p>Mon - Fri (9.00am - 5.00pm)</p>
                                    <p>Sat - Sun <span>Closed</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer_widget2">
                                <div className="logo">
                                    <a href="/"><img src="images/logo_foot.svg" alt="Logo" /></a>
                                </div>
                                <p>For those seeking extraordinary results in construction, OSD Builders is your partner in bringing vision and precision together. Experience exceptional craftsmanship and innovative solutions with OSD Builders.</p>
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
                        <div className="offset-lg-1 col-lg-3 offset-md-2 col-md-4 col-sm-12">
                            <div className="footer_widget2 footer_links">
                                <h4 className="widget_title">
                                    Our Services
                                </h4>
                                <div className="footer_nav">
                                    <ul className="footer_menu">
                                        <li className="menu-item"><a href="/project">Web Design</a></li>
                                        <li className="menu-item"><a href="/project-2">Construction</a></li>
                                        <li className="menu-item"><a href="/project-details">Economics</a></li>
                                        <li className="menu-item"><a href="/project-2">Photography</a></li>
                                        <li className="menu-item"><a href="/project">Digital Marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="footer_widget2">
                                <h4 className="widget_title">
                                    Newsletter
                                </h4>
                                <p>Please subscribe to our newsletter to get all the great Offers</p>
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
                    </div>
                </div>
            </div>
            <div className="footer_bottom footer_bottom_2">
                <div className="container">
                    <div className="footer_bottom_inner">
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

export default Footer02;