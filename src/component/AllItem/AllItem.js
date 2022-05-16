import React from 'react';
import useProducts from '../../hooks/useProducts'
import Products from '../Products.js/Products';

const AllItem = () => {
    const [products, setProducts] = useProducts();
    return (
      <div>
           <h1 className='text-lime-800 text-3xl font-bold pb-4'>Our Products</h1>
            <div className='grid md:grid-cols-3 mb-10 gap-6'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product = {product}
                    ></Products>)
                }
            </div>
      </div>
    );
};

export default AllItem;