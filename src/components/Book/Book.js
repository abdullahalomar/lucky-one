import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Book.css'

const Book = () => {
    const [products, setProducts] = useState([]); 
    const [cart, setCart] =useState([]);

    useEffect( () =>{
        fetch('book.json')
        .then(response => response.json())
        .then(json => setProducts(json))
    },[])

    const handleAddCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product.name];
        setCart(newCart);
    }
    const removeProduct = () => {
        setCart([]);
    }
    
    const chooseOneItem = () => {
        const oneItem = [...cart][Math.floor(Math.random()*[...cart].length)];
         if(oneItem){
             setCart([oneItem]);
         }
        }

    return (
        <div >
            <h1 className='header-text'><span>B</span>ook <span>S</span>hop</h1>
            <div className='book-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product 
                        key={product.id}
                        product = {product}
                        handleAddCart = {handleAddCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart 
               cart={cart}
               removeProduct = {removeProduct}
               chooseOneItem = {chooseOneItem}
               ></Cart>
            </div>
            </div>
        </div>
    );
};

export default Book;