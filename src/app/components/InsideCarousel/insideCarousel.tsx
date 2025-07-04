'use client';
import React, { useEffect, useRef, useState } from 'react';
import './insideCarousel.css';
import gsap from 'gsap'; // Import GSAP

// Type declaration for the VerticalMouseDrivenCarousel class
class VerticalMouseDrivenCarousel {
    posY: number;
    listItems: number;
    defaults: { [key: string]: string };

    constructor(options = {}) {
        const _defaults = {
            carousel: ".js-carousel",
            bgImg: ".js-carousel-bg-img",
            list: ".js-carousel-list",
            listItem: ".js-carousel-list-item"
        };

        this.posY = 0;
        this.defaults = { ..._defaults, ...options };

        this.initCursor();
        this.init();
        this.bgImgController();
    }

    // region getters
    getBgImgs(): NodeListOf<Element> {
        return document.querySelectorAll(this.defaults.bgImg);
    }

    getListItems(): NodeListOf<Element> {
        return document.querySelectorAll(this.defaults.listItem);
    }

    getList(): Element | null {
        return document.querySelector(this.defaults.list);
    }

    getCarousel(): Element | null {
        return document.querySelector(this.defaults.carousel);
    }

    init() {
        gsap.set(this.getBgImgs(), {
            autoAlpha: 0,
            scale: 1.05
        });
        gsap.set(this.getBgImgs()[0], {
            autoAlpha: 1,
            scale: 1
        });

        this.listItems = this.getListItems().length - 1;

        this.listOpacityController(0);
    }

    initCursor() {
        // Ensure these elements are properly typed as HTMLElement
        const listHeight = (this.getList() as HTMLElement).clientHeight;
        const carouselHeight = (this.getCarousel() as HTMLElement).clientHeight;


        this.getCarousel()!.addEventListener(
            "mousemove",
            (event: MouseEvent) => {
                // Use `pageY` from MouseEvent
                this.posY = event.pageY - (this.getCarousel() as HTMLElement).offsetTop;

                let offset = (-this.posY / carouselHeight) * listHeight;


                // Perform the animation using GSAP
                gsap.to(this.getList(), 0.3, {
                    y: offset,
                    ease: "power4.out",
                    duration: 0.6 // Smoother transition for carousel movement
                });
            },
            false
        );
    }

    bgImgController() {

        for (const link of this.getListItems()) {
            link.addEventListener("mouseenter", ev => {
                const currentId = (ev.currentTarget as HTMLElement).dataset.itemId;
                this.listOpacityController(currentId);

                gsap.to(ev.currentTarget, 0.3, {
                    autoAlpha: 1,
                    ease: "power3.out", // Smooth fade-in on hover
                     duration: 1, // Smooth transition for opacity and position
                     scale: 1.05 // Slight scale-up for the hovered item
                });

                gsap.to(".is-visible", 0.2, {
                    autoAlpha: 0,
                    scale: 1.05,
                    ease: "power2.in", // Smoother fade-out for other images
                    duration: 1,
                });

                if (!this.getBgImgs()[parseInt(currentId as string)].classList.contains("is-visible")) {
                    this.getBgImgs()[parseInt(currentId as string)].classList.add("is-visible");
                }

                gsap.to(this.getBgImgs()[parseInt(currentId as string)], 0.6, {
                    autoAlpha: 1,
                    scale: 1,
                    ease: "power4.out",
                    duration: 1
                });
            });
        }
    }

    listOpacityController(id: number | string) {
        id = parseInt(id as string);
        const aboveCurrent = this.listItems - id;
        const belowCurrent = id;

        if (aboveCurrent > 0) {
            for (let i = 1; i <= aboveCurrent; i++) {
                const opacity = 0.5 / i;
                const offset = 5 * i;
                gsap.to(this.getListItems()[id + i], 0.5, {
                    autoAlpha: opacity,
                    x: offset,
                    ease: "power3.out",
                    duration: 0.4 // Smooth transition for opacity and position
                });
            }
        }

        if (belowCurrent > 0) {
            for (let i = 0; i <= belowCurrent; i++) {
                const opacity = 0.5 / i;
                const offset = 5 * i;
                gsap.to(this.getListItems()[id - i], 0.5, {
                    autoAlpha: opacity,
                    x: offset,
                    ease: "power3.out",
                    duration: 0.4 // Smooth transition for opacity and position
                });
            }
        }
    }
    
}

// export default function InsideCarousel() {
const InsideCarousel: React.FC = () => {
    const carouselItems = [
        { id: 0, state: "Nevada", city: "Carson City", imageUrl: "./c1.jpg" },
        /* { id: 1, state: "New Hampshire", city: "Concord", imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq" },
        { id: 2, state: "New York", city: "Albany", imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq" },
        { id: 3, state: "Oklahoma", city: "Oklahoma City", imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq" },
        { id: 4, state: "North Carolina", city: "Raleigh", imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq" },
        { id: 5, state: "Utah", city: "Salt Lake City", imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq" },
        { id: 6, state: "Missouri", city: "Jefferson City", imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq" } */
    ];

    useEffect(() => {

        const carouselInstance = new VerticalMouseDrivenCarousel();
        // Cleanup
        return () => {

        };
    }, []);

    return (
        <div className="inside-carousel-container">
            <header className="c-header c-header--archive c-header--project-list">
                <div className="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
                    <ul className="c-mouse-vertical-carousel__list js-carousel-list">
                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="0">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        01
                                    </span> Nevada
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Carson City
                                </p>
                            </a>
                        </li>

                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="1">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        02
                                    </span> New Hampshire
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Concord
                                </p>
                            </a>
                        </li>

                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="2">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        03
                                    </span> New York
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Albany
                                </p>
                            </a>
                        </li>

                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="3">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        04
                                    </span> Oklahoma
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Oklahoma City
                                </p>
                            </a>
                        </li>

                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="4">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        05
                                    </span> North Carolina
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Raleigh
                                </p>
                            </a>
                        </li>

                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="5">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        06
                                    </span> Utah
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Salt Lake City
                                </p>
                            </a>
                        </li>

                        <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="6">
                            <a href="">
                                <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                    <span>
                                        07
                                    </span> Missouri
                                </p>

                                <p className="c-mouse-vertical-carousel__title u-a5">
                                    Jefferson City
                                </p>
                            </a>
                        </li>
                    </ul>

                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c1.jpg')` }}></i>
                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c2.jpg')` }}></i>
                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c3.jpg')` }}></i>
                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c4.jpg')` }}></i>
                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c5.jpg')` }}></i>
                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c6.jpg')` }}></i>
                    <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url('/c1.jpg')` }}></i>
                    <i className="c-gradient-overlay"></i>
                </div>
            </header>
        </div>
    );
};

export default InsideCarousel;