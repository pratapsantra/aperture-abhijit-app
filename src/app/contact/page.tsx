'use client';
import React, { useState } from "react";
import InsideCarousel from "../components/InsideCarousel/insideCarousel";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
import Enquery from '../components/Enquery/Enquery'

export default function aboutus() {
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    const [enqueryLoaded, setEnqueryLoaded] = useState(false);
    return (
        <>
            <section className='section-container padding-null  '>  {/* //page-postion */}
                <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)} />
                <Enquery onLoaded={() => setEnqueryLoaded(true)} />
            </section>
        </>
    );
};
