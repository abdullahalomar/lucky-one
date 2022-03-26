import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    return (
        <div className='cart'>
            <h3>Selected Books</h3>
               <p>{cart.name}</p>
        </div>
    );
};

export default Cart;