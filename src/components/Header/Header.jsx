import './Header.css';
import logo from '../../assets/Logo/Valuetainment02.svg'
import { IoMenu } from "react-icons/io5";
import img_png_9 from '../../assets/img/img (9).png'
import img_png_11 from '../../assets/img/img (11).png'
import img_png_10 from '../../assets/img/img (10).png'
import img_jpeg_11 from '../../assets/img/img (11).jpeg'

const Header = () => {
    return (
        <div className='header-div'>
            <nav className='header-div-nav'>
                <div className='title-div'>
                    <img src={logo} alt="" className='nav-img' />
                    <p className='nav-title'>VTMERCH</p>
                </div>
                <div className='nav-menu '>
                    <IoMenu className='text-white font-bold w-full h-full'></IoMenu>
                    <ul className='nav-profile-dropdown'>
                        <li className='cursor-pointer text-white hover:text-black w-full'>Home</li>
                        <li className='cursor-pointer text-white hover:text-black w-full'>About Us</li>
                        <li className='cursor-pointer text-white hover:text-black w-full'>Contact Us</li>
                    </ul>
                </div>
            </nav>
            {/* Banner */}
            <div className='banner-div h-full relative'>
                <div className='banner-text'>
                    future looks brights!
                </div>
                <div className='banner-adds absolute overflow-x-auto scrollbar-hide bottom-0 left-0 right-0 top-20 pt-2 md:pt-6'>
                    <div className="banner-adds-div">
                        <img src={img_png_9} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_png_10} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_jpeg_11} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_png_11} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_png_9} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_png_10} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_jpeg_11} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-adds-div">
                        <img src={img_png_11} alt="" />
                        <div>
                            <p className='dress-name'>Army Green Active Short Sleeve</p>
                            <div className='flex gap-3'>
                                <p className='dress-price'>$ 34.95</p>
                                <p className='line-through dress-price'>$ 34.95</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;