import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
    return (
        <div>
            <h1 className='text-lime-800 text-3xl font-bold '>Our Departments</h1>
        <div className='flex my-5 '>
          
           <div className='mx-10'>
               <h2 className='text-lime-800 text-3xl font-bold pb-4 '>Welcome to the Plant-Planet</h2>
               <p>Plant-Planet is plant nursery where we keep our little trees with perfect care in every way possible. It is basically an inventory for trees to store and deliver to the right place. We keep maintaining the system about keeping our product perfectly and with care, and that is why till now we are providing the best inventory system. So many suppliers supply their products to us and we stock them besides we deliver products which should be delivered.</p>
               <Link className='text-green-500 text-xl font-bold' to='/about'> About Us </Link>
           </div>

           <div className='mx-10 border-2 border-lime-800'>
               <h3 className='text-lime-800 text-2xl font-bold pb-4 '>Logistic Department</h3>
           <img className='mx-auto w-80 h-60 mb-4' src={`https://media.istockphoto.com/photos/garden-center-worker-transporting-plants-picture-id1317221094?b=1&k=20&m=1317221094&s=170667a&w=0&h=nlEKrXCaIvlCgcIujCR-Ma7ATke-B0kX1Wnt5HeIFEA=`} alt="" />
           <p>We have a huge active logistics department working. The primary duty of our logistics department is to ensure geographical repositioning of unfinished goods, and it is also concerned with the finished inventories of the organization being at the required place at the lowest possible cost.</p>
           <Link className='text-green-500 text-xl font-bold' to='/about'>Read More</Link>
           </div>

           <div className='mx-10 border-2 border-lime-800'>
               <h3 className='text-lime-800 text-2xl font-bold pb-4'>Storage Department</h3>
           <img className='mx-auto w-80 h-60 mb-4' src={`https://www.startupdonut.co.uk/sites/default/files/plantnursery1_1.jpg`} alt="" />
           <p>We believe storage is not something where you can just put something and expect a great benefit from it rather it is something or some place where you can store your asset with care and proper monitoring. By keeping that in mind we created a great space of storage where 2 professional work 24 hour to make sure that the plants are in good position. </p>
           <Link className='text-green-500 text-xl font-bold' to='/about'>Read More</Link>
           </div>
        </div>
        </div>
    );
};

export default Departments;