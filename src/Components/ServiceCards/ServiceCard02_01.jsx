import React from 'react';

const ServiceCard02_01 = ({ data }) => {
    const { img, img02, tag, title } = data;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service_inner_block">
                <img src={img02} alt="" />
                <div className="icon_img">
                    <img src={img} alt="" />
                </div>
                <div className="service_content">
                    <h4>{tag}</h4>
                    <p>{title}</p>
                    <a href="/service-details">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard02_01;