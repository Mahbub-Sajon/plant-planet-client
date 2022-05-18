import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/update-product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []) 
    return (
        <div>
            <h1>update product: {product.name}</h1>
        </div>
    );
};

export default UpdateProduct;