import React from 'react';
import img from '../../images/banner.jpg'

const Banner = () => {
    
    return (
        <div className='w-full select-none relative aspect-w-16 aspect-h-9'>
          <img src={img} alt="" />
          <div className='absolute w-full top-1/2 transform translate-y-1/2 px-3'>
            <p className='text-white text-2xl font-bold mb-2'>PLANT-PLANET is a renowned multinational inventory system in the country!</p>
            <button className='w-32 h-12 bg-green-600 rounded-md font-bold hover:bg-green-800'>Keep Exploring</button>
          </div>
        </div>
    );
};

export default Banner;