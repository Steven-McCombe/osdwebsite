import React from 'react';
import AboutBelowContent02 from '../../Components/ExperienceBlocks/AboutBelowContent02';

const ExperienceAbout = () => {
    const headerData = {
        heading: 'Crafting Exceptional Spaces in New York',
        subheading: 'ABOUT OSD BUILDERS',
    };

    const ExperienceData = [
        {
            id: '1',
            title: 'Our Mission',
            description: 'At OSD Builders, we prioritize creating exceptional interior and commercial spaces that reflect the dynamic spirit of New York. Our focus on quality, innovation, and customer satisfaction drives every project.',
            img: 'images/about/t1.png' // Image remains unchanged
        },
        {
            id: '2',
            title: 'Our Vision',
            description: 'We envision a future where every space we transform contributes to the vibrant tapestry of New York City. Our vision is to be the go-to experts for interior and commercial construction, known for our attention to detail and exemplary craftsmanship.',
            img: 'images/about/t2.png' // Image remains unchanged
        },
    ];
    return (
        <div className="experience">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="group_image_holder type_1">
                            <div className="expe_box">
                                <div className="expe_box_inner">
                                    <h1>12</h1> {/* Updated to reflect OSD Builders' years of experience */}
                                    Years of Craftsmanship
                                </div>
                            </div>
                            <img src="images/about/1.png" alt="" /> {/* Image remains unchanged */}
                            <div className="object">
                                <img src="images/about/3.png" alt="About" /> {/* Image remains unchanged */}
                                <img src="images/about/3.png" alt="About" /> {/* Image remains unchanged */}
                                <img src="images/about/3.png" alt="About" /> {/* Image remains unchanged */}
                                <img src="images/about/s1.png" alt="About" /> {/* Image remains unchanged */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="experience_content about">
                            <div className="section_header">
                                <h6 className="section_sub_title">{headerData.subheading}</h6>
                                <h1 className="section_title">{headerData.heading}</h1>
                                <p className="section_desc">
                                    OSD Builders is synonymous with innovation and excellence in interior and commercial construction. With 12 years of dedicated service in New York, we bring unparalleled expertise to every project, ensuring each space we touch is not only functional but also a work of art.
                                </p>
                                <div className="about_below">
                                    {
                                        ExperienceData.map(data =>
                                            <AboutBelowContent02
                                                key={data.id}
                                                data={data}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceAbout;
