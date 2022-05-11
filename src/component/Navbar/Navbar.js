import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-emerald-800 p-4'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`md:flex justify-center bg-emerald-800 w-full duration-500 ease-in absolute md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
                <div className='mr-16'><CustomLink to="/">HOME</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/reviews">REVIEWS</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/dashboard">DASHBOARD</CustomLink></div>
                <div className='mr-16'><CustomLink to="/blogs">BLOGS</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/about">ABOUT</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/login">LOGIN</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/signup">SIGN UP</CustomLink></div>
            </nav>
        </div>
    );
};

export default Navbar;