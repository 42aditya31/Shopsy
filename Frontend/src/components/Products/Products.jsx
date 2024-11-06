import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    prize: "$120",
    aosdelay: "0",
  }, {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    prize: "$420",
    aosdelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    prize: "$320",
    aosdelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    prize: "$220",
    aosdelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Rocky Mountain",
    prize: "$420",
    aosdelay: "200",
  },
  {
    id: 6,
    img: Img7,
    title: "Goggles",
    prize: "$320",
    aosdelay: "400",
  },
  {
    id: 9,
    img: Img4,
    title: "Printed",
    prize: "$220",
    aosdelay: "600",
  },
  {
    id: 8,
    img: Img2,
    title: "Rocky Mountain",
    prize: "$420",
    aosdelay: "200",
  },
];

const Product = () => {
  return (
    <div className="container">
      <Heading title="Our Products" subtitle="Explore our products" />
      <ProductCard data={ProductData}/>
    </div>
  );
};

export default Product;
