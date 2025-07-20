// app/about/page.tsx
'use client';

import React, { useEffect } from 'react';
import nodemailer from 'nodemailer'

import ProjectCard from '../components/ourServices/ProjectCard'
import ourServices from '../JsonData/ourServices.json'
import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

export default function OurServicesPage({onLoaded}) {
  useEffect(() => {
    /* const sendTestMail = async () => {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fname: 'Test',
          phone_no: '1234567890',
          email: 'youremail@gmail.com',
          message: 'Test message',
          eventDate: '2025-07-19',
          eventTypeOption: 'Test Event',
          location: 'Test Location',
        }),
      })

      const data = await res.json()
      console.log('Response:', data)
    }

    sendTestMail() */
    onLoaded();
  }, [])


  return (
    <section className='section-container'>
      <div className='inner-container'>
        <Slide>
          <div className='heading-container'>
            <div className='heading-text-container'>
              <h3>Our Services</h3>
            </div>
          </div>
        </Slide >
        <div className='our-services-bottom-container'>
          {ourServices?.map((item, index) => (
            <Zoom duration={500}>
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
            </Zoom>
          ))}

        </div>
      </div>
    </section>
  );
}