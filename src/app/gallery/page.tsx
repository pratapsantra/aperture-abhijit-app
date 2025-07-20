'use client';
import React, { useEffect, useState } from "react";
// import InsideCarousel from "../components/InsideCarousel/insideCarousel";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
// import WorkingTime from "../components/WorkingTime/WorkingTime"
// import ImageGallery from "../components/ImageGallery/ImageGallery"

import dynamic from 'next/dynamic';
import { Loader } from "../components/Loader/Loader";

const InsideCarousel = dynamic(() => import("../components/InsideCarousel/insideCarousel"), {
    ssr: false
});

const WorkingTime = dynamic(() => import("../components/WorkingTime/WorkingTime"), {
    ssr: false
});

const ImageGallery = dynamic(() => import("../components/ImageGallery/ImageGallery"), {
    ssr: false
});


export default function gallery() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    const [WorkingTimeLoaded, setWorkingTimeLoaded] = useState(false);
    const [ImageGalleryLoaded, setImageGalleryLoaded] = useState(false);


    useEffect(() => {
        if (carouselLoaded && WorkingTimeLoaded && ImageGalleryLoaded) {
            setIsLoaded(true);
        }
    }, [carouselLoaded, WorkingTimeLoaded, ImageGalleryLoaded]);
    return (
        <>
            {!isLoaded && <Loader />}
            <section className='section-container padding-null  '>  {/* //page-postion */}
                <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)} />
                <WorkingTime onLoaded={() => setWorkingTimeLoaded(true)} />
                <ImageGallery onLoaded={() => setImageGalleryLoaded(true)} />
            </section>
        </>
    );
};
