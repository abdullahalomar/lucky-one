import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    return (
        <div className='cart'>
            <h3>Selected Books</h3>
               <p>{cart}</p>
               <button className='cart-choose-1'>CHOOSE 1 FOR ME</button>
               <button className='cart-choose'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;