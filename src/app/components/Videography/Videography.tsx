"use client";
import React, { useEffect } from "react";
import "./Videography.css"

function Videography() {


    useEffect(() => {


        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    return (
        <section className='video-process-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Videography</h3>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    preload="auto"
                    loop
                    className="responsive-video"
                    controls
                >
                    <source src="/nop-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>

    );
}

export default Videography;
