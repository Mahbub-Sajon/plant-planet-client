import React from 'react';
import Banner from '../Banner/Banner';
import useProducts from '../../hooks/useProducts'
import Products from '../Products.js/Products';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>this is home</h1>
            <div className=' m-auto mb-20'>
            <Banner></Banner>
            </div>
            <h1 className='text-lime-800 text-3xl font-bold pb-4'>Our Products</h1>
            <div className='grid md:grid-cols-3 mb-10 gap-6'>
                {
                    products.slice(0, 6).map(product => <Products
                        key={product._id}
                        product = {product}
                    ></Products>)
                }



            </div>
           

        </div>
    );
};

export default Home;