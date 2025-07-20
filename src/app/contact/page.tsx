'use client';
import React, { useEffect, useState } from "react";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
import "../components/Enquery/Enquery.css"
import { Loader } from "../components/Loader/Loader";
import dynamic from 'next/dynamic';


const InsideCarousel = dynamic(() => import("../components/InsideCarousel/insideCarousel"), {
    ssr: false
});

const Enquery = dynamic(() => import("../components/Enquery/Enquery"), {
    ssr: false
});

export default function aboutus() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    const [enqueryLoaded, setEnqueryLoaded] = useState(false);


    useEffect(() => {
        if (carouselLoaded && enqueryLoaded) {
            setIsLoaded(true);
        }
    }, [carouselLoaded, enqueryLoaded]);
    return (
        <>
            {!isLoaded && <Loader />}
            <section className='section-container padding-null'>
                <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)} />
                <Enquery onLoaded={() => setEnqueryLoaded(true)} />
            </section>
        </>
    );
};
