"use client";
import React, { useEffect } from "react";
import "./OurInstrument.css"

function Videography() {


    useEffect(() => {


        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    return (
        <section className='our-strangth-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Our Strangth</h3>
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
                {/* <div className="container">
                    <div className="box-card">
                        <div className="face front"><img src="./c1.jpg" alt="Image 1" /></div>
                        <div className="face back"><img src="./c1.jpg" alt="Image 1" /></div>
                        <div className="face right"><img src="./c1.jpg" alt="Image 1" /></div>
                        <div className="face left"><img src="./c1.jpg" alt="Image 1" /></div>
                        <div className="face top"><img src="./c1.jpg" alt="Image 1" /></div>
                        <div className="face bottom"><img src="./c1.jpg" alt="Image 1" /></div>
                    </div>
                </div> */}

                <div className="gallery">
                    <div className="gallery-panel">
                        <img src="./camera-1.png" alt="Smiling Face" />
                        <div className="strangth-name"><p>Camere 007</p></div>
                    </div>

                    <div className="gallery-panel">
                        <img src="./camera-2.png" alt="Smiling Face" />
                        <div className="strangth-name"><p>Camere 007</p></div>
                    </div>

                    <div className="gallery-panel">
                        <img src="./camera-3.png" alt="Smiling Face" />
                        <div className="strangth-name"><p>Camere 007</p></div>
                    </div>

                    <div className="gallery-panel">
                        <img src="./camera-4.png" alt="Smiling Face" />
                        <div className="strangth-name"><p>Camere 007</p></div>
                    </div>

                    <div className="gallery-panel">
                        <img src="./camera-5.png" alt="Smiling Face" />
                        <div className="strangth-name"><p>Camere 007</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Videography;
