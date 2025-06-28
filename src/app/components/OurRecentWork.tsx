// app/about/page.tsx
'use client';

import React from 'react';
import OurRecentWorkCard from '../components/ourRecentWork/OurRecentWorkCard'

export default function OurRecentWorkPage() {
  return (
    <section className='section-container background-black'>
      <div className='inner-container'>
        <div className='heading-container'>
          <div className='heading-text-container'>
           <h3>Our Recent Work</h3>
          </div>
        </div>
      </div>
      <div>
        <OurRecentWorkCard />
      </div>
    </section>
  );
}