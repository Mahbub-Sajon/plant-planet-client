import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../../images/social/google.png'

const SocialLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p className='text-red-800'>Error: {error.message}</p>
      </div>
    );
    };

    if(user){
      navigate('/');
  }
  return (
    <div>
     <div>
          <button onClick={() => signInWithGoogle()}
           className='flex mx-auto  mb-4 w-2/3 h-12 rounded-md  bg-green-400 hover:bg-green-600'>
             <div className='mx-auto my-auto flex'>
             <img style={{width:'20px'}} src={img} alt="" />
              <span className='ml-2 font-bold'>Google Sign In</span>
             </div>
              </button>
          </div>
    </div>
  );
};

export default SocialLogin;