"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Enquery.css"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ourServices from '../../JsonData/ourServices.json'

import Image from "next/image";
import Spinner from '../Spinner'
import refresh from '../../../../public/refresh.png'
import locationIcon from '../../../../public/location-icon.png'
import phoneIcon from '../../../../public/phone-icon-white.png'

interface UserInfo {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    message: string;
    captcha: string;
    eventDate: Date | null;
    eventTypeOption: string,
    location: string
}

interface eventInfo {
    id: number,
    imageUrl: string,
    projectCount: number,
    title: string,
    description: string,
    buttonText: string,
    isButtonClick: boolean,
    projectUrl: string
}

// ✅ Define Props interface for your component
interface EnqueryProps {
    onLoaded?: () => void;
}


function Enquery({ onLoaded }: EnqueryProps) {

    let errorsObj = {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        message: "",
        captcha: "",
        eventDate: "",
        eventTypeOption: "",
        location: "",
    };
    const [errors, setErrors] = useState(errorsObj);

    const [enquiryDetails, setEnquiryDetails] = useState<UserInfo>({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        message: "",
        captcha: "",
        eventDate: null,
        eventTypeOption: "",
        location: ""
    });
    const eventDateRef = useRef<HTMLInputElement>(null);
    const locationInputRef = useRef<HTMLInputElement>(null);
    const fnameInputRef = useRef<HTMLInputElement>(null);
    const lnameInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement | null>(null);
    const captchaInputRef = useRef<HTMLInputElement>(null);

    const [captchaText, setCaptchaText] = useState<string>('');
    const [captchaInput, setCaptchaInput] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [isShowLoader, setIsShowLoader] = useState<boolean>(false)
    const [isShowMessage, setIsShowMessage] = useState<string>('')
    const [saveEnquiry, setSaveEnquiry] = useState<string>('')
    const [eventType, setEventType] = useState<eventInfo[]>(ourServices)

    useEffect(() => {
        if (onLoaded) onLoaded()
        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Call your function here
            setIsShowMessage('')
        }, 10000); // Delay in milliseconds (5000ms = 5 seconds)

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [isShowMessage]);

    // Generate a new CAPTCHA text and draw it on the canvas
    useEffect(() => {
        generateCaptchaText(); ``
    }, []);

    useEffect(() => {
        if (captchaText)
            drawCaptcha();
    }, [captchaText]);

    const refreshCaptchText = () => {
        // drawCaptcha();
        generateCaptchaText();
    }

    // Generate a new CAPTCHA text and draw it on the canvas
    useEffect(() => {

        if (saveEnquiry === 'success') {
            setIsShowLoader(false);
            setIsShowMessage("Your Enquery hass been send")
            /* setEnquiryDetails((prevState) => ({
                ...prevState,
                fname: "",
                lname: "",
                phone: "",
                email: "",
                message: "",
                captcha: "",

            })); */
            setSaveEnquiry("");
            refreshCaptchText();
        }
    }, [saveEnquiry]);




    // Generate a random CAPTCHA text
    const generateCaptchaText = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';
        for (let i = 0; i < 6; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptchaText(text);
    };

    // Render CAPTCHA text on the canvas
    const drawCaptcha = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Style settings for CAPTCHA text
                context.font = 'bold 30px Georgia';
                context.fillStyle = '#323445';
                context.textBaseline = 'middle';

                // Optional: Apply random rotation and position for each character to add difficulty
                for (let i = 0; i < captchaText.length; i++) {
                    const x = 15 + i * 20 + Math.random() * 5;
                    const y = 25 + Math.random() * 5;
                    context.save();
                    context.translate(x, y);
                    context.rotate((Math.random() - 0.5) * 0.3); // Rotate randomly between -0.15 to 0.15 radians
                    context.fillText(captchaText.charAt(i), 0, 0);
                    context.restore();
                }

                // Optional: Add noise by drawing random dots on the canvas
                for (let i = 0; i < 50; i++) {
                    context.beginPath();
                    context.arc(Math.random() * 150, Math.random() * 50, 1, 0, 2 * Math.PI);
                    context.fillStyle = 'rgba(0, 0, 0, 0.3)';
                    context.fill();
                }
            }
        }
    };

    const enquiryHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Update the state using the current field's name and value
        setEnquiryDetails((prevState) => ({
            ...prevState,
            // [name]: name === 'phoneNo' ? Number(value) : value, // Convert age to number
            [name]: value,
        }));
    };


    const enquiryDateChange = (date: Date | null) => {
        setEnquiryDetails((prevState) => ({
            ...prevState,
            eventDate: date,
        }));
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setEnquiryDetails((prevState) => ({
            ...prevState,
            eventTypeOption: selectedValue,
        }));
    };


    const onSubmit = () => {
        console.log("onSubmit----------")
    }

    /* form validation  */
    const enquirySubmit = async (e: any) => {
        e.preventDefault();
        console.log("eventTypeOption-----", enquiryDetails)
        const re = /^[A-Za-z\s]+$/;
        const onlyNumber = /^[0-9]+$/;
        const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const { fname, lname, phone, email, message, captcha, eventDate, eventTypeOption, location } = enquiryDetails;

        let error = false;
        const errorObj = { ...errorsObj };

        /* if (eventDate === null) {
            errorObj.eventDate = "Please provide your Event Date";
            error = true;
        }
        if (eventTypeOption === "") {
            errorObj.eventTypeOption = "Please select event type";
            error = true;
        }

        if (location.trim() === "" || location === null || location === 'null' || location === undefined || location === 'undefined') {
            if (fnameInputRef.current) {
                fnameInputRef.current.focus();
            }
            errorObj.location = "Please provide your location";
            error = true;
        } else if (location.length < 3) {
            if (fnameInputRef.current) {
                fnameInputRef.current.focus();
            }
            errorObj.location = "Minimum 3 Character is Required";
            error = true;
        } else if (!re.test(location)) {
            if (fnameInputRef.current) {
                fnameInputRef.current.focus();
            }
            errorObj.location = "Allow only alphabets";
            error = true;
        } else {
            if (lnameInputRef.current) {
                lnameInputRef.current.focus();
            }
        }

        if (fname.trim() === "" || fname === null || fname === 'null' || fname === undefined || fname === 'undefined') {
            if (fnameInputRef.current) {
                fnameInputRef.current.focus();
            }
            errorObj.fname = "Please provide your first name";
            error = true;
        } else if (fname.length < 3) {
            if (fnameInputRef.current) {
                fnameInputRef.current.focus();
            }
            errorObj.fname = "Minimum 3 Character is Required";
            error = true;
        } else if (!re.test(fname)) {
            if (fnameInputRef.current) {
                fnameInputRef.current.focus();
            }
            errorObj.fname = "Allow only alphabets";
            error = true;
        } else {
            if (lnameInputRef.current) {
                lnameInputRef.current.focus();
            }
        }



        if (phone.trim() === "" || phone === null || phone === 'null' || phone === undefined || phone === 'undefined') {
            if (phoneInputRef.current) {
                phoneInputRef.current.focus();
            }
            errorObj.phone = "Please provide your contact number";
            error = true;
        } else if (phone.length < 10) {
            if (phoneInputRef.current) {
                phoneInputRef.current.focus();
            }
            errorObj.phone = "Check your contact number";
            error = true;
        } else if (!onlyNumber.test(phone)) {
            if (phoneInputRef.current) {
                phoneInputRef.current.focus();
            }
            errorObj.phone = "Allow only number";
            error = true;
        } else {
            if (emailInputRef.current) {
                emailInputRef.current.focus();
            }
        }

        if (email.trim() === "" || email === null || email === 'null' || email === undefined || email === 'undefined') {
            if (emailInputRef.current) {
                emailInputRef.current.focus();
            }
            errorObj.email = "Please provide your email id";
            error = true;

        } else if (!validEmail.test(email)) {
            if (emailInputRef.current) {
                emailInputRef.current.focus();
            }
            errorObj.email = "Please provide your correct email id";
            error = true;
        } else {
            if (messageInputRef.current) {
                messageInputRef.current.focus();
            }
        }

        if (message.trim() === "" || message === null || message === 'null' || message === undefined || message === 'undefined') {
            if (messageInputRef.current) {
                messageInputRef.current.focus();
            }
            errorObj.message = "Please provide your message";
            error = true;

        }

        if (captcha.trim() === "" || captcha === null || captcha === 'null' || captcha === undefined || captcha === 'undefined') {
            if (captchaInputRef.current) {
                captchaInputRef.current.focus();
            }
            errorObj.captcha = "Please provide text as per image";
            error = true;

        } else if (captchaText !== captcha) {
            if (captchaInputRef.current) {
                captchaInputRef.current.focus();
            }
            errorObj.captcha = "Mismatch with image text";
            error = true;
        } */


        setErrors(errorObj);
        if (error) {
            return;
        } else {
            if (messageInputRef.current) {
                messageInputRef.current.blur(); // Remove focus from the input field
            }

            setIsShowLoader(true)
            const statusUpdated = setTimeout(() => {
                // Call your function here
                setSaveEnquiry("success")
            }, 5000); // Delay in milliseconds (5000ms = 5 seconds)
            const enqueryData = { fname: enquiryDetails.fname, lname: enquiryDetails.lname, phone_no: enquiryDetails.phone, email: enquiryDetails.email, message: enquiryDetails.message, eventDate: enquiryDetails.eventDate, eventTypeOption: enquiryDetails.eventTypeOption, location: enquiryDetails.location }



            /* const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(enqueryData),
            }) */


            const res = await fetch('/.netlify/functions/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(enqueryData),
            });

            if (res.ok) alert('Message sent!')
            else alert('Failed to send message.')

        }
        // refreshCaptchText();
    };


    return (
        <section className='contact-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Contact</h3>
                    </div>
                </div>
            </div>
            <div className="enquery-parent-container">
                <div className="contact-info-left-inside-container">
                    <div className='enquiry-card-container'>
                        <div>
                            <Image className='info-img' src={locationIcon} alt="Aperture Abhijit" />
                        </div>
                        <div>
                            <div className='info-position'><h4>Location:</h4></div>
                            <div className='info-details'><h6>Abhijit Saha <br /> 17/5, Boasepukur Raod, Sonartari Appartment, Flat No: 8, 4th Floor <br /> Kolkata-700084, India</h6></div>
                        </div>
                    </div>
                    <div className='enquiry-card-container'>
                        <div>
                            <Image className='info-img' src={phoneIcon} alt="Aperture Abhijit" />
                        </div>
                        <div>
                            <div className='info-position'><h4>Phone:</h4></div>
                            <div className='info-details'><a href={`tel:` + 9732814504}><h6>{9732814504}</h6></a></div>
                        </div>
                    </div>

                </div>
                <div className="enquery-container">
                    <div className='enquiry_now_container' id='enquiry-now'>
                        <div className='section-heading'><h4>Enquery<span className='success-message'>{isShowMessage}</span></h4></div>
                        <form onSubmit={onSubmit}>
                            <div className="enquiry-input-container">
                                <DatePicker
                                    selected={enquiryDetails.eventDate}
                                    onChange={enquiryDateChange}
                                    id="eventDate"
                                    name="eventDate"
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Select event date"
                                />
                                {errors.eventDate && (
                                    <div className='input-error'>
                                        {errors.eventDate}
                                    </div>
                                )}
                            </div>
                            <div className="enquiry-input-container">
                                <select
                                    value={enquiryDetails.eventTypeOption}
                                    onChange={handleDropdownChange}
                                    style={{
                                        color: enquiryDetails.eventTypeOption === "" ? "#737373" : "black"
                                    }}
                                >
                                    <option value="">Select an option</option>
                                    {eventType.map((event) => (
                                        <option key={event.id} value={event.title}>
                                            {event.title}
                                        </option>
                                    ))}
                                </select>
                                {errors.eventTypeOption && (
                                    <div className='input-error'>
                                        {errors.eventTypeOption}
                                    </div>
                                )}
                            </div>
                            <div className="enquiry-input-container">
                                <input
                                    ref={locationInputRef}
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={enquiryDetails.location}
                                    onChange={enquiryHandleChange}
                                    placeholder="Location"
                                    autoComplete="off" // Disable autofill
                                />
                                {errors.location && (
                                    <div className='input-error'>
                                        {errors.location}
                                    </div>
                                )}
                            </div>
                            <div className="enquiry-input-container">
                                <input
                                    ref={fnameInputRef}
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    value={enquiryDetails.fname}
                                    onChange={enquiryHandleChange}
                                    placeholder="Your Name"
                                    autoComplete="off" // Disable autofill
                                />
                                {errors.fname && (
                                    <div className='input-error'>
                                        {errors.fname}
                                    </div>
                                )}
                            </div>

                            <div className="enquiry-input-container">
                                <input
                                    ref={phoneInputRef}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={enquiryDetails.phone}
                                    // value={enquiryDetails.email}
                                    onChange={enquiryHandleChange}
                                    placeholder="Your Whats App No."
                                    minLength={10}
                                    maxLength={10}
                                    autoComplete="off" // Disable autofill
                                />
                                {errors.phone && (
                                    <div className='input-error'>
                                        {errors.phone}
                                    </div>
                                )}
                            </div>
                            <div className="enquiry-input-container">
                                <input
                                    ref={emailInputRef}
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={enquiryDetails.email}
                                    onChange={enquiryHandleChange}
                                    placeholder="Email"
                                    autoComplete="off" // Disable autofill
                                />
                                {errors.email && (
                                    <div className='input-error'>
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="enquiry-input-container">
                                <textarea
                                    ref={messageInputRef}
                                    // type="text"
                                    rows={4}
                                    id="message"
                                    name="message"
                                    value={enquiryDetails.message}
                                    onChange={enquiryHandleChange}
                                    placeholder="Message"
                                    autoComplete="off" // Disable autofill

                                />
                                {errors.message && (
                                    <div className='input-error'>
                                        {errors.message}
                                    </div>
                                )}
                            </div>
                            <div className="captcha_code_container">
                                <div className="captcha_code_top_container">
                                    <div className='captcha-img-container'>
                                        {/* <Image className='captcha-img' src={appImages.captcha} alt="Aperture Abhijit" /> */}
                                        <canvas ref={canvasRef} width={150} height={45} className='captcha-img'></canvas>
                                    </div>
                                    <div className='refresh-img-container' onClick={refreshCaptchText}>
                                        <Image className='refresh-img' src={refresh} alt="Aperture Abhijit" />
                                    </div>
                                </div>
                                <div className="captcha_code_bottom_container">
                                    <div className='captcha_code-container'>
                                        <input
                                            ref={captchaInputRef}
                                            type="text"
                                            id="captcha_code"
                                            name="captcha"
                                            onChange={enquiryHandleChange}
                                            value={enquiryDetails.captcha}
                                            placeholder="Captcha Code"
                                            autoComplete="off" // Disable autofill
                                        />
                                        {errors.captcha && (
                                            <div className='input-error'>
                                                {errors.captcha}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`enquiry-submit-container ${!isShowLoader ? 'cursor-pointer' : ''}`} onClick={!isShowLoader ? enquirySubmit : undefined}>{isShowLoader ? <Spinner /> : <><span>Submit</span></>}</div>

                        </form>
                        {/* <div className='enquiry-submit-container'>Submit</div> */}

                    </div>

                </div>
            </div>
        </section>

    );
}

export default Enquery;
