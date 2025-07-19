// app/about/page.tsx
'use client';

import React from 'react';
import OurTeamCard from '../components/OurTeam/OurTeamCard'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

export default function OurRecentWorkPage() {
  return (
    <section className='section-container'>
      <div className='inner-container'>
        <Slide direction='left'>
          <div className='heading-container'>
            <div className='heading-text-container'>
              <h3>Our Team</h3>
            </div>
          </div>
        </Slide>
      </div>
      <Zoom>
        <div>
          <OurTeamCard />
        </div>
      </Zoom>
    </section>
  );
}