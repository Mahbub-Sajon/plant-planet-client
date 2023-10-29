import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UpdateMyProduct = () => {
    const {id} = useParams();
    const [myProducts,setMyProducts] = useState({});
    useEffect(() =>{
        const url = `https://plant-planet-server.vercel.app/update-my-product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyProducts(data))
    }, []);
    
    const handleProductDelivered =event => {
        if(myProducts.quantity<1){
            alert('Product Stock Out');
        }

        else{
            const newQuantity = parseInt(myProducts.quantity) - 1;
        const UpdateMyProduct = {newQuantity};
        const url = `https://plant-planet-server.vercel.app/update-my-product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateMyProduct)
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
        const newQuantity = parseInt(myProducts.quantity) + parseInt(quantity);
        const UpdateMyProduct = {newQuantity};
        const url = `https://plant-planet-server.vercel.app/update-my-product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateMyProduct)
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
            <img className='w-44 mx-auto rounded-md' src= {myProducts.img} alt="" />
            <p className='text-lime-900 text-xl font-bold pb-4'> Name: {myProducts.name}</p>
            <p className='text-lime-900 text-xl font-bold pb-4'>Supplier:  {myProducts.supplier}</p>
            <p className='text-lime-900 text-xl font-bold pb-4 w-56 mx-auto'>Description:  <small>{myProducts.description}</small></p>
            <p className='text-lime-900 text-xl font-bold pb-4'>Quantity:  {myProducts.quantity}</p>
            
            

            <form onSubmit={handleAddProduct}>
                <input className=' h-12 border border-black mb-4 rounded-md' type="number" name="number" placeholder="Enter Quantity" required />
                <br />
                <input className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-1 my-4 font-bold hover:bg-green-600 ' type="submit" value="Restock" />
            </form>
           <div className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4  hover:bg-green-600 '> 
           <button className='font-bold' onClick={handleProductDelivered}>Delivered</button></div>
        </div>
    );
};

export default UpdateMyProduct;