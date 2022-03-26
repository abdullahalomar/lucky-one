import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    return (
        <div className='cart'>
            <h3>Selected Books</h3> 
               <div className='cart-item'>
               <h5>{cart.map(item => <div>{item}</div>)}</h5>
               </div>
               <div>
               <button onClick={() => props.chooseOneItem()} className='cart-choose-1'>CHOOSE 1 FOR ME</button>
               <button onClick={() => props.removeProduct()} className='cart-choose'>CHOOSE AGAIN</button>
               </div>
        </div>
    );
};

export default Cart;