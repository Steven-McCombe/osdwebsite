import React from 'react';
import { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard01 from '../../Components/TestimonialCards/TestimonialCard01';
// import './Testimonial.css';

const Testimonial01 = (props) => {
    const TestimonialData01 = [
        {
            id: '1',
            img: 'images/reviewer1.png',
            country: 'New York',
            name: 'Michael Johnson',
            testimonial: 'OSD Builders turned our vision into reality with impeccable attention to detail. Their professionalism and craftsmanship exceeded our expectations for our office renovation.'
        },
        {
            id: '2',
            img: 'images/reviewer4.png',
            country: 'New York',
            name: 'Sophia Williams',
            testimonial: 'The team at OSD Builders was fantastic to work with. They delivered high-quality work on our new storefront and were incredibly responsive throughout the process.'
        },
        {
            id: '3',
            img: 'images/reviewer3.png',
            country: 'New York',
            name: 'Ethan Brown',
            testimonial: 'I was thoroughly impressed by OSD’s commitment to bringing our residential project to life. Their work on custom interiors was both beautiful and functional.'
        },
        {
            id: '4',
            img: 'images/reviewer1.png',
            country: 'New York',
            name: 'Olivia Smith',
            testimonial: 'Working with OSD Builders was a pleasure from start to finish. Their expertise in commercial construction is evident in the superb quality of our new office space.'
        },
        {
            id: '5',
            img: 'images/reviewer1.png',
            country: 'New York',
            name: 'Daniel Garcia',
            testimonial: 'OSD Builders excels at interior craftsmanship. They transformed my space with innovative design and high-quality materials. Highly recommended for any renovation needs.'
        },
    ];
    return (
        <div className={`testimonial ${props.pb} `}>
            <div className="container">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src="images/shadow_icon3.png" alt="" /></div>
                    <h6 className="section_sub_title">Our Clientele</h6>
                    <h1 className="section_title">Client Experiences</h1>
                    <p className="section_desc">
                        Discover why OSD Builders is the preferred choice for New York's most prestigious interior and commercial construction projects. Our clients appreciate our dedication to delivering excellence and precision in every build.
                    </p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            className="owl_testimonial1 owl-carousel owl-theme"
                            modules={[Pagination, Controller]}
                            effect={"slide"}
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                            }}
                            loop={true}
                            controller={{ inverse: true }}
                            spaceBetween={50}
                            // centeredSlides={true}
                            pagination={{
                                el: '.testimonial-pagination',
                                clickable: true,
                                // dynamicBullets: true,
                            }}
                        >

                            {
                                TestimonialData01.map(data =>
                                    <SwiperSlide key={data.id}>
                                        <TestimonialCard01
                                            data={data}
                                        />
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>

                        {/* <!-- Add Pagination --> */}
                        <div className="testimonial-pagination"></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial01;
