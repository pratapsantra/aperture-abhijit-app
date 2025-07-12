'use client';
import React, { useEffect, useRef, useState } from 'react';
import './insideCarousel.css';
import gsap from 'gsap'; // Import GSAP



// Type declaration for the VerticalMouseDrivenCarousel class
class VerticalMouseDrivenCarousel {
    posY: number;
    listItems: number;
    defaults: { [key: string]: string };
    bgImgIndex: number;
    autoChangeInterval: number | undefined;

    constructor(options = {}) {
        const _defaults = {
            carousel: ".js-carousel",
            bgImg: ".js-carousel-bg-img",
            list: ".js-carousel-list",
            listItem: ".js-carousel-list-item"
        };

        this.posY = 0;
        this.defaults = { ..._defaults, ...options };

        // Initialize to middle item
        // this.bgImgIndex = Math.floor(this.getListItems().length / 2);
        this.bgImgIndex = 0;

        this.initCursor();
        this.init();
        this.bgImgController();
        this.startAutoChange();
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
        const listHeight = (this.getList() as HTMLElement).clientHeight;
        const carouselHeight = (this.getCarousel() as HTMLElement).clientHeight;
        const offset = (-carouselHeight / 2 + this.getListItems()[this.bgImgIndex].clientHeight / 2);


        gsap.set(this.getList(), {
            y: offset
        });

        const bgImgs = this.getBgImgs();

        gsap.set(bgImgs, {
            autoAlpha: 0,
            // scale: 1.05
        });

        this.listItems = this.getListItems().length - 1;

        // Set middle image visible
        gsap.set(bgImgs[this.bgImgIndex], {
            autoAlpha: 1,
            // scale: 1
        });
        bgImgs[this.bgImgIndex].classList.add("is-visible");

        // Set active class to middle item
        this.getListItems()[this.bgImgIndex].classList.add("active");

        // Set opacity of neighbors
        this.listOpacityController(this.bgImgIndex);


    }

    initCursor() {
        const listHeight = (this.getList() as HTMLElement).clientHeight;
        const carouselHeight = (this.getCarousel() as HTMLElement).clientHeight;

        this.getCarousel()!.addEventListener(
            "mousemove",
            (event: MouseEvent) => {
                this.posY = event.pageY - (this.getCarousel() as HTMLElement).offsetTop;
                let offset = (-this.posY / carouselHeight) * listHeight;
                offset = Math.min(0, offset); // prevent going above the top

                gsap.to(this.getList(), 0.3, {
                    y: offset,
                    ease: "power4.out",
                    duration: 0.6
                });
            },
            false
        );
    }

    /* bgImgController() {
        for (const link of this.getListItems()) {
            link.addEventListener("mouseenter", ev => {
                this.stopAutoChange();
                console.log("mouseenter----------------", ev)
                const currentId = (ev.currentTarget as HTMLElement).dataset.itemId;
                const index = parseInt(currentId as string);
                this.listOpacityController(index);

                gsap.to(ev.currentTarget, 0.3, {
                    autoAlpha: 1,
                    ease: "power3.out",
                    duration: 1,
                    // scale: 1.05
                });

                gsap.to(".is-visible", 0.2, {
                    autoAlpha: 0,
                    // scale: 1.05,
                    ease: "power2.in",
                    duration: 1,
                });

                const bgImgs = this.getBgImgs();

                if (!bgImgs[index].classList.contains("is-visible")) {
                    bgImgs[index].classList.add("is-visible");
                }

                gsap.to(bgImgs[index], 0.6, {
                    autoAlpha: 1,
                    scale: 1,
                    ease: "power4.out",
                    duration: 1
                });

                // Update active state
                this.getListItems().forEach(item => item.classList.remove("active"));
                (ev.currentTarget as HTMLElement).classList.add("active");
                this.bgImgIndex = index;
                this.scrollToActiveItem(this.bgImgIndex);
            });

            link.addEventListener("mouseleave", () => {
                this.startAutoChange();
            });
        }
    } */

    bgImgController() {
        for (const link of this.getListItems()) {
            const handleInteraction = (ev: Event) => {
                this.stopAutoChange();

                const currentId = (ev.currentTarget as HTMLElement).dataset.itemId;
                const index = parseInt(currentId as string);

                this.listOpacityController(index);

                gsap.to(ev.currentTarget, {
                    autoAlpha: 1,
                    ease: "power3.out",
                    duration: 1,
                });

                gsap.to(".is-visible", {
                    autoAlpha: 0,
                    ease: "power2.in",
                    duration: 1,
                });

                const bgImgs = this.getBgImgs();

                if (!bgImgs[index].classList.contains("is-visible")) {
                    bgImgs[index].classList.add("is-visible");
                }

                gsap.to(bgImgs[index], {
                    autoAlpha: 1,
                    scale: 1,
                    ease: "power4.out",
                    duration: 1
                });

                this.getListItems().forEach(item => item.classList.remove("active"));
                (ev.currentTarget as HTMLElement).classList.add("active");
                this.bgImgIndex = index;
                this.scrollToActiveItem(this.bgImgIndex);
            };

            // Desktop
            link.addEventListener("mouseenter", handleInteraction);
            link.addEventListener("mouseleave", () => {
                this.startAutoChange();
            });

            // Mobile
            link.addEventListener("touchstart", handleInteraction);
            link.addEventListener("touchend", () => {
                this.startAutoChange();
            });

            // Optional: allow click for better accessibility
            link.addEventListener("click", (e) => {
                e.preventDefault();
                handleInteraction(e);
            });
        }
    }

    listOpacityController(id: number | string) {
        id = parseInt(id as string);
        const aboveCurrent = this.listItems - id;
        const belowCurrent = id;

        const items = this.getListItems();

        // Reset all first
        items.forEach((item) => {
            gsap.to(item, {
                autoAlpha: 1,
                x: 0,
                ease: "power3.out",
                duration: 0.3
            });
        });

        // For items after the current one
        if (aboveCurrent > 0) {
            for (let i = 1; i <= aboveCurrent; i++) {
                const opacity = 0.5 / i;
                const offset = 5 * i;
                if (items[id + i]) {
                    gsap.to(items[id + i], {
                        autoAlpha: opacity,
                        x: offset,
                        ease: "power3.out",
                        duration: 0.4
                    });
                }
            }
        }

        // For items before the current one
        if (belowCurrent > 0) {
            for (let i = 1; i <= belowCurrent; i++) {
                const opacity = 0.5 / i;
                const offset = 5 * i;
                if (items[id - i]) {
                    gsap.to(items[id - i], {
                        autoAlpha: opacity,
                        x: offset,
                        ease: "power3.out",
                        duration: 0.4
                    });
                }
            }
        }
    }

    scrollToActiveItem(index: number) {
        const list = this.getList() as HTMLElement;
        const listItems = this.getListItems();
        const activeItem = listItems[index] as HTMLElement;
        const carousel = this.getCarousel() as HTMLElement;

        if (!list || !activeItem || !carousel) return;

        const listRect = list.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const offset = itemRect.top - listRect.top;

        const currentScroll = list.scrollTop;
        const targetScroll = currentScroll + offset - carousel.clientHeight / 2 + activeItem.clientHeight / 2;

        gsap.to(list, {
            scrollTop: targetScroll - 50,
            duration: 0.6,
            ease: "power3.out"
        });
    }

    startAutoChange() {
        // setInterval(() => {
        this.autoChangeInterval = window.setInterval(() => {
            const bgImgs = this.getBgImgs();
            const listItems = this.getListItems();

            // Fade out current image
            gsap.to(bgImgs[this.bgImgIndex], 1, {
                autoAlpha: 0,
                // scale: 1.05,
                ease: "power4.in"
            });
            bgImgs[this.bgImgIndex].classList.remove("is-visible");
            listItems[this.bgImgIndex].classList.remove("active");

            // Update index
            this.bgImgIndex = (this.bgImgIndex + 1) % bgImgs.length;

            // Activate new item
            bgImgs[this.bgImgIndex].classList.add("is-visible");
            listItems[this.bgImgIndex].classList.add("active");
            this.scrollToActiveItem(this.bgImgIndex);

            gsap.to(bgImgs[this.bgImgIndex], 1, {
                autoAlpha: 1,
                scale: 1,
                ease: "power4.in"
            });

            // Update opacity of list
            this.listOpacityController(this.bgImgIndex);
        }, 4000);
    }

    stopAutoChange() {
        if (this.autoChangeInterval !== undefined) {
            clearInterval(this.autoChangeInterval);
            this.autoChangeInterval = undefined;
        }
    }
}

interface CarouselProps {
    data: any[]; // ideally, replace `any` with the correct type of each carousel item
}

// export default function InsideCarousel() {
const InsideCarousel: React.FC<CarouselProps> = ({ data }) => {

    const [carouselData, setCarouselData] = useState(data);

    useEffect(() => {

        const carouselInstance = new VerticalMouseDrivenCarousel();
        // Cleanup
        return () => {

        };
    }, []);

    return (
        <div className="inside-carousel-container">
            <div className="c-header c-header--archive c-header--project-list">
                <div className="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
                    <ul className="c-mouse-vertical-carousel__list js-carousel-list">
                        {
                            carouselData.map((item, index) => (
                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={index} key={item.id}>
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                            <span>
                                                {item.listNumber}
                                            </span> {item.listHeading}
                                        </p>

                                        <p className="c-mouse-vertical-carousel__title u-a5">
                                            {item.title}
                                        </p>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    {
                        carouselData.map((item, index) => (
                            <div className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${item.imageUrl})` }} key={item.id}></div>
                        ))

                    }
                    <div className="c-gradient-overlay"></div>
                </div >
            </div >
        </div >
    );
};

export default InsideCarousel;