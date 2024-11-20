import { ChevronRight, Home } from "lucide-react";
import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div className="container mx-auto py-4 flex items-center mt-40">
        <a href="" className="text-pink-500 text-base">
          <Home />
        </a>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-pink-500 font-bold">Shop</p>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-black font-bold">Product Name</p>
      </div>
    </>
  );
};

export default ProductDetail;
