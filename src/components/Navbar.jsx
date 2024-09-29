import {useState} from "react";
import logo from '../assets/logo.png'
import {RiCloseFill, RiMenu3Line} from "@remixicon/react";
const Navbar = () => {
    const [isNavOpen,setIsNavOpen]=useState(false)
    const ToggleMenu=()=>{
        setIsNavOpen(!isNavOpen)
    }
    return (
        <nav className='fixed top-4 left-0 m-2 right-0 z-50 '>
            <div className='text-neutral-500 bg-black/60 backdrop-blur-md
            max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl
            border border-neutral-800'>
                <img src={logo} alt='image Logo' width={120} height={24}/>

                {/*Toggle Nav Items -----------------------------*/}
                <div className='hidden md:flex space-x-6'>
                    <a href='#works' className='hover:text-neutral-200'>
                        How it Works
                    </a>
                    <a href='#pricing' className='hover:text-neutral-200'>
                        Pricing
                    </a>
                    <a href='#testimonials' className='hover:text-neutral-200'>
                        Testimonials
                    </a>
                </div>

                {/*Toggle Nav Buttons----------------------------------------*/}

                <div className='hidden md:flex space-x-4 items-center'>
                    <a href='#' className='hover:text-neutral-200'>
                        Login
                    </a>
                    <a href='#' className='hover:text-neutral-700 border border-neutral-700
                    text-white py-2 px-4 rounded-lg transition'>
                        Get a Demo
                    </a>
                    <a href='#' className='hover:bg-blue-500 bg-blue-600 text-white py-2 px-4
                    rounded-lg transition'>
                        Start Free Trail
                    </a>
                </div>

                {/*Hamburger Icon For Mobile------------------------------------*/}

                <div className='md:hidden'>
                    <button onClick={ToggleMenu} className='text-white focus:outline-none
                    ' aria-label={isNavOpen?'Close Menu':'Open Menu'}>
                        {isNavOpen?<RiCloseFill/>:<RiMenu3Line/>}
                    </button>

                </div>

            </div>
            {/* Mobile Icons------------------------------------------*/}
            {
                isNavOpen && (
                    <div className='md:hidden bg-neutral-900/60 text-neutral-200 backdrop-blur-md
                        border border-neutral-800 p-4 rounded-xl mt-2'>
                        <div className='flex flex-col space-y-4'>
                            <a href='#' className='hover:text-neutral-500'>
                                Product
                            </a>
                            <a href='#' className='hover:text-neutral-500'>
                                Pricing
                            </a>
                            <a href='#' className='hover:text-neutral-500'>
                                Resources
                            </a>
                            <a href='#' className='hover:text-neutral-500'>
                                Login
                            </a>
                            <a href='#' className='hover:text-neutral-700 border border-neutral-700
                                     text-white py-2 px-4 rounded-lg transition'>
                                Get a Demo
                            </a>
                            <a href='#' className='hover:bg-blue-500 bg-blue-600 text-white py-2 px-4
                                 rounded-lg transition'>
                                Start Free Trail
                            </a>
                        </div>

                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;