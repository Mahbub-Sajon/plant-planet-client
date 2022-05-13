import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
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
                <div className='mr-16'> 
                {
                    user? 
                    <button onClick={handleSignOut}>SIGN OUT</button>
                    :
                    <CustomLink to="/login">LOGIN</CustomLink>
                    }
                    </div>
                <div className='mr-16'> <CustomLink to="/allitem">ALL ITEMS</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/signup">SIGN UP</CustomLink></div>
            </nav>
        </div>
    );
};

export default Navbar;