// app/about/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import whatsapplogo from '../../../../public/whatsapplogo.png'; // Adjust the path as necessary

export default function whatsappInfo() {
    const clickWhatsapp = () => {
        window.open("https://wa.me/919732814504", "_blank");
    };
    return (

        <div className="whatsapp-container" onClick={clickWhatsapp}>
            <Image
                src={whatsapplogo}
                alt={``}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
            />
            <a 
                href="https://www.flaticon.com/free-icons/whatsapp" 
                title="Whatsapp icons"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon-attribution"
            >
                Whatsapp icons created by riajulislam - Flaticon
            </a>
        </div>

    );
}
