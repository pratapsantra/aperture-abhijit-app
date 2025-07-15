'use client';
import React from "react";
import InsideCarousel from "../components/InsideCarousel/insideCarousel";
import aboutCarouselData from '../JsonData/aboutCarousel.json';
import AboutusContent from "../components/AboutusComponent/AboutusContent/AboutusContent";
import AboutusOurServices from "../components/AboutusOurServices/AboutusOurServices";
import OurProcessItem from "../components/OurProcess/OurProcess";
import Videography from "../components/Videography/Videography";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import HappyClientAll from "../components/HappyClientAll/HappyClientAll";

export default function client() {
    return (
        <>
            <section className='section-container padding-null  '>  {/* //page-postion */}
                    <InsideCarousel data={aboutCarouselData} />
                    <HappyClientAll />
                    {/* <WhyChooseUs /> */}
                    {/* <Videography /> */}
                    {/* <AboutusOurServices /> */}
                    {/* <OurProcessItem /> */}
            </section>
        </>
    );
};
