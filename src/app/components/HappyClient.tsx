// app/about/page.tsx
'use client';

import React from 'react';
import OurRecentWorkCard from '../components/HappyClient/HappyClientCard'

export default function OurRecentWorkPage() {
  return (
    <section className='section-container'>
      <div className='inner-container'>
        <div className='heading-container'>
          <div className='heading-text-container'>
            <h3>Happy Client</h3>
          </div>
        </div>
      </div>
      <div>
        <OurRecentWorkCard />
      </div>
    </section>
  );
}