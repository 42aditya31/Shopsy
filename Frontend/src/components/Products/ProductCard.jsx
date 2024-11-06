import React from "react";
import Button from "../Shared/Button";
import { addToCart } from '../../cartService'; // Ensure this import is correct

const ProductCard = ({ data }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart
    // Optionally, show a message or update UI
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((item) => (
          <div className="group" key={item.id}>
            <div className="relative">
              <img
                src={item.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="bg-red-400 text-white"
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="leading-7 mt-2">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">{item.prize}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;