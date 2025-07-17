'use client';
import React, { useState } from "react";
import InsideCarousel from "../components/InsideCarousel/insideCarousel";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
import AboutusOurServices from "../components/AboutusOurServices/AboutusOurServices";
import Videography from "../components/Videography/Videography";
import OurStrangth from "../components/OurInstrument/OurInstrument"

export default function aboutus() {
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    return (
        <>
            <section className='section-container padding-null  '>  {/* //page-postion */}
                    <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)}/>
                    <Videography />
                    <AboutusOurServices />
                    <OurStrangth />
            </section>
        </>
    );
};
