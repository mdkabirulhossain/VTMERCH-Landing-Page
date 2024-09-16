import './Header.css';
import logo from '../../assets/Logo/Valuetainment.svg'
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <div className='header-div'>
            <nav className='header-div-nav'>
                <div className='title-div'>
                    <img src={logo} alt="" className='nav-img ' />
                    <p className='nav-title'>VTMERCH</p>
                </div>
                <div className='nav-menu'>
                    <IoMenu className='text-white font-bold w-full h-full'></IoMenu>
                </div>
            </nav>
            {/* Banner */}
            <div className='banner-div'>
                <div className='banner-text '>
                   future looks brights!
                </div>
            </div>
        </div>
    );
};

export default Header;