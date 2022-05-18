import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts'
import ManageProducts from '../ManageProducts/ManageProducts';

const AllItem = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const addProduct = () =>{
        navigate('/add-product');
    }
    return (
      <div>
           <h1 className='text-lime-800 text-3xl font-bold pb-4'>Our Products</h1>
            <div className='grid md:grid-cols-3 mb-10 gap-6'>
                {
                    products.map(product => <ManageProducts
                        key={product._id}
                        product = {product}
                    ></ManageProducts>)
                }
            </div>
            <button onClick={addProduct} className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4 font-bold hover:bg-green-600 '>Add-Product</button>
      </div>
    );
};

export default AllItem;