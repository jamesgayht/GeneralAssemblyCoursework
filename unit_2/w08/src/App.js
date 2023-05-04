import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  // Task 1: Implement cart removal and adding, implement product adding.

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      {/* Task 2: Render addProduct, and pass addProduct function as props */}
      {/* Task 3: Render AllTheThings and MyShoppingCart, and pass the functions addToCart and remove from cart as props */}
    </div>
  );
}
