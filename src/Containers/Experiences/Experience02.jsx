import React from 'react';

const Experience02 = () => {
    const headerData = {
        heading: 'Transforming Spaces, Enriching Lives',
        subheading: 'ABOUT OSD BUILDERS',
        detail: 'OSD Builders: Your trusted partner for exceptional interior and commercial projects in New York.',
        img: 'images/about/call_img.png', // Image 
    };
    return (
        <div className="experience about_bg_image another_bg_image">
            <div className="upper_sm_img">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="group_image_holder">
                                <img src="images/about/2.png" alt="" /> {/* Image  */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="experience_content experience_content_margin ">
                                <div className="section_header">
                                    <h6 className="section_sub_title">{headerData.subheading}</h6>
                                    <h1 className="section_title">{headerData.heading}</h1>
                                    <p className="short_detail">{headerData.detail}</p>
                                    <p className="section_desc">
                                        At OSD Builders, we specialize in crafting exquisite interior spaces and dynamic commercial environments. With a focus on quality and innovation, our projects in New York City range from luxurious residential interiors to modern, functional commercial spaces and inviting storefronts. Trust us to bring your vision to life with expertise and precision.
                                    </p>
                                    <div className="section_call">
                                        <div className="call_image">
                                            <img src={headerData.img} alt="" /> {/* Image */}
                                        </div>
                                        <div className="call_info">
                                            <p>Contact us for your next project. We're <span>available 24/7</span> to assist you.</p>
                                            <h4>(201) 844-5486</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="floating_object floating_object_7"><img src="images/about/s_b.png" alt="" /> {/* Image  */}</div>
                </div>
            </div>
        </div>
    );
};

export default Experience02;
