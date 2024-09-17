import React from 'react';
import './NewArrival.css'
import img_jpeg_4 from '../../assets/img/img (4).jpeg'
import img_jpeg_6 from '../../assets/img/img (6).jpeg'
import img_jpeg_7 from '../../assets/img/img (7).jpeg'
import img_jpeg_10 from '../../assets/img/img (10).jpeg'

const NewArrival = () => {
    return (
        <div className='NewArrival-product'>
            <div className="product-title">
                <p className='product-title-text'>NEW ARRIVAL</p>
            </div>
            <div className="product">
                <div className="product-div">
                    <img src={img_jpeg_4} alt="" className='product-img' />
                    <div>
                        <p className='product-name'>Army Green Active Short Sleeve</p>
                        <div className='flex product-price-div gap-3'>
                            <p className='product-price'>$ 34.95</p>
                            <p className='line-through product-price-remove'>$ 34.95</p>
                        </div>
                    </div>
                </div>
                <div className="product-div">
                    <img src={img_jpeg_6} alt="" className='product-img' />
                    <div>
                        <p className='product-name'>Army Green Active Short Sleeve</p>
                        <div className='flex product-price-div gap-3'>
                            <p className='product-price'>$ 34.95</p>
                            <p className='line-through product-price-remove'>$ 34.95</p>
                        </div>
                    </div>
                </div>
                <div className="product-div">
                    <img src={img_jpeg_7} alt="" className='product-img' />
                    <div>
                        <p className='product-name'>Army Green Active Short Sleeve</p>
                        <div className='flex product-price-div gap-3'>
                            <p className='product-price'>$ 34.95</p>
                            <p className='line-through product-price-remove'>$ 34.95</p>
                        </div>
                    </div>
                </div>
                <div className="product-div">
                    <img src={img_jpeg_10} alt="" className='product-img' />
                    <div>
                        <p className='product-name'>Army Green Active Short Sleeve</p>
                        <div className='flex product-price-div gap-3'>
                            <p className='product-price'>$ 34.95</p>
                            <p className='line-through product-price-remove'>$ 34.95</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;