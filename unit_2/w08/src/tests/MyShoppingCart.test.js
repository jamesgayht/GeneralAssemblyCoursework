import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyShoppingCart from '../components/MyShoppingCart';

describe('MyShoppingCart Component', () => {
  const cart = [
    { name: 'Product 1', price: 5.99 },
    { name: 'Product 2', price: 9.99 },
  ];

  const removeFromCartMock = jest.fn();

  beforeEach(() => {
    render(<MyShoppingCart cart={cart} removeFromCart={removeFromCartMock} />);
  });

  test('Task: Remove item from cart when clicked', () => {
    const cartItems = screen.getAllByTestId('cart-item');

    // Click the first item in the cart
    fireEvent.click(cartItems[0]);

    // Check if removeFromCart function was called with the correct index
    expect(removeFromCartMock).toHaveBeenCalledWith(0);

    // Click the second item in the cart
    fireEvent.click(cartItems[1]);

    // Check if removeFromCart function was called with the correct index
    expect(removeFromCartMock).toHaveBeenCalledWith(1);
  });
});