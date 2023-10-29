import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    const [products,setProducts] = useState({});
    useEffect(() =>{
        const url = `https://plant-planet-server.vercel.app/update-product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    const handleProductDelivered =event => {
        if(products.quantity<1){
            alert('Product Stock Out');
        }

        else{
            const newQuantity = parseInt(products.quantity) - 1;
        const UpdateProduct = {newQuantity};
        const url = `https://plant-planet-server.vercel.app/update-product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('Product Delivered Successfully!!!');
           
        })
        }
    }

    const handleAddProduct = event =>{
        event.preventDefault();
        const quantity = event.target.number.value;
        const newQuantity = parseInt(products.quantity) + parseInt(quantity);
        const UpdateProduct = {newQuantity};
        const url = `https://plant-planet-server.vercel.app/update-product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('product restocked successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h1 className='text-lime-800 text-3xl font-bold pb-4'>Update Product:</h1>
            <img className='w-44 mx-auto rounded-md' src= {products.img} alt="" />
            <p className='text-lime-900 text-xl font-bold pb-4'> Name: {products.name}</p>
            <p className='text-lime-900 text-xl font-bold pb-4'>Supplier:  {products.supplier}</p>
            <p className='text-lime-900 text-xl font-bold pb-4 w-56 mx-auto'>Description:  <small>{products.description}</small></p>
            <p className='text-lime-900 text-xl font-bold pb-4'>Quantity:  {products.quantity}</p>
            
            

            <form onSubmit={handleAddProduct}>
                <input className=' h-12 border border-black mb-4 rounded-md' type="number" name="number" placeholder="Enter Quantity" required />
                <br />
                <input className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-1 my-4 font-bold hover:bg-green-600 ' type="submit" value="Restock" />
            </form>
           <div className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4  hover:bg-green-600 '> <button className='font-bold' onClick={handleProductDelivered}>Delivered</button></div>
        </div>
    );
};

export default UpdateProduct;