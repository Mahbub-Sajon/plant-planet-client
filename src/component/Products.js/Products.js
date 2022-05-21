import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Products = (props) => {    const [products, setProducts] = useProducts();

    const { name, img, price, description, supplier, quantity, _id } = props.product;
    const navigate = useNavigate();
    const navigateToUpdateProduct = id =>{
        navigate(`/update-product/${id}`);
    }

    
    console.log(props.product);
    return (
        <div className='border-2 border-lime-800 rounded-lg p-2'>
            <img className='w-full h-80 rounded-lg' src={img} alt="" />
            <h1> <span className='font-bold text-lime-800'>Name:</span>  {name}</h1>
            <h4> <span className='font-bold text-lime-800'>Price:</span> BDT {price}</h4>
            <p><span className='font-bold text-lime-800'>Description:</span> {description}</p>
            <p><span className='font-bold text-lime-800'>Supplier:</span> {supplier}</p>
            <p><span className='font-bold text-lime-800'>Quantity:</span> {quantity}</p>

          
          
            <div className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4 font-bold hover:bg-green-600 '>
                <button onClick={() => navigateToUpdateProduct(_id)}>Update</button>
           
           </div>
        </div>
    );
};

export default Products;