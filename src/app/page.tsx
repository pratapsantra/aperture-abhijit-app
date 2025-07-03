'use client';
import Carousel from './Carousel/page'
import OurServices from '../app/components/OurServices'
import OurRecentWork from '../app/components/OurRecentWork'
import HappyClient from '../app/components/HappyClient'
import OurTeam from '../app/components/OurTeam'
import NatureOfPhotography from '../app/components/NatureOfPhotography'
import Footer from '../app/components/Footer'
export default function Home() {
  return (
    <>
      <Carousel />
      <OurServices/>
      <OurRecentWork />
      <HappyClient />
      <OurTeam />
      <NatureOfPhotography />
      {/* <Footer /> */}
    </>
  );
}
