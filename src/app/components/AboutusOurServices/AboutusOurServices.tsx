"use client";
import React, { useEffect } from "react";
import './AboutusOurServices.css'; // Assuming you have a CSS file for styling
import AboutusOurServicesData from '../../JsonData/AboutusOurServices.json'; // Adjust the path as necessary
import Image from 'next/image';

interface AboutusOurServicesItem {
    id: number;
    title?: string;
    description?: string;
    imageUrl?: string;
}


function AboutusOurServices() {
    const [aboutusOurServicesContent, setAboutusOurServicesContent] = React.useState<AboutusOurServicesItem[]>(AboutusOurServicesData)

    useEffect(() => {


        return () => {

        };
    }, []);
    // This effect runs once when the component mounts
    return (
        <section className='aboutus-our-services-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Our Services</h3>
                    </div>
                </div>
            </div>
            <div className='aboutus-our-services-container-card-container'>
                {aboutusOurServicesContent && aboutusOurServicesContent.map((item, index) => (
                    <>
                        <div className='aboutus-our-services-container-card'>
                            <div className="icon-container">
                                <Image
                                    src={item.imageUrl ?? 'default.png'}
                                    alt={item.title ?? 'About Us'}
                                    width={60}
                                    height={60} />
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </>
                ))}
            </div>
        </section>

    );
}

export default AboutusOurServices;
