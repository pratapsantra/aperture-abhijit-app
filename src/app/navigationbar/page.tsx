'use client';
import React, { useEffect, useRef, useState } from "react";
import './navigation.css'
import Image from 'next/image';
import companyLogo from '../assets/images/company-logo.jpg'
// import companyLogo from '../../../public/company-logo.svg'

export const Navbar: React.FC = () => {

    const navbarRef = useRef<HTMLDivElement>(null);
    const navToggleRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const moonIconRef = useRef<SVGSVGElement>(null);
    const sunIconRef = useRef<SVGSVGElement>(null);
    const [isDark, setIsDark] = useState(true);

    // Toggle nav menu
    useEffect(() => {
        const navbar = navbarRef.current;
        const toggle = navToggleRef.current;

        const handleToggle = () => {
            navbar?.classList.toggle('nav-active');
            document.body.style.overflow = navbar?.classList.contains('nav-active') ? 'hidden' : '';
        };

        toggle?.addEventListener('click', handleToggle);

        const handleOutsideClick = (e: MouseEvent) => {
            if (
                navbar &&
                !navbar.contains(e.target as Node) &&
                navbar.classList.contains('nav-active')
            ) {
                navbar.classList.remove('nav-active');
                document.body.style.overflow = '';
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            toggle?.removeEventListener('click', handleToggle);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Dropdown logic and theme switching
    useEffect(() => {
        const dropdowns = document.querySelectorAll('.has-dropdown');

        dropdowns.forEach((dropdown) => {
            const link = dropdown.querySelector('.nav-link');

            link?.addEventListener('click', (e) => {
                if (window.innerWidth <= 968) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');

                    dropdowns.forEach((other) => {
                        if (other !== dropdown && other.classList.contains('active')) {
                            other.classList.remove('active');
                            const otherDropdown = other.querySelector('.dropdown') as HTMLElement;
                            if (otherDropdown) {
                                otherDropdown.style.animation = 'slideUp 0.3s forwards';
                                setTimeout(() => (otherDropdown.style.animation = ''), 300);
                            }
                        }
                    });

                    const currentDropdown = dropdown.querySelector('.dropdown') as HTMLElement;
                    if (currentDropdown) {
                        if (dropdown.classList.contains('active')) {
                            currentDropdown.style.animation = 'slideDown 0.3s forwards';
                        } else {
                            currentDropdown.style.animation = 'slideUp 0.3s forwards';
                            setTimeout(() => (currentDropdown.style.animation = ''), 300);
                        }
                    }
                }
            });
        });

        const handleResize = () => {
            if (window.innerWidth > 968) {
                navbarRef.current?.classList.remove('nav-active');
                dropdowns.forEach((d) => d.classList.remove('active'));
                document.body.style.overflow = '';
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Theme toggle
    const handleThemeToggle = () => {
        const newDark = !isDark;
        setIsDark(newDark);

        if (newDark) {
            console.log("@1")
            transformToTheme(
                '#0a0a12',
                '#ffffff',
                'rgba(16, 16, 26, 0.7)',
                'rgba(20, 20, 35, 0.8)'
            );
            moonIconRef.current?.classList.remove('hidden');
            sunIconRef.current?.classList.add('hidden');
        } else {
            console.log("@12")
            transformToTheme(
                '#ffffff',
                '#0a0a12',
                'rgba(255, 255, 255, 0.8)',
                'rgba(240, 240, 255, 0.9)'
            );
            moonIconRef.current?.classList.add('hidden');
            sunIconRef.current?.classList.remove('hidden');
        }
    };

    const transformToTheme = (
        bgColor: string,
        textColor: string,
        navBg: string,
        dropdownBg: string
    ) => {
        console.log("@123")
        const root = document.documentElement;
        root.style.setProperty('--bg-color', bgColor);
        root.style.setProperty('--text-color', textColor);
        root.style.setProperty('--nav-bg', navBg);
        root.style.setProperty('--dropdown-bg', dropdownBg);
        root.style.setProperty(
            '--gradient-bg',
            isDark
                ? 'linear-gradient(135deg, #0a0a12, #151530)'
                : 'linear-gradient(135deg, #ffffff, #f0f4ff)'
        );
        root.style.setProperty(
            '--border-color',
            isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
        );
        root.style.setProperty(
            '--text-description',
            isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
        );

        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 1000);
    };

    return (
        <>
            <header className="header">
                <nav className="navbar" ref={navbarRef}>
                    <div className="nav-brand">
                        <a href="#" className="logo">
                            <Image
                                src={companyLogo}
                                alt="Description of my image"
                                width={60}
                                height={60}
                            />
                        </a>
                    </div>

                    <div className="nav-toggle" ref={navToggleRef}>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Home</a>
                            </li>
                            {/* <li className="nav-item has-dropdown">
                                <a href="#" className="nav-link">
                                    Products
                                    <svg className="icon chevron-icon" viewBox="0 0 24 24" width="14" height="14">
                                        <path d="M7 10l5 5 5-5z" fill="currentColor" />
                                    </svg>
                                </a>
                                <ul className="dropdown">
                                    <li><a href="#">New Arrivals</a></li>
                                    <li><a href="#">Featured</a></li>
                                    <li><a href="#">Categories</a></li>
                                    <li><a href="#">Seasonal</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item has-dropdown">
                                <a href="#" className="nav-link">
                                    Services
                                    <svg className="icon chevron-icon" viewBox="0 0 24 24" width="14" height="14">
                                        <path d="M7 10l5 5 5-5z" fill="currentColor" />
                                    </svg>
                                </a>
                                <ul className="dropdown">
                                    <li><a href="#">Consulting</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Training</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">About us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Service</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Client</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>

                        <div className="nav-actions">
                            {/* <div className="search-container" >
                                <input type="text" className="search-input" placeholder="Search..." ref={searchInputRef} />
                                <button className="search-btn">
                                    <svg className="icon search-icon" viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div> */}
                            <button className="theme-toggle" aria-label="Toggle theme" onClick={handleThemeToggle}>
                                <svg className="icon moon-icon" viewBox="0 0 24 24" width="20" height="20" ref={moonIconRef}>
                                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" fill="currentColor" />
                                </svg>
                                <svg className="icon sun-icon hidden" viewBox="0 0 24 24" width="20" height="20" ref={sunIconRef}>
                                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
};
