import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Selected Books</h3>
               <p>{cart.length}</p>
        </div>
    );
};

export default Cart;