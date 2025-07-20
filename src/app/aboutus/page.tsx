'use client';
import React, { useEffect, useState } from "react";
import aboutCarouselData from '../JsonData/aboutCarousel.json';

import { Loader } from "../components/Loader/Loader";
// import OurProcessItem from "../components/OurProcess/OurProcess";
import '../components/OurProcess/OurProcess.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import dynamic from 'next/dynamic';

const InsideCarousel = dynamic(() => import("../components/InsideCarousel/insideCarousel"), {
    ssr: false
});

const AboutusContent = dynamic(() => import("../components/AboutusComponent/AboutusContent/AboutusContent"), {
    ssr: false
});

const WhyChooseUs = dynamic(() => import("../components/WhyChooseUs/WhyChooseUs"), {
    ssr: false
});
const OurProcessItem = dynamic(() => import("../components/OurProcess/OurProcess"), {
    ssr: true
});

export default function aboutus() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    const [aboutusContent, setAboutusContent] = useState(false);
    const [whyChooseUs, setWhyChooseUs] = useState(false);
    const [ourProcessItem, setOurProcessItem] = useState(false);

    useEffect(() => {
        if (carouselLoaded && aboutusContent && whyChooseUs && ourProcessItem) {
            setIsLoaded(true);
        }
    }, [carouselLoaded, aboutusContent, whyChooseUs, ourProcessItem]);

    return (
        <>
            {!isLoaded && <Loader />}
            <section className='section-container padding-null'>
                <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)} />
                <AboutusContent onLoaded={() => setAboutusContent(true)} />
                <WhyChooseUs onLoaded={() => setWhyChooseUs(true)} />
                <OurProcessItem onLoaded={() => setOurProcessItem(true)} />
            </section>
        </>
    );
};
