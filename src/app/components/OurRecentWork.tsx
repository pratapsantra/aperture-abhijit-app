// app/about/page.tsx
'use client';

import React from 'react';
import OurRecentWorkCard from '../components/ourRecentWork/OurRecentWorkCard'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

export default function OurRecentWorkPage() {
  return (
    <section className='section-container background-black'>
      <div className='inner-container'>
        <Slide direction='right'>
          <div className='heading-container'>
            <div className='heading-text-container'>
              <h3>Our Recent Work</h3>
            </div>
          </div>
        </Slide>
      </div>
      <div>
        <OurRecentWorkCard />
      </div>
    </section>
  );
}