'use client';
import React, { useEffect, useState } from "react";
import aboutCarouselData from '../JsonData/aboutCarousel.json';

import dynamic from 'next/dynamic';
import { Loader } from "../components/Loader/Loader";

const InsideCarousel = dynamic(() => import("../components/InsideCarousel/insideCarousel"), {
    ssr: false
});

const AboutusOurServices = dynamic(() => import("../components/AboutusOurServices/AboutusOurServices"), {
    ssr: false
});

const Videography = dynamic(() => import("../components/Videography/Videography"), {
    ssr: false
});

const OurStrangth = dynamic(() => import("../components/OurInstrument/OurInstrument"), {
    ssr: false
});

export default function ServicePages() {


    const [isLoaded, setIsLoaded] = useState(false);
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    const [AboutusOurServicesLoaded, setAboutusOurServicesLoaded] = useState(false);
    const [VideographyLoaded, setVideographyLoaded] = useState(false);
    const [OurStrangthLoaded, setOurStrangthLoaded] = useState(false);

    useEffect(() => {
        if (carouselLoaded && AboutusOurServicesLoaded && VideographyLoaded && OurStrangthLoaded) {
            setIsLoaded(true);
        }
    }, [carouselLoaded, AboutusOurServicesLoaded, VideographyLoaded, OurStrangthLoaded]);

    return (
        <>
            {!isLoaded && <Loader />}
            <section className='section-container padding-null'> 
                <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)} />
                <Videography onLoaded={() => setAboutusOurServicesLoaded(true)} />
                <AboutusOurServices onLoaded={() => setVideographyLoaded(true)} />
                <OurStrangth onLoaded={() => setOurStrangthLoaded(true)} />
            </section>
        </>
    );
};
