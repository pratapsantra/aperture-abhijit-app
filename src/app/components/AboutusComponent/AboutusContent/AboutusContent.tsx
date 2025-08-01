"use client";
import React, { useEffect } from "react";
import './AboutusContent.css'; // Assuming you have a CSS file for styling
import aboutusContentData from '../../../JsonData/AboutusContent.json';
import Image from 'next/image';
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

interface AboutusContentItem {
    id: number;
    imageUrl?: string;
    heading?: string;
    description?: string;
}

function AboutusContent({onLoaded}) {
    const [aboutusTopContent, setAboutusTopContent] = React.useState<AboutusContentItem[]>(aboutusContentData)

    useEffect(() => {

        onLoaded();
        return () => {

        };
    }, []);
    // This effect runs once when the component mounts
    return (

        <div className='inner-container-items'>
            {aboutusTopContent && aboutusTopContent?.map((item, index) => (
                <>
                    <Slide direction={`${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className='heading-container'>
                            <div className='heading-text-container'>
                                <h3>{item.heading}</h3>
                            </div>
                        </div>
                        <div className={`aboutus-content-container`}>
                            <div key={item.id} className={`aboutus-content-Item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <div className="image-container">
                                    <Image
                                        src={item.imageUrl ?? 'default.png'}
                                        alt={item.heading ?? 'About Us'}
                                        width={400}
                                        height={350}
                                        style={{ objectFit: 'cover', borderRadius: '10px' }}
                                    />
                                </div>
                                <div className="text-container">
                                    {/* <h3>{item.heading}</h3> */}
                                    <p>{item.description} ${index % 2 === 0 ? 'even' : 'odd'}</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </>
            ))}
        </div>

    );
}

export default AboutusContent;
