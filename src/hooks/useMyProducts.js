import { useEffect, useState } from 'react';

const useMyProducts = () => {
    const [myProducts, setMyProducts] = useState([]);
    useEffect( () => {
        fetch('https://plant-planet-server.vercel.app/my-products')
        .then(res => res.json())
        .then(data => setMyProducts(data))
    } , []);
    return [myProducts, setMyProducts]
};

export default useMyProducts;