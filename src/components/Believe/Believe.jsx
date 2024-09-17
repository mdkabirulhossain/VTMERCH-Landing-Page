import React from 'react';
import './Believe.css'
import img_png_10 from '../../assets/img/img (10).png'
import img_png_3 from '../../assets/img/img (3).png'

const Believe = () => {
    return (
        <div className='believe-container relative'>
            {/* <div className="believe-main-container relative">
                <div className='left-believe-background'></div>
            </div> */}
            <div className="believe-container-main relative">
                <div className='believe-container-left'>
                    <img src={img_png_10} alt="" className='believe-container-left-img' />
                </div>
                <div className='believe-container-right'>
                    <div className="believe-container-right-text-div">
                        <p className='believe-container-right-text'>Entrepreneurs <span className='believe-container-right-text-span'>are heroes who should be respected and celebrated for taking risks, launching products, creating jobs and building companies.
                        </span>
                        </p>
                    </div>
                    <hr className='believe-container-divider' />
                    <div className="believe-container-right-text-div">
                        <p className='believe-container-right-text'>Entrepreneurs <span className='believe-container-right-text-span'>are heroes who should be respected and celebrated for taking risks, launching products, creating jobs and building companies.
                        </span>
                        </p>
                    </div>
                    <hr className='believe-container-divider' />
                    <div className="believe-container-right-text-div">
                        <p className='believe-container-right-text'>Capitalism <span className='believe-container-right-text-span'>Capitalism is a critically important economic system that has advanced society and the quality of life we enjoy today.
                        </span>
                        </p>
                    </div>
                    <hr className='believe-container-divider' />
                    <div className="believe-container-right-text-div">
                        <p className='believe-container-right-text'>Debate  <span className='believe-container-right-text-span'>is welcome and necessary as it can lead to consensus, epiphanies, and expose the truth. When a clash of ideas, often emotionally-charged, evolves into civil debate and objective processing of issues, everyone wins. Free speech is critical to productive debate.</span></p>
                    </div>
                    <hr className='believe-container-divider' />
                </div>
                <p className='believe-container-them-text'>WhHAT WE BELIEVE</p>

            </div>
            <img src={img_png_3} alt="" className='believe-container-chess-img' />
            <div className='believe-container-background-img'>

            </div>
        </div>
    );
};

export default Believe;