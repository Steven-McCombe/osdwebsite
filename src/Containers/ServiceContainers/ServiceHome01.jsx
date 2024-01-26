import React from 'react';
import ServiceCard01 from '../../Components/ServiceCards/ServiceCard01';

const ServiceHome01 = () => {
    const ServiceData = [
        {
            id: '1',
            img: 'images/services/s1.png',
            img02: 'images/services/ss1.png',
            number: '',
            bg: 'bg_1',
            title: 'Commercial Interiors'
        },
        {
            id: '2',
            img: 'images/services/s2.png',
            img02: 'images/services/ss2.png',
            number: '',
            bg: 'bg_2',
            title: 'Residential Remodeling'
        },
        {
            id: '3',
            img: 'images/services/s3.png',
            img02: 'images/services/sbg3.png',
            number: '',
            bg: 'bg_3',
            title: 'Permitting & Compliance'
        }
    ];

    return (
        <div className="service">
            <div className="container-fluid g-0">
                <div className="row g-0">
                    {
                        ServiceData.map(data =>
                            <ServiceCard01
                                key={data.id}
                                data={data}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceHome01;