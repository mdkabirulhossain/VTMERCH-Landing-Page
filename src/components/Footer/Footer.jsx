import React from 'react';
import './Footer.css'
import footerLogo from '../../assets/Logo/ValuetainmentFooter.svg';
import facebook from '../../assets/Icon/facebookwhite.svg'
import twitter from '../../assets/Icon/twitterWhite.svg'
import linkedin from '../../assets/Icon/linkedinWhite.svg'
import instagram from '../../assets/Icon/instagram-logoWhite.svg'
import telephone from '../../assets/Icon/telephone (2) 1.svg'
import email from '../../assets/Icon/email 1.svg'

import visa1 from '../../assets/Icon/visa 1.svg'
import apple from '../../assets/Icon/apple-pay 1.svg'
import visa2 from '../../assets/Icon/visa 2.svg'
import amex from '../../assets/Icon/amex 1.svg'
import paypal from '../../assets/Icon/paypal 1.svg'
import american from '../../assets/Icon/american-express (1) 1.svg'
import dinner from '../../assets/Icon/diners-club 1.svg'



const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <div className="footer-title-div">
                    <img src={footerLogo} alt="" />
                    <p className='footer-title'>VTMERCH</p>
                </div>
                <hr className='footer-title-divider' />
                <div className="footer-mid">
                    <div className="footer-mid-one">
                        <p className='footer-mid-one-text'>Subscribe and be the first to receive notifications about our upcoming releases and the latest news.</p>
                        <div className='flex flex-col gap-3'>
                            <button className='footer-enter-email-button'>Enter your email</button>
                            <button className='footer-sub-button'>Subscribe</button>
                        </div>
                    </div>
                    <div className='footer-mid-two-container'>
                        <div className="footer-mid-two">
                            <p className='footer-mid-two-text'>Customer Services</p>
                            <ul>
                                <li className='footer-mid-two-list'>About</li>
                                <li className='footer-mid-two-list'>Search</li>
                                <li className='footer-mid-two-list'>Privacy Policy</li>
                                <li className='footer-mid-two-list'>Contact Us</li>
                                <li className='footer-mid-two-list'>Terms of Service</li>
                                <li className='footer-mid-two-list'>Refund Policy</li>
                                <li className='footer-mid-two-list'>Track Order</li>
                            </ul>
                        </div>
                        <div className="footer-mid-three">
                            <p className='footer-mid-two-text'>Products</p>
                            <ul>
                                <li className='footer-mid-two-list'>Feature products</li>
                                <li className='footer-mid-two-list'>Bestseller</li>
                                <li className='footer-mid-two-list'>Latest product</li>
                                <li className='footer-mid-two-list'>All collection</li>
                                <li className='footer-mid-two-list'>All points</li>
                            </ul>
                        </div>
                        <div className="footer-mid-four">
                            <p className='footer-mid-two-text'>Contact Us</p>
                            <p className='footer-mid-two-list'>Available between 8AM to 8PM. Ready to answer your questions.</p>
                            <div className='flex items-center gap-3 pb-4'>
                                <img src={telephone} alt="" className='footer-most-right-img' />
                                <p className='footer-address'>013456789</p>
                            </div>
                            <div className='flex items-center gap-3 pb-4'>
                                <img src={email} alt="" className='footer-most-right-img' />
                                <p className='footer-address'>store@valuetainment.com</p>
                            </div>
                            <div className='flex items-center gap-3 pb-4'>
                                <img src={facebook} alt="" className='footer-most-right-img' />
                                <img src={twitter} alt="" className='footer-most-right-img' />
                                <img src={linkedin} alt="" className='footer-most-right-img' />
                                <img src={instagram} alt="" className='footer-most-right-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-div">
                <div>
                    <p className='text-white'>© 2024 Valuetainment Store. All rights reserved.</p>
                </div>
                <div className='footer-payment-options-div'>
                    <img src={visa1} alt="" />
                    <img src={apple} alt="" />
                    <img src={dinner} alt="" />
                    <img src={visa2} alt="" />
                    <img src={amex} alt="" />
                    <img src={paypal} alt="" />
                    <img src={american} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;