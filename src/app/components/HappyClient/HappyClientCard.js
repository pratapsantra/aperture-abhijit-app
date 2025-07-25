'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import './HappyClient.css';


/* interface Activity {
    title: string;
    description: string;
    imageUrl: string;
} */

// const activities: Activity[] = [
const activities = [
    {
        title: 'Ice Catch1',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-1.jpg',
    },
    {
        title: 'Mud Touching2',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-2.jpg',
    },
    {
        title: 'BMX Football3',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-3.jpg',
    },
    {
        title: 'Shoe Tying4',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-4.jpg',
    }
    
];

// const OurRecentWorkCard: React.FC = () => {
export default function OurRecentWorkCard() {

    useEffect(() => {
        // Only load the Lit component once, in browser
        import('../activities-widget.js');

        return () => {
            // Cleanup logic if necessary
        };
    }, []);
    return (

        <>
            <activities-widget>

                {activities.map((item, index) => (
                    <div className="activity" key={index}>
                        <div className="img">
                            <Image
                                src={item.imageUrl}
                                alt={``}
                                width={400}
                                height={250}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}


            </activities-widget>
        </>
    );
};

// export default OurRecentWorkCard;
