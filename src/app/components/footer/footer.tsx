'use client';
import React from "react";
import './footer.css'
import Image from 'next/image';
import companyLogo from '../../../../public/company-logo.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faSquarePhone, faSquareEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function footer() {
    return (
        <>
            <section className='section-container padding-null background-black'>
                <div className='inner-container'>
                    <div className="page_footer">
                        <div className="page_footer_container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="footer_logo">
                                        <a href="/">
                                            <Image
                                                src={companyLogo}
                                                alt={``}
                                                width={60}
                                                height={60}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </a>
                                        <p>From stolen glances to heartfelt vows, we preserve every chapter of your love story with elegance and emotion.</p>
                                        <div className="footer_social_logo">
                                            <ul>
                                                <li className="text-center"><FontAwesomeIcon icon={faFacebookF} color='#fff' /></li>
                                                <li className="text-center"><FontAwesomeIcon icon={faXTwitter} color='#fff' /></li>
                                                <li className="text-center"><FontAwesomeIcon icon={faSquareInstagram} color='#fff' /></li>
                                                <li className="text-center"><FontAwesomeIcon icon={faYoutube} color='#fff' /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="quick_Links">
                                        <h3>Quick Links</h3>
                                        <div className="quick_Links_textbox">
                                            <ul>
                                                <li><a href="/aboutus">About us</a></li>
                                                <li><a href="#">Service</a></li>
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">Client </a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="latest_posts">
                                        <h3>Photography Quotes</h3>
                                        <div className="latest_posts_textbox">
                                            <ul>
                                                <li>“The earth is art, the photographer is only a witness.”  <br />
                                                    <span>Yann Arthus-Bertrand</span></li>
                                                <li>“Photography has no rules, it is not a sport. It is the result which counts, no matter how it is achieved.”<br />
                                                    <span>Bill Brandt</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer_contact">
                                        <h3>Contact</h3>
                                        <div className="latest_posts_textbox">
                                            <ul>
                                                <li><span><FontAwesomeIcon icon={faLocationDot} color="#fff" /></span>60 Grant Ave. Carteret NJ 0708</li>
                                                <li><span><FontAwesomeIcon icon={faSquarePhone} color="#fff" /></span>(880)  172 380 1729</li>
                                                <li><span><FontAwesomeIcon icon={faSquareEnvelope} color="#fff" /></span>example@gmail.com</li>
                                            </ul>
                                        </div>
                                        {/* <h3>Enquiry</h3>
                                        <div className="sub_mail">
                                            <form action="" className="sub_mailid">
                                                <input type="text" id="enter_mailid" placeholder="Enter details with contact no." />
                                                <FontAwesomeIcon icon={faPaperPlane} color="#fff" />
                                            </form>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
// export default Navbar;