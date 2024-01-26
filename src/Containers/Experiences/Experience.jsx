import React from 'react';
import AboutBelowContent from '../../Components/ExperienceBlocks/AboutBelowContent';

const Experience = () => {
    const headerData = {
        img: 'images/about/shadow_icon1.png',
        heading: 'Crafting New York’s Interiors, One Space at a Time',
        subheading: 'ABOUT OSD BUILDERS',
    };

    const ExperienceData = [
        {
            id: '1',
            title: 'Interior Excellence',
            description: 'Transforming spaces with innovative and stylish interiors'
        },
        {
            id: '2',
            title: 'Urban Impact',
            description: 'Creating dynamic commercial spaces and inviting storefronts'
        },
    ];

    return (
        <div className="experience section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="group_image_holder type_1">
                            <div className="expe_box">
                                <div className="expe_box_inner">
                                    <h1>12</h1>
                                    Years of Craftsmanship
                                </div>
                            </div>
                            <div className="image_object">
                                <img src="images/about/1.png" alt="" />
                                <div className="object">
                                    <img src="images/about/3.png" alt="About" />
                                    <img src="images/about/3.png" alt="About" />
                                    <img src="images/about/3.png" alt="About" />
                                    <img src="images/about/s1.png" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="experience_content">
                            <div className="section_header">
                                <div className="shadow_icon"><img src={headerData.img} alt="" /></div>
                                <h6 className="section_sub_title">{headerData.subheading}</h6>
                                <h1 className="section_title">{headerData.heading}</h1>
                                <p className="section_desc">At OSD Builders, we specialize in transforming New York’s spaces into extraordinary interiors. With 12 years of dedication, our portfolio spans elegant residential interiors, vibrant commercial spaces, and engaging storefronts. Each project is a testament to our commitment to quality, style, and the unique character of New York.</p>
                                <div className="about_below">
                                    {
                                        ExperienceData.map(data =>
                                            <AboutBelowContent
                                                key={data.id}
                                                data={data}
                                            />
                                        )
                                    }

                                </div>
                            </div>
                            <a className="button" href="/about">Discover our Work</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;