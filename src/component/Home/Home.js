import React from 'react';
import Banner from '../Banner/Banner';
import useProducts from '../../hooks/useProducts'
import Products from '../Products.js/Products';
import Departments from '../Departments/Departments';
import Partners from '../Partners/Partners';
import MyProducts from '../MyProducts/MyProducts';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <div className=' m-auto mb-20'>
            <Banner></Banner>
            </div>
            
                <Departments></Departments>
            
            <h1 className='text-lime-800 text-3xl font-bold pb-4 mt-10'>Our Products</h1>
            <div className='grid md:grid-cols-3 mb-10 gap-6'>
                {
                    products.slice(0, 6).map(product => <Products
                        key={product._id}
                        product = {product}
                    ></Products>)
                }
            </div>
            <h2 className='text-lime-800 text-3xl font-bold pb-4'>Added Products</h2>
            <MyProducts></MyProducts>
            <div>
                <Partners></Partners>
            </div>
           

        </div>
    );
};

export default Home;