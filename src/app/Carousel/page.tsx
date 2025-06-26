'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import homeCarousel from '../JsonData/homeCarousel.json'
import IonIcon from '@reacticons/ionicons';

export default function Carousel() {

    const sliderRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const slider = sliderRef.current;

        const moveNext = () => {
            if (!slider) return;
            const items = slider.querySelectorAll('.item');
            if (items.length > 0) {
                slider.appendChild(items[0]);
            }
        };

        const movePrev = () => {
            if (!slider) return;
            const items = slider.querySelectorAll('.item');
            if (items.length > 0) {
                slider.prepend(items[items.length - 1]);
            }
        };

        const handleClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest('.next')) moveNext();
            if (target.closest('.prev')) movePrev();
        };

        // Attach manual controls
        document.addEventListener('click', handleClick);

        // Auto-run every 4 seconds
        const interval = setInterval(() => {
            moveNext();
        }, 6000);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleClick);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <main>
                <ul className='slider' ref={sliderRef}>
                    {homeCarousel?.map((item, index) => (
                        <li className='item' key={index} style={{ backgroundImage: `url('${item.backgroundImage}')` }}>
                            <div className='content'>
                                <h2 className='title'>{item.title}</h2>
                                <p className='description'>{item.description}
                                </p>
                                {item.isReadMore ?
                                    <button>Read More</button>
                                    : null}
                            </div>
                        </li>
                    ))}
                </ul>
                <nav className='nav'>
                    <IonIcon className='btn prev' name="arrow-back-outline"></IonIcon>
                    <IonIcon className='btn next' name="arrow-forward-outline"></IonIcon>
                </nav>
            </main>

            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
            <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>


        </>
    );
}
