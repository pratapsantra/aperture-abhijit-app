'use client';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import './OurTeam.css';


interface Activity {
    id: number;
    membername: string;
    memberrole: string;
    imageUrl: string;
}
const teamMembersArray: Activity[] = [
    {
        id: 1,
        membername: 'Abhijit Saha',
        memberrole: "Founder",
        imageUrl: "/ot-7.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        membername: 'Joy Saha',
        memberrole: "Video Grapher",
        imageUrl: "/ot-1.jpg",
    },
    {
        id: 3,
        membername: 'Aloke Roy',
        memberrole: "Light Man",
        imageUrl: "/ot-2.jpg",
    },
    {
        id: 4,
        membername: 'Julia Gimmel',
        memberrole: "Video Editor",
        imageUrl: "/ot-3.jpg",
    },
    {
        id: 5,
        membername: 'Anirban Dutta',
        memberrole: "Planner",
        imageUrl: "/ot-4.jpg",
    },
    {
        id: 6,
        membername: 'James Wilson',
        memberrole: "Product Manager",
        imageUrl: "/ot-5.jpg",
    },
    

];

const OurTeamCard: React.FC = () => {

    const mainContainerRef = useRef<HTMLDivElement>(null);

    const [currentImageNumber, setCurrentImageNumber] = useState<number>(0)

    useEffect(() => {
        const mainContainer = mainContainerRef.current;
        if (!mainContainer) return;

        const cards = document.querySelectorAll(".card");
        const dots = document.querySelectorAll(".dot");
        const memberName = document.querySelector(".member-name") as HTMLElement | null;
        const memberRole = document.querySelector(".member-role") as HTMLElement | null;
        const leftArrow = document.querySelector(".nav-arrow.left");
        const rightArrow = document.querySelector(".nav-arrow.right");
        let currentIndex = 0;
        let isAnimating = false;
        let autoInterval: NodeJS.Timeout | null = null;

        function updateCarousel(newIndex: number) {
            if (isAnimating) return;
            isAnimating = true;

            currentIndex = (newIndex + cards.length) % cards.length;
            setCurrentImageNumber(currentIndex)
            cards.forEach((card, i) => {
                const offset = (i - currentIndex + cards.length) % cards.length;

                card.classList.remove(
                    "center",
                    "left-1",
                    "left-2",
                    "right-1",
                    "right-2",
                    "hidden"
                );

                if (offset === 0) {
                    card.classList.add("center");
                } else if (offset === 1) {
                    card.classList.add("right-1");
                } else if (offset === 2) {
                    card.classList.add("right-2");
                } else if (offset === cards.length - 1) {
                    card.classList.add("left-1");
                } else if (offset === cards.length - 2) {
                    card.classList.add("left-2");
                } else {
                    card.classList.add("hidden");
                }
            });

            dots?.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);

            });

            if (memberName && memberRole) {
                memberName.style.opacity = "0";
                memberRole.style.opacity = "0";

                setTimeout(() => {
                    memberName.textContent = teamMembersArray[currentIndex].membername;
                    memberRole.textContent = teamMembersArray[currentIndex].memberrole;
                    memberName.style.opacity = "1";
                    memberRole.style.opacity = "1";
                }, 300);

                setTimeout(() => {
                    isAnimating = false;
                }, 800);

            }
        }

        function startAutoSlide() {
            stopAutoSlide(); // Ensure no duplicates
            autoInterval = setInterval(() => {
                updateCarousel(currentIndex + 1);
            }, 5000);
        }

        function stopAutoSlide() {
            if (autoInterval) clearInterval(autoInterval);
        }
        function setupListeners() {

            leftArrow?.addEventListener("click", () => {
                updateCarousel(currentIndex - 1);
            });

            rightArrow?.addEventListener("click", () => {
                updateCarousel(currentIndex + 1);
            });

            dots.forEach((dot, i) => {
                dot.addEventListener("click", () => {
                    updateCarousel(i);
                });
            });

            cards.forEach((card, i) => {
                card.addEventListener("click", () => {
                    updateCarousel(i);
                });
            });

            document.addEventListener("keydown", (e) => {
                if (e.key === "ArrowLeft") {
                    updateCarousel(currentIndex - 1);
                } else if (e.key === "ArrowRight") {
                    updateCarousel(currentIndex + 1);
                }
            });

            document.addEventListener("touchstart", (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });

            document.addEventListener("touchend", (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });

            // Mouse hover pause/resume
            mainContainer?.addEventListener("mouseenter", stopAutoSlide);
            mainContainer?.addEventListener("mouseleave", startAutoSlide);
        }

        let touchStartX = 0;
        let touchEndX = 0;

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    updateCarousel(currentIndex + 1);
                } else {
                    updateCarousel(currentIndex - 1);
                }
            }
        }


        updateCarousel(0);
        setupListeners();

        // ✅ Start autoplay only when visible on screen
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startAutoSlide();
                    } else {
                        stopAutoSlide();
                    }
                });
            },
            { threshold: 0.5 } // trigger when at least 50% visible
        );

        observer.observe(mainContainer);

        return () => {
            stopAutoSlide();
             observer.disconnect();
            mainContainer.removeEventListener("mouseenter", stopAutoSlide);
            mainContainer.removeEventListener("mouseleave", startAutoSlide);
            // Cleanup logic if necessary
        };
    }, []);


    return (
        <>
            {/* <h1 className="about-title">OUR TEAM</h1> */}

            <div className="our-team carousel-container" ref={mainContainerRef}>
                <button className="nav-arrow left">‹</button>
                <div className="carousel-track">
                    {teamMembersArray.map((member, index) => (
                        <div className="card" data-index={index} key={index} >
                            <Image
                                src={member.imageUrl}
                                alt={`Team Member ${index + 1}`}
                                width={300}
                                height={200}
                                style={{ objectFit: 'cover' }}
                            />

                            {currentImageNumber === (member.id - 1) ?
                                <div className="member-info">
                                    <h2 className="member-name">{member.membername}</h2>
                                    <p className="member-role">{member.memberrole}</p>
                                </div>
                                : null}
                        </div>
                    ))}

                </div>
                <button className="nav-arrow right">›</button>
            </div>

            <div className="dots">
                {teamMembersArray.map((_, index) => (
                    <div
                        className={`dot ${index === 0 ? 'active' : ''}`}
                        data-index={index}
                        key={index}
                    />
                ))}
            </div>
        </>

    );
};

export default OurTeamCard;
