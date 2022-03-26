import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, picture} = props.product;
    return (
        <div className='product'>
            <img src={picture}></img>
           <div className='product-info'>
           <h3 className='product-name'>{name}</h3>
            <h4>Price: ${price}</h4>
           </div>
           <button className='cart-button'>
               <p>ADD TO CART</p>
           </button>
        </div>
    );
};

export default Product;