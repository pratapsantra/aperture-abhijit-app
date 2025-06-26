// app/about/page.tsx
'use client';

import React from 'react';
import OurTeamCard from '../components/OurTeam/OurTeamCard'

export default function OurRecentWorkPage() {
  return (
    <section className='section-container'>
      <div className='inner-container'>
        <div className='heading-container'>
          <div className='heading-text-container'>
            Our Team
          </div>
        </div>
      </div>
      <div>
        <OurTeamCard />
      </div>
    </section>
  );
}