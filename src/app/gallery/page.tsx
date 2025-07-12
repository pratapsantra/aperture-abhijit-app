'use client';
import React from "react";
import InsideCarousel from "../components/InsideCarousel/insideCarousel";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
import AboutusOurServices from "../components/AboutusOurServices/AboutusOurServices";
import Videography from "../components/Videography/Videography";
import OurStrangth from "../components/OurInstrument/OurInstrument"
import WorkingTime from "../components/WorkingTime/WorkingTime"

export default function gallery() {
    return (
        <>
            <section className='section-container padding-null  '>  {/* //page-postion */}
                    <InsideCarousel data={aboutCarouselData} />
                    <WorkingTime />
                    {/* <Videography /> */}
                    {/* <AboutusOurServices /> */}
                    {/* <OurStrangth /> */}
            </section>
        </>
    );
};
