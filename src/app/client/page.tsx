'use client';
import React, { useEffect, useState } from "react";

import aboutCarouselData from '../JsonData/aboutCarousel.json';
import '../components/HappyClientAll/HappyClientAll.css';
import dynamic from 'next/dynamic';


import { Loader } from "../components/Loader/Loader";
const InsideCarousel = dynamic(() => import("../components/InsideCarousel/insideCarousel"), {
    ssr: false
});
const HappyClientAll = dynamic(() => import("../components/HappyClientAll/HappyClientAll"), {
    ssr: false
});

export default function Client() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    const [happyClientLoaded, setHappyClientLoaded] = useState(false);

    useEffect(() => {
        if (carouselLoaded && happyClientLoaded) {
            setIsLoaded(true);
        }
    }, [carouselLoaded, happyClientLoaded]);

    return (
        <>
            {!isLoaded && <Loader  />}
            <section className='section-container padding-null'> 
                <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)} />

                <HappyClientAll onLoaded={() => setHappyClientLoaded(true)} />
            </section>

        </>
    );
};
