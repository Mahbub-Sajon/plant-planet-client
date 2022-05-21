import React from 'react';
import { useNavigate } from 'react-router-dom';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyProducts from '../MyProducts/MyProducts';

const AllItem = () => {
   
    const navigate = useNavigate();
    const addProduct = () =>{
        navigate('/add-product');
    }
    return (
      <div>
           <h1 className='text-lime-800 text-3xl font-bold pb-4'>Manage Your Products</h1>
           <button onClick={addProduct} className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-2 my-4 font-bold hover:bg-green-600 '>Add-Product</button>
           <ManageProducts></ManageProducts>
          
           
           
      </div>
    );
};

export default AllItem;