'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import './NatureOfPhotography.css'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

// const OurRecentWorkCard: React.FC = () => {
export default function NatureOfPhotography() {

    useEffect(() => {

        return () => {
            // Cleanup logic if necessary
        };
    }, []);
    return (

        <section className="nature-of-photography">
            <div className="nature-of-photography-container">
                <div className="row programs_wrraper">
                    <div className="col-md-4 col-sm-6">
                        <Slide direction='right'>
                            <div className="programs_imgbox">
                                <Image
                                    src={'/nop1.jpg'}
                                    alt={``}
                                    width={400}
                                    height={350}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="overlay">
                                    <div className="content_box">
                                        <div className="programs-content">
                                            <h3><span>Steel View</span><br></br>
                                                Photos</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide direction='left'>
                            <div className="programs_imgbox">
                                <Image
                                    src={'/nop-2.jpg'}
                                    alt={``}
                                    width={400}
                                    height={350}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="overlay">
                                    <div className="content_box">
                                        <div className="programs-content">
                                            <h3><span>Steel View</span><br></br>
                                                Photos</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Zoom>
                            <div className="programs_imgbox">
                                <Image
                                    src={'/nop-3.jpg'}
                                    alt={``}
                                    width={400}
                                    height={725}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="overlay">
                                    <div className="content_box">
                                        <div className="programs-content">
                                            <h3><span>Drone View</span><br></br>
                                                Photos</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-md-4 col-sm-12 plast_box">
                        <div className="psingle-col plast_half">
                            <Slide direction='left'>
                                <div className="programs_imgbox">
                                    <Image
                                        src={'/nop-4.jpg'}
                                        alt={``}
                                        width={400}
                                        height={350}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="overlay">
                                        <div className="content_box">
                                            <div className="programs-content">
                                                <h3><span>Steel View</span><br></br>
                                                    Photos</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="psingle-col plast_half">
                            <Slide direction='right'>
                                <div className="programs_imgbox">
                                    <Image
                                        src={'/nop-5.jpg'}
                                        alt={``}
                                        width={400}
                                        height={350}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    {/* <video width="490" height="350" autoPlay muted preload="auto" loop className='video-container'>
                                    <source
                                        src={'/nop-video.mp4'}
                                        type="video/mp4"
                                    />
                                </video> */}

                                    <div className="overlay">
                                        <div className="content_box">
                                            <div className="programs-content">
                                                <h3><span>Steel View</span><br></br>
                                                    Photos</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
