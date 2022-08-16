import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    })

    const cartHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
            <div className="shop-container">
                <div className="product-container">
                    {
                        product.map(product=> <Product product={product} key={product.key} cartHandler={cartHandler}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Order Summary</h3>
                    <div className="calculate-cart">
                        <h4>Selected Item: {cart.length}</h4>
                        <h4>Total Price: </h4>
                        <h4>Total Shipping charge: </h4>
                        <h4>Tax: </h4>
                        <h2>Grand Total: </h2>
                    </div>
                </div>
            </div>
    );
};

export default Shop;