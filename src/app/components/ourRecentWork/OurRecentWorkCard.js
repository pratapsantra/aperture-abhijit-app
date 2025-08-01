'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import './RecentWork.css'

const carouselItems = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'Exploring the neon-drenched landscapes of a digital frontier. AI-driven procedural generation creates infinite cityscapes.',
        phase: 'PHASE II',
        progress: 65,
        image: '/orw-1.jpg',
        tech: ['Neural Networks', 'Voxel Systems', 'Quantum Rendering'],
        color: 'text-cyan-400',
    },
    {
        id: 2,
        title: 'Neuro-Link UI',
        description: 'Designing intuitive interfaces for brain-computer interaction. Holographic elements respond to neural patterns.',
        phase: 'PHASE I',
        progress: 42,
        image: '/orw-2.jpg',
        tech: ['BCI Framework', 'Gesture Recognition', 'Thought Mapping'],
        color: 'text-blue-400',
    },
    {
        id: 3,
        title: 'Quantum Entanglement',
        description: 'Visualizing complex quantum states through advanced rendering techniques. Real-time simulation of parallel realities.',
        phase: 'PHASE III',
        progress: 89,
        image: '/orw-3.jpg',
        tech: ['Q-Bit Architecture', 'Multiverse Modeling', 'Probability Fields'],
        color: 'text-purple-400',
    },
    {
        id: 4,
        title: 'Project Chimera',
        description: 'Developing next-gen propulsion systems for deep space exploration. Fusion drive concepts push beyond known physics.',
        phase: 'PHASE II',
        progress: 51,
        image: '/orw-4.jpg',
        tech: ['Dark Energy Capture', 'Plasma Containment', 'Gravitational Lensing'],
        color: 'text-amber-400',
    },
    {
        id: 5,
        title: 'Aether Network',
        description: 'Building a decentralized data network leveraging quantum blockchain and next-gen P2P technology.',
        phase: 'PHASE III',
        progress: 78,
        image: '/orw-5.jpg',
        tech: ['Quantum Encryption', 'Self-Healing Nodes', 'Data Holograms'],
        color: 'text-emerald-400',
    },
    {
        id: 6,
        title: 'Project Alpha',
        description: 'Exploring the neon-drenched landscapes of a digital frontier. AI-driven procedural generation creates infinite cityscapes.',
        phase: 'PHASE II',
        progress: 65,
        image: '/orw-6.jpg',
        tech: ['Neural Networks', 'Voxel Systems', 'Quantum Rendering'],
        color: 'text-cyan-400',
    },
    {
        id: 7,
        title: 'Neuro-Link UI',
        description: 'Designing intuitive interfaces for brain-computer interaction. Holographic elements respond to neural patterns.',
        phase: 'PHASE I',
        progress: 42,
        image: '/orw-7.jpg',
        tech: ['BCI Framework', 'Gesture Recognition', 'Thought Mapping'],
        color: 'text-blue-400',
    },
    {
        id: 8,
        title: 'Quantum Entanglement',
        description: 'Visualizing complex quantum states through advanced rendering techniques. Real-time simulation of parallel realities.',
        phase: 'PHASE III',
        progress: 89,
        image: '/orw-8.jpg',
        tech: ['Q-Bit Architecture', 'Multiverse Modeling', 'Probability Fields'],
        color: 'text-purple-400',
    },
];

import { Slide, AttentionSeeker, Zoom, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";

export default function OurRecentWorkCard() {

    const mainContainerRef = useRef(null);

    useEffect(() => {

        const mainContainer = mainContainerRef.current;
        if (!mainContainer) return;

        const track = mainContainer?.querySelector(".carousel-track");
        if (!track) return;

        // const track = document.querySelector(".carousel-track");
        const cards = Array.from(track.children);
        const nextButton = document.querySelector(".carousel-button.next");
        const prevButton = document.querySelector(".carousel-button.prev");
        const container = document.querySelector(".carousel-container");
        const indicators = document.querySelectorAll(".indicator");

        let currentIndex = 0;
        let cardWidth = cards[0].offsetWidth;
        let cardMargin = parseInt(window.getComputedStyle(cards[0]).marginRight) * 2;

        // Debounce function
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        // Initialize carousel
        function initializeCarousel() {
            cardWidth = cards[0].offsetWidth;
            cardMargin = parseInt(window.getComputedStyle(cards[0]).marginRight) * 2;

            // Center the initial card
            const initialOffset = container.offsetWidth / 2 - cardWidth / 2;
            track.style.transform = `translateX(${initialOffset}px)`;
            updateCarousel();
        }

        // Update carousel state
        function updateCarousel() {
            // Update card classes
            cards.forEach((card, index) => {
                card.classList.remove(
                    "is-active",
                    "is-prev",
                    "is-next",
                    "is-far-prev",
                    "is-far-next"
                );
                if (index === currentIndex) {
                    card.classList.add("is-active");
                } else if (index === currentIndex - 1) {
                    card.classList.add("is-prev");
                } else if (index === currentIndex + 1) {
                    card.classList.add("is-next");
                } else if (index < currentIndex - 1) {
                    card.classList.add("is-far-prev");
                } else if (index > currentIndex + 1) {
                    card.classList.add("is-far-next");
                }
            });

            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("active", index === currentIndex);
            });
        }

        // Move to a specific slide
        function moveToSlide(targetIndex) {
            if (targetIndex < 0 || targetIndex >= cards.length) {
                return; // Prevent moving out of bounds
            }

            const amountToMove = targetIndex * (cardWidth + cardMargin);
            const containerCenter = container.offsetWidth / 2;
            const cardCenter = cardWidth / 2;
            const targetTranslateX = containerCenter - cardCenter - amountToMove;

            track.style.transform = `translateX(${targetTranslateX - 25}px)`;
            currentIndex = targetIndex;
            updateCarousel();

            // Add a subtle flash effect to simulate a hi-tech transition
            const flashEffect = document.createElement("div");
            flashEffect.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(56, 189, 248, 0.1);
                z-index: 30;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s ease;
            `;
            container.appendChild(flashEffect);

            setTimeout(() => {
                flashEffect.style.opacity = "0.3";
                setTimeout(() => {
                    flashEffect.style.opacity = "0";
                    setTimeout(() => {
                        container.removeChild(flashEffect);
                    }, 200);
                }, 100);
            }, 10);
        }

        // Event Listeners
        nextButton?.addEventListener("click", () => {
            const nextIndex = currentIndex + 1;
            console.log("nextButton.addEventListener", nextIndex)
            if (nextIndex < cards.length) {
                moveToSlide(nextIndex);
            }
        });

        prevButton?.addEventListener("click", () => {
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                moveToSlide(prevIndex);
            }
        });

        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                moveToSlide(index);
            });
        });

        // Swipe Functionality
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;

        track.addEventListener("mousedown", dragStart);
        track.addEventListener("touchstart", dragStart, { passive: true });

        track.addEventListener("mousemove", drag);
        track.addEventListener("touchmove", drag, { passive: true });

        track.addEventListener("mouseup", dragEnd);
        track.addEventListener("mouseleave", dragEnd);
        track.addEventListener("touchend", dragEnd);

        function dragStart(event) {
            isDragging = true;
            startPos = getPositionX(event);

            // Get current transform value
            const transformMatrix = window
                .getComputedStyle(track)
                .getPropertyValue("transform");
            if (transformMatrix !== "none") {
                currentTranslate = parseInt(transformMatrix.split(",")[4]);
            } else {
                currentTranslate = 0;
            }
            prevTranslate = currentTranslate;
            track.style.transition = "none";
            animationID = requestAnimationFrame(animation);
            track.style.cursor = "grabbing";
        }

        function drag(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                const moveX = currentPosition - startPos;
                currentTranslate = prevTranslate + moveX;
            }
        }

        function animation() {
            if (!isDragging) return;
            track.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(animation);
        }

        function dragEnd() {
            if (!isDragging) return;

            cancelAnimationFrame(animationID);
            isDragging = false;
            const movedBy = currentTranslate - prevTranslate;
            track.style.transition = "transform 0.75s cubic-bezier(0.21, 0.61, 0.35, 1)";
            track.style.cursor = "grab";

            // Determine whether to snap to next/prev slide
            const threshold = cardWidth / 3.5; // Less distance needed to trigger slide change

            if (movedBy < -threshold && currentIndex < cards.length - 1) {
                moveToSlide(currentIndex + 1);
            } else if (movedBy > threshold && currentIndex > 0) {
                moveToSlide(currentIndex - 1);
            } else {
                moveToSlide(currentIndex); // Snap back
            }
        }

        function getPositionX(event) {
            return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        }

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                if (currentIndex < cards.length - 1) {
                    moveToSlide(currentIndex + 1);
                }
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                if (currentIndex > 0) {
                    moveToSlide(currentIndex - 1);
                }
            }
        });

        // Window resize handler
        window.addEventListener(
            "resize",
            debounce(() => {
                initializeCarousel();
                moveToSlide(currentIndex);
            }, 250)
        );

        // Add automatic card hover effects
        cards.forEach((card) => {
            // Create glitch effect on hover
            card.addEventListener("mouseenter", function () {
                if (!card.classList.contains("is-active")) return;

                // Create glitch animation
                const glitchEffect = () => {
                    if (!card.matches(":hover") || !card.classList.contains("is-active")) return;

                    // Random offset
                    const xOffset = Math.random() * 4 - 2;
                    const yOffset = Math.random() * 4 - 2;

                    card.style.transform = `scale(1) translate(${xOffset}px, ${yOffset}px)`;

                    // Random color channel shift
                    const r = Math.random() * 10 - 5;
                    const g = Math.random() * 10 - 5;
                    const b = Math.random() * 10 - 5;

                    card.style.boxShadow = `
                        ${r}px 0 0 rgba(255, 0, 0, 0.2),
                        ${g}px 0 0 rgba(0, 255, 0, 0.2),
                        ${b}px 0 0 rgba(0, 0, 255, 0.2),
                        0 15px 25px rgba(0, 0, 0, 0.5),
                        0 0 40px var(--glow-primary)
                    `;

                    // Reset after short time
                    setTimeout(() => {
                        if (!card.matches(":hover") || !card.classList.contains("is-active"))
                            return;
                        // card.style.transform = 'scale(1)';
                        card.style.boxShadow =
                            "0 15px 25px rgba(0, 0, 0, 0.5), 0 0 40px var(--glow-primary)";
                    }, 50);

                    // Continue effect randomly while hovering
                    if (Math.random() > 0.7) {
                        setTimeout(glitchEffect, Math.random() * 1000 + 500);
                    }
                };

                // Start glitch effect chain
                setTimeout(glitchEffect, 500);
            });

            // Reset styles on mouse leave
            card.addEventListener("mouseleave", function () {
                if (card.classList.contains("is-active")) {
                    card.style.boxShadow =
                        "0 15px 25px rgba(0, 0, 0, 0.5), 0 0 40px var(--glow-primary)";
                }
            });
        });

        // Add HUD scanning animation to active card
        function animateActiveCard() {
            const activeCard = document.querySelector(".carousel-card.is-active");
            if (!activeCard) return;

            // Add scanning line effect
            const scanLine = document.createElement("div");
            scanLine.style.cssText = `
                position: absolute;
                left: 0;
                top: 0;
                height: 2px;
                width: 100%;
                background: linear-gradient(90deg, 
                    transparent, 
                    rgba(56, 189, 248, 0.8), 
                    rgba(56, 189, 248, 0.8), 
                    transparent
                );
                opacity: 0.7;
                z-index: 10;
                pointer-events: none;
                animation: scanAnimation 2s ease-in-out;
            `;

            // Define animation
            const style = document.createElement("style");
            style.textContent = `
                @keyframes scanAnimation {
                    0% { top: 0; }
                    75% { top: calc(100% - 2px); }
                    100% { top: calc(100% - 2px); opacity: 0; }
                }
            `;
            document.head.appendChild(style);

            // Add to active card and remove when animation completes
            const imageContainer = activeCard.querySelector(".card-image-container");
            imageContainer?.appendChild(scanLine);

            setTimeout(() => {
                imageContainer?.removeChild(scanLine);
            }, 2000);
        }

        // Add data counter animation effect
        function animateDataCounter() {
            const activeCard = document.querySelector(".carousel-card.is-active");
            if (!activeCard) return;

            const statsElement = activeCard.querySelector(".card-stats");
            const completionText = statsElement?.lastElementChild?.textContent;
            const percentageMatch = completionText?.match(/(\d+)%/);

            if (percentageMatch) {
                const targetPercentage = parseInt(percentageMatch[1]);
                let currentPercentage = 0;

                statsElement.lastElementChild.textContent = "0% COMPLETE";

                const interval = setInterval(() => {
                    currentPercentage += Math.ceil(targetPercentage / 15);

                    if (currentPercentage >= targetPercentage) {
                        currentPercentage = targetPercentage;
                        clearInterval(interval);
                    }

                    statsElement.lastElementChild.textContent = `${currentPercentage}% COMPLETE`;
                }, 50);

                // Also animate progress bar
                const progressBar = activeCard.querySelector(".progress-value");
                progressBar.style.width = "0%";

                setTimeout(() => {
                    progressBar.style.transition =
                        "width 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
                    progressBar.style.width = `${targetPercentage}%`;
                }, 100);
            }
        }

        // Update active card when changed
        function handleCardActivation() {
            animateActiveCard();
            animateDataCounter();

            // Reset progress bar transition after animation completes
            setTimeout(() => {
                const progressBars = document.querySelectorAll(".progress-value");
                progressBars.forEach((bar) => {
                    bar.style.transition = "none";
                });
            }, 1000);
        }

        // Add subtle floating animation to all cards
        function addFloatingEffect() {
            cards.forEach((card, index) => {
                const delay = index * 0.2;
                card.style.animation = `floating 4s ease-in-out ${delay}s infinite`;
            });

            const floatingKeyframes = `
                @keyframes floating {
                    0% { transform: translateY(0px) rotate3d(0, 1, 0, 0deg); }
                    50% { transform: translateY(-10px) rotate3d(0, 1, 0, 1deg); }
                    100% { transform: translateY(0px) rotate3d(0, 1, 0, 0deg); }
                }
            `;

            const style = document.createElement("style");
            style.textContent = floatingKeyframes;
            document.head.appendChild(style);
        }

        // Add observer to detect active card changes
        let previousActive = null;

        // Create a mutation observer to watch for class changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const target = mutation.target;
                    if (target.classList.contains("is-active") && target !== previousActive) {
                        previousActive = target;
                        handleCardActivation();
                    }
                }
            });
        });

        // Start observing all cards for class changes
        cards.forEach((card) => {
            observer.observe(card, { attributes: true });
        });

        // Add keyboard navigation animation feedback
        document.addEventListener("keydown", (e) => {
            if (
                e.key === "ArrowRight" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowDown"
            ) {
                // Create a brief flash effect on button
                const button =
                    e.key === "ArrowRight" || e.key === "ArrowDown" ? nextButton : prevButton;

                button.style.transform = "translateY(-50%) scale(1.2)";
                button.style.boxShadow = "0 0 30px var(--glow-primary)";

                setTimeout(() => {
                    button.style.transform = "translateY(-50%) scale(1)";
                    button.style.boxShadow = "";
                }, 200);
            }
        });

        // Add initialization for indicator animations
        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", function () {
                // Add pulse effect when clicked
                this.style.transform = "scale(1.3)";
                this.style.boxShadow = "0 0 15px #38bdf8";

                setTimeout(() => {
                    this.style.transform = "";
                    this.style.boxShadow = "";
                }, 300);
            });
        });

        // Initialize everything
        // window.onload = () => {

        initializeCarousel();

        // Set initial active state
        moveToSlide(0);

        // Start animations with slight delay
        setTimeout(() => {
            // addFloatingEffect();
            handleCardActivation();

            // Add occasional ambient scanning effect
            setInterval(() => {
                if (Math.random() > 0.5) {
                    animateActiveCard();
                }
            }, 8000);
        }, 500);
        // };



        let autoMove;
        let autoStartTimeout;
        let nextOnwards = true;

        // Start auto-move after 3 seconds
        function startAutoMove() {
            autoMove = setInterval(() => {
                const totalItems = carouselItems.length;
                const nextIndex = currentIndex + 1;

                if (nextIndex < totalItems && nextOnwards) {
                    if (nextIndex === totalItems - 1) {
                        nextOnwards = false;
                    }
                    moveToSlide(nextIndex);
                } else {
                    const prevIndex = currentIndex - 1;
                    if (prevIndex >= 0) {
                        if (prevIndex === 0) {
                            nextOnwards = true;
                        }
                        moveToSlide(prevIndex);
                    }
                }
            }, 3000);
        }

        function stopAutoMove() {
            clearInterval(autoMove);
        }

        autoStartTimeout = setTimeout(() => {
            console.log("Auto start carousel");
            startAutoMove();
        }, 3000);

        // Pause on hover, resume on leave
        const carouselCards = document.querySelectorAll('.carousel-card'); // Adjust selector as needed

        carouselCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // console.log("mouseenter------");
                clearTimeout(autoStartTimeout);
                stopAutoMove();
            });

            card.addEventListener('mouseleave', () => {
                // console.log("mouseleave------");
                startAutoMove();
            });
        });

        return () => {
            // Cleanup logic if necessary
        };
    }, []);



    return (
        <>
            <Zoom>
                <div className="carousel-container" ref={mainContainerRef} >
                    <div className="carousel-track">
                        {carouselItems.map((item, index) => (
                            <div className="carousel-card" key={index}>
                                <div className="card-image-container">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={320}
                                        height={200}
                                        className="card-image"
                                    />
                                </div>

                                <div className="card-content">
                                    <h3 className={`card-title text-xl font-bold ${item.color}`} data-text={item.title}>
                                        {item.title}
                                    </h3>
                                    <p className="card-description">{item.description}</p>
                                    <div className="card-progress">
                                        <div className="progress-value" style={{ width: `${item.progress}%` }}></div>
                                    </div>
                                    <div className="card-stats">
                                        <span>{item.phase}</span>
                                        <span>{item.progress}% COMPLETE</span>
                                    </div>
                                </div>

                                <div className="tech-details">
                                    {item.tech.map((techItem, techIndex) => (
                                        <div className="tech-tag" key={techIndex}>
                                            {techItem}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-button prev">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="carousel-button next">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <div className="carousel-indicators">
                        {carouselItems.map((item, index) => (
                            <div className="indicator active" key={index}></div>
                        ))}
                    </div>
                </div>
            </Zoom>
        </>
    );

};
