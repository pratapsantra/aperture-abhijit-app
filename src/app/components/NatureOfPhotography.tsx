// app/about/page.tsx
'use client';

import React from 'react';

import ProjectCard from '../components/ourServices/ProjectCard'
import ourServices from '../JsonData/ourServices.json'

export default function OurServicesPage() {
  return (
    <section className='section-container'>
      <div className='inner-container'>
        <div className='heading-container'>
          <div className='heading-text-container'>
            Nature Of Photography
          </div>
        </div>
        <div className='nature-of-photography-bottom-container'>
          
        </div>
      </div>
    </section>
  );
}