// app/about/page.tsx
'use client';

import React from 'react';
import NatureOfPhotography from './NatureOfPhotography/NatureOfPhotography'

export default function OurServicesPage() {
  return (
    <section className='section-container padding-null background-black'>
      <div className='inner-container'>
        <div className='heading-container'>
          <div className='heading-text-container'>
            <h3>Nature Of Photography</h3>
          </div>
        </div>
        <div className='nature-of-photography-bottom-container'>
          <NatureOfPhotography />
        </div>
      </div>
    </section>
  );
}