import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    const [products,setProducts] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/update-product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddProduct = event =>{
        event.preventDefault();
        const quantity = event.target.number.value;
        const newQuantity = products.quantity + quantity;
        const UpdateProduct = {newQuantity};
        fetch('http://localhost:5000/products', {
            method: 'PUT',
            headers: {
                'content-type': 'aplication/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h1>Update Product:</h1>
            <p> Name: {products.name}</p>
            <p>Quantity:  {products.quantity}</p>

            <form onSubmit={handleAddProduct}>
                <input type="number" name="number" placeholder="Enter Quantity" />
                <br />
                <input type="submit" value="Restock" />
            </form>
        </div>
    );
};

export default UpdateProduct;