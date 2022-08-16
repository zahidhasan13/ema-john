import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,price,seller,ratings} = props.product;
    const {cartHandler} = props;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="product-details">
            <div className="product-name">
                <h6>{name}</h6>
            </div>
            <div className="product-price">
                <p>Price: ${price}</p>
            </div>
            <div className="product-seller">
                <h5>Manufacturer: {seller}</h5>
            </div>
            <div className="product-ratings">
                <p>ratings: {ratings}</p>
            </div>
            </div>
            <div className="cart-button">
                <button onClick={()=>cartHandler(props.product)}>Add to cart <span> <FontAwesomeIcon icon={faCartPlus}/> </span></button>
            </div>
        </div>
    );
};

export default Product;