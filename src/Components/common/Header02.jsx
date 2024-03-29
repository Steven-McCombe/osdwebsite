import React, { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';


const Header02 = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="header header_color">
                <div className="middle_bar">
                    <div className="container">
                        <div className="middle_bar_inner">
                            <div className="logo">
                                <a href="/" className="light_mode_logo"><img src="images/logo.svg" alt="logo" /></a>
                                <a href="/" className="dark_mode_logo"><img src="images/logo_foot.svg" alt="logo" /></a>
                            </div>

                            <div className="header_right_part">
                                <div className="mainnav">
                                    <ul className="main_menu">
                                        <li className="menu-item  active"><a href="/">Home</a>
                                        </li>
                                        <li className="menu-item "><a href="/services">Services</a>

                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Projects</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/project">Projects One</a></li>
                                                <li className="menu-item"><a href="/project-2">Peojects Two</a></li>
                                                <li className="menu-item"><a href="/project-details">Peojects Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/about">About</a></li>
                                                <li className="menu-item"><a href="/team">Team</a></li>
                                                <li className="menu-item"><a href="/faq">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/blog-1">Blog One</a></li>
                                                <li className="menu-item"><a href="/blog-2">Blog Two</a></li>
                                                <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="phone phn_color">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div><span>Call Us Anytime</span><br /><span className="phn_number">+1 (201) 844-5486</span></div>
                                </div>
                                <div className="header_search" onClick={handleToggle}>
                                    <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                                </div>
                                <div id='open_search' className={isActive ? null : "active"}>
                                    <form className="search_form" action="search.php">
                                        <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                        <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                                    </form>
                                </div>
                                <button className="ma5menu__toggle position-relative d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHome" aria-controls="offcanvasHome"
                                >
                                    <i className="ion-android-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileNav />
        </>
    );
};

export default Header02;