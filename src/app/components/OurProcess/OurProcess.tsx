"use client";
import React, { useEffect } from "react";
// import './OurProcess.css'; // Assuming you have a CSS file for styling
import OurProcessData from '../../JsonData/OurProcess.json'; // Adjust the path as necessary

import Swiper from 'swiper';

import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

interface imageDetails {
    Climber: string;
    Photo: string;
    Route: string;
    Sector: string;
    Zone: string;
}

interface OurProcessItem {
    id: number;
    imageUrl: string;
    heading: string;
    description: string;
    data: imageDetails[];
}


function OurProcess({ onLoaded }) {
    const [OurProcessContent, setOurProcessContent] = React.useState<OurProcessItem[]>(OurProcessData)

    useEffect(() => {
        let swiperInstance: Swiper | null = null;

        const timeout = setTimeout(() => {
            swiperInstance = new Swiper('.swiper', {
                effect: 'coverflow',
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1.5
                    },
                    580: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3.5
                    },
                    1200: {
                        slidesPerView: 4
                    },
                    1400: {
                        slidesPerView: 4.5
                    }
                }
            });
            onLoaded();
        }, 0);

        // Optional: return cleanup function if necessary
        return () => {
            // swiper.destroy(true, true);
            clearTimeout(timeout);
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
            }
        };

    }, [OurProcessContent]);

    return (
        <section className='our-process-section'>
            <div className='inner-container'>

                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Our Process</h3>
                    </div>
                </div>

            </div>
            <div className='our-process-card-container'>
                {OurProcessContent.length > 0 && (
                    <div className="swiper">

                        <div className="swiper-wrapper">
                            {OurProcessContent && OurProcessContent.map((item, index) => (
                                <>
                                    <div className="swiper-slide"
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                        key={item.id}
                                    >

                                        <div className="our-process-heading">
                                            <h3>{item.heading}</h3>
                                        </div>
                                        <div className="info">
                                            {item.data.map((detail, idx) => (
                                                <>
                                                    <span title="Climber">{detail.Climber}</span>
                                                    <span title="Photo">{detail.Photo}</span>
                                                    <span title="Route">{detail.Route}</span>
                                                    <span title="Sector">{detail.Sector}</span>
                                                    <span title="Zone">{detail.Zone}</span>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ))}

                        </div >
                        <div className="swiper-pagination"></div>
                    </div>
                )}

            </div>
        </section>

    );
}

export default OurProcess;
