"use client";
import React, { useEffect } from "react";
import "./WhyChooseUs.css"
import WhyChooseUsData from '../../JsonData/WhyChooseUs.json'

function WhyChooseUs() {


    useEffect(() => {


        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    return (
        <section className='why-choose-us-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Why Choose Us</h3>
                    </div>
                </div>
            </div>
            <div className="why-choose-content-container">
                {WhyChooseUsData && WhyChooseUsData.map((item, indexd) => (
                    <div className="why-choose-content-card">
                        <div><p>{item.id}</p></div>
                        <div><h5>{item.description}</h5></div>
                    </div>
                ))}

            </div>
        </section>

    );
}

export default WhyChooseUs;
