// app/about/page.tsx
import React from 'react';

export default function AboutPage({sectionNo}:{sectionNo:number}) {
  return (
    <section className='about-us'>
        <div>
            About Us {`${sectionNo}`}
        </div>
    </section>
  );
}
