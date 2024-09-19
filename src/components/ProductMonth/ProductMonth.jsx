import React from 'react';
import './ProductMonth.css'
import img_png_6 from '../../assets/img/img (6).png'
import img_png_4 from '../../assets/img/img (4).png'
import img_jpeg_3 from '../../assets/img/img (3).jpeg'

import facebook_icon from "../../assets/Icon/facebook (4).svg"
import twitter_icon from "../../assets/Icon/twitter (4).svg"
import linkedin_icon from "../../assets/Icon/linkedin (3).svg"
import instagram_icon from "../../assets/Icon/instagram-logo (1).svg"
import delivery from "../../assets/Icon/delivery.svg"
import exchange from "../../assets/Icon/exchange.svg"
import support from "../../assets/Icon/customer-support 1.svg"
import payment from "../../assets/Icon/verified.svg"

import { FaArrowUp, FaArrowDown } from "react-icons/fa6";


const ProductMonth = () => {
    return (
        <div className='Best-month-product'>
            <div className='Best-product'>
                <p className='Best-product-title'>PRODUCT OF <span className='Best-product-title-style'>THE MONTH</span></p>
                <div className="Best-product-details">
                    <div className='Best-product-left'>
                        <div className="Best-product-left-bags flex flex-col items-center gap-3">
                            <div>
                                <FaArrowUp></FaArrowUp>
                            </div>
                            <div>
                                <img src={img_jpeg_3} alt="" className='single-bag-img' />
                            </div>
                            <div>
                                <img src={img_png_4} alt="" className='single-bag-img' />
                            </div>
                            <div>
                                <img src={img_png_6} alt="" className='single-bag-img rotate-90' />
                            </div>
                            <div>
                                <img src={img_png_6} alt="" className='single-bag-img' />
                            </div>
                            <div>
                                <FaArrowDown></FaArrowDown>
                            </div>
                        </div>
                        <div className="Best-product-left-bag">
                            <img src={img_jpeg_3} alt="" className='Best-product-left-bag-style' />
                        </div>


                    </div>
                    <div className='Best-product-right'>
                        <div className='Best-product-right-header-div'>
                            <p className='Best-product-right-name'>Premium Valuetainment Leather Backpack</p>
                            <p className='Best-product-right-paragraph'>The attention to detail is evident in every aspect of this backpack. From the sturdy hardware and reinforced stitching to the smooth zippers and luxurious lining, no detail has been overlooked.</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='Best-proud-right-price'>Price:</p>
                            <p className='Best-proud-right-taka'>$199.95</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='Best-proud-right-size'>Size:</p>
                            <div className='Best-proud-right-size-div flex'>
                                <div className='Best-proud-right-sizes'>
                                    <p className='Best-proud-right-sizes-name'>S</p>
                                </div>
                                <div className='Best-proud-right-sizes'>
                                    <p className='Best-proud-right-sizes-name'>M</p>
                                </div>
                                <div className='Best-proud-right-sizes'>
                                    <p className='Best-proud-right-sizes-name'>L</p>
                                </div>
                                <div className='Best-proud-right-sizes'>
                                    <p className='Best-proud-right-sizes-name'>XL</p>
                                </div>
                                <div className='Best-proud-right-sizes'>
                                    <p className='Best-proud-right-sizes-name '>XXL</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='Best-product-quantity'>Quantity:</p>
                            <div className='flex'>
                                <div className='Best-product-quantity-box-right'>
                                    <p className='quantity-parameters cursor-pointer'>-</p>
                                </div>
                                <div className='Best-product-quantity-box'>
                                    <p>1</p>
                                </div>
                                <div className='Best-product-quantity-box-left cursor-pointer'>
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                        <div className='Best-product-cart'>
                            <button className='Best-product-cart-button-left'>
                                ADD TO CART
                            </button>
                            <button className='Best-product-cart-button-right'>
                                BUY IT NOW
                            </button>
                        </div>
                        <div className="Best-product-share-div">
                            <p className='Best-product-share-title'>Share:</p>
                            <div className="Best-product-share-icon">
                                <img src={facebook_icon} alt="" className='share-icon-size' />
                                <img src={twitter_icon} alt="" className='share-icon-size' />
                                <img src={linkedin_icon} alt="" className='share-icon-size' />
                                <img src={instagram_icon} alt="" className='share-icon-size' />

                            </div>
                        </div>
                        <div className='view-details-div'>
                            <p className='view-details-text'>View Details</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Best-product-actions">
                    <div className="Best-product-actions-div">
                        <img src={delivery} alt="" />
                        <div>
                            <p className='Best-product-actions-div-title'>Shipping</p>
                            <p className='Best-product-actions-div-text'>The attention to detail is evident in every aspect of this backpack.</p>
                        </div>
                    </div>
                    <div className="Best-product-actions-div">
                        <img src={exchange} alt="" />
                        <div>
                            <p className='Best-product-actions-div-title'>Shipping</p>
                            <p className='Best-product-actions-div-text'>The attention to detail is evident in every aspect of this backpack.</p>
                        </div>
                    </div>
                    <div className="Best-product-actions-div">
                        <img src={support} alt="" />
                        <div>
                            <p className='Best-product-actions-div-title'>Shipping</p>
                            <p className='Best-product-actions-div-text'>The attention to detail is evident in every aspect of this backpack.</p>
                        </div>
                    </div>
                    <div className="Best-product-actions-div">
                        <img src={payment} alt="" />
                        <div>
                            <p className='Best-product-actions-div-title'>Shipping</p>
                            <p className='Best-product-actions-div-text'>The attention to detail is evident in every aspect of this backpack.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ProductMonth;