import React from 'react';
import './ShopCollection.css'
import { FaArrowRight } from "react-icons/fa";
import img_jpeg_03 from '../../assets/img/img (3).jpeg'
import img_jpeg_02 from '../../assets/img/img (2).jpeg'
import img_jpeg_8 from '../../assets/img/img (8).jpeg'
import img_jpeg_9 from '../../assets/img/img (9).jpeg'
import img_png_02 from '../../assets/img/img (2).png'
import img_png_07 from '../../assets/img/img (7).png'


const ShopCollection = () => {
    return (
        <div className='shop-collection'>
            <div className="shop-container">
                <div className='top-title'>
                    <p className='top-title-shop'>SHOP</p>
                    <p className='top-title-collection'>COLLECTION</p>
                    <div className='flex items-center text-black font-bold gap-3 button-div'>
                        <button>VIEW ALL</button>
                        <FaArrowRight />
                    </div>
                </div>
                <div className="shop-container-items flex relative">
                    <div className='bag-container absolute bottom-0'>
                        <div className='bag relative'>
                            <img src={img_jpeg_03} alt="" className='bag-image' />
                            <p className='shop-container-items-title absolute bottom-4 left-5'>THE BOSS<br></br>COLLECTION</p>
                        </div>
                    </div>
                    <div className='cap-book flex flex-col gap-y-7 '>
                        <div className='cap relative'>
                            <img src={img_png_07} alt="" className='cap_image' />
                            <p className='shop-container-items-title absolute bottom-4 left-5 '>HEADW<br></br>EAR</p>
                        </div>
                        <div className='cap relative'>
                            <img src={img_png_02} alt="" className='cap_image' />
                            <p className='shop-container-items-title absolute bottom-4 left-5 '>VALUE BOOKS</p>
                        </div>
                    </div>
                    <div className="water-pot-container">
                        <div className='water-pot relative'>
                            <img src={img_jpeg_8} alt="" className='water-pot-img' />
                            <p className='shop-container-items-title absolute bottom-4 left-2'>ACCESSORIES</p>
                        </div>
                    </div>
                    <div className='t-shirt'>
                        <div className="t-shirt-top relative">
                            <img src={img_jpeg_02} alt="" className='t-shirt-top-img' />
                            <p className='shop-container-items-title absolute bottom-4 left-2'>THE FUTURE LOOKS<br></br>BRIGHT COLLECTION</p>
                        </div>
                        <div className="t-shirt-top mt-6 relative">
                            <img src={img_jpeg_9} alt="" className='t-shirt-top-img' />
                            <p className='shop-container-items-title absolute bottom-4 left-5'>TOPS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCollection;