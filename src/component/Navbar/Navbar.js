import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import img from '../../images/nav.jpg'

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

           <div  className='md:flex justify-center'>
           <img className=' rounded-md w-16 h-16' src={img} alt="" />
           <nav className={`md:flex justify-center bg-emerald-800 w-full duration-500 ease-in absolute md:static ${open ? 'top-6' : 'top-[-200px]'}`}>
                <div className='mr-16'><CustomLink to="/">HOME</CustomLink></div>

                {
                    user && <>
                    <div className='mr-16'> <CustomLink to="/allitem">MANAGE INVENTORIES</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/add-product">ADD PRODUCT</CustomLink></div> 
                <div className='mr-16'> <CustomLink to="/my-products">MY PRODUCTS</CustomLink></div> 
                    </>
                }
                
                <div className='mr-16'><CustomLink to="/blogs">BLOGS</CustomLink></div>
               
                <div className='mr-16'> 
                {
                    user? 
                    <button onClick={handleSignOut}>SIGN OUT</button>
                    :
                    <CustomLink to="/login">LOGIN</CustomLink>
                    }
                    </div>
               
                <div className='mr-16'> <CustomLink to="/signup">SIGN UP</CustomLink></div>
                <div className='mr-16'> <CustomLink to="/about">ABOUT</CustomLink></div>
            </nav>
           </div>
        </div>
    );
};

export default Navbar;