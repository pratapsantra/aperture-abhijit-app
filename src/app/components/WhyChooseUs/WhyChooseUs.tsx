"use client";
import React, { useEffect } from "react";
import "./WhyChooseUs.css"
import WhyChooseUsData from '../../JsonData/WhyChooseUs.json'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

function WhyChooseUs({onLoaded}) {


    useEffect(() => {

        onLoaded();
        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    return (
        <section className='why-choose-us-section'>
            <div className='inner-container'>
                <Slide direction='up'>
                    <div className='heading-container'>
                        <div className='heading-text-container'>
                            <h3>Why Choose Us</h3>
                        </div>
                    </div>
                </Slide>
            </div>
            <Zoom>
                <div className="why-choose-content-container">
                    {WhyChooseUsData && WhyChooseUsData.map((item, index) => (
                        <Slide direction={`${index % 2 === 0 ? 'right' : 'left'}`}>
                            <div className="why-choose-content-card">
                                <div className="number-container"><h4>{item.id}</h4></div>
                                <div className="details-container"><p>{item.description}</p></div>
                            </div>
                        </Slide>
                    ))}

                </div>
            </Zoom>
        </section>

    );
}

export default WhyChooseUs;
