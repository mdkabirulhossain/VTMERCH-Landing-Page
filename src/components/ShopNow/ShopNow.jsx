import React from 'react';
import './ShopNow.css';
import { GoArrowRight } from "react-icons/go";
import pat_signature from "../../assets/img/pat-signature White 1.png"

const ShopNow = () => {
    return (
        <div className='shop'>
            <div className="shop-left">
                <p className='shop-left-title'>PATRICK BET-DAVID'S </p>
                <p>SINGED <br></br> COLLECTION</p>
                <div className='flex items-center'>
                <button>SHOP NOW</button>
                <GoArrowRight></GoArrowRight>
                </div>
                <img src={pat_signature} alt="" />
            </div>
            
        </div>
    );
};

export default ShopNow;