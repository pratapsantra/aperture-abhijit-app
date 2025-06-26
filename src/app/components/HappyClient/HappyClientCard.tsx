'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import './HappyClient.css';


interface Activity {
    title: string;
    description: string;
    imageUrl: string;
}

const activities: Activity[] = [
    {
        title: 'Ice Catch',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-1.jpg',
    },
    {
        title: 'Mud Touching',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-2.jpg',
    },
    {
        title: 'BMX Football',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-3.jpg',
    },
    {
        title: 'Shoe Tying',
        description: "I recently connected with Abijit Photography for my pre-wedding shoot, and the experience was absolutely fantastic! The photographer did an incredible job and made the entire shoot truly memorable. I’ll definitely be reaching out to them again for my wedding photography. Highly recommended!",
        imageUrl: '/hc-4.jpg',
    },
];

const OurRecentWorkCard: React.FC = () => {

    useEffect(() => {
        // Only load the Lit component once, in browser
        import('../../components/activities-widget');

        return () => {
            // Cleanup logic if necessary
        };
    }, []);
    return (


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
    );
};

export default OurRecentWorkCard;
