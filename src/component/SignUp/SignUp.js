import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    
    const handleUserSignUp = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your Password did not match!!!');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    const navigate = useNavigate();
    if(user){
        navigate('/');
    }



    return (
        <div className='w-2/3  border-2 border-green-800 rounded-md mx-auto my-2'>
            <h1 className='text-3xl font-bold mb-4'>Sign Up</h1>


            <form onSubmit={handleUserSignUp}>

                <div className="input-group">
                    <label className='block text-xl' htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="email" name='email' />
                </div>


                <div className="input-group">
                    <label className='block text-xl' htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="password" name='password' />
                </div>

                <div className="input-group">
                    <label className='block text-xl' htmlFor="confirm-password"> Confirm Password</label>
                    <input onBlur={handleConfirmPassword} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="password" name='confirm-password' />
                </div>
                <p className='text-red-800'>{error?.message}</p> 

                <input className='w-32 h-12 bg-green-400 rounded-md mb-4 font-bold hover:bg-green-600 cursor-pointer' type="submit" value="Sign Up" />


            </form>


            <p className='mb-4 text-xl'>
              Already have an account? <Link className='text-green-400 hover:text-green-600' to="/login"> Login </Link>
          </p>
        </div>
    );
};

export default SignUp;