import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddCart} = props;
    const {name, price, picture} = props.product;
    
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
           <div className='product-info'>
           <h3 className='product-name'>{name}</h3>
            <h4>Price: ${price}</h4>
           </div>
           <button onClick={() => handleAddCart(product)} className='cart-button'>
               <p className='button-txt'>ADD TO CART</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;