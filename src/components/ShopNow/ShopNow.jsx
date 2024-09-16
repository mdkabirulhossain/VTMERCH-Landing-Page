import React from 'react';
import './ShopNow.css';
import { GoArrowRight } from "react-icons/go";
import pat_signature from "../../assets/img/pat-signature White 1.png"
import img_png_08 from "../../assets/img/img (8).png"
import img_png_01 from "../../assets/img/img (1).png"
import img_png_05 from "../../assets/img/img (5).png"
import icon from "../../assets/Icon/quotes.svg"

const ShopNow = () => {
    return (
       <div className='main relative'>
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
            <div className="shop-right flex items-center">
                <img src={img_png_01} alt="" className='shop-right-img' />
                <img src={img_png_08} alt="" className='shop-right-img-02' />

            </div>

        </div>
        <div className='bottom flex'>
            <div className='relative bottom-left'>
                <img src={icon} alt="" className='icon-style '/>
                <div className='bottom-text-left'>
                    <p className='bottom-text'>OUR MISSION IS TO ENLIGHTEN ENTERTAIN</p>
                    <p className='bottom-text'>AND EMPOWER CURRENT AND FUTURE</p>
                    <p className='bottom-text'>LEADER AROUND THE WORLD</p>
                </div>
            </div>
            <div className="bottom-right">
                    <img src={img_png_05} alt="" className='bottom-right-img'/>
            </div>
        </div>
       </div>
    );
};

export default ShopNow;