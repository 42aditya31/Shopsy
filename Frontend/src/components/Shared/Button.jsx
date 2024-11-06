import React, { useState } from 'react';
import OrderForm from '../orderForm';

const Button = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = async (formData) => {
    try {
      // Assuming amount is part of formData
      const transactionHash = await payWithMetaMask(formData.amount);
      console.log('Transaction successful:', transactionHash);
      // Handle additional form submission logic here (e.g., send data to backend)
      
      // Close the form after submission
      setShowForm(false);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
      {showForm && <OrderForm onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Button;