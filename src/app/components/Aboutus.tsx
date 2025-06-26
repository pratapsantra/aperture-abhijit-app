// app/about/page.tsx
'use client';

import React from 'react';

export default function AboutPage({sectionNo}:{sectionNo:any}) {
  return (
    <section className='about-us'>
        <div>
            About Us {`${sectionNo}`}
        </div>
    </section>
  );
}
