import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/my-products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result => {
            console.log(result);
        })
        alert('product added successfully!!!');
            data.target.reset();
    };
    return (
        <div>
            <h2 className='text-lime-800 text-3xl font-bold pb-4'>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Email' type="email" {...register("email")} />

                <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Product Name' type='text' required {...register("name")} />

                <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Price' type='number' required {...register("price")} />

                <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Description' type="text" required {...register("description")} />

                <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Supplier' type="text" required {...register("supplier")} />

                <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Quantity' type="number" {...register("quantity")} />

                <input className='w-3/4 h-12 border border-black mb-4 rounded-md' placeholder='Photo URL' type="text" {...register("img")} />
                <br />
                <input className='mx-auto w-32 h-12 bg-green-400 rounded-md pt-2 my-4 font-bold hover:bg-green-600 cursor-pointer' type="submit" value="Add Product"/>
            </form>
        </div>
    );
};

export default AddProduct;