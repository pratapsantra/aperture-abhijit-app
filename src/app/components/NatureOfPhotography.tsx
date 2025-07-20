// app/about/page.tsx
'use client';

import React, { useEffect } from 'react';
import NatureOfPhotography from './NatureOfPhotography/NatureOfPhotography'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

export default function OurServicesPage({onLoaded}) {

   useEffect(() => {
        onLoaded();
        // Cleanup
        return () => {

        };
    }, []);
    
  return (
    <section className='section-container padding-null background-black'>
      <div className='inner-container'>
        <Slide direction='left'>
          <div className='heading-container'>
            <div className='heading-text-container'>
              <h3>Nature Of Photography</h3>
            </div>
          </div>
        </Slide>
          <div className='nature-of-photography-bottom-container'>
            <NatureOfPhotography />
          </div>
      </div>
    </section>
  );
}