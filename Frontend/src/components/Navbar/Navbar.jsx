import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWallet } from "react-icons/fa";

const Navbar = ({ handleOrderPopup, connectWallet }) => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">E-commerce</div>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/services">Log In</Link></li>
      </ul>
      <div className="flex space-x-4">
        <button onClick={handleOrderPopup}>
          <FaShoppingCart />
        </button>
        <button onClick={connectWallet}>
          <FaWallet />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;