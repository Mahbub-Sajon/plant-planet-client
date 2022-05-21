import { useEffect, useState } from 'react';

const useMyProducts = () => {
    const [myProducts, setMyProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/my-products')
        .then(res => res.json())
        .then(data => setMyProducts(data))
    } , []);
    return [myProducts, setMyProducts]
};

export default useMyProducts;