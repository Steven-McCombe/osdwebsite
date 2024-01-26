import React from 'react';
import ServiceCard01_02 from '../../Components/ServiceCards/ServiceCard01_02';
import PaginationDiv from '../../Components/TeamElements/PaginationDiv';

const ServiceContainer02 = () => {
    const ServiceData02 = [
        {
            id: '1',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/1.jpg',
            tag: 'Project Management',
            title: 'Expert management for construction projects from concept to completion.'
        },
        {
            id: '2',
            img: 'images/services/s5.png',
            img02: 'images/services/Service_Hover_images/2.jpg',
            tag: 'Commercial Interiors',
            title: 'Specializing in high-quality commercial interior renovations and fit-outs.'
        },
        {
            id: '3',
            img: 'images/services/s7.png',
            img02: 'images/services/Service_Hover_images/3.jpg',
            tag: 'Site Preparation',
            title: 'Comprehensive site preparation services ensuring safety and compliance.'
        },
        {
            id: '4',
            img: 'images/services/s6.png',
            img02: 'images/services/Service_Hover_images/4.jpg',
            tag: 'Residential Remodeling',
            title: 'Transforming living spaces with innovative design and craftsmanship.'
        },
        {
            id: '5',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/5.jpg',
            tag: 'Retail Construction',
            title: 'Building captivating retail environments that attract and engage customers.'
        },
        {
            id: '6',
            img: 'images/services/s9.png',
            img02: 'images/services/Service_Hover_images/6.jpg',
            tag: 'Safety Management',
            title: 'Prioritizing workplace safety with rigorous protocols and training.'
        },
        {
            id: '7',
            img: 'images/services/s11.png',
            img02: 'images/services/Service_Hover_images/8.jpg',
            tag: 'Permitting & Compliance',
            title: 'Navigating NYC’s complex building codes and permit requirements.'
        },
        {
            id: '8',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/5.jpg',
            tag: 'Quality Control',
            title: 'Ensuring the highest standards of quality in every construction phase.'
        },
        {
            id: '9',
            img: 'images/services/s12.png',
            img02: 'images/services/Service_Hover_images/9.jpg',
            tag: 'Design Collaboration',
            title: 'Collaborating with architects to bring creative visions to life.'
        },
    ];

    return (
        <div class="main_wrapper">
            <div class="section services">
                <div class="container">
                    <div class="row">
                        {
                            ServiceData02.map(data =>
                                <ServiceCard01_02
                                    key={data.id}
                                    data={data}
                                />
                            )
                        }

                    </div>

                    <PaginationDiv />
                </div>
            </div>
        </div>
    );
};

export default ServiceContainer02;