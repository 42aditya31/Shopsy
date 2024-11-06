import React, { useState } from "react";
import { getCartItems } from '../../cartService'; // Ensure this import is correct
import OrderForm from '../OrderForm';

const Cart = () => {
  const [showForm, setShowForm] = useState(false);
  const cartItems = getCartItems(); // Retrieve cart items

  const handleOrderNowClick = () => {
    setShowForm(true); // Show the order form
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="border-b py-2">
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.prize}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={handleOrderNowClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      {showForm && <OrderForm onSubmit={(data) => console.log(data)} />}
    </div>
  );
};

export default Cart;