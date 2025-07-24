'use client';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import homeCarousel from '../JsonData/homeCarousel.json'
import IonIcon from '@reacticons/ionicons';
import Image from "next/image";

interface SheetRow {
    [key: string]: string | boolean | number;
}

type ParsedSheet = Record<string, string>[];

interface carouselDataProps {
    id: number,
    backgroundImage: string,
    title: string,
    description: string,
    isReadMore: boolean,
    readMoreText: string,
    year: number
}


export default function Carousel({ onLoaded }) {

    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [animate, setAnimate] = useState<boolean>(false);

    const [carouselData, setCarouselData] = useState<carouselDataProps[]>([])
    const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
    const [thirdItemDetails, setThirdItemDetails] = useState<any>(''); // State to store the 3rd item details

    useEffect(() => {
        const slider = sliderRef.current;

        const moveNext = () => {
            if (!slider) return;
            const items = slider.querySelectorAll('.item-container');
            setAnimate((prev) => !prev);
            if (items.length > 0) {
                slider.appendChild(items[0]);
            }
            const thirdItem = items[3] as HTMLElement; // The 3rd item in the list (index 2)
            orginalUrl(thirdItem)

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

            orginalUrl(thirdItem)

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

        onLoaded()
        // Cleanup
        return () => {
            document.removeEventListener('click', handleClick);
            clearInterval(interval);

        };
    }, [carouselData]);



    //All Google sheet
    useEffect(() => {
        const fetchData = async () => {
            const sheetName = "homeCarousel";
            const columnRange = "A:Z"
            try {
                // const res = await fetch('/.netlify/functions/sheets');
                const res = await fetch(`/.netlify/functions/sheets?sheet=${sheetName}&range=${columnRange}`);
                const json = await res.json();

                if (!res.ok) throw new Error(json.message || 'Unknown error');
                const data = json.data;

                // ✅ Transform into carouselDataProps[]
                const finalData: carouselDataProps[] = data.map((item, index) => ({
                    id: Number(item.id ?? index),
                    backgroundImage: imageBaseUrl + String(item.backgroundImage || ''),
                    title: String(item.title || ''),
                    description: String(item.description || ''),
                    isReadMore: Boolean(item.isReadMore),
                    readMoreText: String(item.readMoreText || ''),
                    year: Number(item.year || new Date().getFullYear()),
                }));

                setCarouselData(finalData);
                setThirdItemDetails(finalData[2].backgroundImage);
                // 
                // You can now set this to state or pass to context etc.
            } catch (err) {
                console.error('Failed to fetch sheet data:', err);
            }
        };

        fetchData();
    }, []);


    const orginalUrl = async (currentUrl: HTMLElement) => {
        const img = currentUrl.querySelector('img');

        const optimizedSrc = img?.getAttribute('src'); // Next.js optimized src

        if (optimizedSrc?.includes('url=')) {
            const encodedUrl = optimizedSrc.split('url=')[1].split('&')[0]; // get just the encoded URL
            const originalUrl = decodeURIComponent(encodedUrl);

            // console.log('✅ Original image URL:', originalUrl);
            setThirdItemDetails(originalUrl);
        }
    }

    return (
        <>

            <div className='main-carousel' > {/* id="test-background" */}

                <ul className='slider' ref={sliderRef}>
                    {carouselData?.map((item, index) => (
                        <li className={`item-container ${animate && index === 2 ? 'visible' : ''}`} key={item.id} >
                            <Image
                                src={item.backgroundImage}
                                alt=""
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={100}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                     objectPosition: 'top',
                                    zIndex: -1,
                                }}
                                fill
                            />

                            <div className='content-container'>
                                <h2 className='title'>{item.title}</h2>
                                <p className='description'>{item.description}
                                </p>

                            </div>
                        </li>
                    ))}
                </ul>

                <div className='nav-container'>
                    <IonIcon className='btn-icon prev' name="arrow-back-outline"></IonIcon>
                    <IonIcon className='btn-icon next' name="arrow-forward-outline"></IonIcon>

                </div>

                {thirdItemDetails !== '' && thirdItemDetails !== null ?
                    <div className={`third-container`}>
                        <Image
                            src={thirdItemDetails}
                            alt=""
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                zIndex: -1,

                            }}
                            fill
                        />
                    </div>
                    : null}
            </div>

        </>
    );
}
