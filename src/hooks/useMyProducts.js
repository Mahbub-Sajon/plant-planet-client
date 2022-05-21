import { useEffect, useState } from 'react';

const useMyProducts = () => {
    const [myProducts, setMyProducts] = useState([]);
    useEffect( () => {
        fetch('https://mighty-scrubland-45188.herokuapp.com/my-products')
        .then(res => res.json())
        .then(data => setMyProducts(data))
    } , []);
    return [myProducts, setMyProducts]
};

export default useMyProducts;