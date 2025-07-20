'use client';
import React, { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import("./Carousel/coverCarousel"), {
  ssr: false
});
const OurServices = dynamic(() => import("../app/components/OurServices"), {
  ssr: false
});

const OurRecentWork = dynamic(() => import("../app/components/OurRecentWork"), {
  ssr: false
});
const HappyClient = dynamic(() => import("../app/components/HappyClient"), {
  ssr: false
});
const OurTeam = dynamic(() => import("../app/components/OurTeam"), {
  ssr: false
});
const NatureOfPhotography = dynamic(() => import("../app/components/NatureOfPhotography"), {
  ssr: false
});


export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [landingPageCarouselLoaded, setLandingPageCarouselLoaded] = useState(false);
  const [ourServicesLoaded, setOurServicesLoaded] = useState(false);
  const [ourRecentWork, setOurRecentWork] = useState(false);
  const [happyClient, setHappyClient] = useState(false);
  const [ourTeam, setOurTeam] = useState(false);
  const [natureOfPhotography, setNatureOfPhotography] = useState(false);

  useEffect(() => {
    if (landingPageCarouselLoaded && ourServicesLoaded && ourRecentWork && happyClient && ourTeam && natureOfPhotography) {
      setIsLoaded(true);
    }
  }, [landingPageCarouselLoaded, ourServicesLoaded, ourRecentWork, happyClient, ourTeam, natureOfPhotography]);

  return (
    <>
      {!isLoaded && <Loader />}
      <Carousel onLoaded={() => setLandingPageCarouselLoaded(true)} />
      <OurServices onLoaded={() => setOurServicesLoaded(true)} />
      <OurRecentWork onLoaded={() => setOurRecentWork(true)} />
      <HappyClient onLoaded={() => setHappyClient(true)} />
      <NatureOfPhotography onLoaded={() => setOurTeam(true)} />
      <OurTeam onLoaded={() => setNatureOfPhotography(true)} />
    </>
  );
}
