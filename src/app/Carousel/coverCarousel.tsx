'use client';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import homeCarousel from '../JsonData/homeCarousel.json'
import IonIcon from '@reacticons/ionicons';

export default function Carousel() {

    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [animate, setAnimate] = useState<boolean>(false);
    const [thirdItemDetails, setThirdItemDetails] = useState<any>(`url('/c3.jpg')`); // State to store the 3rd item details


    useEffect(() => {
        const slider = sliderRef.current;

        const moveNext = () => {
            if (!slider) return;
            const items = slider.querySelectorAll('.item-container');
            setAnimate((prev) => !prev);
            if (items.length > 0) {
                slider.appendChild(items[0]);
            }
            const thirdItem = items[3] as HTMLElement;; // The 3rd item in the list (index 2)
            const bgImage = thirdItem?.style?.backgroundImage; // Extract backgroundImage from the style

            // Log the background image (for debugging)
            console.log("Background image of the 3rd item:", bgImage);

            // Store the background image in state
            setThirdItemDetails(bgImage); // Save the background image URL


        };

        const movePrev = () => {
            if (!slider) return;
            const items = slider.querySelectorAll('.item-container');
            setAnimate((prev) => !prev);
            if (items.length > 0) {
                slider.prepend(items[items.length - 1]);
            }
            const thirdItem = items[1] as HTMLElement;; // The 3rd item in the list (index 2)
            const bgImage = thirdItem?.style?.backgroundImage; // Extract backgroundImage from the style

            // Log the background image (for debugging)
            console.log("Background image of the 3rd item:", bgImage);

            // Store the background image in state
            setThirdItemDetails(bgImage); // Save the background image URL
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
            // setIsVisible(prev => !prev)
            setAnimate((prev) => !prev);
            moveNext();
            // movePrev();
        }, 6000);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleClick);
            clearInterval(interval);

        };
    }, []);

   

    return (
        <>
            <div className='main-carousel'>
                <ul className='slider' ref={sliderRef}>
                    {homeCarousel?.map((item, index) => (
                        <li className={`item-container ${animate && index === 2 ? 'visible' : ''}`} key={index} style={{ backgroundImage: `url('${item.backgroundImage}')` }}>
                            <div className='content-container'>
                                <h2 className='title'>{item.title}</h2>
                                <p className='description'>{item.description}
                                </p>
                                {/* {item.isReadMore ?
                                    <button>Read More</button>
                                    : null} */}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='nav-container'>
                    <IonIcon className='btn-icon prev' name="arrow-back-outline"></IonIcon>
                    <IonIcon className='btn-icon next' name="arrow-forward-outline"></IonIcon>
                </div>

                {thirdItemDetails !== '' && thirdItemDetails !== null ?
                    <div className={`third-container`} style={{ backgroundImage: `${thirdItemDetails}` }}>
                    </div>
                    : null}
            </div>

            {/* <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script> */}
            {/* <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script> */}


        </>
    );
}
