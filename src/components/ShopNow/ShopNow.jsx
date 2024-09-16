import React from 'react';
import './ShopNow.css';
import { GoArrowRight } from "react-icons/go";
import pat_signature from "../../assets/img/pat-signature White 1.png"
import img_png_08 from "../../assets/img/img (8).png"
import img_png_01 from "../../assets/img/img (1).png"

const ShopNow = () => {
    return (
        <div className='shop'>
            <div className="shop-left">
                <p className='shop-left-title'>PATRICK BET-DAVID'S </p>
                <p className='shop-left-signed'>SINGED <br></br> COLLECTION</p>
                <div className='flex items-center gap-3 button-div'>
                    <button>SHOP NOW</button>
                    <GoArrowRight></GoArrowRight>
                </div>
                <img src={pat_signature} alt="" className='pat-sign' />
            </div>
            <div className="shop-right flex">
                <img src={img_png_01} alt="" className='shop-right-img' />
                <img src={img_png_08} alt="" className='shop-right-img' />

            </div>

        </div>
    );
};

export default ShopNow;