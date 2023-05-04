import React from 'react';

function MyShoppingCart(props) {
  return (
    <div className="MyShoppingCart">
      <h2 data-testid="my-shopping-cart-header">Your Cart!</h2>
      {/* Task 5: Render cart items in MyShoppingCart component,
       Add onClick handler to remove the item */}
      {props.cart.map((item, index) => (
        <div
          key={index}
          data-testid="cart-item"
          // Add onClick handler to remove the item
        >
          {item.name} - ${item.price.toFixed(2)}
        </div>
      ))}
    </div>
  );
}

export default MyShoppingCart;