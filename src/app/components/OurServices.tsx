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
            Our Services
          </div>
        </div>
        <div className='our-services-bottom-container'>
          {ourServices?.map((item, index) => (
            <ProjectCard
              key={index}
              id={item.id}
              imageUrl={item.imageUrl}
              projectCount={item.projectCount}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              isButtonClick={item.isButtonClick}
              projectUrl={item.projectUrl}
            />
          ))}

        </div>
      </div>
    </section>
  );
}