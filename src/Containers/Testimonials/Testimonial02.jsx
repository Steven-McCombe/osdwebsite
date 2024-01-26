import React from 'react';
import { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard02 from '../../Components/TestimonialCards/TestimonialCard02';
import './Testimonial.css';

const Testimonial02 = () => {
    const TestimonialData02 = [
        {
            id: '1',
            upperImg: 'images/others/u_img_1.png',
            midImg: 'images/others/1.png',
            name: 'Johnathon Hall',
            testimonial: "OSD Builders redefined what I thought was possible in commercial construction. Their team's diligence and skill brought our project to completion ahead of schedule and under budget. Their attention to detail is unparalleled."
        },
        {
            id: '2',
            upperImg: 'images/others/u_img_2.png',
            midImg: 'images/others/2.png',
            name: 'Madison Koay',
            testimonial: "The level of craftsmanship from OSD Builders is simply outstanding. They transformed my retail space into a vibrant and welcoming environment that customers love. Their design team was exceptional in bringing my ideas to life."
        },
        {
            id: '3',
            upperImg: 'images/others/u_img_3.png',
            midImg: 'images/others/3.png',
            name: 'Andrew Mark',
            testimonial: "Working with OSD Builders was an absolute pleasure. Their professionalism, timely communication, and commitment to quality made the renovation process of our downtown office a smooth and stress-free experience."
        },

    ];
    return (
        <div className="section testimonial2">
            <Swiper
                modules={[Pagination, Controller]}
                effect={"slide"}
                slidesPerView={1}
                loop={true}
                controller={{ inverse: true }}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    TestimonialData02.map(data => (
                        <SwiperSlide key={data.id}>
                            <TestimonialCard02
                                data={data}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Testimonial02;
