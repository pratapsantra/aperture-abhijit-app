// app/about/page.tsx
'use client';

import React, { useEffect } from 'react';
import HappyClientCard from '../components/HappyClient/HappyClientCard'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

export default function OurRecentWorkPage({onLoaded}) {
  
  useEffect(() => {
      onLoaded();
      // Cleanup
      return () => {
  
      };
    }, []);

  return (
    <section className='section-container'>
      <div className='inner-container'>
        <Slide>
          <div className='heading-container'>
            <div className='heading-text-container'>
              <h3>Happy Client</h3>
            </div>
          </div>
        </Slide>
      </div>
      <div>
        <Zoom duration={500}>
          <HappyClientCard />
        </Zoom>
      </div>
    </section>
  );
}