import React from 'react';
import useProducts from '../../hooks/useProducts'

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    
    
    const handleDelete = id => {
        const initiate = window.confirm('Are you sure you want to delete this product?');
        if(initiate){
            console.log('deleting', id);
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                   const remaining = products.filter(product => product._id !== id);
                   setProducts(remaining);

               }
            })

        }
    }
    return (
        <div className=' grid md:grid-cols-3 mb-10 gap-6 border-2 border-lime-800 rounded-lg p-2'>
            
            {
                products.map(product => <div key={product._id}>
                    <img className='w-full h-80 rounded-lg' src={product.img} alt="" />
            <h1> <span className='font-bold text-lime-800'>Name:</span>  {product.name}</h1>
            <h4> <span className='font-bold text-lime-800'>Service Cost:</span> BDT {product.price}</h4>
            <p><span className='font-bold text-lime-800'>Description:</span> {product.description}</p>
            <p><span className='font-bold text-lime-800'>Supplier:</span> {product.supplier}</p>
            <p><span className='font-bold text-lime-800'>Quantity:</span> {product.quantity}</p>
            <div className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4 font-bold hover:bg-green-600 '>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
                </div> )
            }
        </div>
    );
};

export default ManageProducts;