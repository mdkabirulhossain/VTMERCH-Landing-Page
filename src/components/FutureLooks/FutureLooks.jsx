import React from 'react';
import './FutureLooks.css'
import img_jpeg_5 from '../../assets/img/img (5).jpeg'
import img_jpeg_1 from '../../assets/img/img (1).jpeg'

const FutureLooks = () => {
    return (
        <div className='new-Arrival'>
            <div className="new-Arrival-container">
                <div className="new-Arrival-div-title">
                    <p className='new-Arrival-title'>FUTURE<br></br>LOOKS<br></br>BRIGHT</p>
                    <p className='new-Arrival-title-purple'><span className='new-Arrival-title-purple-text'>PURPLE</span><span className='new-Arrival-title-purple-and'> & </span><br></br><span className='new-Arrival-title-purple-gold'>GOLD</span><span className='new-Arrival-title-purple-series'>SERIES</span></p>
                </div>
                <div className="new-Arrival-div">
                    <img src={img_jpeg_1} alt="" className='new-Arrival-div-img' />
                    <p className='new-Arrival-product-name'>FLB Shirt - Purple</p>
                    <div className='flex product-price-div gap-3'>
                            <p className='product-price'>$ 34.95</p>
                            <p className='line-through product-price-remove'>$ 34.95</p>
                        </div>
                </div>
                <div className="new-Arrival-div">
                <img src={img_jpeg_5} alt="" className='new-Arrival-div-img' />
                    <p className='new-Arrival-product-name'>FLB Shirt - Purple</p>
                    <div className='flex product-price-div gap-3'>
                            <p className='product-price'>$ 34.95</p>
                            <p className='line-through product-price-remove'>$ 34.95</p>
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default FutureLooks;