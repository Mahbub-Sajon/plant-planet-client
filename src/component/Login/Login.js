import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleUserSignIn = event => {

    }

    const handleEmailBlur = event => {

    }

    const handlePasswordBlur = event => {

    }



    return (
        <div className='w-2/3  border-2 border-green-800 rounded-md mx-auto my-2'>
            <h1 className='text-3xl font-bold mb-4'>Login</h1>


            <form onSubmit={handleUserSignIn}>

                <div className="input-group">
                    <label className='block text-xl' htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="email" name='email' />
                </div>


                <div className="input-group">
                    <label className='block text-xl' htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="password" name='password' />
                </div>
                {/* <p className='text-red-800'>{error?.message}</p> */}

                <input className='w-32 h-12 bg-green-400 rounded-md mb-4 font-bold hover:bg-green-600 cursor-pointer' type="submit" value="Login" />


            </form>


            <p className='mb-4 text-xl'>
              Don't have any account? <Link className='text-green-400 hover:text-green-600' to="/signup"> Create an account</Link>
          </p>


        </div>
    );
};

export default Login;