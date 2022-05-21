import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyProducts = () => {
    const [user] = useAuthState(auth);

    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const email = user.email;

            const url = `http://localhost:5000/my-products?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyProducts(data);
        }
        getProducts();

    }, [user])

    

    const navigate = useNavigate();
    const navigateToUpdateProduct = id => {
        navigate(`/update-my-product/${id}`);
    }

    if (myProducts<1) {
        return (
          <div>
            <p className='text-red-800 text-3xl font-bold pb-4'>You haven't added any products!</p>
          </div>
        );
        };


    const handleDelete = id => {
        const initiate = window.confirm('Are you sure you want to delete this product?');
        if (initiate) {
            console.log('deleting', id);
            const url = `http://localhost:5000/my-products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myProducts.filter(myProduct => myProduct._id !== id);
                        setMyProducts(remaining);
                    }
                })
        }
    }
    return (
        <div className=' grid md:grid-cols-3 mb-10 gap-6 border-2 border-lime-800 rounded-lg p-2'>

            {
                myProducts.map(myProduct => <div key={myProduct._id}>

                    <img className='w-full h-80 rounded-lg' src={myProduct.img} alt="" />
                    <h1> <span className='font-bold text-lime-800'>Name:</span>  {myProduct.name}</h1>
                    <h4> <span className='font-bold text-lime-800'>Service Cost:</span> BDT {myProduct.price}</h4>
                    <p><span className='font-bold text-lime-800'>Description:</span> {myProduct.description}</p>
                    <p><span className='font-bold text-lime-800'>Supplier:</span> {myProduct.supplier}</p>
                    <p><span className='font-bold text-lime-800'>Quantity:</span> {myProduct.quantity}</p>


                    <div className=' border-lime-800 rounded flex'>
                        <div className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4 font-bold hover:bg-green-600 '>
                            <button onClick={() => handleDelete(myProduct._id)}>Delete</button>
                        </div>
                        <div className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-3 my-4 font-bold hover:bg-green-600 '>
                            <button onClick={() => navigateToUpdateProduct(myProduct._id)}>Update</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyProducts;