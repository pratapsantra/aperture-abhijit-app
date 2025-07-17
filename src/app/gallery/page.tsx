'use client';
import React, { useState } from "react";
import InsideCarousel from "../components/InsideCarousel/insideCarousel";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
import AboutusOurServices from "../components/AboutusOurServices/AboutusOurServices";
import Videography from "../components/Videography/Videography";
import OurStrangth from "../components/OurInstrument/OurInstrument"
import WorkingTime from "../components/WorkingTime/WorkingTime"
import ImageGallery from "../components/ImageGallery/ImageGallery"

export default function gallery() {
    const [carouselLoaded, setCarouselLoaded] = useState(false);
    return (
        <>
            <section className='section-container padding-null  '>  {/* //page-postion */}
                    <InsideCarousel data={aboutCarouselData} onLoaded={() => setCarouselLoaded(true)}/>
                    <WorkingTime />
                    <ImageGallery />
                    {/* <Videography /> */}
                    {/* <AboutusOurServices /> */}
                    {/* <OurStrangth /> */}
            </section>
        </>
    );
};
