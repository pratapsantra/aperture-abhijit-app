"use client";
import React, { useEffect } from "react";
import './AboutusOurServices.css'; // Assuming you have a CSS file for styling
import AboutusOurServicesData from '../../JsonData/AboutusOurServices.json'; // Adjust the path as necessary
import Image from 'next/image';
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

interface AboutusOurServicesItem {
    id: number;
    title?: string;
    description?: string;
    imageUrl?: string;
}


function AboutusOurServices({ onLoaded }) {
    const [aboutusOurServicesContent, setAboutusOurServicesContent] = React.useState<AboutusOurServicesItem[]>(AboutusOurServicesData)

    useEffect(() => {
        onLoaded();
        return () => {

        };
    }, []);

    // This effect runs once when the component mounts
    return (
        <section className='aboutus-our-services-section'>
            <div className='inner-container'>
                <Slide>
                    <div className='heading-container'>
                        <div className='heading-text-container'>
                            <h3>Our Services</h3>
                        </div>
                    </div>
                </Slide>
            </div>

            <div className='aboutus-our-services-container-card-container'>
                {aboutusOurServicesContent && aboutusOurServicesContent.map((item, index) => (
                    <>

                        <div className='aboutus-our-services-container-card'>
                            <Zoom>
                                <div className="icon-container">
                                    <Image
                                        src={item.imageUrl ?? 'default.png'}
                                        alt={item.title ?? 'About Us'}
                                        width={60}
                                        height={60} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Zoom>
                        </div>

                    </>
                ))}
            </div>

        </section>

    );
}

export default AboutusOurServices;
