"use client";
import React, { useEffect, useState } from "react";
import "./WorkingTime.css"

function WorkingTime({onLoaded}) {

    useEffect(() => {

        onLoaded();
        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    return (
        <section className='working-time-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>working on 360°</h3>
                    </div>
                </div>
            </div>
            <div className="our-instrument-container">
                {/* <div className="gallery-container">
                    <div className="gallery-item">
                        <img src="./c1.jpg" alt="Image 1" />
                    </div>
                    <div className="gallery-item">
                        <img src="./c1.jpg" alt="Image 2" />
                    </div>
                    <div className="gallery-item">
                        <img src="./c1.jpg" alt="Image 3" />
                    </div>
                </div> */}
                <div className="container" >
                    <div className="box-card">
                        <div className="face front"><img src="./c1.jpg" alt="Image 1" /></div>
                        <div className="face back"><img src="./c2.jpg" alt="Image 2" /></div>
                        <div className="face right"><img src="./c3.jpg" alt="Image 3" /></div>
                        <div className="face left"><img src="./c4.jpg" alt="Image 4" /></div>
                        <div className="face top"><img src="./c5.jpg" alt="Image 5" /></div>
                        <div className="face bottom"><img src="./c6.jpg" alt="Image 6" /></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WorkingTime;




