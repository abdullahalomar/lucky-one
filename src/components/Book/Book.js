import React, { useEffect, useState } from 'react';
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
        console.log(product);
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
               <h3>Selected Books</h3>
            </div>
            </div>
        </div>
    );
};

export default Book;